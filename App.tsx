import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, Animated, Easing } from "react-native";
import { ThemeProvider, useTheme } from "./src/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./src/screens/Home";
import Experience from "./src/screens/Experience";
import Skills from "./src/screens/Skills";
import Contact from "./src/screens/Contact";

const Drawer = createDrawerNavigator();

function CustomHeaderToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const rotation = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(rotation, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();

    toggleTheme();
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "270deg"],
  });

  return (
    <TouchableOpacity onPress={handlePress} style={{ marginRight: 16 }}>
      <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
        <Ionicons
          name={isDark ? "sunny-outline" : "moon-outline"}
          size={24}
          color={isDark ? "#fff" : "#000"}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

function AppNavigator() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Drawer.Navigator
      screenOptions={{
      headerStyle: {
        backgroundColor: isDark ? "#121212" : "#f0f0f0",
      },
      headerTintColor: isDark ? "#fff" : "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      drawerStyle: {
        backgroundColor: isDark ? "#1c1c1c" : "#fff",
      },
      drawerActiveTintColor: isDark ? "#50bfff" : "#007acc",
      drawerInactiveTintColor: isDark ? "#ccc" : "#555",
      drawerLabelStyle: {
        fontWeight: "500",
      },
      headerRight: () => <CustomHeaderToggle />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Professional Experience" component={Experience} />
      <Drawer.Screen name="Education" component={Skills} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

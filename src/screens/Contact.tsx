import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { contactDark, contactLight } from "./styles";

export default function Contact() {
  const { theme } = useTheme();
  const styles = theme === "dark" ? contactDark : contactLight;

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { flexGrow: 1 }]}
      style={{ backgroundColor: styles.container.backgroundColor }}
    >
      <Text style={styles.title}>Information and Contact</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Location</Text>
        <Text style={styles.text}>Faisalabad, Pakistan</Text>

        <Text style={styles.label}>📱 Mobile</Text>
        <Text style={styles.text}>+92 327 6027271</Text>

        <Text style={styles.label}>💼 Currently Working</Text>
        <Text style={styles.text}>Full Stack Developer at Inspire Uplift</Text>
      </View>

      <View style={styles.linksCard}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/zohaib-khalid-34307331b"
            )
          }
        >
          <Text style={styles.linkText}>🔗 LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("https://github.com/thezohaibkhalid")}
        >
          <Text style={styles.linkText}>💻 GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

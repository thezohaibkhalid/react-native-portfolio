import { ScrollView, Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { experienceDark, experienceLight } from "./styles";

export default function Experience() {
  const { theme } = useTheme();
  const styles = theme === "dark" ? experienceDark : experienceLight;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: styles.container.backgroundColor }}
    >
      <View style={styles.card}>
        <Text style={styles.job}>Front-End Developer (React)</Text>
        <Text style={styles.period}>Feb 2025 – Present</Text>
        <Text style={styles.company}>Inspire Uplift</Text>
        <Text style={styles.text}>
          Creation and maintenance of user interfaces using{" "}
          <Text style={styles.tech}>React</Text> and{" "}
          <Text style={styles.tech}>Next Js</Text>. Active participation in the
          development of projects with a focus on usability and responsive
          design.
        </Text>
        <Text style={styles.area}>Area: E commerece Admin Panels</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.job}>Full Stack Developer</Text>
        <Text style={styles.period}>June 2024 – September 2024</Text>
        <Text style={styles.company}>Career Institute</Text>
        <Text style={styles.text}>
          Developed solution for customers using{" "}
          <Text style={styles.tech}>React</Text> ,{" "}
          <Text style={styles.tech}>MongoDB</Text> ,{" "}
          <Text style={styles.tech}>Express</Text> and{" "}
          <Text style={styles.tech}>Node.js</Text>. Provided Help to Senior
          developers in creating Full Stack Applications.
        </Text>
        <Text style={styles.area}>
          Area: Web System for Business Management and Automation
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.job}>Full Stack Developer (Upwork Project)</Text>
        <Text style={styles.period}>October 2024 – April 2025</Text>
        <Text style={styles.company}>MBH Studio</Text>
        <Text style={styles.text}>
          Developed Full Stack Real Estate website using{" "}
          <Text style={styles.tech}>MERN</Text> and{" "}
          <Text style={styles.tech}>Taiwind</Text>. Backend with Node.js and
          Express.js MongoDB as DataBase with Admin Panel and All Blogs Contacts
          and Products Managment
        </Text>
        <Text style={styles.area}>
          Area: Real Estate Website with Admin Panel
        </Text>
      </View>
    </ScrollView>
  );
}

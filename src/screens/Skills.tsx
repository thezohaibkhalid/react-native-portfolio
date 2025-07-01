import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { skillsDark, skillsLight } from "./styles";

const Card = ({
  title,
  children,
  styles,
}: {
  title: string;
  children: React.ReactNode;
  styles: any;
}) => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.text}>{children}</Text>
  </View>
);

export default function SkillsSection() {
  const { theme } = useTheme();
  const styles = theme === "dark" ? skillsDark : skillsLight;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: styles.container.backgroundColor }}
    >
      <Card title="📚 Academic Background" styles={styles}>
        <Text style={styles.bold}>Bachelor of Software Engineering</Text>
        {"\n"}University of Faisalabad, Faisalabad, Pakistan{"\n"}
        <Text style={styles.gray}>2022 - 2026</Text>
      </Card>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🧠 Skills</Text>

        <View style={styles.skillBlock}>
          <Text style={styles.section}>Front-End</Text>
          <Text style={styles.text}>
            React, Next.js, Tailwind CSS, JavaScript (ES6+), TypeScript, HTML5,
            CSS3, Bootstrap
          </Text>
        </View>

        <View style={styles.skillBlock}>
          <Text style={styles.section}>Back-End</Text>
          <Text style={styles.text}>
            Node.js, Express.js, Firebase, GoLang, MySQL, MongoDB, PostgreSQL
          </Text>
        </View>

        <View style={styles.skillBlock}>
          <Text style={styles.section}>Tools</Text>
          <Text style={styles.text}>Git, GitHub, Firebase</Text>
        </View>

        <View style={styles.skillBlock}>
          <Text style={styles.section}>Methodologies</Text>
          <Text style={styles.text}>Scrum, Kanban</Text>
        </View>
      </View>

      <Card title="🌍 Languages" styles={styles}>
        <Text style={styles.bold}>English (Advanced)</Text>
        {"\n"}
        <Text style={styles.bold}>Urdu (Advanced)</Text> {"\n"}
      </Card>

      <Card title="🏅 Certifications" styles={styles}>
        • React Native – Meta (March 2025){"\n"}• C++ Programming – Code with
        Harry (50+h){"\n"}• CSS – Apna College (7h)
        {"\n"}• Complete JavaScript ES6 – By Prashant Sir (14h)
        {"\n"}• Javascript Complete – Apna College (11h){"\n"}• React JS – HuXn
        WebDev (50h)
        {"\n"}• React & Redux – By Prashant Sir (20h)
        {"\n"}• React & Redux – Chai or Code (14h)
        {"\n"}• MongoDB Complete Course – Thapa Technical (5h)
        {"\n"}• DataBases In-Depth – FreeCodeCamp (3.5h)
        {"\n"}• SQL By Boot.dev – FreeCodeCamp (4.5h)
        {"\n"}• Go & Golang by boot.dev – FreeCodeCamp (9.5h)
        
      </Card>
    </ScrollView>
  );
}

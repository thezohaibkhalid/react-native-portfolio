import React from "react";
import { Text, ScrollView, Image } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const styles = theme === "dark" ? darkStyles : lightStyles;

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { flexGrow: 1 }]}
      style={{ backgroundColor: styles.container.backgroundColor }}
    >
      <Image
        source={require("../../assets/zohaib.png")}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Text style={styles.name}>Zohaib Khalid</Text>
      <Text style={styles.role}>
        Full Stack Developer | Software Engineering Student
      </Text>
      <Text style={styles.desc}>
        MERN Stack | React Native | SQL | JavaScript | Tailwind | Golang
      </Text>

      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summary}>
        I am a passionate and goal-driven Full Stack Developer and a dedicated
        Software Engineering student with a strong foundation in both front-end
        and back-end technologies. Proficient in the MERN stack (MongoDB,
        Express.js, React.js, Node.js), I build efficient, responsive, and
        user-friendly web and mobile applications. I also have hands-on
        experience with SQL databases, React Native for cross-platform
        development, and technologies like Tailwind CSS and Bootstrap for
        crafting clean and modern UIs. My programming skills extend to C++ and
        Java, giving me a solid grasp of object-oriented programming and data
        structures. With a blend of academic knowledge and practical experience,
        I have worked on various projects that involved user authentication,
        CRUD operations, REST APIs, role-based access, file handling, and
        responsive layouts. I am continuously learning and exploring new tools
        and technologies to sharpen my skill set. My career goal is to become a
        leading full stack engineer, contributing to impactful software
        products, and solving real-world problems through code. I believe in
        writing clean, maintainable code and building scalable systems that make
        a difference. Beyond technical skills, I value teamwork, communication,
        and adaptability, and I enjoy working in collaborative environments
        where ideas turn into innovative solutions.
      </Text>
    </ScrollView>
  );
}

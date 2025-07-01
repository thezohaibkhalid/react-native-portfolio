import { StyleSheet } from "react-native";
const baseStyles = {
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
    borderWidth: 2,
  },
};

export const lightStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  role: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 8,
    color: "#222",
  },
  summary: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    textAlign: "justify",
  },
  profileImage: {
    ...baseStyles.profileImage,
    borderColor: "#ccc",
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#121212",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  role: {
    fontSize: 18,
    color: "#bbb",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 8,
    color: "#50bfff",
  },
  summary: {
    fontSize: 14,
    lineHeight: 22,
    color: "#ddd",
    textAlign: "justify",
  },
  profileImage: {
    ...baseStyles.profileImage,
    borderColor: "#555",
  },
});

export const contactLight = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
    color: "#555",
  },
  text: {
    fontSize: 14,
    color: "#444",
  },
  linksCard: {
    flexDirection: "column",
    width: "100%",
    gap: 12,
  },
  linkButton: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const contactDark = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#121212",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
    color: "#bbb",
  },
  text: {
    fontSize: 14,
    color: "#ccc",
  },
  linksCard: {
    flexDirection: "column",
    width: "100%",
    gap: 12,
  },
  linkButton: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export const experienceLight = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },
  job: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 6,
  },
  period: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
  },
  company: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: "#444",
    marginBottom: 10,
    lineHeight: 22,
  },
  area: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
  },
  tech: {
    fontWeight: "600",
    color: "#007acc",
  },
});

export const experienceDark = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#121212",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },
  job: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 6,
  },
  period: {
    fontSize: 14,
    color: "#bbb",
    marginBottom: 6,
  },
  company: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ccc",
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: "#ccc",
    marginBottom: 10,
    lineHeight: 22,
  },
  area: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#aaa",
  },
  tech: {
    fontWeight: "600",
    color: "#50bfff",
  },
});


export const skillsLight = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#007acc",
  },
  section: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#007acc",
  },
  skillBlock: {
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  gray: {
    color: "#777",
  },
});

export const skillsDark = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#121212",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#50bfff",
  },
  section: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#50bfff",
  },
  skillBlock: {
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#fff",
  },
  gray: {
    color: "#aaa",
  },
});

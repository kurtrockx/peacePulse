import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from "react-native";

export default function AboutUsScreen({ navigation }) {
  const members = [
    {
      name: "Rotsen Roca",
      src: require("../assets/images/members/roca.jpg"),
      motto: "Time is Gold while watching Gold",
    },
    {
      name: "Kurt De Belen",
      src: require("../assets/images/members/kurt.jpg"),
      motto: "Time is money, but laughter is priceless.",
    },
    {
      name: "Aubrey Lannu",

      src: require("../assets/images/members/aubrey.jpg"),
      motto: "Stay focused and the world will follow.",
    },
    {
      name: "Charles Biong",
      src: require("../assets/images/members/roca.jpg"),
      motto: "When in doubt, dance it out.",
    },
    {
      name: "Menzie Junsay",
      src: require("../assets/images/members/mhen.jpg"),
      motto: "Be the change you wish to see in the world.",
    },
    {
      name: "Zyrol Castillo",
      src: require("../assets/images/members/roca.jpg"),
      motto: "Success is the best revenge.",
    },
    {
      name: "Jhulian Calces",
      src: require("../assets/images/members/calces.jpg"),
      motto: "Dream big, work hard, stay humble.",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <ScrollView style={styles.membersContainer}>
        <Text style={styles.aboutHeader}>About Us</Text>
        {members.map((member) => {
          return (
            <View style={styles.member}>
              <View style={styles.imageContainer}>
                <Image source={member.src} style={styles.imageValue} />
              </View>
              <View style={styles.mottoContainer}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.mottoText}>“{member.motto}”</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#D6B2C3",
  },
  logo: {
    objectFit: "contain",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 100,
    height: 110,
  },
  aboutHeader: {
    marginBottom: 10,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 30,
  },
  membersContainer: {
    paddingInline: 10,
    marginBottom: 100,
  },
  member: {
    width: "100%",
    height: 100,
    marginBlock: 5,
    flexDirection: "row",
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#3F202E",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  memberName: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: "white",
  },
  mottoText: {
    fontFamily: "Montserrat-Regular",
    color: "white",
  },
  imageContainer: {
    height: "100%",
    flex: 1,
  },
  imageValue: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  mottoContainer: {
    height: "100%",
    flex: 4,
    textAlign: "justify",
    justifyContent: "center",
    alignContent: "center",
  },
});

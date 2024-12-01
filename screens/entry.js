import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.bottomLayer}>
        <Text style={styles.welcomeText}>Welcome to PeacePulse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    objectFit: "contain",
    position: "absolute",
    bottom: 0,
    left: "50%",
    right: "50%",
    transform: [{ translateX: "-50%" }],
    width: 200,
  },
  topLayer: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomLayer: {
    flex: 1,
    borderRadius: 50,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    backgroundColor: "#a55379",
  },
  welcomeText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "white",
  },
});

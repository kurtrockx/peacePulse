import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

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
        <Text style={styles.welcomeText}>Welcome to PeacePulse!</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <View style={[styles.entryBtnContainer, styles.loginContainer]}>
            <Text style={[styles.login, styles.entryBtn]}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <View style={[styles.entryBtnContainer, styles.registerContainer]}>
            <Text style={[styles.register, styles.entryBtn]}>Register</Text>
          </View>
        </TouchableWithoutFeedback>
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
    width: 240,
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
    gap: 12,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: "white",
    paddingBottom: 10,
  },
  entryBtnContainer: {
    width: "100%",
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
  },
  loginContainer: { backgroundColor: "#d9d9d9" },
  registerContainer: { backgroundColor: "#3f202e" },
  entryBtn: { fontFamily: "Fredoka-Medium", textAlign: "center", fontSize: 30 },
  register: { color: "white" },
});

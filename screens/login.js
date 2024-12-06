import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <Image
            source={require("../assets/images/emailIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput style={styles.inputField} placeholder="Email" />
        </View>
        <View style={styles.inputFieldContainer}>
          <Image
            source={require("../assets/images/passIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput style={styles.inputField} placeholder="Password" />
          <Image
            source={require("../assets/images/eyeIcon.png")}
            style={styles.inputIcon}
          />
        </View>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("LoggedIn")}>
        <View style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.registerTextContainer}>
        Don't have an account yet?{" "}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Register!</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  logo: {
    objectFit: "contain",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 240,
    height: 250,
    marginTop: 64,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 5,
    marginBottom: 40,
  },
  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "black",
    gap: 10,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
  },
  inputIcon: {
    objectFit: "contain",
    width: 20,
    aspectRatio: 1 / 1,
  },
  inputField: {
    fontFamily: "Montserrat-Regular",
    paddingVertical: 0,
    color: "black",
    flex: 1,
    height: 40,
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#d6b2c3",
  },
  loginText: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    color: "#3F202E",
  },
  registerTextContainer: {
    color: "#45413C",
    marginVertical: 5,
    textAlign: "center",
  },
  registerText: {
    fontWeight: "bold",
  },
  forgotText: {
    textAlign: "right",
    color: "#8C2E53",
  },
});

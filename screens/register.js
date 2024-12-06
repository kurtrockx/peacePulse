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

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <Image
            source={require("../assets/images/userIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput style={styles.inputField} placeholder="Username" />
        </View>
        <View style={styles.inputFieldContainer}>
          <Image
            source={require("../assets/images/birthdayIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput style={styles.inputField} placeholder="Birthday" />
        </View>
        <View style={styles.inputFieldContainer}>
          <Image
            source={require("../assets/images/phoneIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput style={styles.inputField} placeholder="Phone" />
        </View>
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
        <Text style={styles.forgotText}>Remember Me</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("RegisteredUser")}
      >
        <View style={styles.registerBtn}>
          <Text style={styles.registerText}>Register</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.loginTextContainer}>
        Already have an account?{" "}
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Log In!</Text>
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
    height: 200,
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 5,
    marginBottom: 20,
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
  registerBtn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#a55379",
  },
  registerText: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    color: "white",
  },
  loginTextContainer: {
    color: "#45413C",
    marginVertical: 5,
    textAlign: "center",
  },
  loginText: {
    fontWeight: "bold",
  },
  forgotText: {
    textAlign: "right",
    color: "#8C2E53",
  },
});

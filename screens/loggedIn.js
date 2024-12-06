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

export default function LoggedInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.header}>You're logged!</Text>
      <Text style={styles.subText}>Welcome, Aubrey!</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Entry")}>
        <View style={styles.successfulLoginBtn}>
          <Text style={styles.successfulLoginText}>Get Started</Text>
          <Image
            source={require("../assets/images/rightIcon.png")}
            style={styles.rightIcon}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#D6B2C3",
  },
  logo: {
    objectFit: "contain",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 240,
    height: 250,
    marginTop: 20,
  },
  header: {
    marginTop: 40,
    fontSize: 36,
    fontFamily: "Fredoka-SemiBold",
    textAlign: "center",
    color: "#45413C",
  },
  subText: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 20,
    textAlign: "center",
    color: "#45413C",
    marginBottom: 100,
  },
  successfulLoginBtn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
    position: "relative",
  },
  successfulLoginText: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
    color: "#A55379",
    width: "100%",
    textAlign: "center",
  },
  rightIcon: {
    position: "absolute",
    objectFit: "contain",
    width: 20,
    right: 40,
  },
});

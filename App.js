import React from "react";
import { StatusBar, View, StyleSheet, Image } from "react-native";
import AppNavigator from "./appNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <AppNavigator />
      <Image
        source={require("./assets/images/circles.png")}
        style={styles.circles}
      />
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
  },
  circles: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 140,
  },
};

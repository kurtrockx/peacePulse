import React from "react";
import { StatusBar, View, StyleSheet, Image } from "react-native";
import AppNavigator from "./appNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Fredoka-SemiBold": require("./assets/fonts/Fredoka-SemiBold.ttf"),
    "Fredoka-Regular": require("./assets/fonts/Fredoka-Regular.ttf"),
    "Fredoka-Medium": require("./assets/fonts/Fredoka-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!fontsLoaded) return;

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
    width: "100%",
    height: 140,
  },
};

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import EntryScreen from "./screens/entry";
import LoggedInScreen from "./screens/loggedIn";
import RegisteredUserScreen from "./screens/registeredUser";
import AboutUsScreen from './screens/about'

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AboutUs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
        <Stack.Screen name="RegisteredUser" component={RegisteredUserScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";

export default function App() {
  const [userName, setUserName] = useState(null);
  const [renderPage, changeRenderPage] = useState(null);
  AsyncStorage.getItem("userName").then((user) => {
    if (user) {
      setUserName(user);
      changeRenderPage("Home");
    } else {
      changeRenderPage("Welcome");
    }
  });
  if (renderPage == "Welcome")
    return (
      <WelcomeScreen
        onSubmit={(userName) => {
          setUserName(userName);
          AsyncStorage.setItem("userName", userName);
          changeRenderPage("Home");
        }}
      />
    );

  if (renderPage == "Home") return <HomeScreen userName={userName} />;

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

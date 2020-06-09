import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function WelcomeScreen({ onSubmit }) {
  const [userName, changeUserName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        value={userName}
        onChangeText={(text) => changeUserName(text)}
      />
      <Button
        onPress={() => {
          if (!userName) {
            Alert.alert("please enter username");
            return;
          }
          onSubmit && onSubmit(userName);
        }}
        title="Ok"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginVertical: 10,
    padding: 10,
  },
});

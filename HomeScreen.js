import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function HomeScreen({ userName }) {
  const [searchText, changesearchText] = useState("");
  const listOfItems = ["juice", "bread", "water", "cola", "pepsi"];

  const onSearch = (text) => {
    changesearchText(text);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => onSearch(text)}
      />
      <View style={{ marginTop: 30, width: "80%", alignItems: "center" }}>
        {listOfItems
          .filter((q) => q.toLowerCase().includes(searchText?.toLowerCase()))
          .map((item, index) => (
            <View
              key={index}
              style={{
                width: "100%",
                alignItems: "center",
                paddingVertical: 10,
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                marginVertical: 5,
              }}
            >
              <Text>{item}</Text>
            </View>
          ))}
      </View>
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

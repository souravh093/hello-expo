import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>This is the about screen</Text>
    </View>
  );
};

export default AboutScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

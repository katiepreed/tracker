import { useState } from "react";
import { Link, RelativePathString } from "expo-router";
import { Pressable, View, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get screen width

import { useNavigation } from "@react-navigation/native";

const Button = ({ text, page, isDisabled, submit }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      disabled={isDisabled}
      onPress={() => {
        navigation.replace(page);
        submit(); // test that this works
      }}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? "rgb(224, 219, 219)"
            : "rgb(197, 206, 215)",
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.5,
    height: height * 0.15,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  text: {
    fontSize: 30,
  },
});

export default Button;

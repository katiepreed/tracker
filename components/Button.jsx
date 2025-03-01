import { useState } from "react";
import { Link, RelativePathString } from "expo-router";
import { Pressable, View, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get screen width

const Button = ({ text, href }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? "rgb(224, 219, 219)"
            : "rgb(197, 206, 215)",
        },
      ]}
    >
      <Link href={href}>{text}</Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: width * 0.5,
    height: height * 0.15,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});

export default Button;

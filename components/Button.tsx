import { useState } from "react";
import { Link, RelativePathString } from "expo-router";
import { Pressable, View, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get screen width

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? "rgb(127, 127, 127)"
            : "rgb(197, 206, 215)",
        },
      ]}
    >
      <Link href="/contact-form">{text}</Link>
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

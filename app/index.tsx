import { Link } from "expo-router";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../components/Button";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button text={"Immediate Contact"} href="/contact-form" />
      <Button text={"Home Address"} href="/home-form" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

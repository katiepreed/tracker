import { Link } from "expo-router";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../components/NavigationButton";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the main page!</Text>
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

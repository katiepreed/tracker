import { Link } from "expo-router";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationButton from "../components/NavigationButton";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Please continue to fill in some mandatory details!</Text>
      <NavigationButton
        text={"Continue"}
        page="contact-form"
        isDisabled={false}
        submit={() => {}}
      />
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

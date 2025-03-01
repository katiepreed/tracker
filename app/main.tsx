import { Link } from "expo-router";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../components/NavigationButton";
import { getItem } from "../utils/AsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function MainScreen() {
  const [storedValue, setStoredValue] = useState("");

  const getStoredValue = async () => {
    const value = await getItem("phone");

    if (value !== null) {
      setStoredValue(value); // Convert to string explicitly
    } else {
      setStoredValue("");
    }
  };

  useEffect(() => {
    getStoredValue(); // Fetch value when component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is the main page!</Text>
      <Text>{storedValue}</Text>
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

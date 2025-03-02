import * as Linking from "expo-linking";
import { StyleSheet, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { getItem } from "@/utils/AsyncStorage";

export default function SosButton() {
  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  const [phone, setPhone] = useState("");

  const getStoredValue = async () => {
    const phone = await getItem("phone");
    setPhone(phone);
  };

  useEffect(() => {
    getStoredValue(); // Fetch value when component mounts
  }, []);

  return (
    <Pressable
      onPress={() => Linking.openURL(`tel:${phone}`)}
      style={styles.button}
    >
      <Text style={[styles.text, { fontFamily: "CustomFont" }]}>
        Call Emergency Contact
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(201, 26, 67)",
    width: "80%",
    height: "25%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 33,
  },
});

import { Linking } from "react-native";
import { StyleSheet, Text, Pressable } from "react-native";
import * as SMS from "expo-sms";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { getItem } from "@/utils/AsyncStorage";

export default function SMSButton({ link }) {
  const [phone, setPhone] = useState("");

  const sendSMS = async () => {
    await SMS.sendSMSAsync(
      [phone], // Recipient phone number(s)
      `Hello! I am lost, please find me at this location: ${link}` // Message text
    );
  };
  const getStoredValue = async () => {
    const phone = await getItem("phone");

    if (phone !== null) {
      setPhone(phone);
    } else {
      setPhone("");
    }
  };

  useEffect(() => {
    getStoredValue();
  }, []);

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  return (
    <Pressable style={styles.button} onPress={sendSMS}>
      <Text style={[styles.text, { fontFamily: "CustomFont" }]}>
        Text Current Location
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(30, 20, 135)",
    width: "80%",
    height: "25%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});

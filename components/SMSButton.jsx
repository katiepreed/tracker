import { Linking } from "react-native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
  Button,
} from "react-native";
import * as SMS from "expo-sms";

const { width, height } = Dimensions.get("window");

export default function SMSButton({ link }) {
  const sendSMS = async () => {
    await SMS.sendSMSAsync(
      ["+447477960816"], // Recipient phone number(s)
      `Hello! I am lost, please find me at this location: ${link}` // Message text
    );
  };

  return <Button title="Send SMS" onPress={sendSMS} />;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff0000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "black",
    shadowOpacity: 1,
    zIndex: 10,
    alignSelf: "center",
  },
});

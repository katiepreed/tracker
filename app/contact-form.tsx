import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect, useRef } from "react";
import FormItem from "../components/FormItem";
import { Link } from "expo-router";
import NavigationButton from "../components/NavigationButton";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/AsyncStorage";
import PhoneInput from "react-native-phone-number-input";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const phoneInputRef = useRef(null);

  //  need to update the type for the phone
  var isDisabled =
    name.trim() === "" || phone.trim() === "" || email.trim() === "";

  // add real checks to prevent you from entering bad values
  const handleSubmit = () => {
    setItem("name", name);
    setItem("phone", phone);
  };

  // make sure to add type check and stuff like that to each input form
  return (
    <View style={styles.container}>
      <FormItem
        label="Name:"
        placeHolderText="Enter your full name"
        onType={setName}
        value={name}
      />

      <PhoneInput
        defaultCode="GB" // Change default country code as needed
        layout="first"
        onChangeText={setPhone}
      />
      <FormItem
        label="Email:"
        placeHolderText="Enter your email"
        value={email}
        onType={setEmail}
      />
      <NavigationButton
        text="Continue"
        page="home-form"
        isDisabled={isDisabled}
        submit={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

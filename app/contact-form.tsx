import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import FormItem from "../components/FormItem";
import { Link } from "expo-router";
import Button from "../components/Button";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // will use this to update the database
  const handleSubmit = () => {
    console.log(name);
    console.log(phone);

    if (!name.trim()) {
      Alert.alert("Error", "Please enter a valid name");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number");
      return;
    }
    Alert.alert("Success", `Name: ${name}\nPhone: ${phone}`);
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
      <FormItem
        label="Phone number:"
        placeHolderText="Enter your phone number"
        value={phone}
        onType={setPhone}
      />
      <Button text="Continue" page="home-form" />
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

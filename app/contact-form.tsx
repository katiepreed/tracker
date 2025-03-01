import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import FormItem from "../components/FormItem";
import { Link } from "expo-router";
import NavigationButton from "../components/NavigationButton";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/AsyncStorage";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //  need to update the type for the phone
  var isDisabled = name.trim() === "" || phone.trim() === "";

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
      <FormItem
        label="Phone number:"
        placeHolderText="Enter your phone number"
        value={phone}
        onType={setPhone}
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

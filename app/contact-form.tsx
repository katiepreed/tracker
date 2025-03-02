import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { View, StyleSheet, Alert, Dimensions } from "react-native";
import { useState, useEffect, useRef } from "react";
import FormItem from "../components/FormItem";
import NavigationButton from "../components/NavigationButton";
import { setItem } from "../utils/AsyncStorage";
import { useFonts } from "expo-font";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  //  need to update the type for the phone
  var isDisabled =
    firstName.trim() === "" || lastName.trim() === "" || phone.trim() === "";

  // add real checks to prevent you from entering bad values
  const handleSubmit = () => {
    setItem("first", firstName);
    setItem("last", lastName);
    setItem("phone", phone);
  };

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  // make sure to add type check and stuff like that to each input form
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.header,
          { paddingVertical: 10, fontFamily: "CustomFont" },
        ]}
      >
        Please enter name and phone number of emergency contact
      </Text>
      <FormItem
        placeHolderText="First name"
        onType={setFirstName}
        value={firstName}
      />
      <FormItem
        placeHolderText="Last name"
        onType={setLastName}
        value={lastName}
      />
      <FormItem
        placeHolderText="Phone Number"
        value={phone}
        onType={setPhone}
      />
      <NavigationButton
        text="Continue"
        page="home-form"
        isDisabled={isDisabled}
        submit={handleSubmit}
        darkTheme={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(208, 224, 255)",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 30,
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(20, 10, 107)",
  },
  inputSize: {
    width: "80%",
    marginBottom: 30,
    fontFamily: "CustomFont",
    color: "#150f6a",
  },
});

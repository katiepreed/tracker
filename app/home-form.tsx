import { View, StyleSheet, Alert, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import FormItem from "../components/FormItem";
import { Link } from "expo-router";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function HomeForm() {
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  // will use this to update the database
  const handleSubmit = () => {
    // ...
  };

  // make sure to add type check and stuff like that to each input form
  return (
    <View style={styles.container}>
      <FormItem
        label="House Number: "
        placeHolderText="Enter your house number"
        onType={setHouseNumber}
        value={houseNumber}
      />
      <FormItem
        label="Street Name:"
        placeHolderText="Enter your street name"
        value={streetName}
        onType={setStreetName}
      />
      <FormItem
        label="City:"
        placeHolderText="Enter your city"
        value={city}
        onType={setCity}
      />
      <FormItem
        label="Post Code:"
        placeHolderText="Enter your post code"
        value={postCode}
        onType={setPostCode}
      />
      <FormItem
        label="Country:"
        placeHolderText="Enter your country"
        value={country}
        onType={setCountry}
      />
      <Link href="/">
        <Button title="Submit" onPress={handleSubmit} />
      </Link>
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

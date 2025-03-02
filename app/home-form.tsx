import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import FormItem from "../components/FormItem";
import NavigationButton from "../components/NavigationButton";
import { setItem } from "../utils/AsyncStorage";

export default function HomeForm() {
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  var isDisabled =
    houseNumber.trim() === "" ||
    streetName.trim() === "" ||
    city.trim() === "" ||
    postCode.trim() === "" ||
    country.trim() === "";

  const handleSubmit = () => {
    setItem("door", houseNumber);
    setItem("street", streetName);
    setItem("city", city);
    setItem("post", postCode);
    setItem("country", country);
  };

  // make sure to add type check and stuff like that to each input form
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.header,
          { paddingVertical: 10, fontFamily: "CustomFont" },
        ]}
      >
        Please enter home address
      </Text>
      <FormItem
        placeHolderText="House Number"
        onType={setHouseNumber}
        value={houseNumber}
      />
      <FormItem
        placeHolderText="Street Name"
        value={streetName}
        onType={setStreetName}
      />
      <FormItem placeHolderText="City" value={city} onType={setCity} />
      <FormItem
        placeHolderText="Post Code"
        value={postCode}
        onType={setPostCode}
      />
      <FormItem placeHolderText="Country" value={country} onType={setCountry} />

      <NavigationButton
        text="Continue"
        page="main"
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
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(20, 10, 107)",
  },
});

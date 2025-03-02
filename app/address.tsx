import { View, StyleSheet, Text, Image } from "react-native";
import NavigationButton from "../components/NavigationButton";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getItem } from "@/utils/AsyncStorage";

export default function AddressPage() {
  const navigation = useNavigation();

  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  const getStoredValue = async () => {
    const houseNumber = await getItem("door");
    const streetName = await getItem("street");
    const city = await getItem("city");
    const postCode = await getItem("post");
    const country = await getItem("country");

    setCountry(country);
    setHouseNumber(houseNumber);
    setStreetName(streetName);
    setCity(city);
    setPostCode(postCode);
  };

  useEffect(() => {
    getStoredValue(); // Fetch value when component mounts
  }, []);

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  var text = `${houseNumber} ${streetName}, ${postCode}, ${city}, ${country}`;

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontFamily: "CustomFont", fontSize: 30 }]}>
        Your Home Address
      </Text>
      <View style={styles.address}>
        <Text
          style={[styles.text, { fontFamily: "CustomFont", maxWidth: 400 }]}
        >
          {text}
        </Text>
      </View>
      <NavigationButton
        text={"Return"}
        page="main"
        isDisabled={false}
        submit={() => {
          navigation.goBack();
        }}
        darkTheme={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "40%",
  },
  container: {
    backgroundColor: "rgb(208, 224, 255)",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 30,
  },
  address: {
    backgroundColor: "white",
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgb(20, 10, 107)",
    padding: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(20, 10, 107)",
  },
  text: {
    color: "rgb(20, 10, 107)",
    fontSize: 25,
    textAlign: "center",
  },
});

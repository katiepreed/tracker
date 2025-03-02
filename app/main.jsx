import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import AddressButton from "../components/AddressButton";
import SosButton from "../components/SOSButton";
import SMSButton from "../components/SMSButton";
import * as Location from "expo-location";

export default function MainScreen() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [link, setLink] = useState(null);

  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    setLocation(location);
    setAddress(address);
    setLink(`https://www.google.com/maps?q=${latitude},${longitude}`);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  let text = "Waiting...";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(address);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContaner}>
        <Image
          style={styles.image}
          source={require("../assets/images/settings.png")}
          resizeMode="contain"
        />
      </View>
      <AddressButton />
      <SosButton />
      <SMSButton link={link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContaner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",

    paddingInline: 30,
  },
  image: {
    height: 30,
    width: 30,
  },
});

import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Alert, Button } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getItem } from "../utils/AsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SendSMS from "react-native-sms";
import SosButton from "../components/SOSButton";
import SMSButton from "../components/SMSButton";

import * as Device from "expo-device";
import * as Location from "expo-location";

import axios from "axios";

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
      <SosButton phoneNum={"+447749892466"} />
      <SMSButton link={link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

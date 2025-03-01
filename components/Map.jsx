import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function Map() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function getPathToHome() {
    currentLocation = getCurrentLocation();
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

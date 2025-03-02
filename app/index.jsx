import { View, StyleSheet, Text, Image } from "react-native";
import NavigationButton from "../components/NavigationButton";
import { useFonts } from "expo-font";
import { clear, getAllItems } from "../utils/AsyncStorage";
import { useEffect, useState } from "react";
import MainScreen from "./main";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function HomeScreen() {
  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  const [keys, setKeys] = useState([]);

  const getStoredValues = async () => {
    const items = await getAllItems();

    setKeys(Object.keys(items));
  };

  useEffect(() => {
    getStoredValues();
  }, []);

  // opt out of forms for non-first time users
  /* comment out for demo 
  if (keys.length > 0) {
    return <MainScreen />;
  }
    */

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[styles.header, { fontFamily: "CustomFont", fontSize: 40 }]}
        >
          Hello!
        </Text>
        <Text
          style={[
            styles.header,
            { paddingVertical: 10, fontFamily: "CustomFont" },
          ]}
        >
          Welcome to WanderSafe
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/happiness.png")}
        resizeMode="contain"
      />
      <Text style={[styles.text, { fontFamily: "CustomFont", maxWidth: 400 }]}>
        At WanderSafe, we understand the challenges faced by individuals living
        with dementia and their caregivers. Wandering and disorientation can be
        distressing, but with WanderSafe, you can have peace of mind knowing
        that help is always available.
      </Text>
      <NavigationButton
        text={"Continue"}
        page="contact-form"
        isDisabled={false}
        submit={() => {}}
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
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(20, 10, 107)",
  },
  text: {
    color: "rgb(20, 10, 107)",
    fontSize: 15,
    textAlign: "justify",
  },
});

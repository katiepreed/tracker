import { StyleSheet, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";

export default function AddressButton() {
  const navigation = useNavigation();

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("address");
      }}
      style={styles.button}
    >
      <Text style={[styles.text, { fontFamily: "CustomFont" }]}>
        Home Address
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(17, 150, 77)",
    width: "80%",
    height: "25%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
});

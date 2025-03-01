import * as Linking from "expo-linking";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function SosButton({ phoneNum }) {
  return (
    <Pressable
      onPress={() => Linking.openURL(`tel:${phoneNum}`)}
      style={styles.button}
    >
      <Text style={{ color: "#000000" }}>SOS</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff0000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "black",
    shadowOpacity: 1,
    zIndex: 10,
    alignSelf: "center",
  },
});

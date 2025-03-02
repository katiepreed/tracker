import { Pressable, Alert, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Button = ({ text, page, isDisabled, submit, darkTheme }) => {
  const navigation = useNavigation();

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  const showAlert = () => {
    Alert.alert("Error", "Please fill in all the inputs!");
  };

  return (
    <Pressable
      onPress={() => {
        if (isDisabled) {
          showAlert();
        } else {
          submit();
          navigation.replace(page);
        }
      }}
      style={[
        styles.button,
        {
          backgroundColor: darkTheme
            ? "rgb(20, 10, 107)"
            : "rgb(255, 255, 255)",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontFamily: "CustomFont",
            color: darkTheme ? "rgb(255, 255, 255)" : "rgb(20, 10, 107)",
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    height: "8%",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
  },
  text: {
    fontSize: 20,
    color: "rgb(20, 10, 107)",
  },
});

export default Button;

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  EventEmitter,
} from "react-native";
import { useEffect, useState } from "react";
import { getAllItems, getItem, setItem } from "../utils/AsyncStorage";
import { useFonts } from "expo-font";
import NavigationButton from "../components/NavigationButton";
import { useNavigation } from "@react-navigation/native";

// https://docs.expo.dev/develop/file-based-routing/#_layout-file

export default function MainScreen() {
  const navigation = useNavigation();

  const [keys, setKeys] = useState([""]);
  const [values, setValues] = useState([""]);

  useFonts({
    CustomFont: require("../assets/fonts/nunito.ttf"),
  });

  const getStoredValues = async () => {
    const items = await getAllItems();

    setKeys(Object.keys(items));
    setValues(Object.values(items));
  };

  useEffect(() => {
    getStoredValues();
  }, []);

  const handleType = async (key, index, newValue) => {
    // Update AsyncStorage
    await setItem(key, newValue);

    setValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };

  const updateLable = (key) => {
    switch (key) {
      case "post":
        return "Postcode: ";
      case "first":
        return "First name of contact: ";
      case "last":
        return "Last name of contact: ";
      case "door":
        return "Unit number: ";
      case "phone":
        return "Contact phone number: ";
      default:
        return key.slice(0, 1).toUpperCase() + key.slice(1) + ":";
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.header,
          { fontFamily: "CustomFont", fontSize: 40, padding: 20 },
        ]}
      >
        Update Information
      </Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {keys.map((key, index) => {
          return (
            <View key={key} style={styles.item}>
              <Text>{updateLable(key)}</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleType(key, index, text)}
                value={values[index] || ""}
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={{ height: 50 }} />
      <NavigationButton
        text={"Return"}
        page="main"
        isDisabled={false}
        submit={() => {
          navigation.goBack();
        }}
        darkTheme={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(208, 224, 255)",
    flex: 1,
    padding: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "rgb(20, 10, 107)",
    marginVertical: 20,
    minWidth: 150,
    padding: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(20, 10, 107)",
  },
  item: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  scrollView: {
    padding: 30,
  },
});

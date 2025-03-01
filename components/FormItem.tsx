import {
  View,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window"); // Get screen width

type Props = {
  label: string;
  placeHolderText: string;
  onType: (param: string) => void;
  value: string;
};

export default function FormItem({
  label,
  placeHolderText,
  onType,
  value,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeHolderText}
        value={value}
        onChangeText={onType}
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingBottom: height * 0.1,
    width: width * 0.4,
  },
  label: {
    paddingTop: 10,
    flex: 1,
    paddingRight: 20,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    width: width * 0.25,
    backgroundColor: "white",
  },
});

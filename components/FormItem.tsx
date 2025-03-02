import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type Props = {
  placeHolderText: string;
  onType: (param: string) => void;
  value: string;
};

export default function FormItem({ placeHolderText, onType, value }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder={placeHolderText}
        value={value}
        onChangeText={onType}
        placeholderTextColor="gray"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  label: {
    paddingTop: 10,
    flex: 1,
    paddingRight: 20,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 20,
    width: 200,
    borderColor: "rgb(20, 10, 107)",
  },
});

import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";

const LiginTextInput = () => {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState(null);

  return (
    <>
      <Text style={styles.text}>Narayanganj Club Ltd</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: "blue",
    fontWeight:'bold',
    fontSize: 28,
    alignContent: "center",
    paddingLeft: 30,
  },
});

export default LiginTextInput;

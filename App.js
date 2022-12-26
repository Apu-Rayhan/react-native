import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LiginTextInput from "./component/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <LiginTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#C0C0C0`,
    justifyContent: "center",
  },
});

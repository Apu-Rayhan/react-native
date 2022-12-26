import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const LiginTextInput = () => {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState(null);

  const handleInputText = ()=>{
    alert(text)
  }
  

  return (
    <View style={{ borderWidth: 1, margin: 5 , borderRadius:5 }}>
      <Text style={styles.text}>NCL</Text>
      <TextInput
        style={styles.input}
        onChangeText={e=>setText(e.target.value)}
        placeholder="Email"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={e=>setNumber(e.target.value)}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <View style={{ marginLeft: 120, width: 120 }}>
        <TouchableOpacity style={styles.btn} onPress={handleInputText} >
          <Text style={styles.Tlog}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00FF00",
    width: 120,
    height: 40,
    borderRadius: 20,
  },
  Tlog: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
    paddingLeft: 33,
    paddingTop:5
  },
  input: {
    height: 40,
    width:250,
    marginLeft:60,
    marginBottom:10,
    borderBottomWidth:2,
    padding: 10,
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 28,
    alignContent: "center",
    paddingLeft: 150,
  },
});

export default LiginTextInput;

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [message, setMessage] = useState("");
  const showAlert = () => {
    Alert.alert("Welcome to the app!", "Your message: " + message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app!</Text>
      <TextInput
        style={styles.input}
        placeholder='Write your message here'
        onChangeText={text => setMessage(text)}
      />
      <Button title='Press me' onPress={showAlert} color='red' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: 200,
      borderColor: "lightgray",
      borderWidth: 1,
      marginBottom: 20,
    },
    text: {
      marginBottom: 20,
    },
  });
  

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1-100");
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    console.log("startGame function called");
    setMessage("Guess a number between 1-100");
    setGuess("");
    setRandomNumber(generateRandomNumber());
    setGuessCount(0);
  };

  const checkGuess = () => {
    console.log("checkGuess function called");
    const parsedGuess = parseInt(guess);
    console.log("parsedGuess:", parsedGuess);
    console.log("randomNumber:", randomNumber);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      Alert.alert("Invalid Guess", "Please enter a number between 1-100", [
        { text: "OK" },
      ]);
      return;
    }

    const updatedGuessCount = guessCount + 1;
    setGuessCount(updatedGuessCount);
    setGuess("");

    if (parsedGuess === randomNumber) {
      Alert.alert(
        "Congratulations!",
        `You guessed the number in ${updatedGuessCount} guesses`,
        [{ text: "OK", onPress: startGame }]
      );
    } else if (parsedGuess < randomNumber) {
      setMessage(`Your guess ${parsedGuess} is too low`);
    } else {
      setMessage(`Your guess ${parsedGuess} is too high`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(text) => setGuess(text)}
        value={guess}
      />
      <Button title='Make Guess' onPress={checkGuess} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    marginVertical: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});

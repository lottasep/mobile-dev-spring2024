import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    // lisätään syötetty data taulukkoon, viimeksi syötetty tallentuu taulukon loppuun
    setTasks([...tasks, task]);
    setTask("");
  };

  const itemSeparator = () => {
    return <View style={{ backgroundColor: "black", height: 1 }}></View>;
  };

  console.log(tasks);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>To Do List</Text>
        <TextInput
          style={styles.input}
          placeholder='Write task here'
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button title='Add Task' onPress={handleAddTask} color='red' />
      </View>
      <View style={{ flex: 7 }}>
        <FlatList
          data={tasks}
          ItemSeparatorComponent={itemSeparator}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>To do: </Text>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    borderColor: "lightgray",
    padding: 5,
    borderWidth: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    padding: 5,
    width: 250,
  },
});

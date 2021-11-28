import { Button, ListItem, Text, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { View } from "react-native";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <View>
      <Text variant="h1">Todo</Text>
      <View style={{ padding: 16 }}>
        <TextInput
          variant="outlined"
          label="I have to"
          value={todo}
          onChangeText={setTodo}
        />
        <Button
          title="Add"
          onPress={() => {
            setTodos([...todos, todo]);
            setTodo("");
          }}
        />
        <View>
          {todos.map((t, i) => (
            <View key={i}>
              <ListItem title={t} />
              <Button
                title="Done"
                onPress={() => setTodos(todos.filter((_, index) => index != i))}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;

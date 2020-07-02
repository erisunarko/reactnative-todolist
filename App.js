import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  let initialValue = ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'];
  const [todos, setTodos] = useState(initialValue);

  const onAddTodo = text => {
    setTodos(todos => [...todos, text]);
  }

  const onRemoveTodo = index => {    
    let tempTodos = todos.filter((todo, i) => i !== index);
    setTodos(tempTodos);
  }

  return (
    <View style={styles.container}>
      <Title 
        props={"ToDo List"} 
      />
      <Input 
        placeholder={"Type here then ENTER!"}
        onSubmitEditing={onAddTodo}
      />
      <List 
        list={todos}
        onPressItem={onRemoveTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

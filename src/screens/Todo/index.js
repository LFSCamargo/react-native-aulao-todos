import React, {useState, useContext} from 'react';
import {FlatList, TouchableOpacity, Alert} from 'react-native';
import {Wrapper, Button, ButtonText, Input, TodoItem} from './styles';
import {TodoContext} from '../../stores/todoContext';

const Todo = (props) => {
  const {todos, addTodo, updateTodo, removeTodo} = useContext(TodoContext);
  const [inputState, setInputState] = useState('');

  const todosTrigger = (id) =>
    Alert.alert(
      'O que deseja fazer?',
      'O que deseja com sua todo atualizar ou remover',
      [
        {
          text: 'Atualizar',
          onPress: () => updateTodo(id),
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => removeTodo(id),
        },
      ],
    );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => todosTrigger(item.id)}>
        <TodoItem active={item.active}>{item.title}</TodoItem>
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper>
      <FlatList
        extraData={todos}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Input
            placeholder="Todo Title"
            value={inputState}
            onChangeText={setInputState}
          />
        }
      />
      <Button onPress={() => addTodo(inputState)}>
        <ButtonText>Add Todo</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default Todo;

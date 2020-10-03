import React, {useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'mobx-react';
import Todo from './screens/Todo/index';
import {TodoContext} from './stores/todoContext';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    console.log(title);
    setTodos((prev) => [
      ...prev,
      {
        title,
        active: true,
        id: Math.random(),
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  const updateTodo = (id) => {
    setTodos((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            active: !e.active,
          };
        }
        return e;
      }),
    );
  };

  return (
    <TodoContext.Provider
      value={{todos, setTodos, addTodo, updateTodo, removeTodo}}>
      <Todo />
    </TodoContext.Provider>
  );
};

export default App;

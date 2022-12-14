import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import InputFields from './components/InputFields';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return { ...todo, completed: !todo.completed };
      })
    );
  };

  return (
    <div className='App'>
      <InputFields addTodo={addTodo} text={text} setText={setText} />

      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;

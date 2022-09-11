import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import InputFields from './components/InputFields';

function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodo = () => {
  // if (text.trim().length) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: new Date().toISOString(),
  //       text,
  //       completed: false,
  //     },
  //   ]);
  //   setText('');
  // }
  // };

  // const deleteTodo = (todoId) => {
  //   setTodos(todos.filter((todo) => todo.id !== todoId));
  // };

  // const toggleTodoCompleted = (todoId) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== todoId) return todo;

  //       return { ...todo, completed: !todo.completed };
  //     })
  //   );
  // };

  return (
    <div className='App'>
      <InputFields />

      <TodoList />
    </div>
  );
}

export default App;

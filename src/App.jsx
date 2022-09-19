import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import './App.css';
import { addNewTodo, fetchTodos } from './features/todo/todoSlice';
import TodoList from './components/TodoList';
import InputFields from './components/InputFields';

function App() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);

  const todoInput = () => {
    if (title.trim().length) {
      // const todo = {
      //   id: Date.now(),
      //   title,
      //   completed: false,
      // };
      dispatch(addNewTodo(title));
      setTitle('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className='App'>
      <InputFields todoInput={todoInput} title={title} setTitle={setTitle} />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;

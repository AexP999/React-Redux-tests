import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addTodo } from '../features/todo/todoSlice';

const InputFields = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const todoInput = () => {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch(addTodo(todo));
    setText('');
  };

  return (
    <label>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={todoInput}>Add todo</button>
    </label>
  );
};

export default InputFields;

// test
//testredux

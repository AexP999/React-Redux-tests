import React from 'react';
import { useDispatch } from 'react-redux';

import { statusToggle, removeTodo } from '../features/todo/todoSlice';

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li key={todo.id}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => {
          dispatch(statusToggle(todo.id));
        }}
      />
      <span>{todo.title}</span>
      <span className='delete' onClick={() => dispatch(removeTodo(todo.id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItems;

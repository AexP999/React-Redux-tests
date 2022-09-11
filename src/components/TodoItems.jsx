import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodoCompleted, deleteTodo } from '../features/todo/todoSlice';

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li key={todo.id}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoCompleted(todo.id))}
      />
      <span>{todo.text}</span>
      <span className='delete' onClick={() => dispatch(deleteTodo(todo.id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItems;

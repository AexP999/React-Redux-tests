import React from 'react';

const TodoItems = ({
  id,
  text,
  completed,
  deleteTodo,
  toggleTodoCompleted,
}) => {
  return (
    <li key={id}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <span className='delete' onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItems;

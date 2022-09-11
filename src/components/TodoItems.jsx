import React from 'react';

const TodoItems = ({
  todo,
  deleteTodo,
  toggleTodoCompleted,
}) => {
  return (
    <li key={todo.id}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodoCompleted(todo.id)}
      />
      <span>{todo.text}</span>
      <span className='delete' onClick={() => deleteTodo(todo.id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItems;

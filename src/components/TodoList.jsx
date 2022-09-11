import React from 'react';
import { useSelector } from 'react-redux';

import TodoItems from './TodoItems';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul>
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

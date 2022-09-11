import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todos, toggleTodoCompleted, deleteTodo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul>
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

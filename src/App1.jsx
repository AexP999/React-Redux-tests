import './App.css';
import { useState } from 'react';

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
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div className='App'>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          {todos.map((todo) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

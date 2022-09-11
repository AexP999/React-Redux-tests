import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import InputFields from './components/InputFields';

function App() {
  return (
    <div className='App'>
      <InputFields />
      <TodoList />
    </div>
  );
}

export default App;

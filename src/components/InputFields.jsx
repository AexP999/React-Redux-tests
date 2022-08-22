import React from 'react';

const InputFields = ({ text, setText, addTodo }) => {
  return (
    <label>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
};

export default InputFields;

// test
//testredux

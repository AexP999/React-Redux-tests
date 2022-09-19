import React from 'react';

const InputFields = ({ todoInput, title, setTitle }) => {
  return (
    <label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={todoInput}>Add todo</button>
    </label>
  );
};

export default InputFields;

// test
//testredux

import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {},
    deleteTodo(state, action) {},
    toggleTodoCompleted(state, action) {},
  },
});

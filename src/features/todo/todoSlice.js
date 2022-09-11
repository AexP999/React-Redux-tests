import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted: (state, action) => {
      const toogleTodo = state.todos.find((todo) => todo.id === action.payload);
      toogleTodo.completed = !toogleTodo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;

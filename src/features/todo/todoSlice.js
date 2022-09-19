import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const removeTodo = createAsyncThunk(
  'todo/removeTodo',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Can not delete. Server error');
      }
      dispatch(deleteTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=15'
      );

      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const statusToggle = createAsyncThunk(
  'todo/statusToggle',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const todo = getState().todos.todos.find((todo) => todo.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: !todo.completed }),
        }
      );
      if (!response.ok) {
        throw new Error('Can not switch the task status. Server error');
      }
      dispatch(toggleTodoCompleted(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  'todo/addNewTodo',
  async (title, { rejectWithValue, dispatch }) => {
    try {
      const todo = {
        UseId: 1,
        title,
        completed: false,
      };

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos `,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error('Can not add task. Server error');
      }

      const data = await response.json();

      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const errorOccured = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const initialState = {
  todos: [],
  status: null,
  error: null,
};

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
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.status = 'ended';
    },
    [fetchTodos.rejected]: errorOccured,
    [removeTodo.rejected]: errorOccured,
    [statusToggle.rejected]: errorOccured,
  },
});

const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;

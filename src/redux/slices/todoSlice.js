import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: JSON.parse(localStorage.getItem('todos')) || [],
    filter: JSON.parse(localStorage.getItem('filter')) || 'ALL',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    addTodo: (state, actions) => {
      const { id, title, date, desc, important } = actions.payload;
      const index = state.data.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        state.data[index] = { id, title, date, desc, important };
        return;
      }

      state.data.push({ id, title, date, desc, important });
    },
    changeStatusTodo: (state, actions) => {
      const { id } = actions.payload;
      const index = state.data.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        state.data[index].done = !state.data[index].done;
      }
    },
    changeStatusImportant: (state, actions) => {
      const { id } = actions.payload;
      const index = state.data.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        state.data[index].important = !state.data[index].important;
      }
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {
  addTodo,
  changeStatusTodo,
  changeStatusImportant,
  removeTodo,
  changeFilter,
} = todoSlice.actions;
export default todoSlice.reducer;

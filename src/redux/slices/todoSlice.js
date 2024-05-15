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
      const index = state.data.findIndex(
        (todo) => todo.id === actions.payload.id
      );

      if (index !== -1) {
        state.data[index].title = actions.payload.title;
        state.data[index].date = actions.payload.date;
        state.data[index].desc = actions.payload.desc;
        state.data[index].important = actions.payload.important;
        return;
      }

      state.data.push(actions.payload);
    },
    changeStatusTodo: (state, actions) => {
      const index = state.data.findIndex(
        (todo) => todo.id === actions.payload.id
      );

      if (index !== -1) {
        state.data[index].done = !state.data[index].done;
      }
    },
    changeStatusImportant: (state, actions) => {
      const index = state.data.findIndex(
        (todo) => todo.id === actions.payload.id
      );

      if (index !== -1) {
        state.data[index].important = !state.data[index].important;
      }
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
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

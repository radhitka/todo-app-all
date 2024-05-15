import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    isVisible: false,
    name: 'Tambah Tugas',
    id: '',
    title: '',
    date: '',
    desc: '',
    important: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreate: (state, actions) => {
      state.data.isVisible = true;
      state.data.name = 'Tambah Tugas';
    },
    editCreate: (state, actions) => {
      const { id, title, date, desc, important } = actions.payload?.data;

      state.data.id = id;
      state.data.name = 'Edit Tugas';
      state.data.isVisible = true;
      state.data.title = title;
      state.data.date = date;
      state.data.desc = desc;
      state.data.important = important;
    },
    closeModals: (state) => initialState,
  },
});

export const { openCreate, editCreate, closeModals } = modalSlice.actions;
export default modalSlice.reducer;

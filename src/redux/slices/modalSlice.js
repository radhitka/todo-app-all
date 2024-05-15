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

      state.data.id = '';
      state.data.name = 'Tambah Tugas';
      state.data.title = '';
      state.data.date = '';
      state.data.desc = '';
      state.data.important = false;
    },
    editCreate: (state, actions) => {
      const data = actions.payload?.data;

      state.data.id = data.id;
      state.data.name = 'Edit Tugas';
      state.data.isVisible = true;
      state.data.title = data.title;
      state.data.date = data.date;
      state.data.desc = data.desc;
      state.data.important = data.important;
    },
    closeModals: (state) => {
      state.data.isVisible = false;

      state.data.id = '';
      state.data.name = 'Tambah Tugas';
      state.data.title = '';
      state.data.date = '';
      state.data.desc = '';
      state.data.important = false;
    },
  },
});

export const { openCreate, editCreate, closeModals } = modalSlice.actions;
export default modalSlice.reducer;

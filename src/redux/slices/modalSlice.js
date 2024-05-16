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
      return {
        data: {
          ...state,
          isVisible: true,
          name: 'Tambah Tugas',
        },
      };
    },
    editCreate: (state, actions) => {
      const { id, title, date, desc, important } = actions.payload?.data;

      return {
        data: {
          ...state,
          isVisible: true,
          name: 'Edit Tugas',
          id,
          title,
          date,
          desc,
          important,
        },
      };
    },
    closeModals: (state) => initialState,
  },
});

export const { openCreate, editCreate, closeModals } = modalSlice.actions;
export default modalSlice.reducer;

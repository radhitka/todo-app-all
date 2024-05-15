import { createSlice } from '@reduxjs/toolkit';

const modelDeleteSlice = createSlice({
  name: 'modalDelete',
  initialState: {
    data: {
      id: 0,
      isVisible: false,
    },
  },
  reducers: {
    showModal: (state, actions) => {
      state.data.isVisible = true;
      state.data.id = actions.payload.id;
    },
    closeModal: (state) => {
      state.data.isVisible = false;
      state.data.id = 0;
    },
  },
});

export const { showModal, closeModal } = modelDeleteSlice.actions;
export default modelDeleteSlice.reducer;

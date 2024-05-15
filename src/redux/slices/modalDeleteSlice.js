import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: 0,
    isVisible: false,
  },
};

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
    closeModal: (state) => initialState,
  },
});

export const { showModal, closeModal } = modelDeleteSlice.actions;
export default modelDeleteSlice.reducer;

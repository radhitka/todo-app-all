import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    showRight: false,
    showLeft: false,
  },
};

const showMenuSlide = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    openRight: (state) => {
      state.data.showRight = true;
    },
    openLeft: (state) => {
      state.data.showLeft = true;
    },
    closeMenu: (state) => initialState,
  },
});

export const { openRight, openLeft, closeMenu } = showMenuSlide.actions;

export default showMenuSlide.reducer;

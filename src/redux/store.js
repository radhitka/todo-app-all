import { configureStore } from '@reduxjs/toolkit';
import modalDeleteReducer from './slices/modalDeleteSlice';
import modalReducer from './slices/modalSlice';
import showMenuReducer from './slices/showMenuSlice';
import todoReducer from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
    modalDelete: modalDeleteReducer,
    showMenu: showMenuReducer,
  },
});

export default store;

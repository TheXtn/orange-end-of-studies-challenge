import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './items-slice';

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
})
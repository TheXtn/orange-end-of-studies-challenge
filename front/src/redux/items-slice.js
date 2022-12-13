import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    price: "",
    stock: "",
  }

  export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
      setItem: (state, action) => {
        state.name = action.payload.name;
        state.price = action.payload.price;
        state.stock = action.payload.stock;
      },
    },
  })

  export const { setItem } = itemSlice.actions;

  export default itemSlice.reducer;


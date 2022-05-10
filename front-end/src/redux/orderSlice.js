import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/productsRequest';

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  extraReducers,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = orderSlice.actions;

export default orderSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/productsRequest';

const initialState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  extraReducers,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;

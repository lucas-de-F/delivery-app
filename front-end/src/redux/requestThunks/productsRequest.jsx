import { createAsyncThunk } from '@reduxjs/toolkit';

import ProductsUtils from '../../utils/requests/productsRequest';

export const productsRequest = createAsyncThunk(
  'ProductsSlice/productsRequest', (user) => ProductsUtils.productsRequest(user),
);

export const extraReducers = (builder) => {
  builder.addCase(productsRequest
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.products = action.payload.body;
    }
  });
};

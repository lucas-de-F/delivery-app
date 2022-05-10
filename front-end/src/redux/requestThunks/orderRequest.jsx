import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderUtils from '../../utils/requests/orderRequest';

export const OrderRequest = createAsyncThunk(
  'OrderSlice/orderRequest', (user) => OrderUtils.orderRequest(user),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequest
    .fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.orderId = action.payload.body;
    }
  });
};

import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderRequest from '../../utils/requests/ordersRequests';

export const OrderRequestThunk = createAsyncThunk(
  'OrderSlice/orderRequest', (payload) => OrderRequest.getOrdersById(payload),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequestThunk
    .fulfilled, (state, action) => {
    console.log(action.payload);
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.orders = action.payload.body;
    }
  });
};

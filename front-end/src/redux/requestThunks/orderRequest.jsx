import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderRequest from '../../utils/requests/ordersRequests';

export const OrderRequestThunk = createAsyncThunk(
  'OrderSlice/orderRequest', (user) => OrderRequest.getOrdersById(user),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequestThunk
    .fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.orderId = action.payload.body;
    }
  });
};

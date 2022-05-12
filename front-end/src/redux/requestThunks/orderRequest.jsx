import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderRequest from '../../utils/requests/ordersRequests';

export const OrderRequestThunk = createAsyncThunk(
  'OrderSlice/orderRequest', (payload) => OrderRequest.getOrdersById(payload),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequestThunk
    .fulfilled, (state, action) => {
    console.log(action.payload);
    // if (action.payload.statusCode === statusCode) {
    //   state.orderId = action.payload.body;
    // }
  });
};

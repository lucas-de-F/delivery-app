import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderUtils from '../../utils/requests/ordersRequests';

export const ordersRequest = createAsyncThunk(
  'OrdersSlice/ordersRequest', (user) => OrderUtils.getOrders(user),
);

export const extraReducers = (builder) => {
  builder.addCase(ordersRequest
    .fulfilled, (state, action) => {
    const statusCode = 200;

    if (action.payload.statusCode === statusCode) {
      state.orders = action.payload.body;
    }
  });
};

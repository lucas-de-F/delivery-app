import { createAsyncThunk } from '@reduxjs/toolkit';

import OrderUtils from '../../utils/requests/OrdersRequest';

export const ordersRequest = createAsyncThunk(
  'OrdersSlice/ordersRequest', (user) => OrderUtils.ordersRequest(user),
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

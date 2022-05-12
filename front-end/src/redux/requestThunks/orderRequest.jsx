import { createAsyncThunk } from '@reduxjs/toolkit';

import OrdersUtils from '../../utils/requests/ordersRequests';

export const OrderRequestThunk = createAsyncThunk(
  'OrderSlice/OrderRequestThunk', (payload) => OrdersUtils.getOrdersById(payload),
);

export const CreateOrderRequestThunk = createAsyncThunk(
  'OrderSlice/CreateOrderRequestThunk', (payload) => OrdersUtils.createOrder(payload),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequestThunk
    .fulfilled, (state, action) => {
    console.log(action.payload);
    // if (action.payload.statusCode === statusCode) {
    //   state.orderId = action.payload.body;
    // }
  });

  builder.addCase(CreateOrderRequestThunk
    .fulfilled, (state, action) => {
    console.log(action.payload);
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.orderId = action.payload.body.id;
    }
  })
    .addCase(CreateOrderRequestThunk
      .rejected, (state, action) => {
      console.log(action.payload);
    });
};

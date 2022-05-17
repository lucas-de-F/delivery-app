import { createAsyncThunk } from '@reduxjs/toolkit';

import OrdersUtils from '../../utils/requests/ordersRequests';

export const OrderRequestThunk = createAsyncThunk(
  'OrderSlice/OrderRequestThunk', (payload) => OrdersUtils.getOrdersById(payload),
);

export const CreateOrderRequestThunk = createAsyncThunk(
  'OrderSlice/CreateOrderRequestThunk', (payload) => OrdersUtils.createOrder(payload),
);

export const UpdateOrderRequestThunk = createAsyncThunk(
  'OrderSlice/UpdateOrderRequestThunk',
  (payload) => OrdersUtils.updateProductStatus(payload),
);

export const extraReducers = (builder) => {
  builder.addCase(OrderRequestThunk
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.orders = action.payload.body;
    }
  });

  builder.addCase(CreateOrderRequestThunk
    .fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.orderId = action.payload.body.id;
    }
  })
    .addCase(CreateOrderRequestThunk
      .rejected, (state, action) => {
      console.log(action.payload);
    });

  builder.addCase(UpdateOrderRequestThunk
    .fulfilled, (state, action) => {
    const statusCode = 204;

    if (action.payload.statusCode === statusCode) {
      state.status = 'Status';
    }
  });
};

import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/orderRequest';

const initialState = {
  orders: [],
  ordersById: null,
  orderId: null,
  status: '',
};

export const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  extraReducers,
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    getOrdersById: (state, action) => {
      state.ordersById = state.orders.find((order) => order.id === action.payload.pageId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrderId, setStatus, getOrdersById } = OrderSlice.actions;

export default OrderSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/orderRequest';

const initialState = {
  orders: [],
  orderId: null,
};

export const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  extraReducers,
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrderId } = OrderSlice.actions;

export default OrderSlice.reducer;

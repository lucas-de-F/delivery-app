import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
};

export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const check = state.cart[action.payload.name];
      if (check) {
        state.cart[action.payload.name].quantity += 1;
      } else {
        state.cart[action.payload.name] = { quantity: 1, price: action.payload.price };
      }
    },
    removeCart: (state, action) => {
      const check = state.cart[action.payload.name]?.quantity;
      if (check >= 2) {
        state.cart[action.payload.name].quantity -= 1;
      } else {
        delete state.cart[action.payload.name];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;

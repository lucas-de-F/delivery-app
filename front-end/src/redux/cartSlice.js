import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
  totalPrice: 0,
};

export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const check = state.cart[action.payload.name];
      state.totalPrice += Number(action.payload.price);
      if (check) {
        state.cart[action.payload.name].quantity += 1;
        state.cart[action.payload.name].price += Number(action.payload.price);
      } else {
        state.cart[action.payload.name] = { quantity: 1,
          price: Number(action.payload.price) };
      }
    },
    removeCart: (state, action) => {
      const check = state.cart[action.payload.name]?.quantity;
      state.totalPrice -= Number(action.payload.price);
      if (check >= 2) {
        state.cart[action.payload.name].quantity -= 1;
        state.cart[action.payload.name].price -= Number(action.payload.price);
      } else {
        delete state.cart[action.payload.name];
      }
    },
    setCartByInput: (state, action) => {
      const reg = new RegExp('^[0-9+-/]+$|^$');
      if (reg.test(action.payload.value)) {
        if (action.payload.value > 0 && action.payload.value !== '') {
          state.cart[action.payload.data.name] = { quantity: Number(action.payload.value),
            price: action.payload.data.price * action.payload.value };
          state.totalPrice += Number(action.payload.data.price) * action.payload.value;
        }
        if (action.payload.value <= 0 || action.payload.value === '') {
          state.totalPrice -= Number(action.payload.data.price)
          * state.cart[action.payload.data.name].quantity;
          delete state.cart[action.payload.data.name];
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, removeCart, setCartByInput } = CartSlice.actions;

export default CartSlice.reducer;

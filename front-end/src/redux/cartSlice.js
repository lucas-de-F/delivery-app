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
      if (check) {
        state.cart[action.payload.name].quantity += 1;
      } else {
        state.cart[action.payload.name] = {
          quantity: 1,
          price: action.payload.price,
          productId: action.payload.id,
        };
      }
    },

    setPrice: (state, action) => {
      const quantityNum = Number(action.payload.quantity);

      state.cart[action.payload.data.name] = {
        quantity: quantityNum,
        price: action.payload.data.price,
        productId: action.payload.data.id,
      };
    },

    removeCart: (state, action) => {
      const check = state.cart[action.payload.name]?.quantity;
      if (action.payload.removeAll === true) {
        delete state.cart[action.payload.name];
        return;
      }

      if (check >= 2) {
        state.cart[action.payload.name].quantity -= 1;
      } else {
        delete state.cart[action.payload.name];
      }
    },
    setCartByInput: (state, action) => {
      const valores = action.payload ? action.payload : [];
      const chaves = Object.keys(valores);

      state.totalPrice = chaves.reduce((acc, chave) => {
        acc += valores[chave].quantity * valores[chave].price;
        return acc;
      }, 0).toFixed(2).toString().replace('.', ',');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, removeCart, setCartByInput, setPrice } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SellerUtils from '../utils/requests/SellerRequest';

const initialState = {
  Seller: [],
};

export const getSellers = createAsyncThunk(
  'SellerSlice/getSeller', (auth) => SellerUtils.sellersRequest(auth),
);

const extraReducers = (builder) => {
  builder.addCase(getSellers
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.status = 'fulfilled';
    }
  });
};

export const SellerSlice = createSlice({
  name: 'SellerSlice',
  initialState,
  extraReducers,
  reducers: {
    setCart: (state, action) => {
      const check = state.cart[action.payload.name];
      if (check) {
        state.cart[action.payload.name].quantity += 1;
      } else {
        state.cart[action.payload.name] = { quantity: 1, price: action.payload.price };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, removeCart, setCartByInput, setPrice } = SellerSlice.actions;

export default SellerSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from './userSlice';
import ProductsSliceReducer from './productsSlice';
import CartSliceReducer from './cartSlice';

const store = configureStore({
  reducer: {
    UserSlice: UserSliceReducer,
    ProductsSlice: ProductsSliceReducer,
    CartSlice: CartSliceReducer,
  },
});

export default store;

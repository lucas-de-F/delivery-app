import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from './userSlice';
import ProductsSliceReducer from './productsSlice';
import CartSliceReducer from './cartSlice';
import OrderSliceReducer from './orderSlice';
import SellerSliceReducer from './Seller';

const store = configureStore({
  reducer: {
    UserSlice: UserSliceReducer,
    ProductsSlice: ProductsSliceReducer,
    CartSlice: CartSliceReducer,
    OrderSlice: OrderSliceReducer,
    SellerSlice: SellerSliceReducer,
  },
});

export default store;

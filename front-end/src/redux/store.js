import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from './userSlice';
import ProductsSliceReducer from './productsSlice';
import CartSliceReducer from './cartSlice';
import OrderSliceReducer from './orderSlice';
import SellersSliceReducer from './sellerSlice';

const store = configureStore({
  reducer: {
    UserSlice: UserSliceReducer,
    ProductsSlice: ProductsSliceReducer,
    CartSlice: CartSliceReducer,
    OrderSlice: OrderSliceReducer,
    SellersSlice: SellersSliceReducer,
  },
});

export default store;

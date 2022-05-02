import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from './userSlice';

const store = configureStore({
  reducer: {
    UserSlice: UserSliceReducer,
  },
});

export default store;

import { createAsyncThunk } from '@reduxjs/toolkit';
import TokenUtils from '../../utils/requests/tokenRequests';
import RegisterUtils from '../../utils/requests/registerRequest';

export const getToken = createAsyncThunk(
  'UserSlice/getToken', (user) => TokenUtils.getToken(user),
);

export const registerUser = createAsyncThunk(
  'UserSlice/registerUser', (user) => RegisterUtils.registerUser(user),
);

export const extraReducers = (builder) => {
  builder.addCase(getToken.fulfilled, (state, action) => {
    console.log('fulfilled', action.payload);
  });

  builder.addCase(registerUser.fulfilled, (state, action) => {
    console.log('fulfilled', action.payload);
  });
};

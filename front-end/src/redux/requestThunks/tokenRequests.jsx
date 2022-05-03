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
  builder.addCase(getToken
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.status = 'fulfilled';
    }
    localStorage.setItem('token', JSON.stringify(action.payload.body.token));
  });

  builder.addCase(registerUser.fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.status = 'fulfilled';
    }
  });
};

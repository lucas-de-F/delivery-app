import { createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

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
    const { token } = action.payload.body;

    try {
      const { name, email, role, id } = jwtDecode(token);
      state.name = name;
      state.auth = {
        token,
        userId: id,
        email,
        role,
      };

      localStorage.setItem('user', JSON.stringify({ name, role, email, token }));
    } catch (error) {
      return console.log(error, 'ERRO');
    }
  })
    .addCase(getToken.rejected, (state) => {
      state.status = 'rejected';
    });
  builder.addCase(registerUser.fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.status = 'fulfilled';
    }
    try {
      const token = action.payload.body?.token;

      const { name, email, role, id } = jwtDecode(token);
      state.name = name;
      state.auth = {
        token,
        userId: id,
        email,
        role,
      };

      localStorage.setItem('user', JSON.stringify({ name, role, email, token }));
    } catch (error) {
      return console.log(error, 'ERRO');
    }
  });
};

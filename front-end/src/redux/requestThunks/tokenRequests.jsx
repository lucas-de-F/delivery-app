import { createAsyncThunk } from '@reduxjs/toolkit';
import TokenUtils from '../../utils/requests/tokenRequests';

export const getToken = createAsyncThunk(
  'UserSlice/getToken', (user) => TokenUtils.getToken(user),
);

export const extraReducers = (builder) => {
  builder.addCase(getToken.pending, (state, action) => {
    console.log('pending');
  });
  builder.addCase(getToken.fulfilled, (state, action) => {
    console.log('fulfilled');
  });
};

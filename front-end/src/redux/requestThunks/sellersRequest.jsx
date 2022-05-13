import { createAsyncThunk } from '@reduxjs/toolkit';

import SellersUtils from '../../utils/requests/sellersRequest';

export const getSellers = createAsyncThunk(
  'SellersSlice/getSellers', (user) => SellersUtils.getSellersRequest(user),
);

export const extraReducers = (builder) => {
  builder.addCase(getSellers
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.sellers = action.payload.body;
    }
  });
};

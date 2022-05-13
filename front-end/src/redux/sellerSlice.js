import { createSlice } from '@reduxjs/toolkit';

import { extraReducers } from './requestThunks/sellersRequest';

const initialState = {
  sellers: [],
};

export const SellersSlice = createSlice({
  name: 'SellersSlice',
  initialState,
  extraReducers,
  reducers: {
    setSellers: (state, action) => {
      state.sellers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSellers } = SellersSlice.actions;

export default SellersSlice.reducer;

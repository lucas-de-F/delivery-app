import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/tokenRequests';

const initialState = {
  auth: {
    roles: {},
  },
};

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  extraReducers,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setToken } = UserSlice.actions;

export default UserSlice.reducer;

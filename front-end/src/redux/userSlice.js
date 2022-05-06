import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './requestThunks/tokenRequests';

const initialState = {
  name: '',
  auth: {},
  status: '',
};

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  extraReducers,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setStatus: (state, action) => {
      console.log(action.payload);
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setStatus } = UserSlice.actions;

export default UserSlice.reducer;

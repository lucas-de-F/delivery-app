import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    roles: [],
  },
};

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setToken } = UserSlice.actions;

export default UserSlice.reducer;

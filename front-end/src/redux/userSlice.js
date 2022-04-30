import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const LOCAL = 'http://localhost:3001';

export const getToken = createAsyncThunk(
  'users/getToken',
  async (email) => {
    const response = await axios({
      method: 'post',
      url: `${LOCAL}/login`,
      data: {
        email,
      },
    });
    console.log(response, 'GETTOKENNNNN');
    return response;
  },
);

const initialState = {
  auth: {
    roles: {},
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

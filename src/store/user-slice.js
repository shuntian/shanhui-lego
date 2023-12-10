import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../api/client";

function createInitialState() {
  return {
    ...JSON.parse(localStorage.getItem('loginInfo')),
  }
};

export const loginApp = createAsyncThunk('user/login', async (values) => {
  const response = await client.loginByEmail(values);
  return response.data;
})

// const initState = {
//   isLogin: false,
//   username: '',
//   error: null,
// };

const initValue = createInitialState();

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initValue,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('loginInfo');
      state.value = {
        isLogin: false,
        username: '',
        error: null,
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(loginApp.fulfilled, (state, action) => {
      const { meta } = action;
      state.value = {
        isLogin: true,
        username: meta.arg.username,
        token: action.payload?.data?.token,
      }
      localStorage.setItem('loginInfo', JSON.stringify(state.value))
    })
    .addCase(loginApp.rejected, (state, action) => {
      state.value = {
        isLogin: false,
        username: '',
        error: action.error.message,
      }
    })
  }
});

export const { login, logout } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLogin: true,
  username: 'shuantian'
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initState,
  },
  reducers: {
    login: (state, action) => {
      state.value = {
        isLogin: true,
        username: action.payload
      };
    },
    logout: (state) => {
      state.value = {
        isLogin: false,
        username: ''
      }
    }
  }
});

export const { login, logout } = userSlice.actions;

export const loginAsync = (username) => (dispatch) => {
  setTimeout(() => {
    dispatch(login(username))
  }, 300);
}

const userReducer = userSlice.reducer;

export default userReducer;

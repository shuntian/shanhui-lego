import {  configureStore } from '@reduxjs/toolkit'
import templateReducer from './template-slice';
import userReducer from './user-slice';

const store =  configureStore({
  reducer: {
    templates: templateReducer,
    user: userReducer
  }
});

export default store;

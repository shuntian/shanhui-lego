import {  configureStore } from '@reduxjs/toolkit'
import templateReducer from './template-slice';

const store =  configureStore({
  reducer: {
    templates: templateReducer
  }
});

export default store;

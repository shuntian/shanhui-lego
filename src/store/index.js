import {  configureStore } from '@reduxjs/toolkit'
import editorReducer from './editor-slice';
import templateReducer from './template-slice';
import userReducer from './user-slice';

const store =  configureStore({
  reducer: {
    user: userReducer,
    templates: templateReducer,
    editor: editorReducer,
  }
});

export default store;

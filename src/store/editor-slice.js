import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const initState = {
  components: [],
  currentElement: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initState,
  },
  reducers: {
    addItem: (state, action) => {
      const { payload: componentProps } = action; 
      const { components } = state.value;
      const insertComponent = {
        id: v4(),
        name: componentProps.name,
        props: componentProps,
        layerName: `图层${components.length + 1}`
      }
      const newComponents = [...components, insertComponent];
      state.value = {...state.value, components: newComponents};
    },
    setActive: (state, action) => {
      state.value = {...state.value, currentElement: action.payload};
    }
  }
});

export const { addItem, setActive } = userSlice.actions;

const editorReducer = userSlice.reducer;

export default editorReducer;

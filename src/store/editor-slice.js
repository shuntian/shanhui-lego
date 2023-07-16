import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const initState = {
  components: [],
  currentElementId: '',
  page: {
    props: { 
      backgroundColor: '#ffffff', 
      backgroundImage: '', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      height: '560px' 
    },
    title: 'test title',
  }
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
      state.value = {...state.value, currentElementId: action.payload};
    },
    updateItem: (state, action) => {
      const { currentElementId, components } = state.value;
      const newComponents = components.map(item => {
        if (item.id === currentElementId) {
          const { key, value } = action.payload;
          if (Array.isArray(key) && Array.isArray(value)) {
            key.forEach((keyName, index) => {
              item.props[keyName] = value[index];
            });
          } else if (typeof key === 'string' && typeof value === 'string') {
            item.props[key] = value;
          }
          return item
        }
        return item;
      });
      state.value = {...state.value, components: newComponents};
    },
    updatePage: (state, action) => {
      const { key, value } = action.payload;
      const { page } = state.value;

      const props = { ...page.props, [key]: value };
      console.log(props);
      const newPage = {...page, props: props};
      state.value = {...state.value, page: newPage};
    }
  }
});

export const { addItem, setActive, updateItem, updatePage } = userSlice.actions;

const editorReducer = userSlice.reducer;

export default editorReducer;

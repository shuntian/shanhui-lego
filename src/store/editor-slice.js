import { createSlice } from "@reduxjs/toolkit";

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
      const { components } = state.value;
      const { payload: insertComponent } = action; 
      insertComponent.layerName = `图层${components.length + 1}`
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
    updateItemByElementId: (state, action) => {
      const { components } = state.value;
      const { id, key, value } = action.payload;
      const newComponents = components.map(item => {
        if (item.id === id) {
          item[key] = value;
          return item
        }
        return item;
      });
      state.value = {...state.value, components: newComponents};
    },
    updatePosition: (state, action) => {
      const { components } = state.value;
      const { id, top, left } = action.payload;
      const newComponents = components.map(item => {
        if (item.id === id) {
          item.props['top'] = top;
          item.props['left'] = left;
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
      const newPage = {...page, props: props};
      state.value = {...state.value, page: newPage};
    }
  }
});

export const { addItem, setActive, updateItem, updateItemByElementId, updatePosition, updatePage } = userSlice.actions;

const editorReducer = userSlice.reducer;

export default editorReducer;

import { createSlice } from "@reduxjs/toolkit";
import { arrayMoveImmutable, arrayMoveMutable } from 'array-move';
import { constant } from "lodash-es";

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
      const { id, top, left, width, height } = action.payload;
      const newComponents = components.map(item => {
        if (item.id === id) {
          if (top || top === 0) {
            item.props['top'] = top + 'px';
          }
          if (left || left === 0) {
            item.props['left'] = left + 'px';
          }
          if (width || width === 0) {
            item.props['width'] = width + 'px';
          }
          if (height || height === 0) {
            item.props['height'] = height + 'px';
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
      const newPage = {...page, props: props};
      state.value = {...state.value, page: newPage};
    },
    updateComponentsSort: (state, action) => {
      const { components } = state.value;
      const { sourceIndex, targetIndex } = action.payload;
      const newComponents = arrayMoveImmutable(components, sourceIndex, targetIndex);
      state.value = {...state.value, components: newComponents};
    }
  }
});

export const { addItem, setActive, updateItem, updateItemByElementId, updatePosition, updatePage, updateComponentsSort } = userSlice.actions;

const editorReducer = userSlice.reducer;

export default editorReducer;

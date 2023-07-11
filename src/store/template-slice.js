import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    value: new Array(10).fill(1),
  },
  reducers: {
    listTemplates: (state) => {
      state.value = new Array(20).fill(2);
    },
    insertTemplate: (state, action) => {
      state.value = [state.value, action.payload];
    },
    deleteTemplate: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter(item => item.id !== id);
    },
    updateTemplate: (state, action) => {
      state.value = state.value.map(item => {
        const { id, newTemplate } = action.payload;
        if (item.id === id) {
          item = newTemplate;
        }
        return item;
      });
    }
  }
});

export const insertTemplateAsync = (template) => (dispatch) => {
  setTimeout(() => {
    dispatch(insertTemplate(template));
  }, 1000);
}

export const { listTemplates, insertTemplate, deleteTemplate, updateTemplate } = templateSlice.actions;
const templateReducer = templateSlice.reducer;
export default templateReducer;
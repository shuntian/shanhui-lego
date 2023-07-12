import { createSlice } from "@reduxjs/toolkit";

const templates = [
  {
    "_id": "61a739f38d5263ce811e7064",
    "id": 18,
    "title": "前端架构师直播海报",
    "desc": "未命名作品",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    "copiedCount": 2036,
    "isHot": true,
    "createdAt": "2020-11-18T05:47:04.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f38d5263ce811e7065",
    "id": 19,
    "title": "1024 程序员日",
    "desc": "1024 程序员日",
    "author": "185****2625",
    "coverImg": "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    "copiedCount": 1458,
    "isHot": true,
    "createdAt": "2020-11-26T09:27:19.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e7066",
    "id": 20,
    "title": "招聘-慕课乐高",
    "desc": "招聘广告页",
    "author": "185****2625",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-323204.png",
    "copiedCount": 703,
    "isHot": false,
    "createdAt": "2020-11-25T07:37:23.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e7067",
    "id": 21,
    "title": "未命名作品",
    "desc": "未命名作品",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    "copiedCount": 385,
    "isHot": false,
    "createdAt": "2020-11-23T06:24:17.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e7069",
    "id": 23,
    "title": "慕课资讯",
    "desc": "程序员的早读时间",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-726751.png",
    "copiedCount": 301,
    "isHot": false,
    "createdAt": "2020-11-18T14:48:36.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e706a",
    "id": 24,
    "title": "每日分享",
    "desc": "每日分享卡片",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
    "copiedCount": 243,
    "isHot": false,
    "createdAt": "2020-11-18T14:41:17.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e7068",
    "id": 22,
    "title": "慕课 Live Java 入门编程课",
    "desc": "慕课 Live 只需3天 每天1.5 小时 0 基础新人 Java 入门编程课",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-133701.png",
    "copiedCount": 176,
    "isHot": false,
    "createdAt": "2020-11-21T09:28:24.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  },
  {
    "_id": "61a739f48d5263ce811e706b",
    "id": 25,
    "title": "慕课 Live",
    "desc": "这是慕课 live 如何搭建一套混合移动应用架构的海报",
    "author": "136****5632",
    "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-649919.png",
    "copiedCount": 109,
    "isHot": false,
    "createdAt": "2020-11-18T12:36:49.000Z",
    "user": {
        "_id": "617d33bed38dbc5025755a8b",
        "username": "13611915632",
        "nickName": "乐高5632"
    }
  }
];

export const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    value: templates,
  },
  reducers: {
    listTemplates: (state) => {
      state.value = templates;
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
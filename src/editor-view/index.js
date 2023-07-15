import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Editor from './views/editor'
import EditorHeader from './views/header'
import PartList from './views/part-list'
import PropertiesSetting from './views/properties'
import { addItem } from '../store/editor-slice'

import './style.css';

export default function EditorView() {
  const dispatch = useDispatch();
  const onItemClick = useCallback((item) => {
    dispatch(addItem(item));
  }, [dispatch]);

  return (
    <div className='editor-view-container'>
      <EditorHeader className='editor-view-header' />
      <div className='editor-view-content'>
        <PartList onItemClick={onItemClick} />
        <Editor />
        <PropertiesSetting />
      </div>
    </div>
  )
}

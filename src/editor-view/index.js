import React from 'react'
import Editor from './views/editor'
import EditorHeader from './views/header'
import PartList from './views/part-list'
import PropertiesSetting from './views/properties'

import './style.css';

export default function EditorView() {

  return (
    <div className='editor-view-container'>
      <EditorHeader className='editor-view-header' />
      <div className='editor-view-content'>
        <PartList />
        <Editor />
        <PropertiesSetting />
      </div>
    </div>
  )
}

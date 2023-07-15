import { Content } from 'antd/es/layout/layout'
import React from 'react'
import Editor from './editor'
import EditorHeader from './header'
import PartList from './part-list'
import PropertiesSetting from './properties'

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

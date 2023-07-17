import React from 'react'
import { useSelector } from 'react-redux'
import LayerItem from './layer-item';

import './style.css';

export default function LayerSettings() {
  const editor = useSelector(state => state.editor.value);
  const { components } = editor;

  return (
    <div className='layer-setting-container'>
      <ul className='layer-list'>
        {components.map(item => {
          return <LayerItem key={item.id} item={item} />
        })}
      </ul>
    </div>
  )
}

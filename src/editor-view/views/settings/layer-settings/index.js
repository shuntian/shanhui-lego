import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { arrayMoveMutable } from 'array-move';
import { getParentElement } from '../../../utils';
import LayerItem from './layer-item';

import './style.css';
import { updateComponentsSort } from '../../../../store/editor-slice';

export default function LayerSettings() {
  const editor = useSelector(state => state.editor.value);
  const { components } = editor;

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const dispatch = useDispatch();
  const handleDrop = (event) => {
    const currentLi = getParentElement(event.target, 'layer-list-item');
    if (currentLi?.dataset.index) {
      const targetIndex = parseInt(currentLi.dataset.index);
      const sourceIndex = event.dataTransfer.getData('index');
      dispatch(updateComponentsSort({ sourceIndex, targetIndex }));
    }
  }

  return (
    <div className='layer-setting-container'>
      <ul 
        className='layer-list'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {components.map((item, index) => {
          return <LayerItem key={item.id} index={index} item={item} />
        })}
      </ul>
    </div>
  )
}

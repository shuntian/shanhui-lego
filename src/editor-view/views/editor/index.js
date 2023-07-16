import React from 'react'
import { useSelector } from 'react-redux';
import LText from '../../parts/LText';
import PartWrapper from '../../parts/PartWrapper';

import './style.css';

export default function Editor() {
  const editor = useSelector(state => state.editor.value);
  const { components, page } = editor;

  return (
    <div className='editor-wrapper'>
      <div className='editor'>
        <p>画布区域</p>
        <div className='history-list'></div>
        <div className='preview-list' id="canvas-area">
          <div className='body-container' style={page.props}>
            {components && components.map(item => {
              return (
                <PartWrapper 
                  key={item.id} 
                  item={item}
                >
                  <LText {...item.props}/>
                </PartWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import './style.css';

export default function Editor() {
  return (
    <div className='editor-wrapper'>
      <div className='editor'>
        <p>画布区域</p>
        <div className='history-list'></div>
        <div className='preview-list' id="canvas-area">
          <div className='body-container' style={{height: '560px'}}>
          </div>
        </div>
      </div>
    </div>
  )
}

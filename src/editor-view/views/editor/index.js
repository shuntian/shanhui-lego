import React from 'react'
import { useSelector } from 'react-redux';
import LText from '../../parts/LText';
import LImage from '../../parts/LImage';
import PartWrapper from '../../parts/PartWrapper';

import './style.css';

export default function Editor() {
  const editor = useSelector(state => state.editor.value);
  const { components, page } = editor;

  const pageStyle = {
    ...page.props,
    ...(page.props['backgroundImage'] && {backgroundImage: `url(${page.props['backgroundImage']})`})
  }
  return (
    <div className='editor-wrapper'>
      <div className='editor'>
        <p>画布区域</p>
        <div className='history-list'></div>
        <div className='preview-list' id="canvas-area">
          <div className='body-container' style={pageStyle}>
            {components && components.map(item => {
              if (item.isHidden) return null;
              if (item.name === 'l-text') {
                return (
                  <PartWrapper 
                    key={item.id} 
                    item={item}
                  >
                    <LText {...item.props}/>
                  </PartWrapper>
                );
              }
              if (item.name === 'l-image') {
                return (
                  <PartWrapper 
                    key={item.id} 
                    item={item}
                  >
                    <LImage props={item.props}/>
                  </PartWrapper>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

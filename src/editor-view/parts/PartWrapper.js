import React, { useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { pick } from 'lodash-es';
import { setActive, updatePosition } from '../../store/editor-slice';

import './part-wrapper.css';

const calculateSize = (direction, e, position) => {
  const { clientX, clientY } = e;
  const { left, right, top, bottom } = position;
  const container = document.getElementById('canvas-area');
  const rightWidth = clientX - left;
  const leftWidth = right - clientX;
  const bottomHeight = clientY - top;
  const topHeight = bottom - clientY;
  const topOffset = clientY - container.offsetTop + container.scrollTop;
  const leftOffset = clientX - container.offsetLeft;
  switch(direction) {
    case 'top-left': {
      return {
        width: leftWidth,
        height: topHeight,
        top: topOffset,
        left: leftOffset,
      }
    }
    case 'top-right': {
      return {
        width: rightWidth,
        height: topHeight,
        top: topOffset,
      };
    }
    case 'bottom-left': {
      return {
        width: leftWidth,
        height: bottomHeight,
        left: leftOffset
      };
    }
    case 'bottom-right': {
      return {
        width: rightWidth,
        height: bottomHeight,
      }
    }
    default:
      break;
  }
}

export default function PartWrapper({children, item}) {
  const editor = useSelector(state => state.editor.value);
  const { currentElementId } = editor;
  let isMoving = false;
  let gap = {
    x: 0,
    y: 0
  };

  const dispatch = useDispatch();
  const onWrapperClick = useCallback(() => {
    dispatch(setActive(item.id));
  }, [dispatch, item]);

  const isActive = useMemo(() => {
    return currentElementId === item.id;
  }, [currentElementId, item])

  const className = useMemo(() => {
    return classnames('part-wrapper',{
      active: isActive,
      hidden: item.isHidden 
    });
  }, [isActive, item.isHidden]);

  const style = useMemo(() => {
    return pick(item.props, ['position', 'top', 'left', 'width', 'height'])
  }, [item.props])

  const calculateMovePosition = (e) => {
    const container = document.getElementById('canvas-area');
    const left = e.clientX - gap.x - container.offsetLeft;
    const top = e.clientY - gap.y - container.offsetTop + container.scrollTop;
    return {
      left,
      top
    };
  }

  const wrapperRef = useRef(null);
  const startMove = useCallback((e) => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      const { top, left } = wrapperElement.getBoundingClientRect();
      gap.x = e.clientX - left;
      gap.y = e.clientY - top;
    }

    const handleMove = (e) => {
      const { left, top } = calculateMovePosition(e);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isMoving = true;
      if (wrapperElement) {
        wrapperElement.style.top = top + 'px';
        wrapperElement.style.left = left + 'px';
      }
    }

    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMove);
      if (isMoving) {
        const { left, top } = calculateMovePosition(e);
        dispatch(updatePosition({id: item.id, top, left}));
        isMoving = false;
      }
      document.removeEventListener('mouseup', handleMouseUp);
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [])

  const startResize = useCallback((e, direction) => {
    e.stopPropagation();
    const wrapperElement = wrapperRef.current;
    const { left, right, top, bottom } = wrapperElement.getBoundingClientRect();

    const handleMove = (e) => {
      const size = calculateSize(direction, e, { left, right, top, bottom });
      const { style } = wrapperElement;
      if (size) {
        style.width = size.width + 'px';
        style.height = size.height + 'px';
        if (size.left) {
          style.left = size.left + 'px';
        }
        if (size.top) {
          style.top = size.top + 'px';
        }
      }
    } 
    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMove);
      const size = calculateSize(direction, e, { left, right, top, bottom});
      dispatch(updatePosition({id: currentElementId, ...size}));
      setTimeout(() => {
        document.removeEventListener('mouseup', handleMouseUp);
      }, 100);
    }
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [currentElementId, dispatch]);
    
  return (
    <div 
      ref={wrapperRef}
      style={style}
      className={className}
      onClick={onWrapperClick}
      onMouseDown={startMove}
    >
      <div className='move-wrapper'>
        {children}
      </div>
      <div className='resizers'>
        <div className='resizer top-left' onMouseDown={(e) => startResize(e, 'top-left')}></div>
        <div className='resizer top-right' onMouseDown={(e) => startResize(e, 'top-right')}></div>
        <div className='resizer bottom-left' onMouseDown={(e) => startResize(e, 'bottom-left')}></div>
        <div className='resizer bottom-right' onMouseDown={(e) => startResize(e, 'bottom-right')}></div>
      </div>
    </div>
  )
}

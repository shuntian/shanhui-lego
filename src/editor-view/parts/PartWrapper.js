import React, { useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { pick } from 'lodash-es';
import { setActive, updatePosition } from '../../store/editor-slice';

import './part-wrapper.css';

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
        dispatch(updatePosition({id: currentElementId, top, left}));
        isMoving = false;
      }
      setTimeout(() => {
        document.removeEventListener('mouseup', handleMouseUp);
      }, 100);
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [])
    
  return (
    <div 
      ref={wrapperRef}
      style={style}
      className={className}
      onClick={onWrapperClick}
      onMouseDown={startMove}
    >
      {children}
    </div>
  )
}

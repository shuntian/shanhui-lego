import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { setActive } from '../../store/editor-slice';

export default function PartWrapper({children, item}) {
  const editor = useSelector(state => state.editor.value);
  const { currentElementId } = editor;

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
    
  return (
    <div 
      className={className}
      onClick={onWrapperClick}
    >
      {children}
    </div>
  )
}

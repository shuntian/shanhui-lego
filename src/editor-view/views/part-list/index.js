import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/editor-slice';
import { textTemplates } from '../../config/parts-config'
import LText from '../../parts/LText'


export default function PartList() {

  const dispatch = useDispatch();
  const onItemClick = useCallback((item) => {
    dispatch(addItem(item));
  }, [dispatch]);

  return (
    <div className='parts-container'>
      {textTemplates.map((item, index) => {
        return (
          <div key={index} onClick={() => onItemClick(item)}>
            <LText {...item}></LText>
          </div>
        )
      })}
    </div>
  )
}

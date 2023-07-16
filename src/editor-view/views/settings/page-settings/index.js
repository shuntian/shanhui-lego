import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePage } from '../../../../store/editor-slice';
import PropertyGroup from '../property-settings/property-group'

import './style.css';

export default function PageSettings() {
  const editor = useSelector((state) => state.editor.value);
  const { page } = editor;

  const dispatch = useDispatch();
  const updatePropItem = useCallback((e) => {
    dispatch(updatePage(e))
  }, [dispatch])

  return (
    <div className='page-setting-container'>
      <PropertyGroup props={page.props} updatePropItem={updatePropItem}/>
    </div>
  )
}

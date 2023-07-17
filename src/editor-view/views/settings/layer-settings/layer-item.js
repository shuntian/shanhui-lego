import { DragOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { updateItemByElementId } from '../../../../store/editor-slice';
import InlineEditor from './inline-editor';

export default function LayerItem({item}) {

  const dispatch = useDispatch();
  const handleHiddenChange = useCallback(() => {
    dispatch(updateItemByElementId({id: item.id, key: 'isHidden', value: !item.isHidden}));
  }, [dispatch, item.id, item.isHidden]);
  
  const handleLockedChange = useCallback(() => {
    dispatch(updateItemByElementId({id: item.id, key: 'isLocked', value: !item.isLocked}));
  }, [dispatch, item.id, item.isLocked]);
  
  const onLayerChanged = useCallback((value) => {
    dispatch(updateItemByElementId({id: item.id, key: 'layerName', value}));
  }, [dispatch, item.id])
  
  return (
    <li className='layer-item'>
      <Tooltip title={item.isHidden ? '显示' : '隐藏'}>
        <Button type='default' shape='circle' onClick={handleHiddenChange}>
          {item.isHidden ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </Button>
      </Tooltip>
      <Tooltip title={item.isLocked ? '解锁' : '锁定'}>
        <Button type='default' shape='circle' onClick={handleLockedChange}>
          {item.isHidden ? <UnlockOutlined /> : <LockOutlined />}
        </Button>
      </Tooltip>
      <InlineEditor value={item.layerName} onValueChanged={onLayerChanged}/>
      <Tooltip title={'拖动排序'}>
        <Button type='default' shape='circle' className='handle'>
          <DragOutlined />
        </Button>
      </Tooltip>
    </li>
  )
}

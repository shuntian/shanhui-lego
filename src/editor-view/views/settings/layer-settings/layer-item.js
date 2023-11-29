import { DragOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import classNames from 'classnames';
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setActive, updateItemByElementId } from '../../../../store/editor-slice';
import { useCurrentElement } from '../../../hooks/use-current-element';
import InlineEditor from './inline-editor';

export default function LayerItem({item, index}) {

  const currentElement = useCurrentElement();

  const [dragItemId, setDragItemId] = useState('');

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
  
  const onLayerClick = useCallback(() => {
    dispatch(setActive(item.id));
  }, [dispatch, item.id])

  const onDragStart = (event, id, index) => {
    setDragItemId(id);
    event.dataTransfer.setData('index', index);
  }

  const onDragEnd = (event) => {
    setDragItemId('');
  }

  const className = classNames(
    'layer-list-item', 
    { 'active': currentElement?.id === item.id },
    { 'ghost':  dragItemId === item.id}
  );
  
  return (
    <li 
      className={className} 
      data-index={index}
      onClick={onLayerClick} 
      draggable="true" 
      onDragStart={(event) => onDragStart(event, item.id, index)}
      onDragEnd={onDragEnd}
    >
      <Tooltip title={item.isHidden ? '显示' : '隐藏'}>
        <Button type='default' shape='circle' onClick={handleHiddenChange}>
          {item.isHidden ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </Button>
      </Tooltip>
      <Tooltip title={item.isLocked ? '解锁' : '锁定'}>
        <Button type='default' shape='circle' onClick={handleLockedChange}>
          {item.isLocked ? <UnlockOutlined /> : <LockOutlined />}
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

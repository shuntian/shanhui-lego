import { Collapse, Empty } from 'antd';
import { difference } from 'lodash-es';
import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { updateItem } from '../../../../store/editor-slice';
import { defaultEditGroups } from '../../../config/style-config';
import { useCurrentElement } from '../../../hooks/use-current-element';
import PropertyGroup from './property-group';

import './style.css';

export default function PropertySettings() {

  const dispatch = useDispatch();
  const updatePropItem = useCallback((e) => {
    dispatch(updateItem(e))
  }, [dispatch]);
  
  const currentElement = useCurrentElement();
  const editGroups = useMemo(() => {
    if (!currentElement) return [];
    const normalProps = defaultEditGroups.reduce((prev, current) => {
      return [...prev, ...current.items];
    }, []);
  
    const specialProps = difference(Object.keys(currentElement?.props), normalProps);
  
    const newGroups = [
      {
        text: '基本属性',
        items: specialProps,
      },
      ...defaultEditGroups,
    ];

    return newGroups.map(group => {
      const propsMap = {};
      group.items.forEach(item => {
        const key = item;
        propsMap[key] = currentElement.props[key];
      })
      return {
        ...group,
        props: propsMap
      };
    });
  }, [currentElement]);

  const items = useMemo(() => {
    return editGroups.map(group => {
      return {
        key: group.text,
        label: group.text,
        children: <PropertyGroup props={group.props} updatePropItem={updatePropItem} />
      };
    })
  }, [editGroups, updatePropItem]);

  const onChange = useCallback((key) => {
    console.log(key);
  }, []);

  return (
    <div className='props-container'>
      {!currentElement && <Empty description="在画布中选择元素并开始编辑"/>}
      {currentElement && (
        <Collapse accordion onChange={onChange} items={items} />
      )}
    </div>
  )
}

import { Tabs } from 'antd'
import React, { useCallback, useState } from 'react'
import LayerSettings from './layer-settings';
import PageSettings from './page-settings';
import PropertySettings from './property-settings';

import './style.css';

const items = [
  {
    key: 'property',
    label: '属性设置',
    children: <PropertySettings />
  },
  {
    key: 'layer',
    label: '图层设置',
    children: <LayerSettings />
  },
  {
    key: 'page',
    label: '页面设置',
    children: <PageSettings />
  }
];

export default function Settings() {
  const [active, setActive] = useState('property');

  const onChange = useCallback((key) => {
    setActive(key);
  }, []);

  return (
    <div className='settings-container'>
      <Tabs type='card' defaultActiveKey={active} items={items} onChange={onChange}/>
    </div>
  );

}

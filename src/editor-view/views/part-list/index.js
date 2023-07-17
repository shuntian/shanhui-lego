import { BuildOutlined, FieldStringOutlined, FileImageOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { useCallback, useState } from 'react'
import ImageParts from './image-parts'
import ShapeParts from './shape-parts'
import TextParts from './text-parts'

const items = [
  {
    key: 'text',
    label: (
      <>
        <FieldStringOutlined />
        文本
      </>
    ),
    children: <TextParts />
  },
  {
    key: 'image',
    label: (
      <>
        <FileImageOutlined />
        图片
      </>
    ),
    children: <ImageParts />
  },
  {
    key: 'shape',
    label: (
      <>
        <BuildOutlined />
        形状
      </>
    ),
    children: <ShapeParts />
  }
];

export default function PartList() {
  const [active, setActive] = useState('text-parts');

  const onChange = useCallback((key) => {
    setActive(key);
  }, []);

  return (
    <div className='parts-container' style={{padding: '20px'}}>
      <Tabs defaultActiveKey={active} items={items} onChange={onChange}/>
    </div>
  );

}

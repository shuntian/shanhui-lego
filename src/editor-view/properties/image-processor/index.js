import { ScissorOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { StyleUploader } from '../../../components/uploader'

import './index.css';

export default function ImageProcess({ value }) {
  const style = {
    backgroundImage: "url(" +  value + ")"
  };
  return (
    <div className='image-processor'>
      <div className='image-preview' style={style}></div>
      <div className='image-process'>
        <StyleUploader />
        <Button icon={<ScissorOutlined />}>剪裁图片</Button>
        {/* <Button danger icon={<DeleteOutlined />}>删除图片</Button> */}
      </div>
    </div>
  )
}

import React from 'react'
import { StyleUploader } from '../../../components/uploader'
import ImageModal from './image-modal';

import './index.css';

export default function ImageProcess(props) {
  const style = {
    backgroundImage: "url(" +  props.value + ")"
  };
  return (
    <div className='image-processor'>
      <div className='image-preview' style={style}></div>
      <div className='image-process'>
        <StyleUploader {...props} />
        <ImageModal {...props} />
        {/* <Button danger icon={<DeleteOutlined />}>删除图片</Button> */}
      </div>
    </div>
  )
}

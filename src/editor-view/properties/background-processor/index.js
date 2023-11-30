import React from 'react'
import { StyleUploader } from '../../../components/uploader';
import ImageProcess from '../image-processor';

export default function BackgroundProcessor(props) {
  const { value } = props;
  return (
    <div className='background-processor'>
      {!value && <StyleUploader {...props}/>}
      {value && <ImageProcess {...props}/>}
    </div>
  )
}

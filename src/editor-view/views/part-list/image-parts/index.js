import { message } from 'antd';
import { imageDefaultProps } from 'lego-bricks';
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import Uploader from '../../../../components/uploader'
import { addItem } from '../../../../store/editor-slice';

import './style.css';

const getImageDimensions = (fileOrUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = typeof fileOrUrl === 'string' ? fileOrUrl : URL.createObjectURL(fileOrUrl.raw);
    img.addEventListener('load', () => {
      const { naturalWidth: width, naturalHeight: height } = img;
      resolve({ width, height });
    })
    img.addEventListener('error', () => {
      reject(new Error('There was some problem with the image.'))
    })
  });
}

export default function ImageParts() {

  const dispatch = useDispatch();
  const onFileUploadSuccess = useCallback(({ resp, file }) => {
    const insertComponent = {
      id: v4(),
      name: 'l-image',
      props: {
        ...imageDefaultProps
      },
    }
    message.success('上传成功')
    insertComponent.props.src = resp.data.urls[0];
    getImageDimensions(file).then(({ width }) => {
      const maxWidth = 375;
      insertComponent.props.width = (width > maxWidth ? maxWidth : width) + 'px';
      dispatch(addItem(insertComponent));
    })
  }, [dispatch]);

  const onFileUploadFailed = () => {

  }
  
  return (
    <div className='image-parts'>
      <div className='file-uploader-container'>
        <Uploader
          action="/api/v1/utils/uploader/"
          autoUpload={true}
          listType={'picture'}
          isShowPreviewList={true}
          onFileUploadSuccess={onFileUploadSuccess}
          onFileUploadFailed={onFileUploadFailed}
        />
      </div>
      <div className='default-images'>

      </div>
    </div>
  )
}

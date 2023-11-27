import React from 'react'
import Uploader from './Uploader'

export default function StyleUploader() {

  const onFileUploadSuccess = () => {

  };

  return (
    <Uploader
      className="style-uploader"
      action="/api/v1/utils/uploader/"
      autoUpload={true}
      onFileUploadSuccess={onFileUploadSuccess}
      buttonType={'default'}
    >
    </Uploader>
  )
}

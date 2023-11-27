import { message } from 'antd';
import React, { useCallback } from 'react'
import Uploader from './Uploader'

export default function StyleUploader(props) {

  const onFileUploadSuccess = useCallback(({ resp, file }) => {
    message.success('更新成功')
    const { onChange } = props;
    onChange(resp.data.urls[0]);
  }, [props]);

  return (
    <Uploader
      className="style-uploader"
      action="/api/v1/utils/uploader/"
      autoUpload={true}
      onFileUploadSuccess={onFileUploadSuccess}
      onFileUploadFailed={() => {}}
      buttonType={'default'}
    >
    </Uploader>
  )
}

import { DeleteOutlined, FileOutlined, LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import { UPLOADER_STATE } from '.'

export default function PreviewItem({item, listType, removeFile}) {
  return (
    <li className='preview-list-item'>
      {listType === 'picture' && item.url && (
        <img width="48" src={item.url} alt={item.name} />
      )}
      {item.status === UPLOADER_STATE.LOADING && (
        <span className='file-icon'>
          <LoadingOutlined />
        </span>
      )}
      {item.status === UPLOADER_STATE.LOADING && (
        <span className='file-icon'>
          <FileOutlined />
        </span>
      )}
      <span>{item.name}</span>
      <span className='delete-icon' onClick={() => removeFile(item.uid)}>
        <DeleteOutlined />
      </span>
    </li>
  )
}

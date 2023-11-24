import { Button, Input } from 'antd'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import PreviewItem from './preview-item';
import { v4 } from 'uuid';
import axios from 'axios';

import './style.css';

export const UPLOADER_STATE = {
  READY: 'ready',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const propTypes = {
  isShowPreviewList: PropTypes.bool,
  autoUpload: PropTypes.bool,
  action: PropTypes.string,
  listType: PropTypes.string,
  beforeUpload: PropTypes.func,
  onFileUploadSuccess: PropTypes.func,
  onFileUploadFailed: PropTypes.func,
};

export default function Uploader({ 
  isShowPreviewList, 
  listType, 
  action, 
  autoUpload = true, 
  beforeUpload, 
  onFileUploadSuccess, 
  onFileUploadFailed
}) {

  const inputRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onUploaderClick = useCallback(() => {
    inputRef.current.input.click();
  }, []);

  const postFile = useCallback((readyFile) => {
    const formData = new FormData();
    formData.append('file_name', readyFile.name);
    formData.append('file', readyFile.raw);
    readyFile.status = UPLOADER_STATE.LOADING;
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(resp => {
      readyFile.status = UPLOADER_STATE.SUCCESS;
      readyFile.resp = resp.data;
      onFileUploadSuccess({ resp: resp.data, file: readyFile });
    }).catch(error => {
      readyFile.status = UPLOADER_STATE.ERROR;
      onFileUploadFailed({ error, file: readyFile });
    }).finally(() => {
      if (inputRef.current.value) {
        inputRef.current.value = '';
      }
    })
  }, [action, onFileUploadFailed, onFileUploadSuccess])

  const addFileToList = useCallback((uploadFile) => {
    let fileObj = {
      uid: v4(),
      size: uploadFile.size,
      name: uploadFile.name,
      status: UPLOADER_STATE.READY,
      raw: uploadFile,
    };

    if (listType === 'picture') {
      try {
        fileObj.url = URL.createObjectURL(uploadFile);
      } catch (err) {
        console.log('upload file error', err);
      }
    }

    const newFileList = [...fileList, fileObj];
    setFileList(newFileList);

    if (autoUpload) {
      postFile(fileObj);
    }
  }, [autoUpload, fileList, listType, postFile]);

  const beforeUploaderCheck = useCallback((files) => {
    if (files) {
      const uploadFile = files[0];
      const result = beforeUpload && beforeUpload(uploadFile);
      if (result && result instanceof Promise) {
        result.then(processFile => {
          if (processFile instanceof File) {
            addFileToList(processFile);
          } else {
            throw new Error('beforeUpload Promise should return File object')
          }
        }).catch(error => {
          console.log(error);
        })
      } else if (result === true) {
        addFileToList(uploadFile);
      } else {
        addFileToList(uploadFile);
      }
    }
  }, [addFileToList, beforeUpload]);

  const onFileChange = useCallback((e) => {
    const target = e.target;
    beforeUploaderCheck(target.files);
  }, [beforeUploaderCheck]);


  const isUploading = useMemo(() => {
    return fileList.some(item => item.status === UPLOADER_STATE.LOADING);
  }, [fileList]);

  const removeFile = useCallback((fileUid) => {
    const newFileList = fileList.filter(item => item.uid !== fileUid);
    setFileList(newFileList);
  }, [fileList]);

  return (
    <div className='image-uploader'>
      <div className='uploader-area' onClick={onUploaderClick}>
        <Button 
          type='primary'
          disabled={isUploading}
        >
          {isUploading ? '正在上传' : '点击上传'}
        </Button>
        <Input ref={inputRef} type="file" style={{display: 'none'}} onChange={onFileChange} />
      </div>
      {isShowPreviewList && (
        <ul className='preview-list'>
          {fileList.map(item => {
            return <PreviewItem key={item.uid} item={item} listType={listType} removeFile={removeFile} />
          })}
        </ul>
      )}
    </div>
  )
}

Uploader.propTypes = propTypes;

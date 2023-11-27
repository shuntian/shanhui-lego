import React, { useRef, useState } from 'react';
import { Button, Modal } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';
import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css';

const ImageModal = ({ value, onChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cropperRef = useRef();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCrop = (event) => {
    const cropper = cropperRef.current?.cropper;
    console.log(event);
  }

  return (
    <>
      <Button icon={<ScissorOutlined />} onClick={showModal}>剪裁图片</Button>
      <Modal 
        title="Basic Modal" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="1" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="2" type="primary" onClick={handleOk}>
            确定
          </Button>,
        ]}
      >
        <Cropper 
          ref={cropperRef}
          src={value}
          style={{ height: 400, width: '100%' }}
          viewMode={2}
          initialAspectRatio={ 16 / 9 }
          guides={true}
          crop={onCrop}
          checkOrientation={false}
          className="image-cropper"
          minCropBoxHeight={10}
          minCropBoxWidth={10}
        />
      </Modal>
    </>
  );
};
export default ImageModal;
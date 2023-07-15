import { LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, message, Radio, Upload } from 'antd'
import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../../../components/wrapper'

import './style.css';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};


const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


export default function PersonalInfo() {
  const user = useSelector(state => state.user.value);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

  const onFinish = useCallback((values) => {
    console.log('Success: ', values);
  }, []);
  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, []);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Wrapper>
      <div className='personal-info'>
        <div className='avatar'>
          <div>你可以在这里修改昵称和头像</div>
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </div>
        <div className='form'>
          <Form 
            layout='vertical' 
            style={{minWidth: 400}}
            initialValues={{
              nickName: user.username,
              gender: 1
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="昵称" className='nick-name' name="nickName" rules={[{required: true}]}>
              <Input value={user.name} prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="性别" className='gender' name="gender" rules={[{ required: true }]}>
              <Radio.Group defaultValue="0" size="large">
                <Radio.Button value="0">男</Radio.Button>
                <Radio.Button value="1">女</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>更新个人资料</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Wrapper>
  )
}

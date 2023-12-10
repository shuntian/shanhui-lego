import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginApp } from '../../store/user-slice';


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value)

  useEffect(() => {
    if (user.isLogin) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFinish = useCallback((values) => {
    dispatch(loginApp(values)).then((data) => {
      if (data.errno === 0) {
        message.success('登陆成功, 2s后跳转');
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    }).catch(err => {
      message.error('登陆出错');
    });
  }, [dispatch, navigate]);

  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        {' '}
        <Button type="default" htmlType="submit">
          发送验证码
        </Button>
  
      </Form.Item>
    </Form>
  );
}
export default LoginForm;
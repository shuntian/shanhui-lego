import Layout, { Content } from 'antd/es/layout/layout'
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../../assets/imgs/logo2.png';
import LoginForm from './login-form';

import './style.css';

export default function Login() {
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  
  useLayoutEffect(() => {
    if (user.isLogin) {
      navigate('/')
    }
  }, [navigate, user])
  
  return (
    <Layout className='app single-page'>
      <Content className='login-container'>
        <div className='login-left'>
          <img className='login-left__img' src={logo} alt="img"></img>
          <h2 className='login-left__title'>这是我用过的最好的建站工具</h2>
          <div className='login-left__message'>山水, Google</div>
        </div>
        <div className='login-right'>
          <div className='login-right__title'>
            <h2>欢迎回来~</h2>
            <div>使用手机号码和验证码登陆到乐高</div>
          </div>
          <LoginForm />
        </div>
      </Content>
    </Layout>
  )
}

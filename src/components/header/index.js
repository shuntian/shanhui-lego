import { Button, Dropdown } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/imgs/logo2.png'
import { logout } from '../../store/user-slice'

import './style.css';

const items = [
  {
    key: 'user-setting',
    label: '个人设置',
  },
  {
    key: 'logout',
    label: '登出',
  },
]

export default function LegoHeader() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const onMenuClick = useCallback((e) => {
    if (e.key === 'logout') {
      dispatch(logout)
      nav('/login')
    }
    if (e.key === 'user-setting') {
      nav('/settings');
    }
  }, [dispatch, nav]);

  const onCreateTemplate = () => {
    const id = (Math.random() * 10000).toFixed(0);
    nav(`/editor/${id}`);
  }

  return (
    <Header className='lego-header'>
      <Link className='page-title__logo' to="/">
        <img src={logo} alt="img"></img>
      </Link>
      <div className='header-right'>
        {user.isLogin && (
          <>
            <Button className='button-item' type='primary' onClick={onCreateTemplate}>创建作品</Button>
            <Link className='button-item' to='/works'><Button type="primary">我的作品</Button></Link>
            <Dropdown.Button menu={{ items, onClick: onMenuClick }}>{user.username}</Dropdown.Button>
          </>
        )}
        {!user.isLogin && (
          <Link to="/login">
            <Button type='primary'>登陆</Button>
          </Link>
        )}
      </div>
    </Header>
  )
}

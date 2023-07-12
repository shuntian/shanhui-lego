import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <Layout className='app'>
      <Header className='page-title'>
        <Link to="/">乐高</Link>
        <Link to="/login">登陆</Link>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  )
}

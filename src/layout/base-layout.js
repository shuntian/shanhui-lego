import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import LegoFooter from '../components/footer'
import LegoHeader from '../components/header'

export default function BaseLayout() {
  return (
    <Layout className='app'>
      <LegoHeader />
      <Content>
        <Outlet />
      </Content>
      <LegoFooter />
    </Layout>
  )
}

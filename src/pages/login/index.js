import Layout, { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Link } from 'react-router-dom'

const siderStyle = {
  flex: 1,
  backgroundColor: '#3b0e9'
}

const contentStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
}

export default function Login() {
  return (
    <Layout>
      <Sider>image</Sider>
      <Content style={contentStyle}>
        <Link to="/templates">login</Link>
      </Content>
    </Layout>
  )
}

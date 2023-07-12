import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

const headerStyle = {
  backgroundColor: '#999'
};

const partsStyle = {
  backgroundColor: '#fff'
}

const contentStyle = {
  padding: '20px',
};

const propStyle = {
  backgroundColor: '#fff'
};

export default function Editor() {
  return (
    <Layout>
      <Header style={headerStyle}>
        header
      </Header>
      <Layout>
        <Sider style={partsStyle}>parts</Sider>
        <Content style={contentStyle}>canvas</Content>
        <Sider style={propStyle}>properties</Sider>
      </Layout>
    </Layout>
  )
}

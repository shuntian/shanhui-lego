import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#999'
};


const footerStyle = {
  backgroundColor: '#999'
};

const contentStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0'
};

export default function Template() {
  return (
    <Layout>
      <Header style={headerStyle}>header</Header>
      <Content style={contentStyle}>
        Template
        <Link to="/editor">编辑</Link>
      </Content>
      <Footer style={footerStyle}>footer</Footer>
    </Layout>
  )
}

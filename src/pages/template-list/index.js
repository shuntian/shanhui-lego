import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TemplateItem from './template-item';
import { listTemplates } from '../../store/template-slice';

import '../../assets/css/template.css'

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

export default function TemplateList() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.value);
  useEffect(() => {
    dispatch(listTemplates());
  }, []);
  console.log(templates);
  return (
    <Layout>
      <Header style={headerStyle}>
        header
        <Link to="/">login-out</Link>
      </Header>
      <Content style={contentStyle}>
        <div className='template-list'>
          {templates.map((item, index) => {
            return <TemplateItem key={index} template={item}/>
          })}
          <div className="template-item"></div>
          <div className="template-item"></div>
          <div className="template-item"></div>
          <div className="template-item"></div>
        </div>
      </Content>
      <Footer style={footerStyle}>footer</Footer>
    </Layout>
  )
}

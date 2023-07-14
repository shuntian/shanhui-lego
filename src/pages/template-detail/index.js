import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Row } from 'antd'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import Wrapper from '../../components/wrapper';

import './style.css';

export default function TemplateDetail() {
  const { templateId } = useParams();
  const templates = useSelector(state => state.templates.value)
  const template = useMemo(() => {
    const a = templates.find(item => item.id === parseInt(templateId));
    return a;
  }, [templates, templateId]);
  
  return (
    <div className='template-detail'>
      <Wrapper>
        <Row justify={'center'}>
          <Col className='cover-img' span={8}>
            <img src={template.coverImg} alt='img' />
          </Col>
          <Col className='template-info' span={8}>
            <h2>慕课live</h2>
            <p>这是慕课 live 如何搭建一套混合移动应用架构的海报</p>
            <div className='author'>
              <Avatar size={32} icon={<UserOutlined />}></Avatar>
              <span>{' '}该模版由{' '}<b>{template.author}</b>{' '}创作{' '}</span>
            </div>
            <div className='bar-code-area'>
              <div className='tip'>扫一扫，手机预览</div>
              <div className='code'></div>
            </div>
            <div className='use-button'>
              <Button type='primary' size='lg' className='use-template'>使用模版</Button>
              <Button type='default' size='lg' className='download-poster'>下载海报图片</Button>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </div>
  )
}

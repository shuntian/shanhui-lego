import { Col, Row } from 'antd'
import { Html5Outlined, BuildOutlined, BulbOutlined } from '@ant-design/icons'
import React from 'react'

import './style.css';

export default function Welcome() {
  return (
    <div className='welcome-container'>
      <div className='welcome-container-inner'>
        <Row>
          <Col span={8} className="feature-item">
            <span>
              <Html5Outlined />
            </span>
            <h3>专注H5 始终如一</h3>
            <p>三年保持行业领先</p>
          </Col>
          <Col span={8} className="feature-item">
            <span>
              <BuildOutlined />
            </span>
            <h3>海量 H5 模版</h3>
            <p>一键生成，一分钟轻松制作</p>
          </Col>
          <Col span={8} className="feature-item">
            <span>
              <BulbOutlined />
            </span>
            <h3>极致体验</h3>
            <p>用户的一致选择</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

import { Divider, Row } from 'antd'
import React from 'react'

import './style.css';

export default function HotTitle() {
  return (
    <Row>
      <div className='hot-title'>
        <Divider plain>热门海报</Divider>
        <p>只需替换文字和图片，一键自动生成H5</p>
      </div>
    </Row>
  )
}

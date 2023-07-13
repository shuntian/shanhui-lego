import { Col, Row } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import React from 'react'

import './style.css'

export default function LegoFooter() {
  return (
    <Footer>
      <div className='footer-info'>
        <Row>
          <Col span={6} className="feature-item">
            <dl>
              <dt>慕课乐高</dt>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://imooc-lego.github.io/" target="_blank">作业和打卡</a>
              </dd>
              <dd>
                <a href="https://github.com/imooc-lego" target="_blank">开源仓库</a>
              </dd>
              <dd>
                <a href="#" target="_blank" data-v-043bed56="">帮助</a>
              </dd>
            </dl>            
          </Col>
          <Col span={6} className="feature-item">
            <dl>
              <dt>设计制作帮助</dt>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://imooc-lego.github.io/" target="_blank">作业和打卡</a>
              </dd>
              <dd>
                <a href="https://github.com/imooc-lego" target="_blank">开源仓库</a>
              </dd>
              <dd>
                <a href="#" target="_blank" data-v-043bed56="">帮助</a>
              </dd>
            </dl>            
          </Col>
          <Col span={6} className="feature-item">
            <dl>
              <dt>审核问题</dt>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://imooc-lego.github.io/" target="_blank">作业和打卡</a>
              </dd>
              <dd>
                <a href="https://github.com/imooc-lego" target="_blank">开源仓库</a>
              </dd>
              <dd>
                <a href="#" target="_blank" data-v-043bed56="">帮助</a>
              </dd>
            </dl>            
          </Col>
          <Col span={6} className="feature-item">
          <dl>
              <dt>联系我们</dt>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
              </dd>
              <dd>
                <a href="https://imooc-lego.github.io/" target="_blank">作业和打卡</a>
              </dd>
              <dd>
                <a href="https://github.com/imooc-lego" target="_blank">开源仓库</a>
              </dd>
              <dd>
                <a href="#" target="_blank" data-v-043bed56="">帮助</a>
              </dd>
            </dl>            
          </Col>
        </Row>
      </div>
      <ul className='list-inline'>
        <li className='list-item copyright'>
          ©️慕课网 (imooc.com) 版权所有 | {' '}
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" >津ICP备20000929号-2</a>
        </li>
        <li className='list-item'>
          <a href="https://class.imooc.com/sale/fearchitect" target="_blank">购买课程</a>
        </li>
        <li className='list-item'>
          <a href="https://imooc-lego.github.io/" target="_blank">作业和打卡</a>
        </li>
        <li className='list-item'>
          <a href="https://github.com/imooc-lego" target="_blank">开源仓库</a>
        </li>
        <li className='list-item'>
          <a href="#" target="_blank" data-v-043bed56="">帮助</a>
        </li>
      </ul>
    </Footer>
  )
}

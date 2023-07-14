import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row } from 'antd';
import WorkItem from './work-item';
import { listTemplates } from '../../store/template-slice';

import './style.css'

export default function WorkList() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.value);
  useEffect(() => {
    dispatch(listTemplates());
  }, []);

  return (
    <>
      <Row gutter={16} className='work-list'>
        {templates.map((item, index) => {
          return <WorkItem key={index} work={item}/>
        })}
      </Row>
      <Row className='load-more'>
        <Button type='primary'>加载更多</Button>
      </Row>
    </>
  )
}

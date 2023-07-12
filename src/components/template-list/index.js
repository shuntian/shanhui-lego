import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'antd';
import TemplateItem from './template-item';
import { listTemplates } from '../../store/template-slice';

import './style.css'

export default function TemplateList() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.value);
  useEffect(() => {
    dispatch(listTemplates());
  }, []);

  return (
    <Row gutter={16} className='template-list'>
      {templates.map((item, index) => {
        return <TemplateItem key={index} template={item}/>
      })}
    </Row>
  )
}

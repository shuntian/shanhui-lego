import { Button, Card, Col, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useCallback, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function TemplateItem({template}) {
  const navigate = useNavigate();
  const onTemplateToggle = useCallback(() => {
    const path = `/template/${template}`;
    navigate(path);
  }, [navigate, template]);
  const img = useMemo(() => {
    return (
      <>
        <img src={template.coverImg} alt='img'/>
        <div className='hover-item'>
          <Button type='primary'>使用该模版创建</Button>
        </div>
      </>
    );
  }, [template])
  return (
    <Col span={6} onClick={onTemplateToggle} className="template-item" style={{paddingLeft: '8px', paddingRight: '8px'}}>
      <Link to={`/template/${template.id}`}>
        <Card
          hoverable={true}
          cover={img}
          tabBarExtraContent={<div>aaa</div>}
        >
          <Meta title={template.title} className="template-item__title" />
          <div className='template-item__info'>
            <div className='author'>作者: {template.user.nickName}</div>
            <div className='copied-count'>{template.copiedCount}</div>
          </div>
          <div className='tag-list'>
            {template.isHot && <Tag color='red'>HOT</Tag>}
            {template.isNew && <Tag color='green'>NEW</Tag>}
          </div>
        </Card>
      </Link>
    </Col>
  )
}

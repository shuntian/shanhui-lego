import { CopyOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EllipsisOutlined, GiftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'copy',
    label: (
      <div>
        <CopyOutlined /> 
        <span>复制</span>
      </div>
    ),
  },
  {
    key: 'delete',
    label: (
      <div>
        <DeleteOutlined /> 
        <span>删除</span>
      </div>
    ),
  },
  {
    key: 'download',
    label: (
      <div>
        <DownloadOutlined /> 
        <span>下载图片</span>
      </div>
    ),
  },
  {
    key: 'transform',
    label: (
      <div>
        <GiftOutlined /> 
        <span>转赠</span>
      </div>
    ),
  },
]

export default function WorkItem({work}) {

  const navigate = useNavigate();
  const onEditClick  = useCallback(() => {
    navigate(`/editor/${work.id}`)
  }, [navigate, work.id]);

  const img = useMemo(() => {
    return (
      <>
        <img src={work.coverImg} alt='img'/>
        <div className='hover-item'>
          <Link to={`/editor/${work.id}`}>
            <Button type='primary'>继续编辑该作品</Button>
          </Link>
        </div>
      </>
    );
  }, [work])

  return (
    <Col span={6} className="work-item" style={{paddingLeft: '8px', paddingRight: '8px'}}>
      <Card
        hoverable={true}
        cover={img}
        actions={[
          <EditOutlined key="edit" onClick={onEditClick}/>,
          <Dropdown menu={{ items }} placement="bottomRight">
            <EllipsisOutlined />
          </Dropdown>,
        ]}
      >
        <Meta title={work.title} className="work-item__title" />
        <div className='tag-list'>
          {work.status === 1 && <Tag color='red'>未发布</Tag>}
          {work.status === 2 && <Tag color='green'>已发布</Tag>}
        </div>
      </Card>
    </Col>
  )
}

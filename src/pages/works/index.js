import { Tabs } from 'antd';
import Search from 'antd/es/transfer/search';
import React, { useCallback, useState } from 'react'
import TemplateList from '../../components/template-list';
import Wrapper from '../../components/wrapper';

import './style.css';

const items = [
  {
    key: 'my-work',
    label: '我的作品',
    children: (
      <>
        <div>我的作品</div>
        <TemplateList />
      </>
    )
  },
  {
    key: 'my-template',
    label: '我的模版',
    children: (
      <>
        <div>我的模版</div>
        <TemplateList />
      </>
    )
  }
]

export default function Works() {

  const [active, setActive] = useState('my-work');
  const onSearch = () => {};
  const onChange = useCallback((key) => {
    setActive(key);
  }, [])
  return (
    <Wrapper>
      <div className='work-title'>
        <h2>我的作品和模版</h2>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <Tabs defaultActiveKey={active} items={items} onChange={onChange}/>
    </Wrapper>
  )
}

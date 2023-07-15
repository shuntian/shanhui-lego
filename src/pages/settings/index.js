import { Tabs } from 'antd'
import React, { useCallback, useState } from 'react'
import Wrapper from '../../components/wrapper'
import DeletedWorks from './deleted-works'
import PersonalInfo from './personal-info'

const items = [
  {
    key: 'personal-info',
    label: '修改个人资料',
    children: <PersonalInfo />
  },
  {
    key: 'deleted-works',
    label: '恢复删除作品',
    children: <DeletedWorks />
  }
]
export default function Settings() {
  const [active, setActive] = useState('personal-info');

  const onChange = useCallback((key) => {
    setActive(key);
  }, []);
  return (
    <Wrapper>
      <div className='user-setting' style={{padding: '24px'}}>
        <h2 className='user-setting-title' style={{marginBottom: '20px'}}>
          个人中心 👮
        </h2>
        <Tabs type='card' defaultActiveKey={active} items={items} onChange={onChange}></Tabs>
      </div>
    </Wrapper>
  )
}

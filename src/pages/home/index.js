import { Divider, Row } from 'antd'
import React from 'react'
import Banner from '../../components/banner'
import HotTitle from '../../components/hot-title'
import TemplateList from '../../components/template-list'
import Welcome from '../../components/welcome'

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <div className='content-container'>
        <HotTitle />
        <TemplateList />
      </div>
    </>
  )
}

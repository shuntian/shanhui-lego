import { Input } from 'antd';
import React from 'react'
import banner from '../../assets/imgs/background.3744875e.png'

import './style.css';

export default function Banner() {

  const onSearch = (value) => { console.log(value) };
  return (
    <div className='banner'>
      <img className='banner-image' src={banner} alt="banner" />
      <div className='banner-text'>
        <h2 className='banner-text__header'>海量精彩设计 一键生成</h2>
        <div className='banner-text__search'>
          <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
      </div>
    </div>
  )
}

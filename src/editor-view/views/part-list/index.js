import React from 'react'
import { textTemplates } from '../../config/parts-config'
import LText from '../../parts/LText'


export default function PartList({onItemClick}) {

  return (
    <div className='parts-container'>
      {textTemplates.map((item, index) => {
        return (
          <div key={index} onClick={() => onItemClick(item)}>
            <LText {...item}></LText>
          </div>
        )
      })}
    </div>
  )
}

import React, { useCallback } from 'react'

import './style.css'

const colors = ['#ffffff', '#f5222d', '#fa541c', '#fadb14', '#52c41a', '#1890ff', '#722ed1', '#8c8c8c', '#000000', ''];

export default function ColorPicker({value, onChange}) {

  const onColorChange = useCallback((e) => {
    const value = e.target.value;
    onChange(value);
  }, [onChange]);

  const onColorItemClick = useCallback((e) => {
    const { color } = e.target.dataset;
    onChange(color);
  }, [onChange])

  return (
    <div className='color-picker'>
      <div className='native-color-container'>
        <input type="color" value={value} onChange={onColorChange}></input>
      </div>
      <ul className='picked-color-list' onClick={onColorItemClick}>
        {colors.map((color, index) => {
          if (color) {
            return (
              <li key={index} className={`item-${index}`}>
                <div className="color-item" data-color={color} style={{backgroundColor: color}}></div>
              </li>
            );
          }
          return (
            <li key={index} className={`item-${index}`}>
              <div className='color-item transparent-back'></div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

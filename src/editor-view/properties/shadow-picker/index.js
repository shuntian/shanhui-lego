import { Slider } from 'antd';
import React, { useCallback, useMemo } from 'react'
import ColorPicker from '../color-picker'

export default function ShadowPicker({value, onChange}) {
  const values = useMemo(() => value.split(' '), [value]);

  const updateValue = useCallback((newValue, index) => {
    const newValues = values.map((item, i) => {
      if (typeof index === 'number' && i === index) {
        return typeof newValue === 'number' ? newValue + 'px' : newValue;
      } else if (Array.isArray(index) && index.includes(i)) {
        return typeof newValue === 'number' ? newValue + 'px' : newValue;
      } else {
        return item;
      }
    })
    onChange(newValues.join(' '));
  }, [onChange, values]);

  return (
    <div className='shadow-picker'>
      <div className='shadow-item'>
        <span>阴影颜色:</span>
        <div className='shadow-component'>
          <ColorPicker value={values[3]} onChange={(v) => updateValue(v, 3)} />
        </div>
      </div>
      <div className='shadow-item'>
        <span>阴影大小:</span>
        <div className='shadow-component'>
          <Slider min={0} max={20} step={0.1} value={parseInt(values[0])} onChange={(v) => updateValue(v, [0, 1])} />
        </div>
      </div>
      <div className='shadow-item'>
        <span>阴影模糊:</span>
        <div className='shadow-component'>
          <Slider min={0} max={20} step={0.1} value={parseInt(values[2])} onChange={(v) => updateValue(v, 2)} />
        </div>
      </div>
    </div>
  )
}

import React, { useMemo } from 'react'
import { mapPropsToForms } from '../../../properties';
import { capitalizeFirstLetter } from '../../../utils';
import PropertyItem from './property-item';

import './style.css';

export default function PropertyGroup({props, updatePropItem}) {

  const finalComponents = useMemo(() => {
   return Object.keys(props).reduce((result, propKey) => {
    const value = props[propKey];
    const item = mapPropsToForms[propKey];
    if (item) {
      const { valueProp = 'value', eventName = 'change', initialTransform, afterTransform } = item;
      const newItem = {
        ...item,
        value: initialTransform ? initialTransform(value) : value,
        valueProp,
        eventName,
        events: {
          ['on' + capitalizeFirstLetter(eventName)]: (e) => {
            const value = afterTransform ? afterTransform(e) : e;
            updatePropItem({key: propKey, value})
          }
        }
      }
      result.push(newItem);
    }
    return result
   }, []);
  }, [props, updatePropItem])

  return (
    <div className='props-group-item'>
      {finalComponents && finalComponents.map((item, index) => {
        return <PropertyItem key={index} item={item} />
      })}
    </div>
  )
}

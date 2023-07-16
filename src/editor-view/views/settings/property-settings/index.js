import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { updateItem } from '../../../../store/editor-slice';
import { useCurrentElement } from '../../../hooks/use-current-element';
import { mapPropsToForms } from '../../../properties';
import { capitalizeFirstLetter } from '../../../utils';
import PropertyItem from './property-item';

import './style.css';

export default function PropertySettings() {
  const dispatch = useDispatch();
  const currentElement = useCurrentElement();

  const finalComponents = useMemo(() => {
   return currentElement && Object.keys(currentElement.props).reduce((result, propKey) => {
    const value = currentElement.props[propKey];
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
            console.log(e);
            const value = afterTransform ? afterTransform(e) : e;
            console.log(value);
            dispatch(updateItem({key: propKey, value}));
          }
        }
      }
      result.push(newItem);
    }
    return result
   }, []);
  }, [currentElement, dispatch])

  return (
    <div className='props-container'>
      {finalComponents && finalComponents.map((item, index) => {
        return <PropertyItem key={index} item={item} />
      })}
    </div>
  )
}

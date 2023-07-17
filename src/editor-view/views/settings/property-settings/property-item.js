import classNames from 'classnames';
import React, { useMemo } from 'react'

export default function PropertyItem({item}) {
  const { 
    component: Component, 
    extraProps,
    valueProp,
    events,
    subComponent: SubComponent, 
    options,
  } = item;

  const children = useMemo(() => {
    if (!options) return null;
    return options.map(option => {
      return React.cloneElement(SubComponent, {key: option.value, value: option.value, children: option.text});
    });
  }, [SubComponent, options])

  const containerClassName = classNames('prop-item', {'no-text': !item.text})
  const className = classNames('prop-component', item.name);

  return (
    <div className={containerClassName} id={`item-${item.key}`}>
      <label>{item.text}</label>
      <div className={className}>
        {React.cloneElement(Component, 
          {
            [valueProp]: item.value,
            ...extraProps,
            ...events
          },
          children
        )}
      </div>
    </div>
  );
}

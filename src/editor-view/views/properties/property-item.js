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

  return (
    <div>
      <div>{item.text}</div>
      {React.cloneElement(Component, 
        {
          [valueProp]: item.value,
          ...extraProps,
          ...events
        },
        children
      )}
    </div>

  );
}

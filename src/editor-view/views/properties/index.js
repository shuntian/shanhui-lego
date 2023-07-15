import React from 'react'
import { useSelector } from 'react-redux'

export default function PropertiesSetting() {
  const { currentElement  } = useSelector(state => state.editor.value);
  return (
    <div className='properties-container'>
      {currentElement && (
        <pre>
          {JSON.stringify(currentElement?.props)}
        </pre>
      )}
    </div>
  )
}

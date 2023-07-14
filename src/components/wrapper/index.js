import React from 'react'

const style = {
  padding: '16px',
  minHeight: '85vh',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%'
};

export default function Wrapper({children}) {
  return (
    <div className='content-wrapper' style={style}>
      {children}
    </div>
  )
}

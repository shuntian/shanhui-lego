import { Button, Tooltip } from 'antd'
import React, { useCallback } from 'react'

export default function IconSwitch({tip, icon, checked, onChange}) {

  const onValueChange = useCallback(() => {
    onChange(!checked);
  }, [checked, onChange]);

  return (
    <div className='icon-template' onClick={onValueChange}>
      <Tooltip placement="top" title={tip}>
        <Button type={checked ? 'primary' : 'default'} shape='circle'>
          {React.cloneElement(icon)}
        </Button>
      </Tooltip>
    </div>
  )
}

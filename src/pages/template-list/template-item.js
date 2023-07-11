import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TemplateItem({template}) {
  const navigate = useNavigate();
  const onTemplateToggle = useCallback(() => {
    const path = `/template/${template}`;
    navigate(path);
  }, [navigate, template]);

  return (
    <div className='template-item' onClick={onTemplateToggle}>
      {template}
    </div>
  )
}

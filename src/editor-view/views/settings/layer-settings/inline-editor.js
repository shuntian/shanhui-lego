import { Input } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function InlineEditor({value, onValueChanged}) {
  // const [inputValue, setInputValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    isEditing && inputRef.current?.focus({cursor: 'end'});
  }, [isEditing])

  const onBlur = useCallback((e) => {
    const { value } = inputRef.current.input;
    onValueChanged(value);
    setIsEditing(false);
  }, [onValueChanged])

  const onPressEnter = useCallback((e) => {
    onBlur();
  }, [onBlur])

  return (
    <div className='inline-editor' onClick={() => setIsEditing(true)}>
      {!isEditing && <span>{value}</span>}
      {isEditing && (
        <Input ref={inputRef} defaultValue={value} placeholder="文本不能为空" onPressEnter={onPressEnter} onBlur={onBlur} />
      )}
    </div>
  )
}

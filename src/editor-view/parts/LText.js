import React from 'react'
import { textStylePropNames } from '../config/style-config';
import { usePickStyleProps } from '../hooks/use-pick-style-props';

export default function LText(props) {
  const { tag: Tag, text } = props;
  const styleProps = usePickStyleProps(props, textStylePropNames);

  return (
    <Tag {...styleProps} className="l-text-component">{text}</Tag>
  )
}

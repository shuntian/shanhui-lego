import classNames from 'classnames';
import React from 'react'
import { textStylePropNames } from '../config/style-config';
import { usePickStyleProps } from '../hooks/use-pick-style-props';

export default function LText(props) {
  const { tag: Tag, text } = props;
  const styleProps = usePickStyleProps(props, textStylePropNames);

  const className = classNames('l-text-component', props.className);
  return (
    <Tag style={styleProps} className={className}>{text}</Tag>
  )
}

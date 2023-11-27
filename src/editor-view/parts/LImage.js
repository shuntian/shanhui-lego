import classNames from 'classnames';
import React from 'react'
import { imageStylePropsNames } from '../config/style-config';
import { usePickStyleProps } from '../hooks/use-pick-style-props';

export default function LImage({ props }) {
  const { src } = props;
  const styleProps = usePickStyleProps(props, imageStylePropsNames);
  const className = classNames('l-image-component', props.className);
  return (
    <img src={src} className={className} style={styleProps} alt="alt"></img>
  )
}

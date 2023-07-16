import { without } from 'lodash-es'
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '373px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
};

export const textDefaultProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
};

export const imageDefaultProps = {
  src: 'test.url',
  ...commonDefaultProps
};

export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'src')

console.log(textStylePropNames);

export const defaultEditGroups = [
  {
    text: '尺寸',
    items: ['height', 'width', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
  },
  {
    text: '边框',
    items: ['borderStyle', 'borderColor', 'borderWidth', 'borderRadius'],
  },
  {
    text: '阴影与透明度',
    items: ['opacity', 'boxShadow'],
  },
  {
    text: '位置',
    items: ['left', 'top'],
  },
  {
    text: '事件功能',
    items: ['actionType', 'url']
  }
];

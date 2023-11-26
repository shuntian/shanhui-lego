import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from "@ant-design/icons";
import { InputNumber, Radio, Select, Slider } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import ColorPicker from "./color-picker";
import IconSwitch from "./icon-switch";
import ShadowPicker from "./shadow-picker";

const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiti"' },
  { text: '仿宋', value: '"FangSong","STFangsong"' },
]

const fontFamilyOptions = fontFamilyArr.map(font => {
  return {
    value: font.value,
    text: <span style={{ fontFamily: font.value}}>{font.text}</span>,
  }
})

const defaultHandler = {
  component: <Input />,
  eventName: 'change',
  valueProp: 'value',
  initialTransform: (v) => v,
  afterTransform: (e) => e,
}

const pxToNumberHandler = {
  component: <InputNumber />,
  initialTransform: (v) => v ? parseInt(v) : 0,
  afterTransform: (e) => e ? `${e}px` : ''
}

export const mapPropsToForms = {
  text: {
    text: '文本',
    component: <TextArea />,
    extraProps: { rows: 3},
    afterTransform: (e) => e.target.value
  },
  fontSize: {
    text: '字号',
    ...pxToNumberHandler,
  },
  lineHeight: {
    text: '行高',
    component: <Slider />,
    extraProps: {min: 0, max: 3, step: 0.1},
    initialTransform: (v) => parseFloat(v),
    afterTransform: (e) => e.toString(),
  },
  textAlign: {
    text: '对齐',
    component: <Radio.Group />,
    subComponent: <Radio.Button />,
    options: [
      {value: 'left', text: '左'},
      {value: 'center', text: '中'},
      {value: 'right', text: '右'},
    ],
    afterTransform: (e) => e.target.value,
  },
  fontFamily: {
    text: '字体',
    component: <Select />,
    subComponent: <Select.Option />,
    options: [
      {value: '', text: '无'},
      ...fontFamilyOptions
    ]
  },
  fontWeight: {
    component: <IconSwitch />,
    initialTransform: (v) => v === 'bold',
    afterTransform: (v) => v ? 'bold' : 'normal',
    valueProp: 'checked',
    extraProps: { icon: <BoldOutlined />, tip: '加粗'}
  },
  fontStyle: {
    component: <IconSwitch />,
    initialTransform: (v) => v === 'italic',
    afterTransform: (v) => v ? 'italic' : 'normal',
    valueProp: 'checked',
    extraProps: { icon: <ItalicOutlined />, tip: '斜体'}
  },
  textDecoration: {
    component: <IconSwitch />,
    initialTransform: (v) => v === 'underline',
    afterTransform: (v) => v ? 'underline' : 'normal',
    valueProp: 'checked',
    extraProps: { icon: <UnderlineOutlined />, tip: '下划线'}
  },
  color: {
    component: <ColorPicker />,
    text: '字体颜色'
  },
  backgroundColor: {
    component: <ColorPicker />,
    text: '背景颜色'
  },
  width: {
    text: '宽度',
    ...pxToNumberHandler,
  },
  height: {
    text: '高度',
    ...pxToNumberHandler,
  },
  paddingLeft: {
    text: '左边距',
    ...pxToNumberHandler,
  },
  paddingRight: {
    text: '右边距',
    ...pxToNumberHandler,
  },
  paddingTop: {
    text: '上边距',
    ...pxToNumberHandler,
  },
  paddingBottom: {
    text: '下边距',
    ...pxToNumberHandler,
  },
  borderStyle: {
    ...defaultHandler,
    component: <Select />,
    subComponent: <Select.Option />,
    text: '边框类型',
    options: [
      { value: 'none', text: '无' },
      { value: 'solid', text: '实线' },
      { value: 'dashed', text: '破折线' },
      { value: 'dotted', text: '点状线' }
    ]
  },
  borderColor: {
    ...defaultHandler,
    component: <ColorPicker />,
    text: '边框颜色'
  },
  borderWidth: {
    ...pxToNumberHandler,
    component: <Slider />,
    text: '边框宽度',
    extraProps: { min: 0, max: 20 }
  },
  borderRadius: {
    ...pxToNumberHandler,
    component: <Slider />,
    text: '边框圆角',
    extraProps: { min: 0, max: 200 }
  },
  opacity: {
    component: <Slider />,
    text: '透明度',
    initialTransform: (v) => v ? v * 100 : 100,
    afterTransform: (e) => (e / 100) + '',
    extraProps: { min: 0, max: 100, reverse: true }
  },
  boxShadow: {
    component: <ShadowPicker />
  },
  // commonComponentProps - positions
  left: {
    ...pxToNumberHandler,
    text: 'X轴坐标'
  },
  top: {
    ...pxToNumberHandler,
    text: 'Y轴坐标'
  },
  // commonComponentProps - actions and urls
  // actions
  actionType: {
    ...defaultHandler,
    component: <Select />,
    subComponent: <Select.Option />,
    text: '点击',
    options: [
      { value: '', text: '无' },
      { value: 'to', text: '跳转到 URL' }
    ]
  },
  url: {
    ...defaultHandler,
    afterTransform: (e) => e.target.value,
    text: '链接'
  },
  backgroundRepeat: {
    text: '背景重复',
    component: <Select />,
    subComponent: <Select.Option />,
    options: [
      { value: 'no-repeat', text: '无重复' },
      { value: 'repeat-x', text: 'X轴重复' },
      { value: 'repeat-y', text: 'Y轴重复' },
      { value: 'repeat', text: '全部重复' },
    ]
  },
  backgroundSize: {
    text: '背景大小',
    component: <Select />,
    subComponent: <Select.Option />,
    options: [
      { value: 'contain', text: '自动缩放' },
      { value: 'cover', text: '自动填充' },
      { value: '', text: '默认值' },
    ]
  }
};

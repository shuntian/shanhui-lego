import { textDefaultProps } from 'lego-bricks';
const defaultTextTemplates = [
  {
    tag: 'h2',
    text: '大标题',
    fontWeight: 'bold',
    width: '100px',
    fontSize: '30px',
  },
  {
    tag: 'p',
    text: '正文内容',
    width: '100px',
  },
  {
    tag: 'p',
    text: '链接内容',
    textDecoration: 'underline',
    color: '#1890ff',
    width: '100px',
  },
  {
    tag: 'button',
    text: '按钮内容',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    textAlign: 'center',
    position: 'absolute',
  }
]

const textTemplates = defaultTextTemplates.map(template => ({...textDefaultProps, ...template}));

export { 
  textTemplates
};

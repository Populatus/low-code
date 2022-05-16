import App from './index.vue'
export default {
  render: App,
  props: {
    src: {
      type: 'string',
      require: true,
      defaultValue: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.jpg?source=172ae18b',
    },
  },
}

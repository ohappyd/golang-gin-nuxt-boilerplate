/*
Default behavios from echarts
*/
const dataUtil = {
  index: 0
}

export default {
  props: {
    'title': {
      type: String,
      default: () => {
        dataUtil.index++
        return 'Chart Title ' + dataUtil.index
      }
    },
    'subtitle': {
      type: String,
      default: ''
    },
    'height': {
      type: String,
      default: '300px'
    },
    'width': {
      type: String,
      default: '100%'
    }
  }
}

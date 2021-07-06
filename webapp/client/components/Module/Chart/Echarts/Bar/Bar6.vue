
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the bar chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

        }
      },
      legend: {
        data: ['D. Inter.', 'E. Marketing', 'Adversing', 'Video Ad', 'S. Engine']
      },
      toolbox: {
        show: false,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      xAxis: [{
        type: 'value'
      }],
      yAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
      }],
      series: [{
        name: 'D. Inter.',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'insideRight'
            }
          }
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      }, {
        name: 'E. Marketing',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'insideRight'
            }
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      }, {
        name: 'Adversing',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'insideRight'
            }
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: 'Video Ad',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'insideRight'
            }
          }
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      }, {
        name: 'S. Engine',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'insideRight'
            }
          }
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }]
    }
    return {
      options: option
    }
  },

  methods: {}
}

</script>


<style lang="scss" scoped>
.echarts {
  flex: 20 20 20em;
}
.list-group {
  flex: 1 1 10em;
}
.list-group-item {
  background-color: #15194052;
  border-top: 1px solid #384478;
  border-radius: 0;
  color: #fff;
}
.border-none,
.border-none.list-group-item {
  border-radius: 0;
}
.item-legend {
  margin: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  .label {
    font-size: 20px;
  }
  .text {
    font-size: 12px;
  }
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}

</style>



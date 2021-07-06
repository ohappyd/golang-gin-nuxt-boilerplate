
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
        data: ['Key A', 'Key B', 'Key C']
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
            type: ['line', 'bar']
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
        axisTick: {
          show: false
        },
        data: ['AB', 'BC', 'CD', 'DE', 'EF', 'FG', 'GH']
      }],
      series: [{
        name: 'Key A',
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'inside'
            }
          }
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      }, {
        name: 'Key C',
        type: 'bar',
        stack: 'Total amount',
        barWidth: 5,
        itemStyle: {
          normal: {
            label: {
              show: true
            }
          }
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      }, {
        name: 'Key B',
        type: 'bar',
        stack: 'Total amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'left'
            }
          }
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
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



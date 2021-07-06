
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the line chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['E. Marketing', 'Adversing', 'Video Ad', 'D. Inter.', 'S. Engine']
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
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'E. Marketing',
        type: 'line',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      }, {
        name: 'Adversing',
        type: 'line',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: 'Video Ad',
        type: 'line',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      }, {
        name: 'D. Inter.',
        type: 'line',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      }, {
        name: 'S. Engine',
        type: 'line',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
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



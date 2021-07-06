
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
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
        trigger: 'axis'
      },
      legend: {
        data: ['ECharts1 - 2k', 'ECharts1 - 2w', 'ECharts1 - 20w', '', 'ECharts2 - 2k', 'ECharts2 - 2w', 'ECharts2 - 20w']
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
      grid: {
        y: 70,
        y2: 30,
        x2: 20
      },
      xAxis: [{
        type: 'category',
        data: ['Line', 'Bar', 'Scatter', 'K', 'Map']
      }, {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: ['Line', 'Bar', 'Scatter', 'K', 'Map']
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value} ms'
        }
      }],
      series: [{
        name: 'ECharts2 - 2k',
        type: 'bar',
        itemStyle: {
          normal: {
            color: variablesColors.secondary,
            label: {
              show: true
            }
          }
        },
        data: [40, 155, 95, 75, 0]
      }, {
        name: 'ECharts2 - 2w',
        type: 'bar',
        itemStyle: {
          normal: {
            color: variablesColors.primary,
            label: {
              show: true,
              textStyle: {
                color: '#27727B'
              }
            }
          }
        },
        data: [100, 200, 105, 100, 156]
      }, {
        name: 'ECharts2 - 20w',
        type: 'bar',
        itemStyle: {
          normal: {
            color: variablesColors.secondary,
            label: {
              show: true,
              textStyle: {
                color: '#E87C25'
              }
            }
          }
        },
        data: [906, 911, 908, 778, 0]
      }, {
        name: 'ECharts1 - 2k',
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
          normal: {
            color: variablesColors.secondary,
            label: {
              show: true,
              formatter: function (p) {
                return p.value > 0 ? p.value + '\n' : ''
              }
            }
          }
        },
        data: [96, 224, 164, 124, 0]
      }, {
        name: 'ECharts1 - 2w',
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
          normal: {
            color: variablesColors.primary,
            label: {
              show: true
            }
          }
        },
        data: [491, 2035, 389, 955, 347]
      }, {
        name: 'ECharts1 - 20w',
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
          normal: {
            color: variablesColors.secondary,
            label: {
              show: true,
              formatter: function (p) {
                return p.value > 0 ? p.value + '+' : ''
              }
            }
          }
        },
        data: [3000, 3000, 2817, 3000, 0]
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



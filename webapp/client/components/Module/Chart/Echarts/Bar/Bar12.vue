
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
        trigger: 'axis',
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        },
        formatter: function (params) {
          return params.seriesName + ' : [ ' + params.value[0] + ', ' + params.value[1] + ' ]'
        }
      },
      legend: {
        data: ['Data 1', 'Data 2']
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
        type: 'value',
        axisLine: {
          lineStyle: {
            color: variablesColors.primary
          }
        }
      }],
      series: [{
        name: 'Data 1',
        type: 'bar',
        data: [[1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]],
        markPoint: {
          data: [// 纵轴，默认
            {
              type: 'max',
              name: 'Maximum',
              symbol: 'emptyCircle',
              itemStyle: {
                normal: {
                  color: '#dc143c',
                  label: {
                    position: 'top'
                  }
                }
              }
            }, {
              type: 'min',
              name: 'Minimum',
              symbol: 'emptyCircle',
              itemStyle: {
                normal: {
                  color: '#dc143c',
                  label: {
                    position: 'bottom'
                  }
                }
              }
            }, // 横轴
            {
              type: 'max',
              name: 'Maximum',
              valueIndex: 0,
              symbol: 'emptyCircle',
              itemStyle: {
                normal: {
                  color: '#1e90ff',
                  label: {
                    position: 'right'
                  }
                }
              }
            }, {
              type: 'min',
              name: 'Minimum',
              valueIndex: 0,
              symbol: 'emptyCircle',
              itemStyle: {
                normal: {
                  color: '#1e90ff',
                  label: {
                    position: 'left'
                  }
                }
              }
            }]
        },
        markLine: {
          data: [// 纵轴，默认
            {
              type: 'max',
              name: 'Maximum',
              itemStyle: {
                normal: {
                  color: variablesColors.primary
                }
              }
            }, {
              type: 'min',
              name: 'Minimum',
              itemStyle: {
                normal: {
                  color: variablesColors.theme2
                }
              }
            }, {
              type: 'average',
              name: 'Average',
              itemStyle: {
                normal: {
                  color: variablesColors.theme3
                }
              }
            }, // 横轴
            {
              type: 'max',
              name: 'Maximum',
              valueIndex: 0,
              itemStyle: {
                normal: {
                  color: variablesColors.theme4
                }
              }
            }, {
              type: 'min',
              name: 'Minimum',
              valueIndex: 0,
              itemStyle: {
                normal: {
                  color: variablesColors.theme4
                }
              }
            }, {
              type: 'average',
              name: 'Average',
              valueIndex: 0,
              itemStyle: {
                normal: {
                  color: variablesColors.theme4
                }
              }
            }]
        }
      }, {
        name: 'Data 2',
        type: 'bar',
        barHeight: 10,
        data: [[1, 2], [2, 3], [4, 4], [7, 5], [11, 11], [18, 15]]
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



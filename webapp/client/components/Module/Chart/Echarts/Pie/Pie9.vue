
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering pie chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Direct', 'Markting Ad', 'S. Engine', 'E. Marketing', 'Adversing', 'Video Ad', 'Baidu', 'Google', 'Must', 'Other']
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
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      series: [{
        name: 'Access Source',
        type: 'pie',
        center: ['35%', 200],
        radius: 80,
        itemStyle: {
          normal: {
            label: {
              position: 'inner',
              formatter: function (params) {
                return (params.percent - 0).toFixed(0) + '%'
              }
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            label: {
              show: true,
              formatter: '{b}\n{d}%'
            }
          }
        },
        data: [{
          value: 335,
          name: 'Direct'
        }, {
          value: 679,
          name: 'Markting Ad'
        }, {
          value: 1548,
          name: 'S. Engine'
        }]
      }, {
        name: 'Access Source',
        type: 'pie',
        center: ['35%', 200],
        radius: [110, 140],
        data: [{
          value: 335,
          name: 'Direct'
        }, {
          value: 310,
          name: 'E. Marketing'
        }, {
          value: 234,
          name: 'Adversing'
        }, {
          value: 135,
          name: 'Video Ad'
        }, {
          value: 1048,
          name: 'Baidu',
          itemStyle: {
            normal: {
              label: {
                textStyle: {
                  color: 'rgba(30,144,255,0.8)',
                  align: 'center',
                  baseline: 'middle',
                  fontSize: 30,
                  fontWeight: 'bolder'
                }
              },
              labelLine: {
                length: 40,
                lineStyle: {
                  color: '#f0f',
                  width: 3,
                  type: 'dotted'
                }
              }
            }
          }
        }, {
          value: 251,
          name: 'Google'
        }, {
          value: 102,
          name: 'Must',
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true
              },
              labelLine: {
                show: true,
                length: 50
              }
            }
          }
        }, {
          value: 147,
          name: 'Other'
        }]
      }, {
        name: 'Access Source',
        type: 'pie',
        clockWise: true,
        startAngle: 135,
        center: ['75%', 200],
        radius: [80, 120],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            label: {
              show: true,
              position: 'center',
              formatter: '{d}%',
              textStyle: {
                color: 'red',
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          }
        },
        data: [{
          value: 335,
          name: 'Direct'
        }, {
          value: 310,
          name: 'E. Marketing'
        }, {
          value: 234,
          name: 'Adversing'
        }, {
          value: 135,
          name: 'Video Ad'
        }, {
          value: 1548,
          name: 'S. Engine'
        }],
        markPoint: {
          symbol: 'star',
          data: [{
            name: 'Max.',
            value: 1548,
            x: '80%',
            y: 50,
            symbolSize: 32
          }]
        }
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



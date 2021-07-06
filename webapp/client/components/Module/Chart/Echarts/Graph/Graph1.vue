
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the graph chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },

  mounted () {},
  mixins: [defaultPropsMixin],
  data () {
    // 指定图表的配置项和数据
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      legend: {
        show: true,
        data: [{
          name: 'People',
          textStyle: {
            color: '#fff'
          }
        }, {
          name: 'Evidence',
          textStyle: {
            color: '#fff'
          }
        }, {
          name: 'Unidentified',
          textStyle: {
            color: '#fff'
          }
        }]
      },
      series: [{
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 1000,
          edgeLength: 50
        },
        symbolSize: 50,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10
            },
            formatter: '{c}'
          }
        },
        data: [{
          name: 'Hair',
          symbolSize: 100,
          draggable: true,
          category: 1
        }, {
          name: 'Knife',
          symbolSize: 70,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          },
          category: 1
        }, {
          name: 'Fingerprint',
          symbolSize: 70,
          category: 1,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }, {
          name: 'Zhang San',
          symbolSize: 70,
          category: 0,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }, {
          name: 'Li Si',
          symbolSize: 70,
          category: 0,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }, {
          name: 'Zhang San2',
          category: 0,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }, {
          name: 'Unknown body',
          category: 2,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }, {
          name: 'Lai Zi',
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          },
          category: 0
        }, {
          name: 'Wang Wu',
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          },
          category: 0
        }, {
          name: 'Liu Da',
          category: 0,
          itemStyle: {
            normal: {
              color: variablesColors.primary
            }
          }
        }],
        links: [{
          source: 'Hair',
          target: 'Knife',
          value: 'Case ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#e0f55a' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#639564' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Hair',
          target: 'Fingerprint',
          value: 'DNA',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#eda553' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#7c785b' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Hair',
          target: 'Zhang San',
          value: 'DNA',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#eda553' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#7c785b' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Hair',
          target: 'Li Si',
          value: 'Case ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#e0f55a' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#639564' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Hair',
          target: 'Zhang San'
        }, {
          source: 'Knife',
          target: 'Zhang San2',
          value: 'Case ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#e0f55a' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#639564' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Knife',
          target: 'Unknown body',
          value: 'Case ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#e0f55a' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#639564' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Li Si',
          target: 'Lai Zi',
          value: 'Case ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#e0f55a' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#639564' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Li Si',
          target: 'Wang Wu',
          value: 'Card ID',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#df6f30' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#915034' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }, {
          source: 'Wang Wu',
          target: 'Liu Da',
          value: 'DNA',
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#eda553' // 0% 处的颜色

                }, {
                  offset: 1,
                  color: '#7c785b' // 100% 处的颜色

                }],
                globalCoord: false // 缺省为 false

              }
            }
          }
        }],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 5,
            curveness: 0
          }
        },
        categories: [{
          name: 'People'
        }, {
          name: 'Evidence'
        }, {
          name: 'Unidentified'
        }]
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

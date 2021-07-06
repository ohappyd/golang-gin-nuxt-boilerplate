
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering tree chart of the echarts library
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
        trigger: 'item',
        formatter: '{b}: {c}'
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
      calculable: false,
      series: [{
        name: '树图',
        type: 'tree',
        orient: 'horizontal',
        // vertical horizontal
        rootLocation: {
          x: 100,
          y: '60%'
        },
        // 根Node 位置  {x: 'center',y: 10}
        nodePadding: 20,
        symbol: 'circle',
        symbolSize: 40,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#cc9999',
                fontSize: 15,
                fontWeight: 'bolder'
              }
            },
            lineStyle: {
              color: '#000',
              width: 1,
              type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [{
          name: 'Mobile Phone',
          value: 6,
          symbolSize: [90, 70],
          symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
          itemStyle: {
            normal: {
              label: {
                show: false
              }
            }
          },
          children: [{
            name: 'Millet ',
            value: 4,
            symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg',
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            symbolSize: [60, 60],
            children: [{
              name: 'Millet 1',
              symbol: 'circle',
              symbolSize: 20,
              value: 4,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right'
                  }
                },
                emphasis: {
                  label: {
                    show: false
                  },
                  borderWidth: 0
                }
              }
            }, {
              name: 'Millet 2',
              value: 4,
              symbol: 'circle',
              symbolSize: 20,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                  },
                  borderWidth: 2
                },
                emphasis: {
                  borderWidth: 0
                }
              }
            }, {
              name: 'Millet 3',
              value: 2,
              symbol: 'circle',
              symbolSize: 20,
              itemStyle: {
                normal: {
                  label: {
                    position: 'right'
                  },
                  brushType: 'stroke',
                  borderWidth: 1
                },
                emphasis: {
                  borderWidth: 0
                }
              }
            }]
          }, {
            name: 'Apple',
            symbol: 'image://http://www.viastreaming.com/images/apple_logo2.png',
            symbolSize: [60, 60],
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            value: 4
          }, {
            name: 'Huawei',
            symbol: 'image://http://market.huawei.com/hwgg/logo_cn/download/logo.jpg',
            symbolSize: [60, 60],
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            value: 2
          }, {
            name: 'Lenovo',
            symbol: 'image://http://www.lenovo.com.cn/HomeUpload/Home001/6d94ee9a20140714.jpg',
            symbolSize: [100, 40],
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            value: 2
          }]
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



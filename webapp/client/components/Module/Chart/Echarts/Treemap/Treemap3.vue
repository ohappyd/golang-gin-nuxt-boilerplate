
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering treemap chart of the echarts library
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
      hoverable: true,
      series: [{
        name: '矩形图',
        type: 'treemap',
        itemStyle: {
          normal: {
            label: {
              show: true,
              formatter: '{b}: {c}',
              textStyle: {
                fontFamily: 'Times New Roman",Georgia,Serif',
                fontSize: 20,
                fontStyle: 'italic',
                fontWeight: 'bolder'
              }
            },
            borderWidth: 1,
            borderColor: '#000'
          },
          emphasis: {
            label: {
              show: true,
              textStyle: {
                fontFamily: 'Times New Roman",Georgia,Serif',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 'bold'
              }
            },
            borderWidth: 3
          }
        },
        data: [{
          name: 'Samsung',
          value: 6,
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{b}最多',
                x: 60,
                y: 65,
                textStyle: {
                  fontSize: 16
                }
              },
              borderWidth: 1
            },
            emphasis: {
              label: {
                show: true,
                formatter: '{b}-{c}',
                x: 80,
                y: 85,
                textStyle: {
                  fontSize: 18
                }
              },
              borderWidth: 3
            }
          },
          children: [{
            name: 'S4',
            value: 6,
            children: [{
              name: '2012',
              value: 6
            }, {
              name: '2013',
              value: 4
            }, {
              name: '2014',
              value: 3
            }]
          }, {
            name: 'note 3',
            value: 6
          }, {
            name: 'S5',
            value: 4
          }, {
            name: 'S6',
            value: 3
          }]
        }, {
          name: 'Millet ',
          value: 4
        }, {
          name: 'Apple',
          value: 4
        }, {
          name: 'Meizu',
          value: 3
        }, {
          name: 'Huawei',
          value: 2
        }, {
          name: 'Lenovo',
          value: 2
        }, {
          name: 'HP',
          value: 1
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



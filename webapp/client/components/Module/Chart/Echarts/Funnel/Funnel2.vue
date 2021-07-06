
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the funnel chart of the echarts library
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
        formatter: '{a} <br/>{b} : {c}%'
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
      legend: {
        data: ['Show', 'Click', 'Access', 'Advisory', 'Order']
      },
      calculable: true,
      series: [{
        name: ' Exp.',
        type: 'funnel',
        x: '10%',
        width: '80%',
        itemStyle: {
          normal: {
            label: {
              formatter: '{b} Exp.'
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b} Exp. : {c}%'
            }
          }
        },
        data: [{
          value: 60,
          name: 'Access'
        }, {
          value: 40,
          name: 'Advisory'
        }, {
          value: 20,
          name: 'Order'
        }, {
          value: 80,
          name: 'Click'
        }, {
          value: 100,
          name: 'Show'
        }]
      }, {
        name: ' Actual',
        type: 'funnel',
        x: '10%',
        width: '80%',
        maxSize: '80%',
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            label: {
              position: 'inside',
              formatter: '{c}%',
              textStyle: {
                color: '#fff'
              }
            }
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b} Actual : {c}%'
            }
          }
        },
        data: [{
          value: 30,
          name: 'Access'
        }, {
          value: 10,
          name: 'Advisory'
        }, {
          value: 5,
          name: 'Order'
        }, {
          value: 50,
          name: 'Click'
        }, {
          value: 80,
          name: 'Show'
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



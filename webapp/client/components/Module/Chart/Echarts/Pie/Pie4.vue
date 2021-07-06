
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
      title: {
        text: this.title,
        subtext: this.subtitle,
        x: 'center'
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
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
            type: ['pie', 'funnel']
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
        name: 'Radius',
        type: 'pie',
        radius: [20, 110],
        center: ['25%', 200],
        roseType: 'radius',
        width: '40%',
        // for funnel
        max: 40,
        // for funnel
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
              show: true
            }
          }
        },
        data: [{
          value: 10,
          name: 'rose1'
        }, {
          value: 5,
          name: 'rose2'
        }, {
          value: 15,
          name: 'rose3'
        }, {
          value: 25,
          name: 'rose4'
        }, {
          value: 20,
          name: 'rose5'
        }, {
          value: 35,
          name: 'rose6'
        }, {
          value: 30,
          name: 'rose7'
        }, {
          value: 40,
          name: 'rose8'
        }]
      }, {
        name: '面积模式',
        type: 'pie',
        radius: [30, 110],
        center: ['75%', 200],
        roseType: 'area',
        x: '50%',
        // for funnel
        max: 40,
        // for funnel
        sort: 'ascending',
        // for funnel
        data: [{
          value: 10,
          name: 'rose1'
        }, {
          value: 5,
          name: 'rose2'
        }, {
          value: 15,
          name: 'rose3'
        }, {
          value: 25,
          name: 'rose4'
        }, {
          value: 20,
          name: 'rose5'
        }, {
          value: 35,
          name: 'rose6'
        }, {
          value: 30,
          name: 'rose7'
        }, {
          value: 40,
          name: 'rose8'
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




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

  mounted () {},

  mixins: [defaultPropsMixin],

  data () {
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        show: true,
        trigger: 'item'
      },
      legend: {
        data: ['Cat. A', 'Cat. B', 'Cat. C', 'Cat. D']
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
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'Cat. A',
        type: 'bar',
        itemStyle: {
          // 系列级个性化样式，纵向渐变填充
          emphasis: {
            label: {
              show: true,
              position: 'top',
              formatter: '{a} {b} {c}',
              textStyle: {
                color: variablesColors.theme1
              }
            }
          }
        },
        data: [220, 232, 101, 234, 190, 330, 210]
      }, {
        name: 'Cat. B',
        type: 'bar',
        stack: 'T. Amount',
        data: [120, '-', 451, 134, 190, 230, 110]
      }, {
        name: 'Cat. C',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {// 系列级个性化
        },
        data: [320, 332, 100, 334, {
          value: 390,
          symbolSize: 10,
          // 数据级个性化
          itemStyle: {}
        }, 330, 320]
      }, {
        name: 'Cat. D',
        type: 'bar',
        barWidth: 40,
        // 系列级个性化，柱形宽度
        itemStyle: {
          normal: {
            // 系列级个性化，横向渐变填充
            borderRadius: 5,
            label: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          }
        },
        data: [620, 732, {
          value: 701,
          itemStyle: {
            normal: {
              label: {
                position: 'inside'
              }
            }
          }
        }, 734, 890, 930, 820],
        markLine: {
          data: [{
            type: 'average',
            name: 'Average'
          }, {
            type: 'max'
          }, {
            type: 'min'
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



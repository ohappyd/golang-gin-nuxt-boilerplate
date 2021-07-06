
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the gauge chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      tooltip: {
        formatter: '{a} <br/>{c} {b}'
      },
      toolbox: {
        show: false,
        feature: {
          mark: {
            show: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      series: [{
        name: 'Speed',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 220,
        splitNumber: 11,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 10
          }
        },
        axisTick: {
          // 坐标轴小标记
          length: 15,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {
          // 分隔线
          length: 20,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        title: {
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic'
          }
        },
        detail: {
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        data: [{
          value: 40,
          name: 'km/h'
        }]
      }, {
        name: 'Rotations',
        type: 'gauge',
        center: ['25%', '55%'],
        // 默认全局居In
        radius: '50%',
        min: 0,
        max: 7,
        endAngle: 45,
        splitNumber: 7,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 8
          }
        },
        axisTick: {
          // 坐标轴小标记
          length: 12,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {
          // 分隔线
          length: 20,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer: {
          width: 5
        },
        title: {
          offsetCenter: [0, '-30%'] // x, y，单位px

        },
        detail: {
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        data: [{
          value: 1.5,
          name: 'x1000 r/min'
        }]
      }, {
        name: 'Fuel',
        type: 'gauge',
        center: ['75%', '50%'],
        // 默认全局居In
        radius: '50%',
        min: 0,
        max: 2,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: [[0.2, '#ff4500'], [0.8, '#48b'], [1, '#228b22']],
            width: 8
          }
        },
        axisTick: {
          // 坐标轴小标记
          splitNumber: 5,
          length: 10,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {
          formatter: function (v) {
            switch (v + '') {
              case '0':
                return 'E'

              case '1':
                return 'Gas'

              case '2':
                return 'F'
            }
          }
        },
        splitLine: {
          // 分隔线
          length: 15,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer: {
          width: 2
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{
          value: 0.5,
          name: 'gas'
        }]
      }, {
        name: '水表',
        type: 'gauge',
        center: ['75%', '50%'],
        // 默认全局居In
        radius: '50%',
        min: 0,
        max: 2,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: [[0.2, '#ff4500'], [0.8, '#48b'], [1, '#228b22']],
            width: 8
          }
        },
        axisTick: {
          // 坐标轴小标记
          show: false
        },
        axisLabel: {
          formatter: function (v) {
            switch (v + '') {
              case '0':
                return 'H'

              case '1':
                return 'Water'

              case '2':
                return 'C'
            }
          }
        },
        splitLine: {
          // 分隔线
          length: 15,
          // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer: {
          width: 2
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{
          value: 0.5,
          name: 'gas'
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



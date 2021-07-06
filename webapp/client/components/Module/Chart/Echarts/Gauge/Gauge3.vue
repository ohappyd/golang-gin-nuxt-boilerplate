
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
        formatter: '{a} <br/>{b} : {c}%'
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
        name: 'KPI',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '90%'],
        // 默认全局居In
        radius: 320,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 150
          },
          itemStyle: {
            color: '#ffffff'
          }
        },
        axisTick: {
          // 坐标轴小标记
          splitNumber: 10,
          // 每份split细分多少段
          length: 12 // 属性length控制线长

        },
        axisLabel: {
          // 坐标轴文本标签，详见axis.axisLabel
          formatter: function (v) {
            switch (v + '') {
              case '10':
                return 'Low'

              case '50':
                return 'In'

              case '90':
                return 'High'

              default:
                return ''
            }
          },
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bolder'
          }
        },
        pointer: {
          width: 20,
          length: '90%',
          color: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
          show: true,
          offsetCenter: [0, '-60%'],
          // x, y，单位px
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#fff',
            fontSize: 30
          }
        },
        detail: {
          show: true,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: '#ccc',
          width: 100,
          height: 40,
          offsetCenter: [0, -40],
          // x, y，单位px
          formatter: '{value}%',
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontSize: 50
          }
        },
        data: [{
          value: 50,
          name: 'Comp. Rate'
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



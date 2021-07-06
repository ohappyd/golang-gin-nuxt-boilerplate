
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

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
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

        }
      },
      legend: {
        data: ['D. Inter.', 'E. Marketing', 'Adversing', 'Video Ad', 'S. Engine', 'Baidu', 'Google', 'Must', 'Other']
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        x: 'right',
        y: 'center',
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
        data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'D. Inter.',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320]
      }, {
        name: 'E. Marketing',
        type: 'bar',
        stack: 'AD',
        data: [120, 132, 101, 134, 90, 230, 210]
      }, {
        name: 'Adversing',
        type: 'bar',
        stack: 'AD',
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: 'Video Ad',
        type: 'bar',
        stack: 'AD',
        data: [150, 232, 201, 154, 190, 330, 410]
      }, {
        name: 'S. Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine: {
          itemStyle: {
            normal: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          data: [[{
            type: 'min'
          }, {
            type: 'max'
          }]]
        }
      }, {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'S. Engine',
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      }, {
        name: 'Google',
        type: 'bar',
        stack: 'S. Engine',
        data: [120, 132, 101, 134, 290, 230, 220]
      }, {
        name: 'Must',
        type: 'bar',
        stack: 'S. Engine',
        data: [60, 72, 71, 74, 190, 130, 110]
      }, {
        name: 'Other',
        type: 'bar',
        stack: 'S. Engine',
        data: [62, 82, 91, 84, 109, 110, 120]
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



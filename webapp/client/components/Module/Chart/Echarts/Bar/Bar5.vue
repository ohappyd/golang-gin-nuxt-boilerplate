
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the bar chart of the echarts library
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
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

        },
        formatter: function (params) {
          var tar

          if (params[1].value !== '-') {
            tar = params[1]
          } else {
            tar = params[0]
          }

          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
        }
      },
      legend: {
        data: ['Expend', 'Income']
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
      xAxis: [{
        type: 'category',
        splitLine: {
          show: false
        },
        data: (function () {
          var list = []

          for (var i = 1; i <= 11; i++) {
            list.push('Nov' + i + 'd')
          }

          return list
        }())
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'Assist',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
      }, {
        name: 'Income',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top'
            }
          }
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
      }, {
        name: 'Expend',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'bottom'
            }
          }
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
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



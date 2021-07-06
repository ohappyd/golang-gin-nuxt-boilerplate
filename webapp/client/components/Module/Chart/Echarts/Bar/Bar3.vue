
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
          return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '<br/>' + params[1].seriesName + ' : ' + (params[1].value + params[0].value)
        }
      },
      legend: {
        selectedMode: false,
        data: ['Acutal', 'Forecast']
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
      calculable: true,
      xAxis: [{
        type: 'category',
        data: ['Cosco', 'CMA', 'APL', 'OOCL', 'Wanhai', 'Zim']
      }],
      yAxis: [{
        type: 'value',
        boundaryGap: [0, 0.1]
      }],
      series: [{
        name: 'Acutal',
        type: 'bar',
        stack: 'sum',
        barCategoryGap: '50%',
        itemStyle: {
          normal: {
            barBorderWidth: 6,
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'insideTop'
            }
          }
        },
        data: [260, 200, 220, 120, 100, 80]
      }, {
        name: 'Forecast',
        type: 'bar',
        stack: 'sum',
        itemStyle: {
          normal: {
            barBorderColor: 'rgb(255,255,255)',
            barBorderWidth: 6,
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter: function (params) {
                for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                  if (option.xAxis[0].data[i] === params.name) {
                    return option.series[0].data[i] + params.value
                  }
                }
              }
            }
          }
        },
        data: [40, 80, 50, 80, 80, 70]
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



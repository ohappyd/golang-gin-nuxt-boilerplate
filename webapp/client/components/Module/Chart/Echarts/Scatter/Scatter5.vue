
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering scatter chart of the echarts library
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
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        }
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
      dataZoom: {
        show: true,
        start: 30,
        end: 70
      },
      legend: {
        data: ['series1', 'series2']
      },
      dataRange: {
        min: 0,
        max: 100,
        orient: 'horizontal',
        y: 30,
        x: 'center',
        splitNumber: 5
      },
      xAxis: [{
        type: 'category',
        axisLabel: {
          formatter: function (v) {
            return 'Cat ' + v
          }
        },
        data: (function () {
          var list = []
          var len = 0

          while (len++ < 500) {
            list.push(len)
          }

          return list
        }())
      }],
      yAxis: [{
        type: 'value'
      }],
      animation: false,
      series: [{
        name: 'series1',
        type: 'scatter',
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.seriesName + ' （' + 'Category' + params.value[0] + '）<br/>' + params.value[1] + ', ' + params.value[2]
          },
          axisPointer: {
            show: true
          }
        },
        symbolSize: function (value) {
          return Math.round(value[2] / 10)
        },
        data: (function () {
          var d = []
          var len = 0
          var value

          while (len++ < 500) {
            d.push([len, (Math.random() * 30).toFixed(2) - 0, (Math.random() * 100).toFixed(2) - 0])
          }

          return d
        }())
      }, {
        name: 'series2',
        type: 'scatter',
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.seriesName + ' （' + 'Category' + params.value[0] + '）<br/>' + params.value[1] + ', ' + params.value[2]
          },
          axisPointer: {
            show: true
          }
        },
        symbolSize: function (value) {
          return Math.round(value[2] / 10)
        },
        data: (function () {
          var d = []
          var len = 0
          var value

          while (len++ < 500) {
            d.push([len, (Math.random() * 30).toFixed(2) - 0, (Math.random() * 100).toFixed(2) - 0])
          }

          return d
        }())
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



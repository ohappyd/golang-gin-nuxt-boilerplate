
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the line chart of the echarts library
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
        formatter: function (params) {
          const date = new Date(params.value[0])
          const data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
          return data + '<br/>' + params.value[1] + ', ' + params.value[2]
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
        start: 70
      },
      legend: {
        data: ['series1']
      },
      grid: {
        y2: 80
      },
      xAxis: [{
        type: 'time',
        splitNumber: 10
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'series1',
        type: 'line',
        showAllSymbol: true,
        symbolSize: function (value) {
          return Math.round(value[2] / 10) + 2
        },
        data: (function () {
          var d = []
          var len = 0

          while (len++ < 200) {
            d.push([new Date(2014, 9, 1, 0, len * 10000), (Math.random() * 30).toFixed(2) - 0, (Math.random() * 100).toFixed(2) - 0])
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



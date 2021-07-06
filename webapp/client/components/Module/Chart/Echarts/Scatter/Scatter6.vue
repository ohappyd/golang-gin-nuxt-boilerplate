
<template>
<wrapper-echarts height="50px"
    title=""
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
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
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      let option = {
        title: {
          text: this.title,
          subtext: this.subtitle,
          show: false
        },

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        toolbox: {
          show: false
        },
        dataZoom: {
          show: false
        },
        dataRange: {
          min: 0,
          max: 100,
          show: false,
          orient: 'horizontal',
          y: 30,
          x: 'center',
          splitNumber: 5
        },
        grid: {
          show: false,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        xAxis: [{
          type: 'time',
          splitNumber: 10,
          show: false
        }],
        yAxis: [{
          type: 'value',
          show: false
        }],
        animation: true,
        series: [{
          name: 'series1',
          type: 'scatter',
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              var date = new Date(params.value[0])
              return params.seriesName + ' （' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '）<br/>' + params.value[1] + ', ' + params.value[2]
            },
            axisPointer: {
              type: 'cross',
              lineStyle: {
                type: 'dashed',
                width: 1
              }
            }
          },
          symbolSize: function (value) {
            return Math.round(value[2] / 10)
          },
          data: (function () {
            var d = []
            var len = 0
            var now = new Date()
            var value

            while (len++ < 150) {
              d.push([new Date(2014, 9, 1, 0, Math.round(Math.random() * 10000)), (Math.random() * 30).toFixed(2) - 0, (Math.random() * 100).toFixed(2) - 0])
            }

            return d
          }())
        }]
      }
      return option
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



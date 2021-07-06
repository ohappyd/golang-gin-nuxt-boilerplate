
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
        trigger: 'axis'
      },
      legend: {
        data: ['Highest Temp.', 'Lowest Temp.']
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
            type: ['line', 'bar']
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
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      }],
      series: [{
        name: 'Highest Temp.',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [{
            type: 'max',
            name: 'Maximum'
          }, {
            type: 'min',
            name: 'Minimum'
          }]
        },
        markLine: {
          data: [{
            type: 'average',
            name: 'Average'
          }]
        }
      }, {
        name: 'Lowest Temp.',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{
            name: 'Week Lowest',
            value: -2,
            xAxis: 1,
            yAxis: -1.5
          }]
        },
        markLine: {
          data: [{
            type: 'average',
            name: 'Average'
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



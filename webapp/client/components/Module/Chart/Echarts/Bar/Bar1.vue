
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
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
    const variablesColors = themeColors(this.$store.state.theme.skin)
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Key A', 'Key B']
      },
      toolbox: {
        show: false
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        data: ['1/19', '2/19', '3/19', '4/19', '5/19', '6/19', '7/19', '8/19', '9/19', '10/19', '11/19', '12/19']
      }],
      yAxis: [{
        type: 'value'

      }],
      series: [{
        name: 'Key A',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
      },
      {
        name: 'Key B',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [{
            name: ' Yr.Highest',
            value: 182.2,
            xAxis: 7,
            yAxis: 183,
            symbolSize: 18
          }, {
            name: ' Yr.Lowest',
            value: 2.3,
            xAxis: 11,
            yAxis: 3
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



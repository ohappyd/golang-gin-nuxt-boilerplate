
<template>
<wrapper-echarts :height="height"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering pie chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const areaOpacity = 0.05
      const lineWidth = 2
      const symbolSize = 0
      const mixed = 'mixed-1'
      let option = {
        color: [],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          show: false,
          data: ['E. Marketing', 'Adversing', 'Video Ad', 'D. Inter.', 'S. Engine']
        },
        toolbox: {
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun'],
            show: false
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          /*
          {

            name: 'E. Marketing',
            type: 'line',
            stack: 'T. Amount',
            symbolSize: symbolSize,
            itemStyle: { normal: { color: variablesColors.danger } },
            areaStyle: { opacity: areaOpacity, color: variablesColors.danger },
            lineStyle: { width: lineWidth, color: variablesColors.variantsObj.danger[mixed] },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Adversing',
            type: 'line',
            stack: 'T. Amount',
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors.dark },
            areaStyle: { opacity: areaOpacity, color: variablesColors.dark },
            lineStyle: { width: lineWidth, color: variablesColors.variantsObj.dark[mixed] },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ad',
            type: 'line',
            stack: 'T. Amount',
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors.theme1 },
            areaStyle: { opacity: areaOpacity, color: variablesColors.theme1 },
            lineStyle: { width: lineWidth, color: variablesColors.variantsObj.theme1[mixed] },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'D. Inter.',
            type: 'line',
            stack: 'T. Amount',
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors.secondary },
            areaStyle: { opacity: areaOpacity, color: variablesColors.secondary },
            lineStyle: { width: lineWidth, color: variablesColors.variantsObj.secondary[mixed] },
            data: [320, 332, 301, 334, 390, 330, 320]
          }, */
          {
            name: 'S. Engine',
            type: 'line',
            stack: 'T. Amount',
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors.primary },
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { opacity: areaOpacity, color: variablesColors.primary },
            lineStyle: { width: lineWidth, color: variablesColors.variantsObj.primary[mixed] },
            data: [ 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320 ]
          }
        ]
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



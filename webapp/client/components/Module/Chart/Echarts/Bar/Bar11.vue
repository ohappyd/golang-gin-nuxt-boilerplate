
<template>
<wrapper-echarts ref="chartEl"
    style="min-height: 240px;"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'
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

  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const barMaxWidth = 18
      const barBorderRadius = [4, 4, 3, 3]
      const barBorderWidth = 0
      const data = []
      const data2 = []
      const maxData = 12
      const yMax = 200
      const labelConfig = {
        show: true,
        fontSize: 13,
        fontWeight: 600,
        position: 'top'
      }
      faker.seed(2)

      for (var i = 0; i < maxData; i++) {
        data.push(faker.random.number({
          min: 1,
          max: 200
        }))// yMax)
        data2.push(faker.random.number({
          min: 1,
          max: 150
        }))// yMax)
      }

      let
        option = {
          // color: colors,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 1000,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              shadowStyle: {
                color: variablesColors.variantsObj.theme1['mixed'],
                shadowColor: variablesColors.variantsObj.theme1['mixed'],
                opacity: 0.3
              }
            }
          },

          grid: {
            bottom: 0,
            right: 40,
            left: 40,
            top: 8,
            show: false
          },
          toolbox: {
            show: false
          },
          legend: {
            show: false,
            data: ['Sale', 'Lead', 'Prevision']
          },
          xAxis:
{

  show: true,
  type: 'category',
  scale: false,

  axisLine: {
    show: false
  },
  splitLine: {
    show: false
  },
  axisTick: {
    alignWithLabel: true
  }

// data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13']
},

          yAxis:
{

  show: true,
  type: 'value',
  name: 'Unit',
  min: 0,
  max: yMax,

  position: 'right',
  axisTick: { show: false },
  splitLine: {
    show: true,
    lineStyle: {
      color: variablesColors.variantsObj.theme1.mixed,
      type: 'dashed'
    }
  },
  axisLine: {
    show: false,
    // showGrid: false,
    lineStyle: {
      color: variablesColors.variantsObj.secondary['mixed']
    }
  },
  axisLabel: {
    show: false,
    // formatter: '${value}',
    fontSize: 13,
    fontWeight: 500,
    color: variablesColors.variantsObj.secondary['mixed-1']
  }
},

          series: [

            {
              name: 'Lead',
              type: 'bar',
              barMaxWidth: barMaxWidth,
              barMinWidth: barMaxWidth,
              label: {
                ...labelConfig,
                color: variablesColors.variantsObj.secondary['base']
              },
              // yAxisIndex: 1,
              data: data2, // [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 130.7, 63, 36.0, 52.3, 7, 1],
              itemStyle: {
                barBorderRadius: barBorderRadius,
                color: variablesColors.variantsObj.secondary['mixed-1'],
                barBorderColor: variablesColors.variantsObj.secondary['base'],
                barBorderWidth
                // shadowColor: variablesColors.variantsObj.secondary['mixed-1'],
                // shadowBlur: 2,
                // shadowOffsetX: -1
                // opacity: 0.7
              }

            },
            {
              name: 'Sale',
              type: 'bar',
              data: data, // [13.0, 8.9, 12.0, 33.2, 15.6, 46.7, 95.6, 132.2, 100, 40.0, 26.3, 62.5, 18, 15, 20, 5, 10, 12, 15, 3, 4, 5, 10],
              barMaxWidth: barMaxWidth,
              barMinWidth: barMaxWidth,
              label: {
                ...labelConfig,
                color: variablesColors.variantsObj.primary['base']
              },
              itemStyle: {
                barBorderRadius: barBorderRadius,

                color: variablesColors.variantsObj.primary['mixed-1'],
                // shadowColor: variablesColors.variantsObj.primary['mixed-1'],
                // shadowBlur: 2,
                // shadowOffsetX: -1,
                barBorderColor: variablesColors.variantsObj.primary['base'],
                barBorderWidth
              }
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


<template>
<wrapper-echarts ref="chartEl"
    style="height: 100%; min-height: 240px;"
    :options="options"> </wrapper-echarts>
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
  mounted () {
    let dataIndex = -1

    // let dataLen = this.$refs.chartEl.options.series[0].data.length
    setInterval(() => {
      this.$refs.chartEl.dispatchAction({
        type: 'downplay',
        seriesIndex: [0, 1],
        dataIndex: [dataIndex, dataIndex + 1]
      })

      dataIndex = (dataIndex + 2) % 10

      this.$refs.chartEl.dispatchAction({
        type: 'highlight',
        seriesIndex: [0, 1],
        dataIndex: [dataIndex, dataIndex + 1]
      })
    }, 3000)
  },
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)

      /* var colors = [
variablesColors.variantsObj.primary['mixed-1'],
variablesColors.variantsObj.primary['base'],
variablesColors.variantsObj.theme1['mixed']
]
*/
      let
        option = {
          // color: colors,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 1000,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            bottom: 0,
            right: 0,
            left: '40px',
            top: '22px',
            show: false
          },
          toolbox: {
            show: false
          },
          legend: {
            show: false,
            data: ['Sale', 'Lead', 'Prevision']
          },
          xAxis: [
            {

              show: false,
              type: 'category',

              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                alignWithLabel: true
              },

              data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15']
            }

          ],
          yAxis: [
            {
              type: 'value',
              name: 'Sale',
              min: 0,
              max: 250,
              show: false,
              showGrid: false,
              splitLine: {
                show: false
              },
              position: 'right',

              axisLabel: {
                formatter: '{value} $'
              }
            },
            {
              type: 'value',
              name: 'Lead',
              min: 0,
              max: 250,
              show: false,
              position: 'right',
              offset: 80,
              axisLabel: {
                formatter: '{value} Win Ratio'
              }
            },
            {
              type: 'value',
              name: 'Unit',
              min: 0,
              max: 250,
              position: 'left',
              splitLine: {
                show: true,
                lineStyle: {
                  color: variablesColors.variantsObj.theme1.mixed,
                  type: 'dashed'
                }
              },
              axisLine: {
                showGrid: false,
                lineStyle: {
                  color: variablesColors.variantsObj.secondary['mixed']
                }
              },
              axisLabel: {
                // formatter: '${value}',
                fontSize: 13,
                fontWeight: 500,
                color: variablesColors.variantsObj.secondary['mixed-1']
              }
            }
          ],
          series: [
            {
              name: 'Sale',
              type: 'bar',
              data: [1.0, 3.9, 4.0, 13.2, 15.6, 46.7, 95.6, 132.2, 100, 40.0, 26.3, 32.5, 5, 1],
              barMaxWidth: 25,
              itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: variablesColors.variantsObj.primary['mixed-1']
              },
              emphasis: {
                itemStyle: {
                  color: variablesColors.variantsObj.primary['base']
                }
              },
              barGap: '-80%',
              zlevel: 1

            },
            {
              name: 'Lead',
              type: 'bar',
              barMaxWidth: 25,
              yAxisIndex: 1,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 130.7, 63, 36.0, 52.3, 7, 1],
              itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: variablesColors.variantsObj.primary['mixed']
              },
              emphasis: {
                itemStyle: {
                  color: variablesColors.variantsObj.primary['mixed-1']
                }
              }

            },
            {
              name: 'Conversion Rate',
              type: 'line',
              yAxisIndex: 2,
              data: [20, 22, 33, 45, 63, 102, 203, 234, 190, 125, 70, 90, 25, 25, 25, 25],
              itemStyle: {
                color: variablesColors.variantsObj.primary['mixed']
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



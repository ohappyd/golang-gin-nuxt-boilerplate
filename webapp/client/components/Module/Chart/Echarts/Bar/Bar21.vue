
<template>
<wrapper-echarts ref="chartEl"
    style="min-height: 240px;"
    :options="options"
    @finished="handleRendered"> </wrapper-echarts>
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
    return { timer: null, dataIndex: 0, isAnimated: false }
  },

  methods: {
    handleRendered (params) {
      // Receive event finalized from echarts instance
      const isAnimatedNow = window.innerWidth > 576

      // Init animation
      if (isAnimatedNow && !this.isAnimated) {
        this.initAnimation()
      }
      // Stop animation on low resolution
      if (!isAnimatedNow && this.isAnimated) {
        if (this.timer != null) { clearInterval(this.timer) }
        this.timer = null
        this.$refs.chartEl.dispatchAction({
          type: 'hideTip'
        })
      }
    },
    initAnimation () {
      this.isAnimated = true
      this.$nextTick(() => {
        this.$refs.chartEl.dispatchAction({
          type: 'showTip',
          seriesIndex: 1,
          dataIndex: 0
        })
      })

      // let dataLen = this.$refs.chartEl.options.series[0].data.length
      this.timer = setInterval(() => {
        if (!this.$refs.chartEl) return

        this.dataIndex = this.dataIndex + 1

        this.$refs.chartEl.dispatchAction({
          type: 'hideTip'
        })

        this.$refs.chartEl.dispatchAction({
          type: 'showTip',
          seriesIndex: 1,
          dataIndex: this.dataIndex % 20
        })
      }, 5000)
    }

  },

  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const barMaxWidth = 12
      const barBorderRadius = [3, 3, 0, 0]

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
                color: variablesColors.variantsObj.secondary['mixed'],
                shadowColor: variablesColors.variantsObj.secondary['mixed'],
                opacity: 0.5
              }
            }
          },

          grid: {
            bottom: 0,
            right: 0,
            left: '32px',
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

              data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20']
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
              position: 'left',

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
              // offset: 80,
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
              data: [1.0, 3.9, 4.0, 13.2, 15.6, 46.7, 95.6, 132.2, 100, 40.0, 26.3, 32.5, 5, 1, 4, 5, 6, 7, 8, 9],
              barMaxWidth: barMaxWidth,
              itemStyle: {
                barBorderRadius: barBorderRadius,
                color: variablesColors.variantsObj.primary['base']
              },

              barGap: '-60%',
              zlevel: 1

            },
            {
              name: 'Lead',
              type: 'bar',
              barMaxWidth: barMaxWidth,
              yAxisIndex: 1,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 130.7, 63, 36.0, 52.3, 47, 31, 34, 25, 36, 17, 8, 9],
              itemStyle: {
                barBorderRadius: barBorderRadius,
                color: variablesColors.variantsObj.theme1['mixed-1']
              }

            },
            {
              name: 'Conversion Rate',
              type: 'line',
              yAxisIndex: 2,
              data: [20, 22, 33, 45, 63, 102, 217, 234, 190, 125, 70, 90, 65, 55, 60, 42, 50, 35, 36, 37, 18, 39],
              itemStyle: {
                color: variablesColors.variantsObj.theme1['mixed-1']
              }
            }
          ]
        }

      return option
    }
  }

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

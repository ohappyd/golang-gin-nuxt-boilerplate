
<template>
<wrapper-echarts :options="options"
    :height="height"
    :width="width"> </wrapper-echarts>
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
      const data = []
      const maxSerie = 70
      for (let i = 0; i < maxSerie; i++) {
        data.push(faker.random.number({ min: 1, max: 30 }))
      }
      const colorList = [
        variablesColors.variantsObj.primary['mixed-1'],
        variablesColors.variantsObj.primary['mixed'],
        variablesColors.variantsObj.secondary['mixed-1']

      ]

      let option = {
        colors: colorList,
        grid: {
          borderWidth: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: [{
          type: 'category',
          show: false

          // data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Gauge', 'Funnel']
        }],
        yAxis: [{
          type: 'value',
          show: false,
          max: 120
        }],
        series: [{
          name: 'ECharts Statistics',
          type: 'bar',
          itemStyle: {
            normal: {
              // opacity: 0.70,
              color: function (params) {
                // build a color map as your need.

                return params.value < 5 ? variablesColors.variantsObj.danger['mixed-1'] : colorList[params.dataIndex % colorList.length]
              },
              label: {
                show: false
              }
            }
          },
          data: data
        }]
      }

      return option
    }
  },

  methods: {}
}

</script>




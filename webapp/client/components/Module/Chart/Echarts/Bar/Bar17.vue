
<template>
<client-only>
    <v-chart style="width: 100%; height: 50px"
        autoresize
        :options="options" />
</client-only>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'

/*
Example of component for rendering the bar chart of the echarts library
*/
export default {
  components: {
  },
  props: {
    functionName: {
      type: String,
      default: 'sinusoidalInOut'
    },
    title: {
      type: String,
      default: 'Widget Title Propertie'
    },
    seedRandom: {
      type: Array,
      default: () => [true, 80, false, 5, 5]
    }
  },
  computed: {
    options () {
      const variableColors = themeColors(this.$store.state.theme.skin)
      let option = {
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false
        // data: ['Mon2', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          show: false,
          type: 'value'

        },
        grid: {
          right: 0,
          left: '0%',
          top: 0,
          bottom: '0%'
        },
        series: [{
          data: [120, 120, 120, 932, 1901, 834, 1290, 1330, 1720, 1900, 700, 1200],
          type: 'bar',
          itemStyle: {
            color: variableColors.variantsObj.primary.base
          }
        },
        {
          data: [320, 220, 420, 532, 901, 1834, 290, 1430, 1520, 1960, 900, 800],
          type: 'bar',
          itemStyle: {
            color: variableColors.variantsObj.primary['mixed-1']
          }
        }
        ]

      }

      return option
    }
  }
}

</script>




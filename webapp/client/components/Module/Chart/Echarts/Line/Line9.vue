
<template>
<wrapper-echarts :height="height"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

let cache = new Map()

/*
Example of component for rendering pie chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  props: { variant: { type: String, default: 'primary' } },

  data () {
    return { symbolData: 'circle' }
  },

  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const areaOpacity = 1.0
      const lineWidth = 2
      const symbolSize = 0
      const mixed = 'mixed-1'
      const mixedArea = 'mixed'

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
        label: {
          show: false
        },
        grid: {
          top: 20,
          left: 0,
          right: 0,
          bottom: 0
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun'],
            show: false,

            axisLabel: { show: false }
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [

          {
            name: 'S. Engine',
            type: 'bar',
            // symbol: this.symbolData,
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors[this.variant] },

            barMaxWidth: 15,
            barCategoryGap: '80%',

            areaStyle: {
              opacity: areaOpacity,
              color: variablesColors.variantsObj[this.variant][mixedArea]
            },
            lineStyle: {
              width: lineWidth,
              color: variablesColors.variantsObj[this.variant][mixed]
            },
            data: [ 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320 ]
          }
        ]
      }

      return option
    }
  },
  created () {

  },

  methods: {
    // Change default SVG icon color
    fixColor (strSvg) {
      let newSvg = strSvg
      newSvg = this.replaceAll(newSvg, '#FF6E6E', variablesColors.variantsObj[this.variant]['mixed-1'])
      newSvg = this.replaceAll(newSvg, '#0C0058', variablesColors.variantsObj[this.variant]['base'])
      newSvg = this.replaceAll(newSvg, '#FFFFFF', variablesColors.theme1inv)

      return newSvg
    },
    // Replace all function
    replaceAll (str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace)
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



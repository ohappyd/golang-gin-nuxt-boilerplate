
<template>
<wrapper-echarts :height="height"
    :width="width"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'
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

  props: {
    variant: { type: String, default: 'primary' },
    seed: { type: Number, default: 1 }
  },

  data () {
    return { symbolData: 'circle' }
  },

  computed: {
    options () {
      faker.seed(this.seed)
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const areaOpacity = 1.0
      const lineWidth = 2
      const symbolSize = 0
      const mixed = 'mixed-1'
      const mixedArea = 'mixed'

      const data = []
      const maxSerie = 10
      for (let i = 0; i < maxSerie; i++) {
        data.push(faker.random.number({ min: 20, max: 100 }))
      }

      let option = {
        color: [],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'

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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            show: false,

            axisLabel: { show: false }
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false,
            max: 100

          }
        ],
        series: [

          {
            name: 'S. Engine',
            type: 'bar',
            // symbol: this.symbolData,
            symbolSize: symbolSize,
            itemStyle: { color: variablesColors[this.variant], barBorderRadius: 4 },

            barMaxWidth: 5,
            barCategoryGap: '80%',
            barRadius: 2,

            data: data
          }
        ]
      }

      return option
    }
  },

  methods: {

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



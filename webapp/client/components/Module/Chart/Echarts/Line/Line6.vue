
<template>
<client-only>

    <v-chart style="width: 100%; height: 40px; min-width: 50px;"
        autoresize
        :options="options" />

</client-only>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'

import echarts from 'echarts'

/*
Example of component for rendering the line chart of the echarts library
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
    },
    mainColor: {
      type: String,
      default: 'primary'
    },
    graphOpacity: {
      type: Number,
      default: 1.0
    },
    twoLines: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getRandomData (max = 20, minRange = 300, maxRange = 999) {
      const data = []
      let i = 0

      while (i < max) {
        i++
        data.push(faker.random.number({ min: minRange, max: maxRange }))
      }
      return data
    },
    getRandomPlus (list, plusValue) {
      const newList = [...list]
      for (let i = 0; i < list.length; i++) {
        newList[i] += plusValue
      }

      return newList
    }
  },
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const randomSerie = this.getRandomData(20, 10, 170)

      const options = {
        // color: variablesColors.chartPallete.split(','),
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false
          // data: ['Mon2', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },

        yAxis: {
          show: false,
          max: 250,
          type: 'value'

        },
        grid: {
          right: 0,
          left: '0%',
          top: 0,
          bottom: '0%'
        },
        series: [{
          symbol: 'none',
          data: randomSerie,
          smooth: false,
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                { offset: 0, color: variablesColors.variantsObj[this.mainColor]['mixed-1'] },
                { offset: 1, color: variablesColors.variantsObj[this.mainColor]['mixed'] }
              ]
              // color: variablesColors.variantsObj[this.mainColor]['mixed']
            )
            // color: variablesColors.variantsObj[this.mainColor]['mixed'],
            // opacity: 0.1
          },
          lineStyle: {
            color: variablesColors.variantsObj[this.mainColor]['base'],
            width: 2
            // opacity: 0.6
          }
        }
        ]

      }
      return options
    }
  }
}

</script>


<style lang="scss" scoped>
.card-widget-shadow {
  -webkit-box-shadow: 5px 5px 0px 0px #273eb9d9, 10px 10px 0px 0px #5fb8ff59,
    15px 15px 0px 0px #5827b980, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 0px 0px #273eb9d9, 10px 10px 0px 0px #5fb8ff59,
    15px 15px 0px 0px #5827b980, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}

</style>



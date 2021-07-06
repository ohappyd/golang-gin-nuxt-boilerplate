
<template>
<client-only>
    <v-chart style="height: 100%;"
        autoresize
        :options="options" />
</client-only>
</template>
<script>
import { easingFuncs } from '@@/client/util/theme/easingFuncs.js'

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
    colorList: {
      type: Array,
      default: () => []
    },
    maxSerie: {
      type: Number,
      default: 80
    }
  },
  data () {
    // var N_POINT = 150

    // const variablesColors = themeColors(this.$store.state.theme.skin)
    const barBorderRadius = [5, 5, 0, 0]
    var data = easingFuncs.generateFullRandomSerie(this.maxSerie, 50, 80)
    var data2 = easingFuncs.generateFullRandomSerie(this.maxSerie, 50, 230)
    var data3 = easingFuncs.generateFullRandomSerie(this.maxSerie, 3, 20)

    let option = {
      color: this.colorList,
      xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false
        // data: ['Mon2', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        show: false,
        type: 'value',
        max: 400

      },
      grid: {
        right: 0,
        left: '0%',
        top: 0,
        bottom: '0%'
      },
      series: [{
        data: data, // [120, 120, 120, 932, 1901, 834, 1290, 1330, 1720, 1900, 700, 1200],
        type: 'bar',
        itemStyle: {
          // color: '#fff',
          opacity: 1,
          barBorderRadius: barBorderRadius
        },
        barCategoryGap: '50%'
      },
      {
        data: data2,
        type: 'bar',
        itemStyle: {
          // color: '#fff',
          opacity: 1,
          barBorderRadius: barBorderRadius
        },
        barCategoryGap: '50%'
      },
      {
        data: data3,
        type: 'bar',
        barCategoryGap: '50%',
        itemStyle: {
          // color: '#fff',
          opacity: 1,
          barBorderRadius: barBorderRadius
        }
      }
      ]

    }

    return {
      options: option
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



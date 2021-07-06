
<template>
<div>
    <b-card no-body
        :class="card-Class">
        <b-container>
            <b-row class="pt-0">
                <b-col>{{title}}
                </b-col>
            </b-row>
            <b-row class="pt-0">
                <b-col cols="12">
                    <client-only>
                        <v-chart style="width: 100%; height: 120px"
                            autoresize
                            :options="options" />
                    </client-only>
                </b-col>
                <b-col cols="12">
                    <h4 class="text-center">15%</h4>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import { easingFuncs } from '@@/client/util/theme/easingFuncs.js'

/*
Example of component for rendering  simple line chart inside card
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
    cardClass: {
      type: String,
      default: 'no-bg'
    }
  },
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      var N_POINT = 150
      var data = []
      for (var i = 0; i <= N_POINT; i++) {
        var x = i / N_POINT
        var y = easingFuncs[this.functionName](x)
        data.push([x, y])
      }
      let option = {
        color: variablesColors.chartPallete.split(','),
        xAxis: [{
          type: 'value',
          show: false,
          min: 0,
          max: 1
        }],
        yAxis: [{
          type: 'value',
          show: false,
          min: -0.4,
          max: 1.4
        }],
        grid: {
          right: 0,
          left: 0,
          top: 0,
          bottom: 0
        },
        series: [{
          name: this.functionName,
          type: 'line',
          data,
          showSymbol: false,
          animationEasing: this.functionName,
          animationDuration: 1000
        }]
      }

      return option
    }
  }
}

</script>




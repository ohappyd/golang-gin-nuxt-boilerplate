
<template>
<div class="chart-item">
    <apexchart type="radialBar"
        height="145px"
        width="100px"
        :options="chartOptions"
        :series="series" />

    <slot> </slot>
</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'

import VueApexCharts from 'vue-apexcharts'

/*
Example of component for rendering radial guage inside a card
*/
export default {
  props: {
    variant: { default: 'primary' },
    data: { default: () => [30, 60] }
  },
  components: {
    apexchart: VueApexCharts
  },
  data: function () {
    const variablesColors = themeColors(this.$store.state.theme.skin)

    return {
      series: this.data,

      chartOptions: {

        plotOptions: {
          radialBar: {

            // startAngle: 0,
            // endAngle: 270,
            track: {
              background: variablesColors.variantsObj[this.variant]['mixed']
            },
            hollow: {
              margin: 1,

              size: '10%',
              background: 'transparent',
              image: undefined
            },
            dataLabels: {
              name: {
                show: false

              },
              value: {
                show: false
              }
            }
          }
        },

        colors: [
          variablesColors.variantsObj[this.variant]['base'],
          variablesColors.variantsObj['secondary']['base']
        ],
        labels: ['Vimeo', 'Messenger'],
        stroke: {
          lineCap: 'round',
          dashArray: 7
        },
        legend: {
          show: false,
          floating: true,
          fontSize: '12px',
          position: 'left',
          fontFamily: 'Poppins, "Helvetica Neue", Arial, sans-serif',
          offsetX: 5,
          // offsetY: 10,
          labels: {
            colors: [
              variablesColors.variantsObj.secondary['base'],
              variablesColors.variantsObj.secondary['base']
            ],
            useSeriesColors: false
          },
          markers: {
            width: 0,
            height: 0
          },
          formatter: function (seriesName, opts) {
            return opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      }
    }
  }

}

</script>


<style lang="scss" scoped>
.chart-item {
  position: relative;
}

</style>



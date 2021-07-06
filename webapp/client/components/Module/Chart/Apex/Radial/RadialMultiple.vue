
<template>
<div class="chart-item d-flex justify-content-center">
    <apexchart type="radialBar"
        style="width: 100%; max-width: 351px;"
        height="340px"
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
    data: { default: () => [30, 80, 95] }
  },
  components: {
    apexchart: VueApexCharts
  },
  data: function () {
    const variablesColors = themeColors(this.$store.state.theme.skin)

    return {
      series: this.data,

      chartOptions: {

        chart: {
          parentHeightOffset: 0,
          foreColor: variablesColors.variantsObj['theme1']['base'],
          toolbar: { show: false },
          fontFamily: 'Poppins, "Helvetica Neue", Arial, sans-serif',
          height: '100px'
        },

        plotOptions: {
          radialBar: {
            offsetY: 40,
            // startAngle: 0,
            // endAngle: 270,
            hollow: {
              margin: 1,
              size: '70%',
              background: 'transparent',
              image: undefined
            },
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        colors: [
          variablesColors.variantsObj[this.variant]['base'],
          variablesColors.variantsObj[this.variant]['mixed-1']
        ],
        labels: ['Vimeo', 'Messenger'],
        stroke: {
          lineCap: 'round'
        },
        legend: {
          show: false,
          // floating: true,
          // fontSize: '12px',
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
}

</style>



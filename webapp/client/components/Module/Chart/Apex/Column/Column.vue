
<template>
<apexchart type="bar"
    class="chart-item"
    width="100%"
    :options="chartOptions"
    :series="series" />
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'

import VueApexCharts from 'vue-apexcharts'

/*
Example of component for rendering radial guage inside a card
*/
export default {
  props: {
    variant: { default: 'primary' }

  },
  components: {
    apexchart: VueApexCharts
  },
  data: function () {
    const variablesColors = themeColors(this.$store.state.theme.skin)
    const self = this

    return {
      series: [{
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
          5.8, 2, 7.37, 8.1, 13.57, 25.75, 27.1, 29.8, 37.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
      }],

      chartOptions: {

        chart: {

          foreColor: variablesColors.variantsObj['theme1']['base'],
          toolbar: { show: false },
          fontFamily: 'Poppins, "Helvetica Neue", Arial, sans-serif'
        },

        plotOptions: {
          bar: {
            endingShape: 'rounded',
            columnWidth: '50%'
          }

        },

        fill: {
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value < 0) {
                return variablesColors.variantsObj[self.variant]['mixed-1']
              } else {
                return variablesColors.variantsObj[self.variant]['base']
              }
            }
          ]
        },
        /*
        colors: [
          variablesColors.variantsObj[this.variant]['base'],
          variablesColors.variantsObj[this.variant]['mixed-1']
        ], */

        grid: {
          show: false },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          show: false,
          title: {
            text: 'Growth'
          },
          labels: {
            show: false,
            rotate: -90
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        xaxis: {
          show: false,
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            show: false,
            rotate: -90
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }

      }

    }
  }
}

</script>


<style lang="scss" scoped>
.chart-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>



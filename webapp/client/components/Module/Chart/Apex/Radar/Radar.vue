
<template>
<div class="chart-item">
    <apexchart type="radar"
        height="450"
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

  data () {
    const variablesColors = themeColors(this.$store.state.theme.skin)

    return {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80]
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10]
      }],

      chartOptions: {
        plotOptions: {
          radar: {
            polygons: {
              fill: {
                colors: [variablesColors.variantsObj['theme1inv']['base']]
              },
              connectorColors: variablesColors.variantsObj['theme1']['mixed'],
              strokeColors: variablesColors.variantsObj['theme1']['mixed']
            }
          }
        },
        colors: [
          variablesColors.variantsObj['primary']['mixed-1'],
          variablesColors.variantsObj['primary']['mixed'],
          variablesColors.variantsObj['primary']['base']
        ],
        chart: {
          dropShadow: {
            enabled: false,
            blur: 1,
            left: 1,
            top: 1
          },
          foreColor: variablesColors.variantsObj['theme1']['base'],
          toolbar: { show: false },
          fontFamily: 'Poppins, "Helvetica Neue", Arial, sans-serif'
        },
        title: {

        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.8
        },
        markers: {
          size: 0

        },
        labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
        yaxis: {

          labels: {
            style: {
              color: variablesColors.variantsObj['secondary']['base']
            }
          }
        },
        dataLabels: {
          textAnchor: 'middle',
          style: {
            fontSize: '14px',
            colors: [variablesColors.variantsObj['theme1']['base']]
          }
        }

      }
    }
  }

}

</script>




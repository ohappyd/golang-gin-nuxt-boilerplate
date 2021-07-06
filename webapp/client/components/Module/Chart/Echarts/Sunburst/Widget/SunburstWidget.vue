
<template>
<b-card header-tag="header"
    no-body
    class="text-secondary border-0 shadow">
    <h6 slot="header"
        class="mb-0">
        <chart-toolbar compact />
    </h6>
    <b-card-body class="p-4 pb-0 h-100">

        <sunburst1> </sunburst1>
    </b-card-body>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import { easingFuncs } from '@@/client/util/theme/easingFuncs.js'
import ChartToolbar from '@/components/Module/Chart/ChartToolbar'
import Sunburst1 from '@/components/Module/Chart/Echarts/Sunburst/Sunburst1'

/*
Example of complex echarts card with toolbar
*/
export default {
  components: {
    ChartToolbar,
    Sunburst1
  },
  computed: {
    options () {
      const lineWidth = 2
      const lineSmooth = false
      const symbolSize = 15
      const iconSymbol = 'roundRect'
      const variablesColors = themeColors(this.$store.state.theme.skin)
      let options = {
        legend: {
          right: 0,
          bottom: 0,
          itemHeight: 13,

          formatter (name) {
            return name.toUpperCase()
          },

          data: [{
            name: 'Budget Revenue',
            icon: iconSymbol
          }, {
            name: 'Market Shared',
            icon: iconSymbol
          }, {
            name: 'New Invoices',
            icon: iconSymbol
          }, {
            name: 'Budget Revenue 2',
            icon: iconSymbol
          }],
          textStyle: {
            color: '#000' // backgroundColor: 'red'

          }
        },
        xAxis: {
          type: 'category',

          boundaryGap: false,
          show: false
        },
        grid: {
          top: 1,
          right: 1,
          left: 1,
          bottom: 0
        },
        yAxis: {
          axisLabel: {
            color: '#000',
            formatter: '{value}'
          },
          axisTick: {
            show: true
          },
          type: 'value',
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          // Line 1
          name: 'Budget Revenue',
          data: easingFuncs.generateRandomSerie(true, 40, false, 8, 3, 20),

          type: 'line',
          smooth: lineSmooth,
          symbol: iconSymbol,
          symbolSize: symbolSize,
          itemStyle: {
            color: variablesColors.primary
          },
          lineStyle: {
            width: lineWidth
          }
        }, {
          // Line 2
          name: 'Budget Revenue 2',
          data: easingFuncs.generateRandomSerie(true, 40, false, 5, 5, 20),

          type: 'line',
          smooth: lineSmooth,
          symbol: iconSymbol,
          symbolSize: symbolSize,
          itemStyle: {
            color: variablesColors.theme1
          },
          lineStyle: {
            width: lineWidth
          }
        }, {
          // Line 3
          data: easingFuncs.generateRandomSerie(false, 40, false, 5, 5, 20),
          // [920, 432, 401, 834, 1190, 1130, 1220, 1220, 1220],
          name: 'Market Shared',
          type: 'line',
          smooth: lineSmooth,
          symbolSize: symbolSize,
          symbol: iconSymbol,
          itemStyle: {
            color: variablesColors.secondary
          },
          lineStyle: {
            width: lineWidth
          }
        }, {
          // Line 4
          data: easingFuncs.generateRandomSerie(false, 40, false, 1, 1, 5),
          // [620, 832, 811, 934, 990, 810, 920, 1020, 1011],
          name: 'New Invoices',
          type: 'line',
          smooth: lineSmooth,
          symbolSize: symbolSize,
          symbol: iconSymbol,
          itemStyle: {
            color: variablesColors.danger
          },
          lineStyle: {
            width: lineWidth
          } // #

        }]
      }
      return options
    }

  },
  methods: {
    onMouseOver (legend) {
      this.legends.map(legend => {
        if (legend.class.includes('active')) legend.class.splice(legend.class.indexOf('active'), 1)
      })
      legend.class.push('active')
    }

  }
}

</script>




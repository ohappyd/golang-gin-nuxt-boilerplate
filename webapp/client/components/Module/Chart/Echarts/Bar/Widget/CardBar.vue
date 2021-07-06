
<template>
<b-card header-tag="header"
    no-body
    class="text-secondary border-0 shadow">
    <b-card-header>
        <card-title :title="title"
            subTitle="Current Period"> </card-title>
    </b-card-header>

    <b-card-body class="ig-p-1">
        <div class="text-theme1 ig-header-container">

            <div class=" ">
                <div :class2="'bg-'+mainColorName"
                    class="icon-rounded m-sm-auto text-theme1 mixed-1">
                    <i :class="iconClass" /></div>

            </div>
            <div class="text-center my-3">
                <div class>
                    <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Units</p>
                    <p class="text-24 mb-0 number"> {{formatNumber(amount1)}}

                    </p>
                    <span class="text-11  opacity-7 percentage"
                        :class="percentClass">
                        &lt; 13%
                    </span>

                </div>

            </div>
            <div class="w-100">

                <client-only>
                    <v-chart style="width: 100%; height: 100px;"
                        autoresize
                        :options="options" />
                </client-only>

            </div>

        </div>

        <div>

        </div>

    </b-card-body>

</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'

/*
Example of complex echarts card with toolbar
*/

export default {
  components: {
    CardTitle
  },
  props: {
    title: {
      type: String,
      default: 'Sales Growth'
    },
    seedRandom: {
      type: Array,
      default: () => [false, 40, false, 2, 2, 5]
    },
    mainColorName: {
      type: String,
      default: 'primary'
    },
    randomSeed: {
      type: Number,
      default: 1
    },
    iconClass: {
      type: String,
      default: 'la la-cart-plus'
    },
    iconBgClass: {
      type: String,
      default: 'bg-primary inverse'
    },
    type: {
      type: String,
      default: 'bar'
    },

    xAxisType: {
      type: String,
      default: 'category'
    },
    yAxisType: {
      type: String,
      default: 'value'
    },

    lineSmooth: {
      type: Boolean,
      default: false
    },

    percentClass: {
      type: String,
      default: 'text-primary'
    }
  },
  data () {
    return {
      amount1: faker.finance.amount() * 10,
      amount2: faker.finance.amount() * 70,
      mixed1: 'base',
      barBorderWidth: 2

    }
  },
  mounted () {
    faker.seed(Math.random())
  },
  computed: {

    seriesBar2 () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const barBorderRadius = 2

      const maxSerie = 3

      const serie2 = []
      const serie3 = []

      for (var i = 0; i < maxSerie; i++) {
        serie2.push(
          faker.random.number({ min: 40, max: 690 })
        )
        serie3.push(
          faker.random.number({ min: 20, max: 300 })
        )
      }

      return [

        {
          data: serie3,
          name: 'New Lead',
          type: 'bar',
          stack: 'a',
          // barCategoryGap: '80%',
          itemStyle: {
            color: variablesColors.variantsObj['secondary']['mixed'],
            barBorderColor: variablesColors.variantsObj['secondary'][this.mixed1],
            barBorderWidth: this.barBorderWidth,
            barBorderRadius
          }
        },

        {
          data: serie2,
          name: 'New Contact',
          type: 'bar',
          barCategoryGap: '30%',
          // barGap: '30%',
          // barWidth: 1,
          // stack: 'a',
          itemStyle: {
            color: variablesColors.variantsObj[this.mainColorName]['mixed'],
            barBorderColor: variablesColors.variantsObj[this.mainColorName][this.mixed1],

            barBorderWidth: this.barBorderWidth,
            barBorderRadius
          }

        }

      ]
    },

    seriesBar () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const barBorderRadius = 4
      const barBorderColor = variablesColors.variantsObj[this.mainColorName]['base']

      const maxSerie = 11
      const serie = []

      for (var i = 0; i < maxSerie; i++) {
        serie.push(
          faker.random.number({ min: 80, max: 260 })
        )
      }

      return [{
        data: serie,
        name: 'New Orders',
        type: 'bar',
        barCategoryGap: '50%',
        itemStyle: {
          color: variablesColors.variantsObj[this.mainColorName]['mixed'],
          barBorderRadius,
          barBorderColor,
          barBorderWidth: this.barBorderWidth
        }
      }
      ]
    },

    seriesLine () {
      const lineWidth = 2
      const variablesColors = themeColors(this.$store.state.theme.skin)
      const serie = []
      const serie2 = []
      const maxSerie = 20

      for (var i = 0; i < maxSerie; i++) {
        serie.push(
          faker.random.number({ min: 20, max: 79 })
        )
        serie2.push(
          faker.random.number({ min: 80, max: 160 })
        )
      }
      return [{
        data: serie,
        name: 'New Invoices',
        type: 'line',
        symbolSize: 0,
        smooth: this.lineSmooth,
        lineStyle: {
          width: lineWidth,
          color: variablesColors.variantsObj[this.mainColorName][this.mixed1]
        },
        areaStyle: {
          color: variablesColors.variantsObj[this.mainColorName]['mixed']
        }
      },
      {
        data: serie2,
        name: 'New Sales',
        type: 'line',
        symbolSize: 0,
        smooth: this.lineSmooth,

        lineStyle: {
          width: this.barBorderWidth,
          color: variablesColors.variantsObj['secondary'][this.mixed1]

        },
        areaStyle: {
          color: variablesColors.variantsObj['secondary']['mixed']
        }
      }
      ]
    },
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)

      let options = {
        legend: {
          show: false
        },
        grid: {
          top: 10,
          right: 10,
          left: 32,
          bottom: 10,
          containLabel: false

        },
        xAxis: {
          type: this.xAxisType, // 'category',
          show: false,
          min: this.xAxisType !== 'category' ? -35 : 0,
          max: this.xAxisType !== 'category' ? 700 : 10,
          boundaryGap: true,

          axisTick: {
            show: true,
            alignWithLabel: true

          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            onZero: false

          },
          axisLabel: {
            show: true,
            margin: 10,
            padding: [0, 0, 0, 6]
          }

        },
        yAxis: {
          type: this.yAxisType, // 'value',
          data: ['30k', '60k', '90k'],
          boundaryGap: true,
          offset: 2,
          axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
              color: variablesColors.variantsObj['theme1']['mixed-1'],
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {

              width: 0
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: variablesColors.variantsObj['secondary']['mixed-1'],
              width: 1
            },
            onZero: false
          },
          axisLabel: {
            show: true,
            margin: 10,
            padding: [0, 0, 0, 6]
          }

        },
        series: this.getSerie()
      }
      return options
    }

  },
  methods: {
    getSerie () {
      if (this.type === 'bar') {
        return this.seriesBar
      } else if (this.type === 'bar2') {
        return this.seriesBar2
      } else if (this.type === 'line') {
        return this.seriesLine
      }
      return this.seriesLine
    },
    formatNumber (value) {
      return this.abbreviateNumber(value)// value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    },
    onMouseOver (legend) {
      this.legends.map(legend => {
        if (legend.class.includes('active')) legend.class.splice(legend.class.indexOf('active'), 1)
      })
      legend.class.push('active')
    },

    abbreviateNumber (number) {
      var SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E']

      // what tier? (determines SI symbol)
      var tier = Math.log10(number) / 3 | 0

      // if zero, we don't need a suffix
      if (tier === 0) return number

      // get suffix and determine scale
      var suffix = SI_SYMBOL[tier]
      var scale = Math.pow(10, tier * 3)

      // scale the number
      var scaled = number / scale

      // format number and add suffix
      return scaled.toFixed(1) + suffix
    }

  }
}

</script>


<style lang="scss" scoped>
.number {
  height: 24px;
  line-height: 24px;
  margin-top: 2px;
}

.percentage {
  font-weight: 800;
}

.right-icon {
  position: absolute;
  right: 0px;
  height: 80px;
  width: 80px;

  background-color: var(--color-mixed);
  font-size: 40px;
  line-height: 80px;
  margin: 1.75rem;
  color: #fff;
  text-align: center;
}

.ig-header-container {
  // display: flex;
  width: 100%;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.icon-rounded {
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  //border: 2px solid var(--primary-mixed) !important;
  //box-sizing: content-box;

  i {
    font-size: 240%;
  }
}

</style>



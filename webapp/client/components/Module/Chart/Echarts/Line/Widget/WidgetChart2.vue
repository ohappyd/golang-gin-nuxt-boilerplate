
<template>
<b-card no-body
    class="bg-theme1inv text-secondary mb-0"
    style="min-height: 115px">
    <div class="card-container ">
        <div class="chart-container ig-p-1">
            <div class="title-text   mb-0">
                {{title}}
            </div>

            <client-only>
                <v-chart style="width: 100%; height: 30px"
                    class="mb-3 mt-2"
                    autoresize
                    :options="options" />
            </client-only>

            <div class="text-container">
                <div class="mr-3">
                    <i class="la la-circle text-success " />{{randomValue()}}% Key A </div>
                <div class=" text-12" />
                <div>
                    <i class="la la-circle text-danger" />{{randomValue()}}% Key B </div>
                <div class="text-12" />
            </div>

        </div>

        <div class="info-container">

            <div class="icon-container ig-p-1">
                <svg-icon height="40px"
                    :icon="icon"
                    width="40px"> </svg-icon>
            </div>

        </div>
    </div>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Example of component for rendering  simple line chart inside card
*/
export default {
  components: {
    SvgIcon
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
    icon: {
      type: String,
      default: 'graph-poly'
    },
    seedRandom: {
      type: Array,
      default: () => [true, 100, false, 5, 5]
    }
  },

  created () {
  },

  methods: {
    randomSerie (baseValue) {
      // debugger
      const MAX_SERIE = 100
      const data = []

      for (let i = 0; i <= MAX_SERIE; i++) {
        const value = faker.random.number({
          min: 1,
          max: 100
        })
        const minValue = faker.random.number({
          min: 1,
          max: 80
        })
        data.push(value < 10 ? minValue : baseValue)
      }

      return data
    },

    randomValue () {
      return faker.random.number({
        min: 1,
        max: 100
      })
    }

  },
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      var data = []
      var data2 = []
      data = this.randomSerie(1)
      data2 = []
      let option = {
        xAxis: {
          show: false,
          type: 'category'
        },
        yAxis: {
          show: false,
          type: 'value',
          max: 100
        },
        grid: {
          right: 0,
          left: 0,
          top: 0,
          bottom: '10%'
        },
        series: [{
          name: this.functionName,
          type: 'line',
          data,
          // smooth: true,
          showSymbol: false,
          animationEasing: this.functionName,
          animationDuration: 1000,
          lineStyle: {
            color: variablesColors.primary
          }
        }, {
          name: this.functionName,
          type: 'line',
          data: data2,
          // smooth: true,
          showSymbol: false,
          animationEasing: this.functionName,
          animationDuration: 1000,
          lineStyle: {
            color: variablesColors.secondary
          }
        }]
      }
      return option
    }

  }
}

</script>


<style lang="scss" scoped>
.title-text {
  font-weight: 500;
  color: var(--secondary);
}

.icon-container {
  border-left: 1px solid var(--theme1-mixed);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-container {
  display: flex;
  height: 100%;
  width: 100%;
}

.chart-container {
  flex-grow: 1;
  width: 100%;
}

.info-container {
  display: flex;
  flex-basis: 180px;
  // border-left: 1px solid var(--theme1-mixed);
  justify-content: center;
  align-items: center;
}

.text-container {
  min-width: 120px;
  font-size: 13px;
  color: var(--primary);
  display: flex;
}

</style>



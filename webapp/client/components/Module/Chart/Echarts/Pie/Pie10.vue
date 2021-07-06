
<template>
<wrapper-echarts :height="height"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering pie chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)

      let option = {
        title: {
          text: this.title,
          subtext: this.subtitle,
          x: 'center'
        },
        grid: { top: 0, bottom: 0 },
        color: [
          variablesColors.danger,
          variablesColors.light,
          variablesColors.light,
          variablesColors.dark,
          variablesColors.primary,

          variablesColors.secondary,
          variablesColors.primary,
          variablesColors.secondary
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
          position: 'right'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          show: false,
          data: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5', 'Cat 6', 'Cat 7', 'Cat 8']
        },
        toolbox: {
          show: false
        },
        calculable: true,
        series: [
          {
            name: 'Profit Rate',
            type: 'pie',
            // radius: [30, 110],
            // center: ['75%', 200],
            roseType: 'area',
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 0,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },

            // for funnel
            max: 50,
            // for funnel
            sort: 'ascending',
            // for funnel
            data: [{
              value: 10,
              name: 'Cat 1'
            }, {
              value: 5,
              name: 'Cat 2'
            }, {
              value: 15,
              name: 'Cat 3'
            }, {
              value: 25,
              name: 'Cat 4'
            }, {
              value: 20,
              name: 'Cat 5'
            }, {
              value: 35,
              name: 'Cat 6'
            }, {
              value: 30,
              name: 'Cat 7'
            }, {
              value: 40,
              name: 'Cat 8'
            }]
          }]
      }
      return option
    }
  },

  methods: {}
}

</script>


<style lang="scss" scoped>
.echarts {
  flex: 20 20 20em;
}
.list-group {
  flex: 1 1 10em;
}
.list-group-item {
  background-color: #15194052;
  border-top: 1px solid #384478;
  border-radius: 0;
  color: #fff;
}
.border-none,
.border-none.list-group-item {
  border-radius: 0;
}
.item-legend {
  margin: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  .label {
    font-size: 20px;
  }
  .text {
    font-size: 12px;
  }
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}

</style>



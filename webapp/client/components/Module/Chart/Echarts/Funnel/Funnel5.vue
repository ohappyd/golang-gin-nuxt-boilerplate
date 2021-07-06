
<template>
<wrapper-echarts :height="height"
    :options="options"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the funnel chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],
  methods: {
    getLabelObj (variant) {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return {

        color: variablesColors.variantsObj[variant]['base']
      }
    },
    getItemObj (variant) {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return {
        borderWidth: 2,
        borderColor: variablesColors.variantsObj[variant]['mixed-1'],
        color: variablesColors.variantsObj[variant]['mixed']
      }
    }

  },

  computed: {

    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)

      let option = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          show: false
        },
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        label: {
          color: variablesColors.theme1,
          fontWeight: 400,
          fontSize: 12
        },
        legend: {
          orient: 'vertical',
          // x: 'right',
          show: false,
          top: 'middle',
          right: '6%',
          data: ['Show', 'Click', 'Access', 'Advisory', 'Order']
        },
        calculable: true,
        series: [{
          name: 'Funnel',
          type: 'funnel',
          x: '10%',
          y: 40,
          // x2: 80,
          y2: 40,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          // 'ascending', 'descending'
          gap: 17,

          itemStyle: {
            normal: {
            // color: 各异,
            // opacity: 0.5,
            // borderColor: variablesColors.dark,
              borderWidth: 0,
              label: {
                show: true,
                position: 'inside' // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE

              },
              labelLine: {
                show: false,
                length: 10,
                lineStyle: {
                // color: 各异,
                  width: 0,
                  type: 'solid'
                }
              }
            }

          },
          data: [

            {
              value: 100,
              name: 'Show',
              itemStyle: this.getItemObj('primary'),
              label: this.getLabelObj('primary')
            },
            {
              value: 80,
              name: 'Click',
              itemStyle: this.getItemObj('secondary'),
              label: this.getLabelObj('secondary')
            },
            {
              value: 60,
              name: 'Access',
              itemStyle: this.getItemObj('theme1'),
              label: this.getLabelObj('theme1')
            },

            {
              value: 40,
              name: 'Advisory',
              itemStyle: this.getItemObj('info'),
              label: this.getLabelObj('info')

            },
            {
              value: 20,
              name: 'Order',
              itemStyle: this.getItemObj('danger'),
              label: this.getLabelObj('danger')
            }
          ]
        }]
      }
      return option
    }
  }

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



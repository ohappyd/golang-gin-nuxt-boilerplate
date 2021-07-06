
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering radar chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle,
        x: 'right',
        y: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
      },
      legend: {
        // orient : 'vertical',
        // x : 'center',
        data: (function () {
          var list = []

          for (var i = 1; i <= 28; i++) {
            list.push(i + 2000)
          }

          return list
        }())
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        y: 'center',
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      polar: [{
        indicator: [{
          text: 'IE8-',
          max: 400
        }, {
          text: 'IE9+',
          max: 400
        }, {
          text: 'Safari',
          max: 400
        }, {
          text: 'Firefox',
          max: 400
        }, {
          text: 'Chrome',
          max: 400
        }],
        center: ['50%', 240],
        radius: 150
      }],
      calculable: false,
      series: (function () {
        var series = []

        for (var i = 1; i <= 10; i++) {
          series.push({
            name: 'Browser',
            type: 'radar',
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1
                }
              },
              emphasis: {
                areaStyle: {
                  color: 'rgba(0,250,0,0.3)'
                }
              }
            },
            data: [{
              value: [
                (40 - i) * 10,
                (38 - i) * 4 + 60,
                i * 5 + 10,
                i * 9,
                i * i / 2],
              name: i + 2000
            }]
          })
        }

        return series
      }())
    }
    return {
      options: option
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



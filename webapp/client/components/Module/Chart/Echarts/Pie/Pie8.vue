
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
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
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
      },
      toolbox: {
        show: false,
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
      calculable: false,
      series: (function () {
        var series = []

        for (var i = 0; i < 30; i++) {
          series.push({
            name: 'Browser',
            type: 'pie',
            itemStyle: {
              normal: {
                label: {
                  show: i > 28
                },
                labelLine: {
                  show: i > 28,
                  length: 20
                }
              }
            },
            radius: [i * 4 + 40, i * 4 + 43],
            data: [{
              value: i * 128 + 80,
              name: 'Chrome'
            }, {
              value: i * 64 + 160,
              name: 'Firefox'
            }, {
              value: i * 32 + 320,
              name: 'Safari'
            }, {
              value: i * 16 + 640,
              name: 'IE9+'
            }, {
              value: i * 8 + 1280,
              name: 'IE8-'
            }]
          })
        }

        series[0].markPoint = {
          symbol: 'emptyCircle',
          symbolSize: series[0].radius[0],
          effect: {
            show: true,
            scaleSize: 12,
            color: 'rgba(250,225,50,0.8)',
            shadowBlur: 10,
            period: 30
          },
          data: [{
            x: '50%',
            y: '50%'
          }]
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



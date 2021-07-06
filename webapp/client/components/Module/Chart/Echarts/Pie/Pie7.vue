
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
    var idx = 1
    let option = {
      timeline: {
        data: ['2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', {
          name: '2019-06-01',
          symbol: 'emptyStar6',
          symbolSize: 8
        }, '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01', '2019-11-01', {
          name: '2019-12-01',
          symbol: 'star6',
          symbolSize: 8
        }],
        label: {
          formatter: function (s) {
            const dateObj = new Date(s)
            var month = dateObj.getUTCMonth() + 1 // months from 1-12
            var year = dateObj.getUTCFullYear()
            return month + '/' + year // && s.substring ? s.substring(0, 3) :
          }
        }
      },
      options: [{
        title: {
          text: this.title,
          subtext: this.subtitle
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
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
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1700
                }
              }
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        series: [{
          name: 'Browser',
          type: 'pie',
          center: ['50%', '45%'],
          radius: '50%',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }, {
        series: [{
          name: 'Browser',
          type: 'pie',
          data: [{
            value: idx * 128 + 80,
            name: 'Chrome'
          }, {
            value: idx * 64 + 160,
            name: 'Firefox'
          }, {
            value: idx * 32 + 320,
            name: 'Safari'
          }, {
            value: idx * 16 + 640,
            name: 'IE9+'
          }, {
            value: idx++ * 8 + 1280,
            name: 'IE8-'
          }]
        }]
      }]
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



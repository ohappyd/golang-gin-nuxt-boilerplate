
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
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 'center',
        data: ['Some Software', 'Mobile Phone', 'Dumb Phone', 'Precipitation', 'Evaporation']
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
      calculable: true,
      polar: [{
        indicator: [{
          text: 'Brand',
          max: 100
        }, {
          text: 'Content',
          max: 100
        }, {
          text: 'Availability',
          max: 100
        }, {
          text: 'Features',
          max: 100
        }],
        center: ['25%', 200],
        radius: 80
      }, {
        indicator: [{
          text: 'Exterior',
          max: 100
        }, {
          text: 'Photo',
          max: 100
        }, {
          text: 'System',
          max: 100
        }, {
          text: 'Performance',
          max: 100
        }, {
          text: 'Screen',
          max: 100
        }],
        radius: 80
      }, {
        indicator: (function () {
          var res = []

          for (var i = 1; i <= 12; i++) {
            res.push({
              text: i + '月',
              max: 100
            })
          }

          return res
        }()),
        center: ['75%', 200],
        radius: 80
      }],
      series: [{
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [{
          value: [60, 73, 85, 40],
          name: 'Some Software'
        }]
      }, {
        type: 'radar',
        polarIndex: 1,
        data: [{
          value: [85, 90, 90, 95, 95],
          name: 'Mobile Phone'
        }, {
          value: [95, 80, 95, 90, 93],
          name: 'Dumb Phone'
        }]
      }, {
        type: 'radar',
        polarIndex: 2,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [{
          name: 'Precipitation',
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
        }, {
          name: 'Evaporation',
          value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
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



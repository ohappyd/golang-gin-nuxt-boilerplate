
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering scatter chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    function random () {
      var r = Math.round(Math.random() * 100)
      return r * (r % 2 === 0 ? 1 : -1)
    }

    function randomDataArray () {
      var d = []
      var len = 100

      while (len--) {
        d.push([random(), random(), Math.abs(random())])
      }

      return d
    }

    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'axis',
        showDelay: 0,
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        }
      },
      legend: {
        data: ['scatter1', 'scatter2']
      },
      toolbox: {
        show: false,
        feature: {
          mark: {
            show: true
          },
          dataZoom: {
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
      xAxis: [{
        type: 'value',
        splitNumber: 4,
        scale: true
      }],
      yAxis: [{
        type: 'value',
        splitNumber: 4,
        scale: true
      }],
      series: [{
        name: 'scatter1',
        type: 'scatter',
        symbolSize: function (value) {
          return Math.round(value[2] / 5)
        },
        data: randomDataArray()
      }, {
        name: 'scatter2',
        type: 'scatter',
        symbolSize: function (value) {
          return Math.round(value[2] / 5)
        },
        data: randomDataArray()
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



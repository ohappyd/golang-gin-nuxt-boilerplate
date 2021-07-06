
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
        data: ['sin', 'cos']
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
        scale: true
      }],
      yAxis: [{
        type: 'value',
        scale: true
      }],
      series: [{
        name: 'sin',
        type: 'scatter',
        large: true,
        data: (function () {
          var d = []
          var len = 10000
          var x = 0

          while (len--) {
            x = (Math.random() * 10).toFixed(3) - 0
            d.push([x, // Math.random() * 10
              (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0])
          }

          return d
        }())
      }, {
        name: 'cos',
        type: 'scatter',
        large: true,
        data: (function () {
          var d = []
          var len = 10000
          var x = 0

          while (len--) {
            x = (Math.random() * 10).toFixed(3) - 0
            d.push([x, // Math.random() * 10
              (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0])
          }

          return d
        }())
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



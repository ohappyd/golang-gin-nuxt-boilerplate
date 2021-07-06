
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the bar chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let placeHoledStyle = {
      normal: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)'
      },
      emphasis: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)'
      }
    }
    let dataStyle = {
      normal: {
        label: {
          show: true,
          position: 'insideLeft',
          formatter: '{c}%'
        }
      }
    }
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

        },
        formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
      },
      legend: {
        y: 55,
        itemGap: 20,
        data: ['GML', 'PYP', 'WTC', 'ZTW']
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
      grid: {
        y: 80,
        y2: 30
      },
      xAxis: [{
        type: 'value',
        position: 'top',
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }],
      yAxis: [{
        type: 'category',
        splitLine: {
          show: false
        },
        data: ['Chongqing', 'Tianjin', 'Shanghai', 'Beijing']
      }],
      series: [{
        name: 'GML',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: dataStyle,
        data: [38, 50, 33, 72]
      }, {
        name: 'GML',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: placeHoledStyle,
        data: [62, 50, 67, 28]
      }, {
        name: 'PYP',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: dataStyle,
        data: [61, 41, 42, 30]
      }, {
        name: 'PYP',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: placeHoledStyle,
        data: [39, 59, 58, 70]
      }, {
        name: 'WTC',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: dataStyle,
        data: [37, 35, 44, 60]
      }, {
        name: 'WTC',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: placeHoledStyle,
        data: [63, 65, 56, 40]
      }, {
        name: 'ZTW',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: dataStyle,
        data: [71, 50, 31, 39]
      }, {
        name: 'ZTW',
        type: 'bar',
        stack: 'T. Amount',
        itemStyle: placeHoledStyle,
        data: [29, 50, 69, 61]
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



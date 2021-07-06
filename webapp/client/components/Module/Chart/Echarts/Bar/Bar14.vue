
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
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
    let option = {
      title: {
        x: 'center',
        text: this.title,
        subtext: this.subtitle
      },
      tooltip: {
        trigger: 'item'
      },
      toolbox: {
        show: false,
        feature: {
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
      grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
      },
      xAxis: [{
        type: 'category',
        show: false,
        data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
      }],
      yAxis: [{
        type: 'value',
        show: false
      }],
      series: [{
        name: 'ECharts Statistics',
        type: 'bar',
        itemStyle: {
          normal: {
            color: function (params) {
              // build a color map as your need.
              var colorList = [variablesColors.primary, variablesColors.secundary, variablesColors.theme1, variablesColors.theme2, variablesColors.theme3, variablesColors.primary, variablesColors.secundary, variablesColors.theme1, variablesColors.theme2, variablesColors.theme3]
              return colorList[params.dataIndex]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}'
            }
          }
        },
        data: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7],
        markPoint: {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function (params) {
              return '<img src="' + params.data.symbol.replace('image://', '') + '"/>'
            }
          },
          data: [{
            xAxis: 0,
            y: 350,
            name: 'Line',
            symbolSize: 20
          }, {
            xAxis: 1,
            y: 350,
            name: 'Bar',
            symbolSize: 20
          }, {
            xAxis: 2,
            y: 350,
            name: 'Scatter',
            symbolSize: 20
          }, {
            xAxis: 3,
            y: 350,
            name: 'K',
            symbolSize: 20
          }, {
            xAxis: 4,
            y: 350,
            name: 'Pie',
            symbolSize: 20
          }, {
            xAxis: 5,
            y: 350,
            name: 'Radar',
            symbolSize: 20
          }, {
            xAxis: 6,
            y: 350,
            name: 'Chord',
            symbolSize: 20
          }, {
            xAxis: 7,
            y: 350,
            name: 'Force',
            symbolSize: 20
          }, {
            xAxis: 8,
            y: 350,
            name: 'Map',
            symbolSize: 20
          }, {
            xAxis: 9,
            y: 350,
            name: 'Gauge',
            symbolSize: 20
          }, {
            xAxis: 10,
            y: 350,
            name: 'Funnel',
            symbolSize: 20
          }]
        }
      }]
    }
    return {
      options: option
    }
  },

  methods: {}
}

</script>




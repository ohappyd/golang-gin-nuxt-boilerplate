
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import { dataMap } from '@@/client/util/chart/dataGenerator'
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
      timeline: {
        show: false

      },
      options: [{
        title: {
          text: this.title,
          subtext: this.subtitle
        },
        tooltip: {
          'trigger': 'axis'
        },
        legend: {
          x: 'right',
          'data': ['GDP', 'Fin.', 'R. Est.', 'P. Ind.', 'S. Ind.', 'T. Ind.'],
          'selected': {
            'GDP': true,
            'Fin.': false,
            'R. Est.': true,
            'P. Ind.': false,
            'S. Ind.': false,
            'T. Ind.': false
          }
        },
        toolbox: {
          'show': false,
          orient: 'vertical',
          x: 'right',
          y: 'center',
          'feature': {
            'mark': {
              'show': true
            },
            'dataView': {
              'show': true,
              'readOnly': false
            },
            'magicType': {
              'show': true,
              'type': ['line', 'bar', 'stack', 'tiled']
            },
            'restore': {
              'show': true
            },
            'saveAsImage': {
              'show': true
            }
          }
        },
        calculable: true,
        grid: {
          'y': 80,
          'y2': 100
        },
        xAxis: [{
          'type': 'category',
          'axisLabel': {
            'interval': 0
          },
          'data': ['Beijing', '\nTianjin', 'Hebei', '\nShanxi', 'Mong.', '\nLiaoning', 'Jilin', '\nHeil.', 'Shanghai', '\nIang.', 'Zhej.', '\nAnhui', 'Fujian', '\nJiangxi', 'Shand.', '\nHenan', 'Hubei', '\nHunan', 'Guang.', '\nGuangxi', 'Hainan', '\nChong.', 'Sichuan', '\nGuizhou', 'Yunnan', '\nTibet', 'Shaanxi', '\nGansu', 'Qinghai', '\nNingxia', 'Xinjiang']
        }],
        yAxis: [{
          'type': 'value',
          'name': 'GDP（Billion）',
          'max': 53500
        }, {
          'type': 'value',
          'name': 'Other（Billion）'
        }],
        series: [{
          'name': 'GDP',
          'type': 'bar',
          'markLine': {
            symbol: ['arrow', 'none'],
            symbolSize: [4, 2],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: variablesColors.primary
                },
                barBorderColor: variablesColors.secundary,
                label: {
                  position: 'left',
                  formatter: function (params) {
                    return 'A'
                  },
                  textStyle: {
                    color: variablesColors.primary
                  }
                }
              }
            },
            'data': [{
              'type': 'average',
              'name': 'Average'
            }]
          },
          'data': dataMap.dataGDP['2002']
        }, {
          'name': 'Fin.',
          'yAxisIndex': 1,
          'type': 'bar',
          'data': dataMap.dataFinancial['2002']
        }, {
          'name': 'R. Est.',
          'yAxisIndex': 1,
          'type': 'bar',
          'data': dataMap.dataEstate['2002']
        }, {
          'name': 'P. Ind.',
          'yAxisIndex': 1,
          'type': 'bar',
          'data': dataMap.dataPI['2002']
        }, {
          'name': 'S. Ind.',
          'yAxisIndex': 1,
          'type': 'bar',
          'data': dataMap.dataSI['2002']
        }, {
          'name': 'T. Ind.',
          'yAxisIndex': 1,
          'type': 'bar',
          'data': dataMap.dataTI['2002']
        }]
      }, {
        title: {
          'text': this.title + ' - (2003)'
        },
        series: [{
          'data': dataMap.dataGDP['2003']
        }, {
          'data': dataMap.dataFinancial['2003']
        }, {
          'data': dataMap.dataEstate['2003']
        }, {
          'data': dataMap.dataPI['2003']
        }, {
          'data': dataMap.dataSI['2003']
        }, {
          'data': dataMap.dataTI['2003']
        }]
      }, {
        title: {
          'text': this.title + ' - (2004)'
        },
        series: [{
          'data': dataMap.dataGDP['2004']
        }, {
          'data': dataMap.dataFinancial['2004']
        }, {
          'data': dataMap.dataEstate['2004']
        }, {
          'data': dataMap.dataPI['2004']
        }, {
          'data': dataMap.dataSI['2004']
        }, {
          'data': dataMap.dataTI['2004']
        }]
      }, {
        title: {
          'text': this.title + ' - (2005)'
        },
        series: [{
          'data': dataMap.dataGDP['2005']
        }, {
          'data': dataMap.dataFinancial['2005']
        }, {
          'data': dataMap.dataEstate['2005']
        }, {
          'data': dataMap.dataPI['2005']
        }, {
          'data': dataMap.dataSI['2005']
        }, {
          'data': dataMap.dataTI['2005']
        }]
      }, {
        title: {
          'text': this.title + ' - (2006)'
        },
        series: [{
          'data': dataMap.dataGDP['2006']
        }, {
          'data': dataMap.dataFinancial['2006']
        }, {
          'data': dataMap.dataEstate['2006']
        }, {
          'data': dataMap.dataPI['2006']
        }, {
          'data': dataMap.dataSI['2006']
        }, {
          'data': dataMap.dataTI['2006']
        }]
      }, {
        title: {
          'text': this.title + ' - (2007)'
        },
        series: [{
          'data': dataMap.dataGDP['2007']
        }, {
          'data': dataMap.dataFinancial['2007']
        }, {
          'data': dataMap.dataEstate['2007']
        }, {
          'data': dataMap.dataPI['2007']
        }, {
          'data': dataMap.dataSI['2007']
        }, {
          'data': dataMap.dataTI['2007']
        }]
      }, {
        title: {
          'text': this.title + ' - (2008)'
        },
        series: [{
          'data': dataMap.dataGDP['2008']
        }, {
          'data': dataMap.dataFinancial['2008']
        }, {
          'data': dataMap.dataEstate['2008']
        }, {
          'data': dataMap.dataPI['2008']
        }, {
          'data': dataMap.dataSI['2008']
        }, {
          'data': dataMap.dataTI['2008']
        }]
      }, {
        title: {
          'text': this.title + ' - (2009)'
        },
        series: [{
          'data': dataMap.dataGDP['2009']
        }, {
          'data': dataMap.dataFinancial['2009']
        }, {
          'data': dataMap.dataEstate['2009']
        }, {
          'data': dataMap.dataPI['2009']
        }, {
          'data': dataMap.dataSI['2009']
        }, {
          'data': dataMap.dataTI['2009']
        }]
      }, {
        title: {
          'text': this.title + ' - (2010)'
        },
        series: [{
          'data': dataMap.dataGDP['2010']
        }, {
          'data': dataMap.dataFinancial['2010']
        }, {
          'data': dataMap.dataEstate['2010']
        }, {
          'data': dataMap.dataPI['2010']
        }, {
          'data': dataMap.dataSI['2010']
        }, {
          'data': dataMap.dataTI['2010']
        }]
      }, {
        title: {
          'text': this.title + ' - (2011)'
        },
        series: [{
          'data': dataMap.dataGDP['2011']
        }, {
          'data': dataMap.dataFinancial['2011']
        }, {
          'data': dataMap.dataEstate['2011']
        }, {
          'data': dataMap.dataPI['2011']
        }, {
          'data': dataMap.dataSI['2011']
        }, {
          'data': dataMap.dataTI['2011']
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



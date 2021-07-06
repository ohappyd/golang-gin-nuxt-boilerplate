
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
    let dataStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      }
    }
    let placeHolderStyle = {
      normal: {
        color: 'rgba(0,0,0,0)',
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      emphasis: {
        color: 'rgba(0,0,0,0)'
      }
    }
    let option = {

      title: {
        text: this.title,
        subtext: this.subtitle,
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle: {
          color: 'rgba(30,144,255,0.8)',
          fontSize: 35,
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 20,
        y: 45,
        itemGap: 12,
        data: ['68% Good job', '29% Stressful', '3% Happy Work']
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
      series: [{
        name: '1',
        type: 'pie',
        clockWise: false,
        radius: [125, 150],
        itemStyle: dataStyle,
        data: [{
          value: 68,
          name: '68% Good job'
        }, {
          value: 32,
          name: 'invisible',
          itemStyle: placeHolderStyle
        }]
      }, {
        name: '2',
        type: 'pie',
        clockWise: false,
        radius: [100, 125],
        itemStyle: dataStyle,
        data: [{
          value: 29,
          name: '29% Stressful'
        }, {
          value: 71,
          name: 'invisible',
          itemStyle: placeHolderStyle
        }]
      }, {
        name: '3',
        type: 'pie',
        clockWise: false,
        radius: [75, 100],
        itemStyle: dataStyle,
        data: [{
          value: 3,
          name: '3% Happy Work'
        }, {
          value: 97,
          name: 'invisible',
          itemStyle: placeHolderStyle
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



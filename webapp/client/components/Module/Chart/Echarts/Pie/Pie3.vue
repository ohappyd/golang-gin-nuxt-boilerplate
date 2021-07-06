
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
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Direct', 'Markting Ad', 'S. Engine', 'E. Marketing', 'Adversing', 'Video Ad', 'Baidu', 'Google', 'Must', 'Other']
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
            type: ['pie', 'funnel']
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
      series: [{
        name: 'Access Source',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, 70],
        // for funnel
        x: '20%',
        width: '40%',
        funnelAlign: 'right',
        max: 1548,
        itemStyle: {
          normal: {
            label: {
              position: 'inner'
            },
            labelLine: {
              show: false
            }
          }
        },
        data: [{
          value: 335,
          name: 'Direct'
        }, {
          value: 679,
          name: 'Markting Ad'
        }, {
          value: 1548,
          name: 'S. Engine',
          selected: true
        }]
      }, {
        name: 'Access Source',
        type: 'pie',
        radius: [100, 140],
        // for funnel
        x: '60%',
        width: '35%',
        funnelAlign: 'left',
        max: 1048,
        data: [{
          value: 335,
          name: 'Direct'
        }, {
          value: 310,
          name: 'E. Marketing'
        }, {
          value: 234,
          name: 'Adversing'
        }, {
          value: 135,
          name: 'Video Ad'
        }, {
          value: 1048,
          name: 'Baidu'
        }, {
          value: 251,
          name: 'Google'
        }, {
          value: 147,
          name: 'Must'
        }, {
          value: 102,
          name: 'Other'
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



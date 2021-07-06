
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
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: ['Budget分配（Allocated Budget）', ' ActualSpending（Actual Spending）']
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
      polar: [{
        indicator: [{
          text: 'Sales',
          max: 6000
        }, {
          text: 'Administration',
          max: 16000
        }, {
          text: 'I. T.',
          max: 30000
        }, {
          text: 'Customer Support',
          max: 38000
        }, {
          text: 'Development',
          max: 52000
        }, {
          text: 'Marketing',
          max: 25000
        }]
      }],
      calculable: true,
      series: [{
        name: 'Budget vs Spending',
        type: 'radar',
        data: [{
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: 'Allocated Budget'
        }, {
          value: [5000, 14000, 28000, 31000, 42000, 21000]
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



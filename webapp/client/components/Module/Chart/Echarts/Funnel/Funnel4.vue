
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the funnel chart of the echarts library
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
        subtext: this.subtitle,
        x: 'left',
        y: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        y: 'center',
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
              pie: {
                radius: [0, 50]
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
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']
      },
      calculable: true,
      series: [{
        name: 'Funnel',
        type: 'funnel',
        width: '40%',
        height: '45%',
        x: '5%',
        y: '50%',
        funnelAlign: 'right',
        center: ['25%', '25%'],
        // for pie
        data: [{
          value: 60,
          name: 'Product C'
        }, {
          value: 30,
          name: 'Product D'
        }, {
          value: 10,
          name: 'Product E'
        }, {
          value: 80,
          name: 'Product B'
        }, {
          value: 100,
          name: 'Product A'
        }]
      }, {
        name: 'Pyramid',
        type: 'funnel',
        width: '40%',
        height: '45%',
        x: '5%',
        y: '5%',
        sort: 'ascending',
        funnelAlign: 'right',
        center: ['25%', '75%'],
        // for pie
        data: [{
          value: 60,
          name: 'Product C'
        }, {
          value: 30,
          name: 'Product D'
        }, {
          value: 10,
          name: 'Product E'
        }, {
          value: 80,
          name: 'Product B'
        }, {
          value: 100,
          name: 'Product A'
        }]
      }, {
        name: 'Funnel',
        type: 'funnel',
        width: '40%',
        height: '45%',
        x: '55%',
        y: '5%',
        funnelAlign: 'left',
        center: ['75%', '25%'],
        // for pie
        data: [{
          value: 60,
          name: 'Product C'
        }, {
          value: 30,
          name: 'Product D'
        }, {
          value: 10,
          name: 'Product E'
        }, {
          value: 80,
          name: 'Product B'
        }, {
          value: 100,
          name: 'Product A'
        }]
      }, {
        name: 'Pyramid',
        type: 'funnel',
        width: '40%',
        height: '45%',
        x: '55%',
        y: '50%',
        sort: 'ascending',
        funnelAlign: 'left',
        center: ['75%', '75%'],
        // for pie
        data: [{
          value: 60,
          name: 'Product C'
        }, {
          value: 30,
          name: 'Product D'
        }, {
          value: 10,
          name: 'Product E'
        }, {
          value: 80,
          name: 'Product B'
        }, {
          value: 100,
          name: 'Product A'
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



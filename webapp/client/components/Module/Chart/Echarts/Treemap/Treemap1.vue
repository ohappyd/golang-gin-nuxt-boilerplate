
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering treemap chart of the echarts library
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
        trigger: 'item',
        formatter: '{b}: {c}'
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
      calculable: false,
      series: [{
        name: 'Retangle',
        type: 'treemap',
        itemStyle: {
          normal: {
            label: {
              show: true,
              formatter: '{b}'
            },
            borderWidth: 1
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [{
          name: 'Samsung',
          value: 6
        }, {
          name: 'Millet ',
          value: 4
        }, {
          name: 'Apple',
          value: 4
        }, {
          name: 'Huawei',
          value: 2
        }, {
          name: 'Lenovo',
          value: 2
        }, {
          name: 'Meizu',
          value: 1
        }, {
          name: 'HP',
          value: 1
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



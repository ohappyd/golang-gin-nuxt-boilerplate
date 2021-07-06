
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
        name: 'Mobile Phone Share',
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
            },
            borderWidth: 3
          }
        },
        data: [{
          name: 'Samsung',
          value: 6,
          children: [{
            name: 'Galaxy S4',
            value: 2
          }, {
            name: 'Galaxy S5',
            value: 3
          }, {
            name: 'Galaxy S6',
            value: 3
          }, {
            name: 'Galaxy Tab',
            value: 1
          }]
        }, {
          name: 'Millet ',
          value: 4,
          children: [{
            name: 'Millet 3',
            value: 6
          }, {
            name: 'Millet 4',
            value: 6
          }, {
            name: 'Red rice',
            value: 4
          }]
        }, {
          name: 'Apple',
          value: 4,
          children: [{
            name: 'iPhone 5s',
            value: 6
          }, {
            name: 'iPhone 6',
            value: 3
          }, {
            name: 'iPhone 6+',
            value: 3
          }]
        }, {
          name: 'Meizu',
          value: 1,
          children: [{
            name: 'MX4',
            value: 6
          }, {
            name: 'MX3',
            value: 6
          }, {
            name: 'Blue note',
            value: 4
          }, {
            name: 'MX4 pro',
            value: 3
          }]
        }, {
          name: 'Huawei',
          value: 2
        }, {
          name: 'Lenovo',
          value: 2
        }, {
          name: 'HP',
          value: 1,
          children: [{
            name: 'V5',
            value: 16
          }, {
            name: 'Nubia',
            value: 6
          }, {
            name: 'Features',
            value: 4
          }, {
            name: 'Barley',
            value: 4
          }, {
            name: 'Star',
            value: 4
          }, {
            name: 'Childs',
            value: 1
          }]
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



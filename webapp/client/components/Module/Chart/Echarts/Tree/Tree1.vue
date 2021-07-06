
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering tree chart of the echarts library
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
        name: '树图',
        type: 'tree',
        orient: 'vertical',
        // vertical horizontal
        rootLocation: {
          x: 'center',
          y: 50
        },
        // 根Node 位置  {x: 100, y: 'center'}
        nodePadding: 1,
        itemStyle: {
          normal: {
            label: {
              show: false,
              formatter: '{b}'
            },
            lineStyle: {
              type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [{
          name: '根Node ',
          value: 6,
          children: [{
            name: 'Node 1',
            value: 4,
            children: [{
              name: 'Leaf Node 1',
              value: 4
            }, {
              name: 'Leaf Node 2',
              value: 4
            }, {
              name: 'Leaf Node 3',
              value: 2
            }, {
              name: 'Leaf Node 4',
              value: 2
            }, {
              name: 'Leaf Node 5',
              value: 2
            }, {
              name: 'Leaf Node 6',
              value: 4
            }]
          }, {
            name: 'Node 2',
            value: 4,
            children: [{
              name: 'Leaf Node 7',
              value: 4
            }, {
              name: 'Leaf Node 8',
              value: 4
            }]
          }, {
            name: 'Node 3',
            value: 1,
            children: [{
              name: 'Leaf Node 9',
              value: 4
            }, {
              name: 'Leaf Node 10',
              value: 4
            }, {
              name: 'Leaf Node 11',
              value: 2
            }, {
              name: 'Leaf Node 12',
              value: 2
            }]
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



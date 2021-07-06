
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering the graph chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    function createNodes (count) {
      var nodes = []

      for (var i = 0; i < count; i++) {
        nodes.push({
          id: i
        })
      }

      return nodes
    }

    function createEdges (count) {
      var edges = []

      if (count === 2) {
        return [[0, 1]]
      }

      for (var i = 0; i < count; i++) {
        edges.push([i, (i + 1) % count])
      }

      return edges
    }

    var datas = []

    for (var i = 0; i < 16; i++) {
      datas.push({
        nodes: createNodes(i + 2),
        edges: createEdges(i + 2)
      })
    }

    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      series: datas.map(function (item, idx) {
        return {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: item.nodes,
          left: idx % 4 * 25 + '%',
          top: Math.floor(idx / 4) * 25 + '%',
          width: '25%',
          height: '25%',
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 60,
            edgeLength: 2
          },
          edges: item.edges.map(function (e) {
            return {
              source: e[0],
              target: e[1]
            }
          })
        }
      })
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

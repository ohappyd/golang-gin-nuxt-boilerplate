
<template>
  <v-chart autoresize
    :options="options" />
</template>
<script>

export default {
  components: {
  },
  data () {
    let option = {
      title: {
        text: '测试数据',
        subtext: 'From d3.js',
        x: 'right',
        y: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (params.indicator2) { // is edge
            return params.value.weight
          } else { // is node
            return params.name
          }
        }
      },
      toolbox: {
        show: true,
        feature: {
          restore: { show: true },
          magicType: { show: true, type: ['force', 'chord'] },
          saveAsImage: { show: true }
        }
      },
      legend: {
        x: 'left',
        data: ['group1', 'group2', 'group3', 'group4']
      },
      series: [
        {
          type: 'chord',
          sort: 'ascending',
          sortSub: 'descending',
          showScale: true,
          showScaleText: true,
          data: [
            { name: 'group1' },
            { name: 'group2' },
            { name: 'group3' },
            { name: 'group4' }
          ],
          itemStyle: {
            normal: {
              label: {
                show: false
              }
            }
          },
          matrix: [
            [11975, 5871, 8916, 2868],
            [ 1951, 10048, 2060, 6171],
            [ 8010, 16145, 8090, 8045],
            [ 1013, 990, 940, 6907]
          ]
        }
      ]
    }

    return {
      options: option
    }
  },
  methods: {
  }
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


<template>
  <v-chart autoresize
    :options="options" />
</template>
<script>

export default {
  components: {
  },
  data () {
    var heatData = []
    for (var i = 0; i < 20; ++i) {
      heatData.push([
        400 + Math.random() * 300,
        5 + Math.random() * 10,
        Math.random()
      ])
    }
    for (var x = 0; x < 100; ++x) {
      heatData.push([
        100 + Math.random() * 600,
        150 + Math.random() * 50,
        Math.random()
      ])
    }
    for (var y = 0; y < 200; ++y) {
      heatData.push([
        Math.random() * 1000,
        Math.random() * 800,
        Math.random() * 0.5
      ])
    }
    let option = {
      title: {
        text: '热力图自定义样式'
      },
      series: [
        {
          type: 'heatmap',
          data: heatData,
          hoverable: false,
          gradientColors: [{
            offset: 0.4,
            color: 'green'
          }, {
            offset: 0.5,
            color: 'yellow'
          }, {
            offset: 0.8,
            color: 'orange'
          }, {
            offset: 1,
            color: 'red'
          }],
          minAlpha: 0.2,
          valueScale: 2,
          opacity: 0.6
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

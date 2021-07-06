
<template>
<b-card header-tag="header"
    no-body
    class="text-secondary border-0  shadow">
    <h6 slot="header"
        class="mb-0 text-10">
        <chart-toolbar />
    </h6>
    <b-card-body class="p-0 pb-0  h-100">
        <line7> </line7>
    </b-card-body>
</b-card>
</template>
<script>
import { easingFuncs } from '@@/client/util/theme/easingFuncs.js'
import ChartToolbar from '@/components/Module/Chart/ChartToolbar'
import Line7 from '@/components/Module/Chart/Echarts/Line/Line7'

/*
Example of complex echarts card with toolbar
*/
export default {
  components: {
    ChartToolbar,
    Line7
  },
  computed: {
    legends () {
      const legends = [{
        label: '40%',
        text: 'Build on a culture of contribution',
        class: ['active', 'item-legend']
      }, {
        label: '33%',
        text: 'Build on a culture of contribution',
        class: ['item-legend']
      }, {
        label: '43%',
        text: 'Build on a culture of contribution',
        class: ['item-legend']
      }, {
        label: '13%',
        text: 'Build on a culture of contribution',
        class: ['item-legend']
      }, {
        label: '5%',
        text: 'Build on a culture of contribution',
        class: ['item-legend']
      }]
      return legends
    },

    options () {
      var xAxisData = []
      var data1 = easingFuncs.generateRandomSerie(true, 100)
      var data2 = easingFuncs.generateRandomSerie(false, 100)
      let option = {
        title: {
          text: 'Sales by Category',
          show: false
        },
        legend: {
          right: 0,
          bottom: 0,
          data: ['bar', 'bar2']
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        grid: {
          right: 1,
          left: 1,
          bottom: 0,
          top: 0
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      return option
    }

  },
  methods: {
    onMouseOver (legend) {
      this.legends.map(legend => {
        if (legend.class.includes('active')) legend.class.splice(legend.class.indexOf('active'), 1)
      })
      legend.class.push('active')
    }

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




<template>
<div>

    <title-page :title="capitalize(nameComponent)+'s Examples'">
    </title-page>

    <card-component v-for="i in maxComponent"
        :title="'Example '+i"
        :subTitle="'Echarts ' + capitalize(nameComponent) + ' Component'"
        :key="i">
        <component :is="nameComponent+i"> </component>
    </card-component>

</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import Bar1 from '@/components/Module/Chart/Echarts/Bar/Bar1'
import Bar10 from '@/components/Module/Chart/Echarts/Bar/Bar10'
import Bar11 from '@/components/Module/Chart/Echarts/Bar/Bar11'
import Bar12 from '@/components/Module/Chart/Echarts/Bar/Bar12'
import Bar13 from '@/components/Module/Chart/Echarts/Bar/Bar13'
import Bar14 from '@/components/Module/Chart/Echarts/Bar/Bar14'
import Bar15 from '@/components/Module/Chart/Echarts/Bar/Bar15'
import Bar16 from '@/components/Module/Chart/Echarts/Bar/Bar16'
import Bar18 from '@/components/Module/Chart/Echarts/Bar/Bar18'
import Bar19 from '@/components/Module/Chart/Echarts/Bar/Bar19'
import Bar20 from '@/components/Module/Chart/Echarts/Bar/Bar20'
import Bar3 from '@/components/Module/Chart/Echarts/Bar/Bar3'
import Bar4 from '@/components/Module/Chart/Echarts/Bar/Bar4'
import Bar5 from '@/components/Module/Chart/Echarts/Bar/Bar5'
import Bar7 from '@/components/Module/Chart/Echarts/Bar/Bar7'
import Bar8 from '@/components/Module/Chart/Echarts/Bar/Bar8'
import Bar9 from '@/components/Module/Chart/Echarts/Bar/Bar9'
import Bar2 from '@/components/Module/Chart/Echarts/Bar/Bar2'
import Bar6 from '@/components/Module/Chart/Echarts/Bar/Bar6'
import Bar17 from '@/components/Module/Chart/Echarts/Bar/Bar17'
import Bar21 from '@/components/Module/Chart/Echarts/Bar/Bar21'
import Candlestick1 from '@/components/Module/Chart/Echarts/Candlestick/Candlestick1'
import Candlestick2 from '@/components/Module/Chart/Echarts/Candlestick/Candlestick2'
import Funnel1 from '@/components/Module/Chart/Echarts/Funnel/Funnel1'
import Funnel2 from '@/components/Module/Chart/Echarts/Funnel/Funnel2'
import Funnel3 from '@/components/Module/Chart/Echarts/Funnel/Funnel3'
import Funnel4 from '@/components/Module/Chart/Echarts/Funnel/Funnel4'
import Funnel5 from '@/components/Module/Chart/Echarts/Funnel/Funnel5'
import Gauge1 from '@/components/Module/Chart/Echarts/Gauge/Gauge1'
import Gauge2 from '@/components/Module/Chart/Echarts/Gauge/Gauge2'
import Gauge3 from '@/components/Module/Chart/Echarts/Gauge/Gauge3'
import Line1 from '@/components/Module/Chart/Echarts/Line/Line1'
import Line2 from '@/components/Module/Chart/Echarts/Line/Line2'
import Line3 from '@/components/Module/Chart/Echarts/Line/Line3'
import Line4 from '@/components/Module/Chart/Echarts/Line/Line4'
import Line5 from '@/components/Module/Chart/Echarts/Line/Line5'
import Line6 from '@/components/Module/Chart/Echarts/Line/Line6'
import Line7 from '@/components/Module/Chart/Echarts/Line/Line7'
import Line8 from '@/components/Module/Chart/Echarts/Line/Line8'
import Pie1 from '@/components/Module/Chart/Echarts/Pie/Pie1'
import Pie2 from '@/components/Module/Chart/Echarts/Pie/Pie2'
import Pie3 from '@/components/Module/Chart/Echarts/Pie/Pie3'
import Pie4 from '@/components/Module/Chart/Echarts/Pie/Pie4'
import Pie6 from '@/components/Module/Chart/Echarts/Pie/Pie6'
import Pie8 from '@/components/Module/Chart/Echarts/Pie/Pie8'
import Pie10 from '@/components/Module/Chart/Echarts/Pie/Pie10'
import Pie5 from '@/components/Module/Chart/Echarts/Pie/Pie5'
import Pie7 from '@/components/Module/Chart/Echarts/Pie/Pie7'
import Pie9 from '@/components/Module/Chart/Echarts/Pie/Pie9'
import Radar1 from '@/components/Module/Chart/Echarts/Radar/Radar1'
import Radar2 from '@/components/Module/Chart/Echarts/Radar/Radar2'
import Radar3 from '@/components/Module/Chart/Echarts/Radar/Radar3'
import Radar4 from '@/components/Module/Chart/Echarts/Radar/Radar4'
import Radar5 from '@/components/Module/Chart/Echarts/Radar/Radar5'
import Scatter1 from '@/components/Module/Chart/Echarts/Scatter/Scatter1'
import Scatter3 from '@/components/Module/Chart/Echarts/Scatter/Scatter3'
import Scatter6 from '@/components/Module/Chart/Echarts/Scatter/Scatter6'
import Scatter2 from '@/components/Module/Chart/Echarts/Scatter/Scatter2'
import Scatter4 from '@/components/Module/Chart/Echarts/Scatter/Scatter4'
import Scatter5 from '@/components/Module/Chart/Echarts/Scatter/Scatter5'
import Tree1 from '@/components/Module/Chart/Echarts/Tree/Tree1'
import Tree2 from '@/components/Module/Chart/Echarts/Tree/Tree2'
import Tree3 from '@/components/Module/Chart/Echarts/Tree/Tree3'
import Treemap1 from '@/components/Module/Chart/Echarts/Treemap/Treemap1'
import Treemap2 from '@/components/Module/Chart/Echarts/Treemap/Treemap2'
import Treemap3 from '@/components/Module/Chart/Echarts/Treemap/Treemap3'
import CardComponent from '@/components/Base/Card/CardComponent'
import Graph1 from '@/components/Module/Chart/Echarts/Graph/Graph1'
import Graph2 from '@/components/Module/Chart/Echarts/Graph/Graph2'

export default {
  props: {
    maxComponent: {
      type: Number,
      default: 2
    },
    nameComponent: {
      type: String,
      default: 'bar'
    }
  },
  methods: {
    capitalize: s => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  },
  components: {
    TitlePage,
    Bar1,
    Bar2,
    Bar3,
    Bar4,
    Bar5,
    Bar6,
    Bar7,
    Bar8,
    Bar9,
    Bar10,
    Bar11,
    Bar12,
    Bar13,
    Bar14,
    Bar15,
    Bar16,
    Bar17,
    Bar18,
    Bar19,
    Bar20,
    Bar21,
    Candlestick1,
    Candlestick2,
    Funnel1,
    Funnel2,
    Funnel3,
    Funnel4,
    Funnel5,
    Gauge1,
    Gauge2,
    Gauge3,
    Line1,
    Line2,
    Line3,
    Line4,
    Line5,
    Line6,
    Line7,
    Line8,
    Pie1,
    Pie2,
    Pie3,
    Pie4,
    Pie5,
    Pie6,
    Pie7,
    Pie8,
    Pie9,
    Pie10,
    Radar1,
    Radar2,
    Radar3,
    Radar4,
    Radar5,
    Scatter1,
    Scatter2,
    Scatter3,
    Scatter4,
    Scatter5,
    Scatter6,
    Tree1,
    Tree2,
    Tree3,
    Treemap1,
    Treemap2,
    Treemap3,
    CardComponent,
    Graph1,
    Graph2
  }
}

</script>




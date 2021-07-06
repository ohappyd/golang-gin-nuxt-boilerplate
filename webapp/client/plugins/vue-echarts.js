import Vue from 'vue'
import ComponentECharts from 'vue-echarts/components/ECharts'
import echarts from 'echarts'
import { initTheme } from '@@/client/util/chart/echartsTheme'
import layoutList from '@@/config/layouts.json'

export default function ({ store, route }) {
  let skinFromMeta = ''
  if (route.meta[0] && route.meta[0].layout && store.state.theme.skin === 'default') {
    skinFromMeta = layoutList.layouts[route.meta[0].layout].skin
  }

  let skin = store.state.theme.skin !== 'default' ? store.state.theme.skin : skinFromMeta

  // Register theme pallete on echarts
  initTheme(echarts, skin)

  // Register  global component
  Vue.component('v-chart', ComponentECharts)
}

// More info on package website: https://github.com/ecomfe/vue-echarts

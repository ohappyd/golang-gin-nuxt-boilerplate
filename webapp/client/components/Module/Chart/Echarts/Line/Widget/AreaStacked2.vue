
<template>
<b-card no-body
    class="rounded overflow-hidden shadow-1 widget"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Sales"
            subTitle="This Year Sum">

            <div class="ml-auto text-24 text-muted my-auto">
                <i class="la la-bar-chart" />
                <i class="la la-area-chart" />
                <i class="la la-pie-chart" />
            </div>
        </card-title>

    </b-card-header>
    <b-card-body class="p-0"
        style="height: 300px;">
        <line7 height="100%"> </line7>
    </b-card-body>
    <b-card-footer>
        <div class>
            <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Units</p>
            <p class="text-24 mb-0"> 1,975,224 <i class="la la-circle text-success" /></p>
            <span class="text-11 mt-0 opacity-7">
                24% last period</span>
        </div>
        <div class>
            <p class="text-10  text-uppercase  mb-0 opacity-7">Week's Units</p>
            <p class="text-24 mb-0"> 2,101,122 <i class="la la-circle text-success" /></p>
            <span class="text-11  mt-0 opacity-7">
                58% last period</span>
        </div>
        <div class>
            <p class="text-10  text-uppercase mb-0 opacity-7">Month's Units</p>
            <p class="text-24  mb-0"> 1,311,270 <i class="la la-circle text-danger" /></p>
            <span class="text-11  mt-0 opacity-7">
                12% last period</span>
        </div>
    </b-card-footer>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import CardTitle from '@/components/Base/Card/CardTitle'
import Line7 from '@/components/Module/Chart/Echarts/Line/Line7'

/*
Example of component for rendering the big bars inside a card
*/
export default {
  props: {
    // Main card bg class
    bgClass: {
      type: String,
      default: 'bg-theme1inv'
    },
    // Main text class
    textClass: {
      type: String,
      default: 'text-theme1'
    },
    // Title class
    titleClass: {
      type: String,
      default: 'text-secondary'
    },
    // Subtitle class
    subtitleClass: {
      type: String,
      default: 'text-muted'
    },
    // Border class
    borderClass: {
      type: String,
      default: 'border-muted'
    },
    // Icon class
    icon: {
      type: String
    },
    // Dark mode
    dark: {
      type: Boolean
    },
    // Chat color list
    colorList: {
      type: Array,
      default: () => [themeColors().primary, themeColors().secondary]
    },
    // Max chart series length
    maxSerie: {
      type: Number,
      default: 80
    }
  },
  components: {

    CardTitle,
    Line7
  }
}

</script>


<style lang="scss" scoped>
.card-body {
  padding: 9px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
}

</style>



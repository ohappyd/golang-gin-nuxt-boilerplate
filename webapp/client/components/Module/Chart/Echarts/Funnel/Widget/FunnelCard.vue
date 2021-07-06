
<template>
<b-card no-body
    class="rounded overflow-hidden shadow-1 widget"
    style="min-height: 430px;"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Sales"
            subTitle="This Year Sum">

        </card-title>

    </b-card-header>
    <b-card-body class="p-0">
        <funnel5 height="100%"> </funnel5>

    </b-card-body>
    <b-card-footer>
        <div class>
            <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Units</p>
            <p class="text-24 mb-0 d-none d-sm-block">
                975,224
                <i class="la la-circle text-success" />
            </p>
            <p class="text-24 mb-0 d-sm-none">
                19k
                <span class="text-success">+</span>
            </p>
            <span class="text-11 mt-0 opacity-7">
                24% last period</span>
        </div>
        <div class>
            <p class="text-10  text-uppercase  mb-0 opacity-7">Week's Units</p>
            <p class="text-24 mb-0 d-none d-sm-block"> 101,122
                <i class="la la-circle text-success" /></p>

            <p class="text-24 mb-0 d-sm-none">
                21k
                <span class="text-success">+</span>
            </p>
            <span class="text-11  mt-0 opacity-7">
                58% last period</span>
        </div>
        <div class>
            <p class="text-10  text-uppercase mb-0 opacity-7">Month's Units</p>
            <p class="text-24  mb-0  d-none d-sm-block"> 311,270
                <i class="la la-circle text-danger" />
            </p>

            <p class="text-24 mb-0 d-sm-none">
                13k
                <span class="text-success">+</span>
            </p>
            <span class="text-11  mt-0 opacity-7">
                12% last period</span>
        </div>
    </b-card-footer>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import CardTitle from '@/components/Base/Card/CardTitle'
import Funnel5 from '@/components/Module/Chart/Echarts/Funnel/Funnel5'

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
    Funnel5
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



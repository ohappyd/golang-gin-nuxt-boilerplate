
<template>
<b-card no-body
    class="rounded overflow-hidden shadow-1"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Sales"
            subTitle="This Year Sum">

        </card-title>

    </b-card-header>
    <b-card-body style="height: 180px;">
        <div class="text-theme1 ig-header-container ">
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
        </div>
        <bar18 :maxSerie="40"
            :colorList="colorList"> </bar18>
    </b-card-body>

</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import Bar18 from '@/components/Module/Chart/Echarts/Bar/Bar18'
import CardTitle from '@/components/Base/Card/CardTitle'

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
      default: 'text-dark'
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
    Bar18,
    CardTitle
  }
}

</script>


<style lang="scss" scoped>
.card-body {
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.ig-header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

</style>



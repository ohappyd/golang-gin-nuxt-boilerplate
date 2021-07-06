
<template>
<b-card no-body
    class="ig-rounded"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Conversion Rate"
            subTitle="Sales / Period">

            <svg-icon icon="graph-pie"
                variant="secondary"
                width="28px"
                height="28px"
                rounded
                :lighten="false"> </svg-icon>

            <svg-icon icon="graph-poly"
                variant="secondary"
                width="28px"
                height="28px"
                rounded
                :lighten="false"> </svg-icon>

            <svg-icon icon="graph-bar"
                variant="secondary"
                width="28px"
                height="28px"
                rounded
                :lighten="false"> </svg-icon>

        </card-title>

    </b-card-header>
    <b-card-body>
        <bar21 :maxSerie="maxSerie"
            title=""
            subtitle
            style="height: 310px;"
            :colorList="colorList"> </bar21>

    </b-card-body>
    <b-card-footer class="text-theme1 ig-p-1">
        <div class="d-flex">

            <div>
                <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Leads</p>
                <p class="text-24 mb-0 text-primary">
                    2240<span class>+</span>
                </p>
                <span class="text-11 mt-0 opacity-7">
                    14% last period</span>
            </div>

        </div>
        <div class="d-flex">

            <div>
                <p class="text-10  text-uppercase  mb-0 opacity-7">Week's Leads</p>
                <p class="text-24 mb-0 text-primary">
                    1220<span class>+</span>
                </p>
                <span class="text-11  mt-0 opacity-7">
                    32% last period</span>
            </div>

        </div>
        <div class="d-flex">

            <div>
                <p class="text-10  text-uppercase mb-0 opacity-7">Month's Leads</p>
                <p class="text-24  mb-0 text-primary">
                    2700<span class>+</span>
                </p>
                <span class="text-11  mt-0 opacity-7">
                    18% last period</span>
            </div>

        </div>
    </b-card-footer>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import CardTitle from '@/components/Base/Card/CardTitle'
import SvgIcon from '@/components/Base/Icon/SvgIcon'
import Bar21 from '@/components/Module/Chart/Echarts/Bar/Bar21'

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
    CardTitle,
    SvgIcon,
    Bar21
  }
}

</script>


<style lang="scss" scoped>
.card-body {
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}

</style>




<template>
<b-card no-body
    style="max-height2: 430px;"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Sales"
            subTitle="This Year Sum">

        </card-title>

    </b-card-header>
    <b-card-body>
        <div class="ig-header-container">
            <div class>
                <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Units</p>
                <p class="text-24 mb-0"> 975,224 <i class="la la-angle-double-up text-success" /></p>
                <span class="text-11 mt-0 opacity-7">
                    24% last period</span>
            </div>
            <div class>
                <p class="text-10  text-uppercase  mb-0 opacity-7">Week's Units</p>
                <p class="text-24 mb-0"> 101,122 <i class="la la-angle-double-up text-success" /></p>
                <span class="text-11  mt-0 opacity-7">
                    58% last period</span>
            </div>
            <div class>
                <p class="text-10  text-uppercase mb-0 opacity-7">Month's Units</p>
                <p class="text-24  mb-0"> 311,270 <i class="la la-angle-double-down text-danger" /></p>
                <span class="text-11  mt-0 opacity-7">
                    12% last period</span>
            </div>
        </div>
        <line7 height="100%"> </line7>
    </b-card-body>
    <b-card-footer class="d-flex justify-content-center justify-content-sm-start">
        <div class="flex-grow-1 d-flex align-items-center justify-content-center justify-content-sm-start my-2">
            <b-form-checkbox inline
                v-model="checked">
                Me
            </b-form-checkbox>
            <b-form-checkbox inline>
                Brian
            </b-form-checkbox>
            <b-form-checkbox inline>
                Anderson
            </b-form-checkbox>

        </div>
        <b-button-group class="justify-content-center justify-content-sm-start">
            <b-button @click="currentIdx=0"
                :variant="currentIdx == 0 ? 'theme1' : 'link'"
                :class="currentIdx == 0 ? 'inverse' : ''">Daily</b-button>
            <b-button @click="currentIdx=1"
                :variant="currentIdx == 1 ? 'theme1' : 'link'"
                :class="currentIdx == 1 ? 'inverse' : ''">Weekly</b-button>
            <b-button @click="currentIdx=2"
                :variant="currentIdx == 2 ? 'theme1' : 'link'"
                :class="currentIdx == 2 ? 'inverse' : ''">Monthly </b-button>
        </b-button-group>
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
  },

  data () {
    return {

      currentIdx: 0,
      checked: true
    }
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

.card-footer {
  flex-wrap: wrap;
}

.ig-header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card {
  margin-bottom: 0rem;
}

.btn-group {
  align-items: center;
}

.custom-control {
  padding-left: 1.5rem;
}

</style>



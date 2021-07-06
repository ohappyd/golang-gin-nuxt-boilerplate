
<template>
<b-card no-body
    class="no-bg bg-transparent"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex bg-theme1inv ig-rounded shadow"
        :class="[borderClass]">
        <card-title title="Dashboad"
            subTitle="Convesion by Team">

            <b-button icon
                variant="link"
                style
                class="btn-square btn-white d-none d-sm-block"> <i class="fas fa-chart-line" />
            </b-button>

            <b-button icon
                variant="link"
                class="btn-square btn-white d-none d-sm-block"> <i class="fas fa-chart-pie" />
            </b-button>

            <b-dropdown id="dropdown-1"
                text="2019/12"
                variant="primary"
                class="shadow inverse d-block d-sm-none">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>

            <b-dropdown id="dropdown-1"
                text="December, 2019"
                variant="primary"
                class="shadow inverse d-none d-sm-block">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>

        </card-title>

    </b-card-header>
    <b-card-body>
        <bar21 :maxSerie="maxSerie"
            title=""
            subtitle
            style="height: 310px;"
            :colorList="colorList"> </bar21>
    </b-card-body>
    <b-card-footer class="text-theme1 ig-p-1 shadow flex-column flex-sm-row">
        <div class="d-flex justify-content-center">

            <div class="bg-primary icon-rounded inverse m-sm-auto">
                <i class="la la-shopping-cart" /></div>

            <div class="ml-3">
                <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Leads</p>
                <p class="text-24 mb-0 text-theme1">
                    2240<span class>+</span>
                </p>
                <span class="text-11 mt-0 opacity-7">
                    14% last period</span>
            </div>

        </div>
        <div class="d-flex justify-content-center">

            <div class="bg-warning icon-rounded inverse m-sm-auto">
                <i class="la la-tachometer" /></div>

            <div class="ml-3">
                <p class="text-10  text-uppercase  mb-0 opacity-7">Week's Leads</p>
                <p class="text-24 mb-0 text-theme1">
                    1220<span class>+</span>
                </p>
                <span class="text-11  mt-0 opacity-7">
                    32% last period</span>
            </div>

        </div>
        <div class="d-flex justify-content-center ig-rounded">

            <div class="bg-danger icon-rounded inverse m-sm-auto">
                <i class="la la-certificate" /></div>

            <div class="ml-3">
                <p class="text-10  text-uppercase mb-0 opacity-7">Month's Leads</p>
                <p class="text-24  mb-0 text-theme1">
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
.card-header {
  background-color: transparent;
}

.icon-rounded {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 140%;
  }
}

</style>



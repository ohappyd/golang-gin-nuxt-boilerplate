
<template>
<div class="dashboard">
    <four-charts4> </four-charts4>

    <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <area-stacked> </area-stacked>
        </b-col>

        <b-col md="12"
            lg="6">
            <time-line class="h-100"> </time-line>
        </b-col>
    </b-row>

    <b-row>

        <b-col sm="12"
            md="6"
            lg="3">
            <social-box> </social-box>
        </b-col>
        <b-col sm="12"
            md="6"
            lg="3">
            <radial-card> </radial-card>
        </b-col>

        <b-col sm="12"
            md="6"
            lg="3">
            <social-box network="LinkedIn"
                iconNetwork="linkedin"> </social-box>
        </b-col>

        <b-col sm="12"
            md="6"
            lg="3">
            <column-card> </column-card>
        </b-col>
    </b-row>

    <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <next-todos> </next-todos>
        </b-col>
        <b-col md="12"
            lg="6">
            <small-list> </small-list>
        </b-col>
    </b-row>

    <page-footer> </page-footer>

</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import SmallList from '@/components/Module/Project/Widget/SmallList'
import NextTodos from '@/components/Module/Todo/Widget/NextTodos'
import AreaStacked from '@/components/Module/Chart/Echarts/Line/Widget/AreaStacked'
import TimeLine from '@/components/Module/Social/Widget/TimeLine'
import SocialBox from '@/components/Module/Social/Widget/SocialBox'
import FourCharts4 from '@/components/Module/Dashboard/Widget/FourCharts4'
import RadialCard from '@/components/Module/Chart/Apex/Radial/Widget/RadialCard'
import ColumnCard from '@/components/Module/Chart/Apex/Column/Widget/ColumnCard'
import PageFooter from '@/components/Base/Page/PageFooter'

export default {
  layout: 'admin',
  components: {
    SmallList,
    NextTodos,
    TimeLine,
    AreaStacked,
    SocialBox,
    FourCharts4,
    RadialCard,
    ColumnCard,
    PageFooter
  },
  computed: {
    colorList () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return [variablesColors.primary, variablesColors.theme1]
    }

  },

  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'Dashboard'
    }
  }
}

</script>





<template>
<div class="dashboard">

    <b-row class="pt-0">
        <b-col md="12"
            lg="12">
            <big-bar4> </big-bar4>

        </b-col>
    </b-row>

    <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <radar-card> </radar-card>

        </b-col>
        <b-col md="12"
            lg="6">
            <active-visitors class="h-100"> </active-visitors>
        </b-col>
    </b-row>
    <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <last-sale> </last-sale>
        </b-col>
        <b-col md="12"
            lg="6">
            <stock> </stock>

        </b-col>
    </b-row>
    <four-charts3> </four-charts3>
    <page-footer> </page-footer>

</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import LastSale from '@/components/Module/Sale/Widget/LastSale'
import ActiveVisitors from '@/components/Module/Chat/Widget/ActiveVisitors'
import BigBar4 from '@/components/Module/Chart/Echarts/Bar/Widget/BigBar4'
import RadarCard from '@/components/Module/Chart/Apex/Radar/Widget/RadarCard'
import PageFooter from '@/components/Base/Page/PageFooter'
import Stock from '@/components/Module/Product/Widget/Stock'
import FourCharts3 from '@/components/Module/Dashboard/Widget/FourCharts3'

export default {
  layout: 'admin',
  components: {
    LastSale,
    ActiveVisitors,
    RadarCard,
    PageFooter,
    Stock,
    FourCharts3,
    BigBar4
  },
  computed: {
    variables () {
      return themeColors(this.$store.state.theme.skin)
    }

  }
}

</script>




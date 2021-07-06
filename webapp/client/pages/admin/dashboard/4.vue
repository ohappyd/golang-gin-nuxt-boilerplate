
<template>
<div class="dashboard">

    <b-row class="pt-0">
        <b-col md="12"
            lg="8">

            <big-bar :maxSerie="40"
                bgClass="bg-theme1inv"
                :colorList="colorList"
                textClass="text-dark"> </big-bar>

        </b-col>

        <b-col md="12"
            lg="4">
            <four-charts3> </four-charts3>
        </b-col>
    </b-row>

    <b-row b-container>
        <b-col md="12"
            lg="8">
            <contacts />
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-alt7 bgImage="/img/social2.jpg"> </basic-alt7>

        </b-col>

    </b-row>

    <b-row class="pt-0">
        <b-col xs="12"
            lg="6"
            xl="6">
            <echarts-lines style="max-height: 460px" />
        </b-col>
        <b-col xs="12"
            lg="6"
            xl="6">
            <echarts-lines mainColorName="warning"
                style="max-height: 460px"
                title="New Orders"
                :seedRandom="[false, 40, false, 3, 3, 4]" />

        </b-col>

    </b-row>

    <b-row class="row">
        <!-- Column -->
        <div class="col-lg-6 col-md-12">
            <stock />
        </div>

        <div class="col-lg-6 col-md-12">
            <lasts-notifications />
        </div>
    </b-row>
    <four-charts2> </four-charts2>

    <page-footer> </page-footer>

</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import Contacts from '@/components/Module/User/Widget/Contacts'
import Stock from '@/components/Module/Product/Widget/Stock'
import LastsNotifications from '@/components/Module/Notificaction/Widget/LastsNotifications'
import EchartsLines from '@/components/Module/Chart/Echarts/Line/Widget/EchartsLines'
import BigBar from '@/components/Module/Chart/Echarts/Bar/Widget/BigBar'
import TitleTop from '@/components/Base/Title/TitleTop'
import FourCharts3 from '@/components/Module/Dashboard/Widget/FourCharts3'
import BasicAlt7 from '@/components/Module/Weather/Widget/BasicAlt7'
import FourCharts2 from '@/components/Module/Dashboard/Widget/FourCharts2'
import PageFooter from '@/components/Base/Page/PageFooter'

export default {
  layout: 'admin',
  components: {
    Contacts,
    Stock,
    LastsNotifications,
    EchartsLines,
    BigBar,
    TitleTop,
    FourCharts3,
    BasicAlt7,
    FourCharts2,
    PageFooter
  },
  computed: {
    colorList () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      return [variablesColors.variantsObj.theme1['mixed-1'], variablesColors.variantsObj.primary['base'], variablesColors.variantsObj.primary['mixed-1']]
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


<style lang="scss">


</style>



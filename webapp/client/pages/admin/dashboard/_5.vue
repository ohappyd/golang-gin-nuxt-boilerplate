
<template>
<div class="dashboard">

    <b-row b-container>
        <b-col md="12"
            lg="6"
            xl="4">
            <last-leads> </last-leads>
        </b-col>
        <b-col md="12"
            lg="6"
            xl="8">
            <big-bar2 :maxSerie="30"
                :colorList="[variables.primary]"
                bgClass="bg-theme1inv"
                subtitleClass="text-muted"
                titleClass="text-secondary"
                borderClass
                textClass="text-dark"> </big-bar2>

        </b-col>
    </b-row>

    <b-row v-if="true"
        b-container>
        <b-col md="12"
            lg="4">

            <basic-box isUpgrade
                textClass="text-theme1"
                title="Upgrade Now -  Save 25% Today!"> </basic-box>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-box icon="flame"
                isSocial
                title="
                       <span class='text-theme1 mixed-1'>
                       Save
                       </span>
                       + 25%
                       <span class='text-theme1 mixed-1'>
                       on Social Page.  </span>
                       "> </basic-box>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-box icon="briefcase"
                title="<i class='fas fa-money-bill font-20 mr-2 text-theme1 mixed-1'> </i>
                       <span>Affiliate Program. </span> "> </basic-box>
        </b-col>
    </b-row>

    <b-row class="pt-0">
        <b-col xs="12"
            lg="4"
            xl="4">
            <card-bar mainColorName="primary"
                style="min-height: 380px"
                title="New Orders"
                iconClass="la la-credit-card"
                iconBgClass="info"
                :randomSeed="2"
                percentClass="text-danger"
                type="line"
                :seedRandom="[false, 40, false, 3, 3, 10]" />

        </b-col>
        <b-col xs="12"
            lg="4"
            xl="4">

            <card-bar mainColorName="primary"
                style="min-height: 380px"
                title="New Sales"
                iconClass="la la-gift"
                iconBgClass="info"
                type="bar"
                percentClass="text-info"
                xAxisType2="value"
                yAxisType2="category"
                :randomSeed="3" />

        </b-col>
        <b-col xs="12"
            lg="4"
            xl="4">
            <card-bar mainColorName="primary"
                style="min-height: 380px"
                iconBgClass="info"
                type="line"
                :randomSeed="1"
                :lineSmooth="true" />

        </b-col>

    </b-row>

    <b-row class
        b-container>
        <b-col md="12"
            lg="4">
            <contact> </contact>
        </b-col>
        <b-col md="12"
            lg="8">
            <last-customer> </last-customer>
        </b-col>
    </b-row>

    <page-footer> </page-footer>

</div>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import LastCustomer from '@/components/Module/Customer/Widget/LastCustomer'
import LastLeads from '@/components/Module/Social/Widget/LastLeads'
import Contact from '@/components/Module/Social/Widget/Contact'
import BigBar2 from '@/components/Module/Chart/Echarts/Bar/Widget/BigBar2'
import CardBar from '@/components/Module/Chart/Echarts/Bar/Widget/CardBar'
import PageFooter from '@/components/Base/Page/PageFooter'
import BasicBox from '@/components/Module/Social/Widget/BasicBox'

export default {
  layout: 'admin',
  components: {
    LastCustomer,
    LastLeads,
    Contact,
    CardBar,
    PageFooter,
    BigBar2,
    BasicBox
  },
  computed: {
    variables () {
      return themeColors(this.$store.state.theme.skin)
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

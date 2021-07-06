
<template>
<div class="dashboard">

    <multiple-bottom-bar> </multiple-bottom-bar>

    <b-row class="pt-0">
        <b-col sm="12"
            lg="6">

            <funnel-card> </funnel-card>
        </b-col>
        <b-col md="12"
            lg="6">
            <last-leads> </last-leads>
        </b-col>
    </b-row>
    <b-row>

        <b-col md="12"
            lg="3">

            <basic-alt2 className="bg-primary inverse"
                city="Houston"
                mainIcon="thunder"
                wind="80"
                variant="primary"
                temp="63"> </basic-alt2>
        </b-col>

        <b-col md="12"
            lg="3">

            <bottom-line4 variant="warning"
                mainIcon="activity"> </bottom-line4>

        </b-col>

        <b-col md="12"
            lg="3">

            <basic-alt2 className="bg-primary inverse"
                city="Chicago"
                mainIcon="sun"
                wind="80"
                variant="danger"
                temp="63"> </basic-alt2>
        </b-col>

        <b-col md="12"
            lg="3">

            <bottom-line4 variant="info"
                mainIcon="bag"> </bottom-line4>

        </b-col>

    </b-row>

    <b-row class="pt-0">
        <b-col md="12"
            lg="6">
            <next-todos> </next-todos>
        </b-col>
        <b-col md="12"
            lg="6">
            <lasts-notifications> </lasts-notifications>
        </b-col>
    </b-row>

    <page-footer> </page-footer>

</div>
</template>
<script>
import NextTodos from '@/components/Module/Todo/Widget/NextTodos'
import LastLeads from '@/components/Module/Social/Widget/LastLeads'
import FunnelCard from '@/components/Module/Chart/Echarts/Funnel/Widget/FunnelCard'
import MultipleBottomBar from '@/components/Module/Chart/Echarts/Bar/Widget/MultipleBottomBar'
import BottomLine4 from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine4'
import BasicAlt2 from '@/components/Module/Weather/Widget/BasicAlt2'
import PageFooter from '@/components/Base/Page/PageFooter'
import LastsNotifications from '@/components/Module/Notificaction/Widget/LastsNotifications'

export default {
  components: {
    NextTodos,
    LastLeads,
    FunnelCard,
    MultipleBottomBar,
    BottomLine4,
    BasicAlt2,
    PageFooter,
    LastsNotifications
  },
  layout: 'admin',
  meta: {
    page: {
      showBreadcrumb: true,
      titleBreadcrumb: 'Dashboard'
    }
  }
}

</script>




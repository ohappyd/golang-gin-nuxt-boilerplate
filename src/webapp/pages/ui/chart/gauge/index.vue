
<template>
<card-component-list :maxComponent="3"
    nameComponent="gauge"> </card-component-list>
</template>
<script>
import CardComponentList from '@/components/Base/Card/CardComponentList'

export default {
  components: {

    CardComponentList
  },
  layout: 'admin',
  meta: {
    component: {
      isEcharts: true
    },
    page: {
      showBreadcrumb: true,
      iconBreadcrumb: 'la la-bar-chart-o',
      titleBreadcrumb: 'Funnels'
    }
  }

}

</script>




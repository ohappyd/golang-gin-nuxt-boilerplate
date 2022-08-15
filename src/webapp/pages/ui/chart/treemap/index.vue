
<template>
<card-component-list :maxComponent="3"
    nameComponent="treemap"> </card-component-list>
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
    }
  }
}

</script>




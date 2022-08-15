
<template>
<card-component-list :maxComponent="9"
    nameComponent="pie"> </card-component-list>
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




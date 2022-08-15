
<template>
<div class="d-flex mt-auto">
    <button-icon v-if="previousUrl"
        variant="secondary"
        iconClass="la la-angle-double-left"
        class=" px-4"
        style="min-width: 110px;"
        :href="urlPrefix + previousUrl"> Previous </button-icon>
    <button-icon v-if="nextUrl"
        variant="theme1"
        iconClass="la la-angle-double-right"
        class="ml-auto px-4"
        style="min-width: 110px;"
        :href="urlPrefix + nextUrl"> Next </button-icon>

</div>
</template>
<script>
import ButtonIcon from '@/components/Base/Button/ButtonIcon'

export default {
  components: {
    ButtonIcon
  },
  props: ['previousUrl', 'nextUrl'],
  computed: {
    urlPrefix () {
      const metaPage = this.$router.currentRoute.meta
      return metaPage.layout ? '/' + metaPage.layout : ''
    }
  }

}

</script>




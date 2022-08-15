
<template>
<div />
</template>
<script>

export default {
  components: {
  },
  layout: 'admin',
  mounted () {
    this.$router.push({
      path: this.urlPrefix + '/admin/doc/basic/getting-started'
    })
  },
  computed: {
    urlPrefix () {
      const metaPage = this.$router.currentRoute.meta
      return metaPage.layout ? '/' + metaPage.layout : ''
    }
  }
}

</script>

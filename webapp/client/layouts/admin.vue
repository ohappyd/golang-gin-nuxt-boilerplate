<template>
 	<admin-layout  :collapsed="layout.menuMinimized" :compacted="layout.menuCompacted" :layout="layout" :urlPrefix="urlPrefix" />
</template>

<script>
import adminLayout from './__admin.vue'
import layouts from '@@/config/layouts.json'

export default {
  components: { adminLayout },
  data(){
  	 return {
     	layoutList: layouts
     }
  },
  computed: {
    // Get current selected layoutd using meta from custom routes
  	layout() {
      let layout = this.layoutList.default
      const metaPage = this.$router.currentRoute.meta
      
      if( metaPage.layout ){
      	layout = Object.assign ( layout, this.layoutList.layouts[metaPage.layout] );
      }

    	return layout
    },
    urlPrefix() {
      const metaPage = this.$router.currentRoute.meta
    	return  metaPage.layout ? '/'+metaPage.layout : '' 
    }
  },
  head () {
    const metaPage = this.$router.currentRoute.meta
    const currentSkin = this.$store.state.theme.skin !== 'default' ? this.$store.state.theme.skin : this.layout.skin
    //Enable Header background bg on scroll
    const  headerBgOnScroll = this.layout.headerBgOnScroll ? ' ig-header-bg-on-scroll' : ''
     
    return {

      bodyAttrs: {
        class: 'skin-' + currentSkin + headerBgOnScroll
      }
    }
  },
}
</script>

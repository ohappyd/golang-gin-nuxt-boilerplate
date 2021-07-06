<template>
  
 
  
  <div class="container-body" :class="{'side-continuous': layout.menuContinuous}">
  		<header class="ig-main-header"
        style2="
                   position: fixed;
                   top: 0;
                   z-index: 1;

                   "
        :class="{'header-extended': layout.headerExtended}">
            <nav-bar class="ig-rounded h-100"
                :isSideCollapsed.sync="isSideCollapsedInternal"
                :layout="layout"
                :hideLogo="layout.menuContinuous"
                :prefixHref="urlPrefix"
                :menu="!layout.topMenuHide ? menu  :  []  " />
    		</header>

    <nav v-if="!layout.menuHide" class="nav-sidebar"  v-click-outside="hideSideOnOutside">
 
        <b-collapse v-model="isSideCollapsed"  id="nav-sidebar">
            <client-only> 
                <sidebar-menu
                  :menu="menu"
                  :collapsed="isCollapsed"
                  :compacted="compacted"
                  :width="menuWidth"
                  :widthCollapsed="layoutSize['theme-menu-icon-width']"           
                  :showOneChild="false"
                  :prefixHref="urlPrefix"
                  :logoBg="layout.menuLogoBg"
                  :iconIndex="layout.menuIconIndex"
                  ref="sidebarMenu"
                  class="h-100"
                  :class="{'header-extended': layout.headerExtended }"
                />
            </client-only>
        </b-collapse>
    </nav>
    <main id="main-content">
      <b-container :fluid="!layout.contentBoxed" class="container-content h-100" :class="{'boxed':layout.contextBarHide && layout.contentBoxed && isShowFixedContext}">
        <page-wrapper :windowWidth="windowWidth" 
                      :urlPrefix="urlPrefix"
                      :layout="layout"
                      :isCenteredContent="componentMeta && componentMeta.page && componentMeta.page.contentCentered"
                      >
        	<nuxt class="ig-content-view"/>
        </page-wrapper>
      </b-container>
    </main>

    <side-icons />
    
  </div>
</template>

<script>
  
import { mapGetters, mapActions } from 'vuex'
import breakpoints from '@@/client/styles/variables/base/_default-breakpoint.scss'
import layoutSize from '@@/client/styles/variables/base/_default-layout.scss'
import { menu } from '@@/client/util/menu/items'
import NavBar from '@/components/Base/NavBar/NavBar'
import SideIcons from '@/components/Module/Theme/SideIcons'
import PageWrapper from '@/components/Base/Page/PageWrapper'
import SidebarMenu from '@/components/Base/Menu/SideBar/SidebarMenu'
import ContextSideBar from '@/components/Base/Menu/ContextSideBar'

  
export default {
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  created () {

  },
  
  beforeDestroy () {
    window.document.getElementById('main-content').removeEventListener('scroll', this.handleScroll);
  },
  mounted () {
    
    
    this.$store.dispatch('auth/authenticate').catch(error => {
      if (!error.message.includes('Could not find stored JWT')) {
        console.log(error)
      }
    }) 
    
    
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleWindowResize)
    
    this.isContextMenuHided = document.body.classList.contains(
      'no-context-menu'
    )
    
    //Handle scroll main content
    window.document.getElementById('main-content').addEventListener('scroll', this.handleScroll);
    
    
  },

  components: {
    NavBar,
    SidebarMenu,
    ContextSideBar,
    PageWrapper,
    SideIcons
  }, 
  props: {
    layout: { type: Object, default: false },
    urlPrefix: { type: String, default: '' },
    collapsed: { type: Boolean, default: false },
    compacted: { type: Boolean, default: false }
  },
  //directives: {
    //ClickOutside
  //},
  data () {
    return {
      isSideCollapsedInternal: false,
      windowWidth: 1600,
      menu: menu,
      isSmallMenuShow: false,
      isContextMenuHided: false, // HIded using class on body
      isSmallContextShowInternal: false,
      layoutSize: layoutSize,
      scrollTop: 0
    }
  },
  computed: {
    ...mapGetters('theme', {
      'componentMeta': 'getComponentMeta'
    }),
    isShowFixedContext (){
    	return (this.$router.currentRoute.path.indexOf('/dashboard/') === -1) 
    },
    menuWidth () {
      return this.compacted ? layoutSize['theme-menu-compacted-width'] : layoutSize['theme-menu-width']//'85px' : '220px'
    },
    // COmpact or long version side menu
    isCollapsed () {
      const lg = Number(breakpoints.lg.replace('px', ''))
      const sm = Number(breakpoints.sm.replace('px', ''))
      if (this.windowWidth <= lg && this.windowWidth > sm) {
        return true
      } 
      else if (this.windowWidth <= sm) {
        return false
      }
      else return this.collapsed
    },
    //Hide or show side menu
    isSideCollapsed: {
      get: function() {
					 	const sm = Number(breakpoints.sm.replace('px', ''))
            if (this.windowWidth > sm) {
              // variablesColors.breakpoints.md) {
              return true
            } 
        		else return this.isSideCollapsedInternal
      },
      set: function(newValue) {
        this.isSideCollapsedInternal = newValue
			}
		},

  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    
  	handleScroll () {
      const elContent = window.document.getElementById('main-content')
      if(!elContent) return 
      this.scrollTop = elContent.scrollTop
      
      if (this.scrollTop  > 100) {
        window.jQuery("body").addClass("ig-is-scrolling");
      } else {
        window.jQuery("body").removeClass("ig-is-scrolling");
      }
 
    },
    
    hideSideOnOutside(ev){
      const sm = Number(breakpoints.sm.replace('px', ''))
      
      if(this.isSideCollapsedInternal && this.windowWidth < sm) 
    		this.isSideCollapsedInternal = false
      
    },
    handleWindowResize (event) {
      const sm = Number(breakpoints.sm.replace('px', ''))
      this.windowWidth = event.currentTarget.innerWidth
      this.isSideCollapsedInternal = (this.windowWidth > sm)
    },
    toggleSmallMenuShow () {
      this.isSmallMenuShow = !this.isSmallMenuShow
    },
    toggleSmallContextShow () {
      this.isSmallContextShowInternal = !this.isSmallContextShowInternal
      let bodyHtml = document.querySelector(".container-body > header");//getElementsByTagName('body')[0]
      if (this.isSmallContextShowInternal) {
        bodyHtml.classList.add('m-menu-context')
      } else {
        bodyHtml.classList.remove('m-menu-context')
      }
    },
    onCollapse (collapsed) {
      // Usar https://html-css-js.com/css/generator/box-shadow/ no widget
      this.collapsed = collapsed
    }
  }
}
</script>

<style lang="scss">
   @import "~@@/client/styles/styles.scss";
   @import "~@@/client/styles/skin/blue.scss";
   @import "~@@/client/styles/skin/blue-light.scss";
   @import "~@@/client/styles/skin/purple.scss";
   @import "~@@/client/styles/skin/red.scss";
   @import "~@@/client/styles/skin/grey.scss";
   @import "~@@/client/styles/skin/green.scss";
   @import "~@@/client/styles/skin/material.scss";
   @import "~@@/client/styles/skin/dark-blue.scss";
   @import "~@@/client/styles/skin/dark-golden.scss";
   @import "~@@/client/styles/skin/dark-grey.scss"; 
   @import "~@@/client/styles/skin/dark-purple.scss";
   @import "~@@/client/styles/skin/dark-material.scss";
   @import "~@@/client/styles/skin/grey-golden.scss";
   @import "~@@/client/styles/skin/grey-material.scss";
   @import "~@@/client/styles/skin/back-image.scss"; 
   @import "~@@/client/styles/skin/color-purple-air.scss";
   @import "~@@/client/styles/skin/color-dark-sky.scss";
   @import "~@@/client/styles/skin/color-carbon.scss";
  
  
</style>

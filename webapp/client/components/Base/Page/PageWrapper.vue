
<template>
<div class="ig-page-wrapper"
    :class="{'ig-centered-content':isCenteredContent}">

    <div :class="{'d-flex': isCenteredContent}"
        :style="{
                'padding-top':
                (!isShowBreadcrumb && !layout.breadcrumbHide && !isCenteredContent)
                ||
                (layout.headerBg != 'transparent' && !isShowBreadcrumb && !isCenteredContent )
                ? '40px' : '0px'}">

        <context-side-bar :isContextCollapsed.sync="isContextCollapsed"
            :showByBreakpoint="showByBreakpoint"
            v-click-outside="hideContextOnOutside"
            :layout="layout"
            class="ig-context-sidebar small-scroll"> </context-side-bar>

        <div class="page-wrapper-content"
            :class="isContextCollapsed && !showByBreakpoint ? 'ig-has-toggler' : ''">

            <!-- Generate breadcrumb + title -->
            <title-top :title="titleBreadcrumb"
                :icon="iconBreadcrumb"> </title-top>
            <!-- Main content page -->
            <slot>
                Main Content (Replace with slot value)
            </slot>
            <!-- Default footer -->

        </div>

    </div>

</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ContextSideBar from '@/components/Base/Menu/ContextSideBar'
import TitlePage from '@/components/Base/Title/TitlePage'
import TitleTop from '@/components/Base/Title/TitleTop'
import NavBar from '@/components/Base/NavBar/NavBar'

import breakpoints from '@@/client/styles/variables/base/_default-breakpoint.scss'
import { menu } from '@@/client/util/menu/items'
import layoutSize from '@@/client/styles/variables/base/_default-layout.scss'

export default {
  components: {
    ContextSideBar,
    TitlePage,
    TitleTop,
    NavBar
  },
  props: ['windowWidth', 'layout', 'urlPrefix', 'isCenteredContent'],
  watch: {
    windowWidth () {
      if (this.showByBreakpoint) {
        this.isContextCollapsed = false
      }
    }
    //
  },

  /* directives: {
ClickOutside
}, */
  methods: {
    hideContextOnOutside (ev) {
      if (ev.target.classList && ev.target.classList.contains('btn-collapse')) return
      this.isContextCollapsed = false
    }

  },
  computed: {

    ...mapGetters('theme',
      {
        'componentMeta': 'getComponentMeta'
      }),
    titleBreadcrumb () {
      return this.componentMeta && this.componentMeta.page ? this.componentMeta.page.titleBreadcrumb : 'Breadcrumb'
    },

    iconBreadcrumb () {
      return this.componentMeta && this.componentMeta.page ? this.componentMeta.page.iconBreadcrumb : ''
    },
    isShowBreadcrumb () {
      return this.componentMeta && this.componentMeta.page && this.componentMeta.page.showBreadcrumb
    },

    showByBreakpoint () {
      const sm = Number(breakpoints.sm.replace('px', ''))

      if (this.windowWidth > sm) {
        return true
      }

      return false
    },

    isShowContext () {
      return this.showByBreakpoint || this.isContextCollapsed
    }

  },

  data () {
    return {
      isContextCollapsed: false,

      menu: menu,
      menuWidth: layoutSize['theme-menu-width']
    }
  }

}

</script>


<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "~@@/client/styles/variables/base/_default-layout.scss";

.page-wrapper-content {
  flex-grow: 1;
  padding: 0 8px;
}

.ig-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: visible;
  //padding-top: $theme-header-height + $theme-header-space;
}

.ig-context-sidebar {
  position: sticky;
  overflow-y: auto;
  align-self: flex-start; /* <-- this is the fix to sticky */
}

.page-wrapper-content {
  padding-right: 1rem;
  flex: 1;
  width: 100%;
}

@include media-breakpoint-down(sm) {
  .page-wrapper-content {
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    z-index: -1;
  }
}

</style>


<template>
<aside v-if="currentView"
    class="context-sidebar"
    :style="currentClass">

    <component :is="currentView"
        class="context-sidebar"
        v-if="isContextCollapsed || showByBreakpoint" />

    <div v-if="getCurrentView && !isContextCollapsed && !showByBreakpoint"
        class="ig-expander-container p-1">
        <b-btn class="btn-collapse inverse px-1"
            variant="theme1"
            @click="$emit('update:isContextCollapsed', true);">
            <i class="lnr lnr-chevron-right" /></b-btn>
    </div>

</aside>
</template>
<script>
import { mapGetters } from 'vuex'

import layoutSize from '@@/client/styles/variables/base/_default-layout.scss'

/*
Wrapper for current contextual menu.
Change content based on URL
*/
export default {
  components: {
    DefaultContextSideBar: () => import('@/components/Base/Menu/DefaultContextSideBar/DefaultContextSideBar'),
    DashboardContextSideBar: () => import('@/components/Module/Dashboard/ContextSideBar'),
    MailContextSideBar: () => import('@/components/Module/Mail/ContextSideBar'),
    ChatContextSideBar: () => import('@/components/Module/Chat/ContextSideBar'),
    CalendarContextSideBar: () => import('@/components/Module/Calendar/ContextSideBar'),
    SocialContextSideBar: () => import('@/components/Module/Social/ContextSideBar'),
    DocContextSideBar: () => import('@/components/Module/Doc/ContextSideBar')
  },
  data: function () {
    return {
      currentView: false,
      // ADD URL to this map to add a custom context menu
      mapModuleBySideBar: {
        // '/admin/dashboard/': 'DashboardContextSideBar',
        '/admin/mail': 'MailContextSideBar',
        '/admin/chat': 'ChatContextSideBar',
        '/admin/calendar': 'CalendarContextSideBar',
        '/admin/social': 'SocialContextSideBar',
        '/admin/doc': 'DocContextSideBar'
      }
    }
  },
  props: {
    showByBreakpoint: Boolean,
    isContextCollapsed: Boolean,
    layout: Object
  },
  // Watch route to update current component
  watch: {
    '$route': function () {
      this.currentView = this.getCurrentView()
    }
  },
  created () {
    this.currentView = this.getCurrentView()
  },
  computed: {
    ...mapGetters('theme', {
      'componentMeta': 'getComponentMeta'
    }),

    currentClass () {
      if (this.isContextCollapsed && !this.showByBreakpoint) {
        return { 'position': 'fixed' }
      } else {
        return {
          // 'position': 'fixed'
          'position': 'sticky',
          // top: 0//
          'top': this.layout.headerBg !== 'transparent'
            ? layoutSize['theme-header-space']
            : 0
        }
      }
    }
  },
  methods: {
    // Set current component based on URL map
    getCurrentView  () {
      const path = this.$router.currentRoute.path
      const layout = this.$router.currentRoute.meta.layout

      if (this.componentMeta && this.componentMeta.page && this.componentMeta.page.contextComponent) return this.componentMeta.page.contextComponent

      for (var i in this.mapModuleBySideBar) {
        if (path.startsWith(i)) return this.mapModuleBySideBar[i]
        if (layout && path.startsWith('/' + layout + i)) return this.mapModuleBySideBar[i]
      }

      return false
    }
  }
}

</script>


<style lang="scss" scoped>
.context-sidebar {
  font-size: 0.75rem;
}

/deep/ .header-menu i {
  font-size: 1.2rem;
}

.ig-expander-container {
  background-color: var(--theme1inv);
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

</style>

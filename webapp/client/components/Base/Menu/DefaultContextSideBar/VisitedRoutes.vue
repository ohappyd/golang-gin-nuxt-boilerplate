
<template>
<ul v-if="routeHistory && routeHistory.length > 1"
    class="pb-4 items-menu">
    <li class="header-menu d-flex">
        <i class="la la-clock-o" /> <span>Last Visited</span>
    </li>
    <li v-for="(route, i)  in lastRoutes"
        :key="i">
        <nuxt-link :to="route.path">
            <i class="la la-circle-o text-muted" />
            <span>{{getTitleByPath(route.path)}}</span>

        </nuxt-link>
    </li>
</ul>
</template>
<script>
import { mapGetters } from 'vuex'
import { menu } from '@@/client/util/menu/items'

export default {
  computed: {
    // Router history from store
    ...mapGetters('history', ['routeHistory']),
    // Get last routes from store
    lastRoutes () {
      if (!this.routeHistory) return []
      const lastRoutes = this.routeHistory.slice(0, 5)
      return lastRoutes
    }
  },
  methods: {
    // Get item menu by path
    getItemByPath (path, items = menu, currentParent = null) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].href === path || items[i].href + '/' === path) {
          return { item: items[i], parent: currentParent }
        }
        if (items[i].child) {
          const { item, parent } = this.getItemByPath(path, items[i].child, items[i])
          if (item) return { item: item, parent: parent }
        }
      }
      return { item: false, parent: false }
    },
    // Get page title by path
    getTitleByPath (path) {
      const { item, parent } = this.getItemByPath(path)
      if (parent && parent.title.length > 10) parent.title = parent.title.substring(0, 10) + '...'

      return item.title
      // return item && parent ? parent.title + ' / ' + item.title : item ? item.title : path
    }
  }
}

</script>




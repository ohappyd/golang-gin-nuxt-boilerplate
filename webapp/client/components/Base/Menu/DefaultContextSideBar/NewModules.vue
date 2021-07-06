
<template>
<ul class="items-menu">
    <li class="header-menu d-flex">
        <i class="la la-star-o" /><span> New Modules</span>
    </li>
    <li>
        <a href="#">
            <i class="la la-circle-o  text-muted" />
            <span>Dashboard </span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="la la-circle-o  text-muted" />
            <span>Chart / Bars</span>
            <span class="badge badge-secondary">New</span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="la la-circle-o  text-muted" />
            <span>Most Visited</span>
        </a>
    </li>
</ul>
</template>
<script>
import { mapGetters } from 'vuex'
import { menu } from '@@/client/util/menu/items'

/*
Show new components and modules
*/
export default {
  computed: {
    // Acess route history from store
    ...mapGetters('history', ['routeHistory']),
    // Get last routes
    lastRoutes () {
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
    // Get title page by page
    getTitleByPath (path) {
      const { item, parent } = this.getItemByPath(path)

      if (parent && parent.title.length > 10) parent.title = parent.title.substring(0, 10) + '...'
      return item && parent ? parent.title + ' / ' + item.title : item ? item.title : path
    }
  }
}

</script>




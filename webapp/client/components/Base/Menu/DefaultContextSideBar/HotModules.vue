
<template>
<ul class="items-menu">
    <li class="header-menu d-flex">
        <i class="la la-fire" /> <span> Related Components</span>
    </li>
    <li v-for="(sinbling, i) in sinblings"
        :key="i">
        <nuxt-link v-if="sinbling.href && sinbling.href != '#'"
            :to="sinbling.href">
            <i class="la la-circle-o  text-muted" />
            <span>{{sinbling.title}}</span>

        </nuxt-link>
    </li>

</ul>
</template>
<script>
import { mapGetters } from 'vuex'
import { menu } from '@@/client/util/menu/items'

/*
Show hot components and modules
*/
export default {
  props: {},
  computed: {
    ...mapGetters('history', ['routeHistory']),
    // Test
    lastRoute () {
      if (!this.routeHistory) return false
      const lastRoutes = this.routeHistory.slice(0, 1)
      return lastRoutes[0]
    },
    sinblings () {
      const { parent } = this.getItemByPath(this.lastRoute.path)
      if (!parent || !parent.child) return false
      return parent.child ? parent.child.slice(0, 5) : []
    }
  },
  methods: {
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
    getParent (path) {
      const { item, parent } = this.getItemByPath(path)

      if (parent && parent.title.length > 10) parent.title = parent.title.substring(0, 10) + '...'
      return item && parent ? parent.title + ' / ' + item.title : item ? item.title : path
    }
  }
}

</script>




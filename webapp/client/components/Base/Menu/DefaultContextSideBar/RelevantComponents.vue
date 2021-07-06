
<template>
<div>
    <title-context title="Fast Navigation"> </title-context>

    <div class="sidebar-header">
        <!-- sidebar-header  -->
        <div class="sidebar-search">
            <treeselect :multiple="false"
                @select="onSelectComponent"
                placeholder="Search Component"
                :options="treeMenu" />
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-menu">
            <client-only>
                <hot-modules> </hot-modules>
                <new-modules> </new-modules>
                <visited-routes> </visited-routes>
            </client-only>
        </div>
        <!-- sidebar-menu  -->
        <title-context title="Component Info"
            iconClass="la la-question">

        </title-context>
        <div v-if="componentMeta && componentMeta.description"
            class="p-2">
            <table class="table table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td>{{componentMeta.description}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else-if="componentMeta && componentMeta.bsLink"
            class="p-2">
            <table class="table table table-bordered table-sm">
                <tbody>
                    <tr>

                        <td colspan="2">
                            This kit uses the excellent open source library <a href="https://bootstrap-vue.js.org/">bootstrap-vue</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Component Tag</td>
                        <td class="text-theme1  font-weight-bold">&lt;{{componentMeta.tag}}&gt;</td>

                    </tr>

                    <tr>
                        <td>Reference</td>
                        <td class="text-primary"> <a :href="componentMeta.bsLink"
                                target="_blank">External Link</a></td>

                    </tr>

                </tbody>
            </table>
        </div>

        <div v-else-if="componentMeta && componentMeta.isEcharts"
            class="p-2">
            <table class="table table table-bordered table-sm">
                <tbody>
                    <tr>

                        <td colspan="2"> This kit uses the excellent open source library <a href="https://github.com/ecomfe/vue-echarts/">vue-echarts</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Component Tag</td>
                        <td class="text-theme1 font-weight-bold">&lt;v-chart&gt;</td>

                    </tr>

                    <tr>
                        <td>Reference</td>
                        <td class="text-primary"> <a href="https://github.com/ecomfe/vue-echarts"
                                target="_blank">External Link</a></td>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>

</div>
</template>
<script>
import { mapGetters } from 'vuex'
import VisitedRoutes from '@/components/Base/Menu/DefaultContextSideBar/VisitedRoutes'
import HotModules from '@/components/Base/Menu/DefaultContextSideBar/HotModules'
import NewModules from '@/components/Base/Menu/DefaultContextSideBar/NewModules'
import TitleContext from '@/components/Base/Menu/TitleContext'
import { Treeselect } from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { menu } from '@@/client/util/menu/items'

/*
Show relevant components and modules plus contextual info from components
*/
export default {
  components: {
    VisitedRoutes,
    HotModules,
    NewModules,
    Treeselect,
    TitleContext
  },
  methods: {
    // Event on select component, for fast nagication
    onSelectComponent (node, instanceId) {
      if (node.id.charAt(0) === '#') return
      this.$router.push({
        path: node.id
      })
    },

    // Normalize tree object
    normalizeTree (items) {
      for (let i = 0; i < items.length; i++) {
        items[i].label = items[i].title // items[i].id = items[i].href === '#' || !items[i].href ? Math.random() : items[i].href

        if (items[i].href === '#' || items[i].href === undefined) {
          items[i].isDefaultExpanded = true
          items[i].id = '#' + Math.random()
        } else items[i].id = items[i].href

        if (items[i].child) {
          items[i].children = items[i].child
          this.normalizeTree(items[i].children)
        }
      }
    }

  },
  computed: { // Search the metadata-based component data from the routing
    ...mapGetters('theme', {
      'componentMeta': 'getComponentMeta'
    }),

    // Get tree menu array, to fast search/navigation
    treeMenu () {
      this.normalizeTree(menu)
      return menu
    }

  }
}

</script>


<style lang="scss" scoped>
/deep/ .vue-treeselect__control {
  border-radius: 0px;
}

/deep/ .header-menu {
  display: flex;
}

</style>



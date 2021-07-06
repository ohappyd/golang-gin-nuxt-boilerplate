
<template>
<div>
    <div class="d-flex py-3"
        v-if="isShowBreadcrumb && !layout.breadcrumbHide">
        <div class="d-flex ">
            <div class="text-secondary h3 p-2 mr-2 mb-0 text-35">
                <svg-icon width="50px"
                    height="50px"
                    :lighten="true"
                    :icon="icon"
                    variant="theme1"> </svg-icon>

            </div>
        </div>
        <div class="d-flex align-items-center flex-grow-1">

            <div class="subtitle h4 mb-0 text-secondary">{{titleBreadcrumb}}</div>

            <div style="min-width:250px;"
                class="ml-auto text-right text-13">
                <b-breadcrumb :items="items"
                    class="text-secondary" />
            </div>
        </div>
    </div>

    <page-meta-info> </page-meta-info>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import PageMetaInfo from '@/components/Base/Page/PageMetaInfo'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

import layouts from '@@/config/layouts.json'

export default {
  components: {
    PageMetaInfo,
    SvgIcon
  },
  props: {
    title: {
      default: 'Title'
    },
    iconClass: {
      default: 'la la-calendar'
    },
    icon: {
      default: 'layers'
    }

  },

  computed: {
    isShowBreadcrumb () {
      return this.componentMeta && this.componentMeta.page && this.componentMeta.page.showBreadcrumb
    },
    titleBreadcrumb () {
      return this.componentMeta && this.componentMeta.page && this.componentMeta.page.titleBreadcrumb
    },
    // Get meta data from page properties
    ...mapGetters('theme', {
      'componentMeta': 'getComponentMeta'
    }),
    // Get current selected layoutd using meta from custom routes
    layout () {
      let layout = this.layoutList.default
      const metaPage = this.$router.currentRoute.meta

      if (metaPage.layout) {
        layout = Object.assign(layout, this.layoutList.layouts[metaPage.layout])
      }

      return layout
    }

  },

  data () {
    return {
      layoutList: layouts,
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }

}

</script>


<style lang="scss" scoped>
/deep/ .breadcrumb {
  background-color: transparent;
  margin-bottom: 0px !important;
  justify-content: flex-end;
  padding-right: 3px;

  a {
    color: var(--secondary);
  }
}
/deep/ .breadcrumb-item.active {
  color: var(--secondary);
}
/deep/ .breadcrumb-item + .breadcrumb-item::before {
  color: var(--secondary);
}

.subtitle {
  font-weight: 400;
  font-size: 18px;
}

</style>




<template>
<div class="v-sidebar-menu"
    :class="[!isCollapsed ? 'vsm-default' : 'vsm-collapsed', theme, rtl ? 'rtl' : '', isCompacted ? 'vsm-compacted' : '' ]"
    :style="{'width': sidebarWidth, 'margin-left': marginLeftSide}"
    @mouseleave="mouseLeave">
    <div class="vsm-main-logo"
        :style="{'background-color':logoBg}">
        <logo :symbol="isCollapsed"
            :class="isCompacted && !isCollapsed ? 'ig-logo-vertical' : ''"> </logo>
    </div>
    <div class="vsm-list small-scroll ghost">
        <template v-for="(item, index) in menuItems">
            <template v-if="item.header">

                <template v-if="(item.visibleOnCollapse || !(isCollapsed || isCompacted)) && item.component">
                    <component :is="item.component"
                        :key="index" />
                </template>
                <template v-else-if="item.visibleOnCollapse || !(isCollapsed || isCompacted)">
                    <div :key="index"
                        class="vsm-header">
                        {{ item.title }}
                    </div>
                </template>
            </template>
            <item v-else
                :icon-index="iconIndex"
                :key="index"
                :item="item"
                :first-item="true"
                :is-collapsed="isCollapsed"
                :is-compacted="isCompacted" />
        </template>
    </div>
    <div v-if="isCollapsed || isCompacted"
        :style="[
                {'position' : 'absolute'},
                {'top' : `${mobileItemPos}px`},
                rtl ? {'right' : leftDroplist} : {'left' : leftDroplist},
                {'z-index' : 30},
                {'width' : widthCompacted}
                ]">
        <mobile-item :item="mobileItem"
            v-if="!compacted || isCollapsed" />
        <transition name="slide-animation">
            <div v-if="mobileItem && (!compacted || isCollapsed)"
                class="vsm-mobile-bg"
                :style="[{'position' : 'absolute'}, {'left' : '0px'}, {'right' : '0px'}, {'top' : '0px'}, {'height' : `${mobileItemHeight}px`}]" />
        </transition>
        <div class="vsm-dropdown"
            :style="[
                    {'position' : 'absolute'},
                    {'top' : (!compacted || isCollapsed) ? `${mobileItemHeight}px` : '0px'},
                    {'left' : '0px'},
                    {'right' : rtl ?  !compacted ? sidebarWidth : '0px' : '0px'},
                    {'max-height' : `calc(100vh - ${mobileItemPos + mobileItemHeight}px)`},
                    {'overflow-y' : 'auto'}
                    ]">
            <transition name="expand"
                @enter="expandEnter"
                @afterEnter="expandAfterEnter"
                @beforeLeave="expandBeforeLeave">
                <div v-if="mobileItem && mobileItem.child"
                    class="vsm-list small-scroll">
                    <sub-item v-for="(subItem, index) in mobileItem.child"
                        :key="index"
                        :item="subItem" />
                </div>
            </transition>
        </div>
    </div>
    <button class="collapse-btn"
        @click="toggleCollapse" />
</div>
</template>
<script>
import Logo from '@/components/Base/NavBar/Logo'
import Item from './Item.vue'
import SubItem from './SubItem.vue'
import MobileItem from './MobileItem.vue'
import { animationMixin } from '@/util/menu/mixin.js'

/*
Warapper for sidebar
*/
export default {
  name: 'SidebarMenu',
  components: {
    Item,
    SubItem,
    MobileItem,
    Logo
  },
  mixins: [animationMixin],

  props: {
    // Array menu item
    menu: {
      type: Array,
      required: true
    },
    // Is collapsed mode
    collapsed: {
      type: Boolean,
      default: false
    },
    // Is compacted mode
    compacted: {
      type: Boolean,
      default: false
    },
    // Default width
    width: {
      type: String,
      default: '260px'
    },
    // Width in compacted mode
    widthCompacted: {
      type: String,
      default: '260px'
    },
    // Width in collapsed mode
    widthCollapsed: {
      type: String,
      default: '100px'
    },
    // Show subitems?
    showChild: {
      type: Boolean,
      default: false
    },
    // Current theme
    theme: {
      type: String,
      default: ''
    },
    // Show one shield only
    showOneChild: {
      type: Boolean,
      default: false
    },
    prefixHref: {
      type: String,
      default: ''
    },
    // RTL version
    rtl: {
      type: Boolean,
      default: false
    },
    logoBg: {
      type: String,
      default: '#fff'
    },
    iconIndex: {
      type: Number,
      default: 0
    }

  },

  data () {
    return {
      isCollapsed: this.collapsed,
      isCompacted: this.compacted,
      mobileItem: null,
      mobileItemPos: 0,
      mobileItemHeight: 0,
      closeTimeout: null,
      activeShow: null
    }
  },

  computed: {
    // Current sidebar width
    menuItems () {
      // const items = [...this.menu]
      const items = JSON.parse(JSON.stringify(this.menu))
      this.setPrefixMenu(items)
      return items
    },

    sidebarWidth () {
      return this.isCollapsed ? this.widthCollapsed : this.width
    },
    // Used to hide sidebar on negatie offset
    marginLeftSide () {
      return '0px'
    },
    // Droplist size
    leftDroplist () {
      return this.compacted || this.isCollapsed ? this.sidebarWidth : '0px'
    }

  },
  watch: {
    collapsed (val) {
      this.isCollapsed = val
    }

  },

  created () {
    this.$on('mouseEnterItem', val => {
      this.mobileItem = null
      this.$nextTick(() => {
        this.mobileItem = val.item
        this.mobileItemPos = val.pos
        this.mobileItemHeight = val.height
      })
    })
    this.$on('clickItem', () => {
      if (this.closeTimeout) clearTimeout(this.closeTimeout)
      this.closeTimeout = setTimeout(() => {
        this.mouseLeave()
      }, 600)
    })
  },

  methods: {
    setPrefixMenu (arrItems) {
      for (let i = 0; i < arrItems.length; i++) {
        const item = arrItems[i]

        if (item.href) {
          item.href = this.prefixHref + item.href
        }

        if (item.child) {
          this.setPrefixMenu(item.child)
        }
      }
    },

    // Leave item
    mouseLeave () {
      this.mobileItem = null
    },

    // Toggle sidebar
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed
      this.$emit('collapse', this.isCollapsed)
    },

    // Event on active show
    onActiveShow (uid) {
      this.activeShow = uid
    },

    // On item menu click
    onItemClick (event, item) {
      this.$emit('itemClick', event, item)
    },
    getIcon (item) {
      return Array.isArray(item.icon) ? item.icon[this.iconIndex] : item.icon
    }

  },

  // Inject variables
  provide () {
    const activeShow = {}
    Object.defineProperty(activeShow, 'uid', {
      enumerable: true,
      get: () => this.activeShow
    })
    return {
      showChild: this.showChild,
      showOneChild: this.showOneChild,
      emitActiveShow: this.onActiveShow,
      activeShow,
      emitItemClick: this.onItemClick,
      rtl: this.rtl
    }
  }

}

</script>


<style lang="scss">


</style>

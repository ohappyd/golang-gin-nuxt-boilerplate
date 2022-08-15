
<template>
<div v-if="item"
    class="vsm-item mobile-item"
    :class="[{'open-item' : item.child}, {'active-item' : active}, {'parent-active-item' : childActive}]">
    <template v-if="isRouterLink">
        <router-link class="vsm-link"
            :to="item.href"
            :disabled="item.disabled"
            :event="item.disabled ? '' : 'click'"
            @click.native="clickEvent($event, true)">
            <i v-if="item.icon"
                class="vsm-icon"
                :class="getIcon(item)" />
            <span v-if="item.badge"
                :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
                class="vsm-badge"
                :class="[item.badge.class ? item.badge.class : 'default-badge']">{{ item.badge.text }}</span>
            {{ item.title }}
            <i v-if="item.child"
                class="vsm-arrow open-arrow" />
        </router-link>
    </template>
    <template v-else>
        <a class="vsm-link"
            :href="item.href ? item.href : '#'"
            :disabled="item.disabled"
            @click="clickEvent($event, true)">
            <span v-if="item.badge"
                :style="[rtl ? (item.child ? {'margin-left' : '0px'} : '') : (item.child ? {'margin-right' : '0px'} : '')]"
                class="vsm-badge"
                :class="[item.badge.class ? item.badge.class : 'default-badge']">{{ item.badge.text }}</span>
            {{ item.title }}
            <i v-if="item.child && !item.badge"
                class="vsm-arrow open-arrow" />
        </a>
    </template>
</div>
</template>
<script>
import { itemMixin } from '@/util/menu/mixin.js'

/*
Mobile Item menu from sidebar menu
*/
export default {
  mixins: [itemMixin],
  props: {
    // Item to render
    item: {
      type: Object,
      default: null
    },
    iconIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getIcon (item) {
      return Array.isArray(item.icon) ? item.icon[this.iconIndex] : item.icon
    }
  },
  watch: {
    // Watch item looking for active item
    item () {
      this.active =
        this.item && this.item.href ? this.isLinkActive(this.item) : false
      this.childActive =
        this.item && this.item.child
          ? this.isChildActive(this.item.child)
          : false
    }
  }
}

</script>




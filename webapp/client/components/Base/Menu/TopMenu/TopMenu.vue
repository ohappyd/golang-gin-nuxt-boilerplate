
<template>
<b-collapse id="nav-menu-top"
    is-nav>

    <b-navbar-nav class="navbar-expand-lg">
        <b-nav-item v-for="(item, i) in menuItems"
            :key="i">

            <top-menu-item :prefixHref="prefixHref"
                :item="item"> </top-menu-item>
        </b-nav-item>
        <b-nav-item-dropdown v-if="extraItems.length > 0"
            no-caret
            right>
            <template slot="button-content">
                <div class="item-title">
                    More
                </div>
            </template>
            <li v-for="(item, i) in extraItems"
                class="extra-item"
                :key="i">
                <top-menu-item dropright
                    :prefixHref="prefixHref"
                    toggleClass="dropdown-item"
                    dropdownClass="scroll-dropdown"
                    :item="item">
                </top-menu-item>

            </li>
        </b-nav-item-dropdown>

    </b-navbar-nav>
</b-collapse>
</template>
<script>
import TopMenuItem from '@/components/Base/Menu/TopMenu/TopMenuItem'

export default {
  components: {
    TopMenuItem
  },
  props: {
    menu: Array,
    maxItems: { type: Number, default: 3 },
    prefixHref: { type: String }
  },
  computed: {
    items () {
      const items = []
      for (let i = 0; i < this.menu.length; i++) {
        if (!this.menu[i].header) items.push(this.menu[i])
      }

      return items
    },
    menuItems () {
      return this.items.slice(0, this.maxItems)
    },
    extraItems () {
      return this.items.slice(this.maxItems)
    }
  }
}

</script>


<style lang="scss" scoped>
/deep/ .icon-arrow {
  font-size: 8px;
  padding-left: 0.3rem;
  color: var(--theme3);
}

/deep/ .item-title {
  font-size: 13px;
  color: var(--theme1);
}

/deep/ .dropdown:hover > .dropdown-menu {
  display: block;
}

</style>



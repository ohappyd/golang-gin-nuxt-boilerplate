
<template>
<div>
    <a v-if="!item.child"
        class="item-title dropdown-item"
        @click.prevent="$router.push(prefixHref+item.href)"
        :href="prefixHref+item.href">{{item.title}}
    </a>
    <!-- Navbar dropdowns -->
    <b-dropdown v-else
        :text="item.title"
        :dropright="dropright"
        variant="link"
        :toggleClass="toggleClass"
        :class="dropdownClass"
        no-caret>
        <template slot="button-content">
            <div class="item-title"> {{item.title}}

            </div>
        </template>
        <b-dropdown-item v-for="(child, i) in item.child"
            :key="i"
            class="teste123"
            :to="prefixHref+child.href">
            <div v-if="!child.child">
                {{child.title}}
            </div>
            <top-menu-item v-else
                :prefixHref="prefixHref"
                toggleClass2="dropdown-item"
                :item="child"> </top-menu-item>
        </b-dropdown-item>
    </b-dropdown>
</div>
</template>
<script>
import TopMenuItem from '@/components/Base/Menu/TopMenu/TopMenuItem'

export default {
  components: {
    TopMenuItem
  },
  name: 'top-menu-item',
  props: {
    item: Object,
    dropright: Boolean,
    prefixHref: String,
    toggleClass: String,
    dropdownClass: String
  }
}

</script>





<template>
<div class="ig-icon-dual-tone"
    :class="classObj"
    :style="{width: width, height: height}" />
</template>
<script>

let cache = new Map()

// Inject SVG in source code. Allow customization using CSS.
export default {
  props: {
    icon: { type: String, default: 'layers' },
    path: { type: String, default: '/img/icon/dual-tone/' },
    variant: { type: String, default: 'primary' },
    width: { type: String, default: '16px' },
    height: { type: String, default: '16px' },
    rounded: { type: Boolean, default: false },
    lighten: { type: Boolean, default: true }
  },
  computed: {
    src () {
      return this.path + this.icon + '.svg'
    },
    classObj () {
      const objClass = {}
      objClass.lighten = this.lighten
      objClass['rounded-icon'] = this.rounded
      objClass[this.variant] = true
      return objClass
    }
  },
  methods: {
    // Change default SVG icon color
    fixColor (strSvg) {
      let newSvg = strSvg
      newSvg = this.replaceAll(newSvg, 'fill="#FF6E6E"', 'class="fill1"')
      newSvg = this.replaceAll(newSvg, 'fill="#0C0058"', 'class="fill2"')
      newSvg = this.replaceAll(newSvg, 'fill="#FFFFFF"', 'class="fill3"')

      return newSvg
    },
    // Replace all function
    replaceAll (str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace)
    }
  },

  async mounted () {
    if (!cache.has(this.src)) {
      try {
        cache.set(this.src, fetch(this.src).then(r => r.text()))
      } catch (e) {
        cache.delete(this.src)
      }
    }
    if (cache.has(this.src)) {
      this.$el.innerHTML = this.fixColor(await cache.get(this.src))
    }
  }
}

</script>


<style lang="scss">
.ig-icon-dual-tone {
  display: flex;
  align-items: center;

  & > svg {
    width: 100% !important;
    height: 100% !important;

    .fill1 {
      fill: var(--color-mixed-1);
    }
    .fill2 {
      fill: var(--color);
    }

    .fill3 {
      fill: var(--theme1inv);
    }
  }

  &.lighten > svg {
    .fill1 {
      fill: var(--color-mixed);
    }

    .fill2 {
      fill: var(--color-mixed-1);
    }
  }

  &.mixed-2 > svg {
    .fill1 {
      fill: var(--color-mixed-2);
    }

    .fill2 {
      fill: var(--color-mixed-1);
    }
  }

  &.rounded-icon {
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    background-color: var(--color-mixed);

    & > svg {
      margin-top: 11%;
      width: 60% !important;
      height: 60% !important;
    }
  }
}

</style>



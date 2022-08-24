
<template>
<div class="ig-icon-avatar-internal"
    :class="classObj"
    :style="{width: width, height: height}" />
</template>
<script>

let cache = new Map()

// Inject SVG in source code. Allow customization using CSS.
export default {
  props: {
    icon: { type: String, default: '1' },
    path: { type: String, default: '/img/user/svg/' },
    variant: { type: String, default: 'primary' },
    width: { type: String, default: '45px' },
    height: { type: String, default: '45px' },
    rounded: { type: Boolean, default: false },
    lighten: { type: Boolean, default: false }
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
      newSvg = this.replaceAll(newSvg, 'fill="#00FF00"', 'class="bg-fill"')
      newSvg = this.replaceAll(newSvg, 'fill="#FF0000"', 'class="fill1"')
      newSvg = this.replaceAll(newSvg, 'fill="#0000FF"', 'class="fill2"')

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
.ig-icon-avatar-internal {
  display: inline-block;

  & > svg {
    width: 100% !important;
    height: 100% !important;

    .bg-fill {
      fill: var(--color-mixed);
    }
    .fill1 {
      fill: var(--color);
    }

    .fill2 {
      fill: var(--color-mixed-1);
    }
  }

  &.lighten > svg {
    .bg-fill {
      fill: var(--color-mixed);
    }

    .fill1 {
      fill: var(--color-mixed-1);
    }
  }

  &.rounded-icon {
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    background-color: var(--color-mixed);

    & > svg {
      margin-top: 11%;
      width: 60% !important;
      height: 60% !important;
    }
  }
}

</style>



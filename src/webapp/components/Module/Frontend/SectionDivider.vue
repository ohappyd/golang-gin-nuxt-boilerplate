
<template>
<svg id="bigTriangleShadow"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height="100"
    :class="down ? 'down':''"
    :style="svgStyles"
    viewBox="0 0 100 100"
    preserveAspectRatio="none">
    <path id="trianglePath1"
        d="M0 0 L50 100 L100 0 Z" />
    <path id="trianglePath2"
        d="M50 100 L100 40 L100 0 Z" />
</svg>
</template>
<script>

export default {
  props: {
    down: { type: Boolean },
    color1: { type: String, default: 'primary' },
    color2: { type: String, default: 'secondary' }
  },
  computed: {
    svgStyles () {
      const styles = {}
      styles['--color1'] = 'var(--' + this.color1 + ')'
      styles['--color2'] = 'var(--' + this.color2 + ')'
      return styles
    }
  }
}

</script>


<style lang="scss" scoped>
#trianglePath1 {
  fill: var(--color1);
  stroke: var(--color1);
}

#trianglePath2 {
  fill: var(--color2);
  stroke: var(--color2);
}

svg.down {
  transform: rotate(180deg);
}

</style>

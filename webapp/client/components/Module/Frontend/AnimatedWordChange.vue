
<template>
<h1>
    <slot> Test </slot>
    <span class="txt-rotate" />
</h1>
</template>
<script>

import TxtRotate from '@@/client/util/animation/text-rotate'

export default {
  props: {
    textRotate: { default: () => ['ADMIN', 'UI KIT', 'MICRO SERVICE'] }
  },
  mounted () {
    var elements = document.getElementsByClassName('txt-rotate')
    for (var i = 0; i < elements.length; i++) {
      TxtRotate.init(elements[i], this.textRotate, 4000)
    }
  }

}

</script>


<style lang="scss" scoped>
h1,
h2 {
  font-weight: 200;
  margin: 0.4em 0;
}
h1 {
  font-size: 3.5em;
}
h2 {
  font-size: 2em;
}

/deep/ .wrap {
  border-right: 0.15em solid rgba(255, 255, 255, 0.7); /* The typwriter cursor */
  animation: blink-caret 0.75s step-end infinite;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ffffff;
  }
}

</style>

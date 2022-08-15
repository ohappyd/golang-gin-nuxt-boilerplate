
<template>
<client-only>
    <v-chart ref="chartEl"
        autoresize
        theme="default"
        :style="{height:height,width:width}"
        :options="options"
        @finished="finished" />

</client-only>
</template>
<script>

/*
Wrapper component for vue-echarts
*/
export default {
  components: {
  },
  methods: {
    dispatchAction  (data) {
      this.$refs.chartEl.dispatchAction(data)
    },
    finished (params) {
      this.$emit('finished', params)
    }
  },
  props: {
    // Current echarts options
    'options': {
      type: Object
    },
    // Chart height
    'height': {
      type: String,
      default: '400px'
    },
    // Chart height
    width: {
      type: String,
      default: '100%'
    }
  }
}

</script>




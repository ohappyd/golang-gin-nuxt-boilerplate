
<template>
<div class="card"
    style="min-height:140px"
    :class="bgClass">
    <div class="p-4 h-100 d-flex align-items-center justify-content-center">
        <div class="text-center"
            :class="textClass">
            <h4 class="text-10  text-uppercase mb-0 opacity-9">
                {{title}}
            </h4>
            <p class="text-25 mb-0 text-weight-bold"
                :class="valueClass"> {{ value | numeral('0,0') }} </p>
            <span class="text-11  mt-0 opacity-7">24% higher today</span>
        </div>
    </div>

</div>
</template>
<script>
import Bar17 from '@/components/Module/Chart/Echarts/Bar/Bar17'

/*
Example of component for rendering  bottom bars inside a card
*/
export default {
  props: ['bgClass', 'textClass', 'icon', 'title', 'value', 'valueClass'],
  components: {
    Bar17
  },
  computed: {
    valueVariant () {
      const border = this.value % 2 === 0 ? 'border-success' : 'border-danger'
      return 'border-2 border-bottom ' + border
    }
  }
}

</script>


<style lang="scss" scoped>
i.icon {
  position: absolute;
  top: 5px;
}

.card {
  justify-content: flex-end;
}

.border-2 {
  border-width: 3px !important;
}

</style>



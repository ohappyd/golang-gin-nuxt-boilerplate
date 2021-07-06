
<template>
<div>

    <span v-for="i in maxValue"
        class="star fa fa-star"
        :key="i"
        :class="i < value ? 'checked' : ''" />

</div>
</template>
<script>

export default {

  props: {
    maxValue: { type: Number, default: 5 },
    value: { type: Number, default: 3 }
  }

}

</script>


<style lang="scss" scoped>
.star {
  color: var(--secondary-mixed-1);
  &.checked {
    //color: var(--primary-mixed-1);
    color: var(--primary);
  }
}

</style>



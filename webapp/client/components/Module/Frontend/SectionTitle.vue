
<template>
<div class="mt-4 mb-4">
    <h2 class="mt-4 section-title-2 text-theme1  mb-1">
        {{title}}
    </h2>
    <h4 class="section-subtitle-2 text-theme1 mixed-1 mb-0 op-5">
        {{subTitle}}
    </h4>

</div>
</template>
<script>

export default {
  props: {
    title: String,
    subTitle: String,
    hasDivider: Boolean
  }

}

</script>


<style lang="scss" scoped>


</style>

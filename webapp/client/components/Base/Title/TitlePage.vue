
<template>
<div class="ig-p-1">
    <div class="section-title-item">
        <span class>{{title}} </span>
    </div>
    <div class="pb-3 pt-1">
        <slot class="section-subtitle text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu accumsan nibh, vitae commodo libero. </slot>
    </div>

</div>
</template>
<script>

export default {
  // Component title page
  name: 'TitlePage',
  props: {
    // Title propertie
    title: {
      type: String,
      default: 'Default Title'
    },
    // Subtitle
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu accumsan nibh, vitae commodo libero. Aenean et sapien ante. Vivamus placerat ex ac lectus tincidunt, nec gravida lectus molestie. Donec consequat magna dolor, ac varius risus venenatis id. Cras eu sodales turpis.'
    }
  }
}

</script>


<style lang="scss" scoped>
.section-title-item {
  color: var(--theme1);
  font-weight: 600;
  font-size: 30px;
}

</style>



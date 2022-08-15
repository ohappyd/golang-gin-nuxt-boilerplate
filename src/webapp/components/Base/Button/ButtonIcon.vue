
<template>
<b-button :size="size"
    :class="btnClass"
    @click.prevent="$emit('click'); $router.push(href);"
    :href="href"
    :variant="variant">
    <i :class="iconClass" />
    <slot>
        Button
    </slot>
</b-button>
</template>
<script>

// This component creates a standard button with icon
export default {
  props: {
    // Button variant e.g: primary
    variant: { default: 'secondary' },
    // Icon class, as any icon class
    iconClass: { default: 'la la-comments' },
    // Text button
    textButton: { default: 'Click Here' },
    // Size button, eg.: sm, md
    size: { default: 'md' },
    // Path of route, in default vue router format eg.: /admin/dashboard/
    href: { default: null },
    // Button class
    btnClass: { default: 'd-flex inverse' }
  }
}

</script>


<style lang="scss" scoped>
.btn {
  align-items: center;
  padding-right: 10px;
  padding-left: 8px;

  i {
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>




<template>
<div class="d-flex w-100">
    <div class="mr-auto">
        <h4 class="card-title text-theme1 ">{{title}}</h4>
        <h6 class="card-subtitle text-theme1 mixed-1 mb-0 op-5">{{subTitle}}</h6>
    </div>
    <div class="right-bar my-auto text-theme1">
        <slot>
            <b-dropdown id="dropdown-1"
                no-caret
                toggle-class="my-auto inverse ig-ghost btn-center btn-square"
                right>

                <template v-slot:button-content>
                    <i class="fas fa-ellipsis-h" />

                </template>
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>

            </b-dropdown>
        </slot>
    </div>
</div>
</template>
<script>

// Create a simple title for card and components
export default {
  props: {
    // Main title of component
    title: { default: 'Title' },
    // Subtitle
    subTitle: { default: 'Subtitle' }
  }
}

</script>


<style lang="scss" scoped>
.right-bar i {
  font-size: 14px;
}

.right-bar {
  display: flex;

  & > button,
  & > .dropdown,
  & > .btn-group {
    margin: 0 0.2rem;
    &:last-child {
      margin: 0 0 0 0.2rem;
    }
  }
}

</style>



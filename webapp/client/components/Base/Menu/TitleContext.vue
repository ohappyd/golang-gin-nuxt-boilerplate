
<template>
<div class="context-title d-flex align-items-center border-bottom">
    <div class="text-theme1">{{title}}</div>
    <div class="ml-auto right-element ">

        <b-dropdown variant="muted"
            size="sm"
           
           
           >
            <template slot="button-content">
                <i class="icon-context"
                    :class="iconClass" /></template>

            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>

    </div>
</div>
</template>
<script>

/*
Default context menu, used when no custom context menu was created.
*/
export default {
  props: {
    title: {
      default: 'Title Menu'
    },
    iconClass: {
      default: 'la la-ellipsis-v'
    }

  }
}

</script>


<style lang="scss" scoped>
.context-title {
  font-size: 13px;
  font-weight: 500;
  padding-left: 15px;
}

.right-element i {
  font-size: 20px;
}

</style>

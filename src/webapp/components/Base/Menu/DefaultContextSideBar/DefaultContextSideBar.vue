
<template>
<div class>

    <nav id="sidebar"
        class="sidebar-wrapper">
        <div class="sidebar-content">
            <relevant-components> </relevant-components>
        </div>
    </nav>
    <div class="text-center">
        <button-group :buttonList="actions"> </button-group>
    </div>

</div>
</template>
<script>
import RelevantComponents from '@/components/Base/Menu/DefaultContextSideBar/RelevantComponents'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'

/*
Default context menu, used when no custom context menu was created.
*/
export default {
  components: {
    RelevantComponents,
    ButtonGroup

  },
  methods: {},

  data () {
    return {
      actions: [{
        icon: 'la la-phone text-primary'
      }, {
        icon: 'la la-envelope text-primary'
      }, {
        icon: 'la la-comments text-primary'
      }, {
        icon: 'la la-calendar text-primary'
      }]
    }
  }

}

</script>


<style lang="scss">
.context-title {
  font-size: 13px;
  font-weight: 500;
  padding-left: 15px;
}

</style>

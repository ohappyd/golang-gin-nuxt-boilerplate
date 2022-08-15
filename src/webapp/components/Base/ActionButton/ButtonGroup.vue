
<template>
<div>

    <b-button class="inverse btn-action"
        v-click-outside="hide"
        variant="secondary"
        v-if="!isCollapsed"
        @click="showActions">
        <i class="btn-icon"
            :class="icon"
            style="font-size:14px; " />
    </b-button>
    <b-button-group v-if="isShowActions || isCollapsed"
        class="bg-theme1inv  p-2 container-actions shadow ig-rounded"
        :class="{'position-absolute': !isCollapsed , 'shadow': !isCollapsed }"
        :vertical="vertical">
        <b-button :class="borderClass"
            class="inverse from-middle mx-1"
            :size2="buttonSize"
            :variant="button.variant ? button.variant : 'secondary' "
            v-for="(button, index) in buttonList"
            :key="index">
            <i :class="button.icon" />
        </b-button>
    </b-button-group>
</div>
</template>
<script>

// This component creates a group of simple, standardized buttons
export default {
  name: 'ButtonGroup',
  props: {
    // Border button class:
    icon: {
      type: String,
      default: 'dripicons-menu'
    },
    // Border button class:
    borderClass: {
      type: String,
      default: ''
    },
    // Define  collaped mode
    isCollapsed: {
      type: Boolean,
      default: false
    },
    // Define  orientation
    vertical: {
      type: Boolean,
      default: false
    },
    // Button variant class eg.: primary, secondary...
    buttonVariant: {
      type: String,
      default: 'secondary'
    },
    // Button Size
    buttonSize: {
      type: String,
      default: 'sm'
    },
    // Button list
    buttonList: {
      type: Array,
      default: () => [
        { icon: 'la la-phone', variant: 'primary' },
        { icon: 'la la-envelope ', variant: 'warning' },
        { icon: 'la la-comments', variant: 'danger' }
      ]
    }
  },
  data () {
    return { isShowActions: false }
  },
  methods: {
    showActions () {
      this.isShowActions = true
    },
    hide () {
      this.isShowActions = false
    }
  }

}

</script>


<style lang="scss" scoped>
.btn-action {
  width: 36px;
  height: 36px;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-actions {
  z-index: 2;
}
.btn-group {
  position: absolute;
  right: 0;
  transform: translateX(-50%);
}

</style>



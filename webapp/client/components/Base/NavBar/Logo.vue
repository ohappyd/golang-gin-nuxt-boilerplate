
<template>
<div class="logo"
    :class="classHideSm">
    <div class="icon">
        <svg-icon :lighten="lighten"
            icon="rocket"
            width="35px"
            :variant="variant"
            height="35px"> </svg-icon>

    </div>
    <div class="text1"
        v-if="!symbol">
        IGNITY
    </div>
    <div class="text2"
        v-if="!symbol">
        ADMIN
    </div>
</div>
</template>
<script>
import SvgIcon from '@/components/Base/Icon/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  props: {
    symbol: Boolean,
    hideOnSmall: Boolean,
    lighten: Boolean,
    variant: { type: String, default: 'primary' }
  },
  computed: {
    classHideSm () {
      return this.hideOnSmall ? ['d-none', 'd-md-flex'] : []
    }

  }
}

</script>


<style lang="scss" scoped>
.logo {
  display: flex;
  font-weight: 800;
  letter-spacing: -2px;
  font-size: 25px;
  align-items: center;

  i {
    font-size: 40px;
    font-weight: 500;
    margin-right: -2px;
  }

  .text1 {
  }

  .text2 {
    font-weight: 700;
  }

  &.ig-logo-vertical {
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    .text1 {
      color: #fff !important;
    }
    .text2 {
      display: none;
    }
  }
}

</style>



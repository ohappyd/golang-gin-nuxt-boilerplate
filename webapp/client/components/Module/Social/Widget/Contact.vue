
<template>
<b-card class="h-100"
    style="min-height: 400px"
    no-body>
    <b-card-header class="border-0 d-flex">
        <b-btn class="inverse ig-ghost btn-square">
            <i class="fas fa-question" />
        </b-btn>
        <b-btn class="inverse ig-ghost btn-square ml-auto">
            <i class="fas fa-ellipsis-h" />
        </b-btn>
    </b-card-header>

    <b-card-body class="container"
        :style="bgStyle">

        <div class="ig-centered">
            <h3 class="mb-0">Andrea Dominic</h3>
            <p>UX Designer &amp; Developer</p>
            <button-icon variant="primary"
                style="width: 120px;"
                class="mx-auto text-center px-3"
                iconClass="la la-bell"> Follow </button-icon>
        </div>

    </b-card-body>
    <b-card-footer>
        <div class="py-15 text-left">
            <a href
                class="text-26 d-block  hover-info">353</a>
            <small class="text-10  text-uppercase text-semibold">Updates</small>
        </div><!-- col -->
        <div class="py-15 bd-l bd-gray-200 text-center">
            <a href
                class="text-26  d-block  hover-info">589</a>
            <small class="text-10  text-uppercase text-semibold">Followers</small>
        </div><!-- col -->
        <div class="py-15 bd-l bd-gray-200">
            <a href
                class="text-26  d-block hover-info text-right">788</a>
            <small class="text-10  text-uppercase text-semibold">Following</small>
        </div><!-- col -->

    </b-card-footer>

</b-card>
</template>
<script>
import ButtonIcon from '@/components/Base/Button/ButtonIcon'

/*
Render contact info from social module
*/
export default {
  components: {
    ButtonIcon
  },
  props: {
    bgImage: { default: '/img/social.jpg' }
  },
  computed: {
    bgStyle () {
      return {
        // 'background-image': `url("${this.bgImage}")`
      }
    }
  }
}

</script>


<style lang="scss" scoped>
.ig-container {
  position: relative;
  text-align: center;
  height: 100%;
}

.card {
  min-height: 380px;
}
/* Centered text */
.ig-centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.card-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>



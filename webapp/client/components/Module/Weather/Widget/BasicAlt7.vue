
<template>
<b-card no-body
    style="height: 420px; opacity: 1">

    <div class="container"
        :style="bgStyle">

        <div class="ig-centered text-white">
            <h3 class="mb-0">{{city}}</h3>
            <p>{{country}}</p>
            <button-icon variant="theme1"
                style="width: 110px;"
                class="mx-auto inverse"
                iconClass="dripicons-brightness-max"> See All </button-icon>
        </div>

        <div class="ig-bottom row no-gutters text-center  ">
            <div class="col py-15">
                <div class="  d-block hover-info">5° F</div>
                <small class=" text-uppercase text-semibold">Today</small>
            </div><!-- col -->
            <div class="col py-15 bd-l bd-gray-200">
                <div class="  d-block  hover-info">20 %</div>
                <small class=" text-uppercase text-semibold">Humidity</small>
            </div><!-- col -->
            <div class="col py-15 bd-l bd-gray-200">
                <div href
                    class="   d-block hover-info">5%</div>
                <small class=" text-uppercase text-semibold">Precipitation</small>
            </div><!-- col -->
        </div><!-- row -->

    </div>

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
    bgImage: { default: '/img/social3.jpg' },
    city: { default: 'Winnipeg' },
    country: { default: 'Canada' }

  },
  computed: {
    bgStyle () {
      return {
        'background-image': `url("${this.bgImage}")`
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
  height: 380px;
}

/* Centered text */
.ig-centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--theme1);
}

.ig-bottom {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  background-color: var(--theme1inv);
  color: var(--theme1-mixed-1);
  padding: 30px;
  font-size: 12px;
  font-weight: 500;
}

.hover-info {
  color: var(--theme1);
  font-size: 20px;
  line-height: 15px;
}

.container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
}

</style>



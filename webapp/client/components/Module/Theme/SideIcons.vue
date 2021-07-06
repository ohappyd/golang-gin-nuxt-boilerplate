
<template>
<div class="sidenav shadow ig-p-1 ig-rounded"
    :class="isShowChooser ? 'active-show' : ''">

    <div v-if="isShowChooser"
        class="back-container"
        @click="isShowChooser=false"> </div>

    <div v-if="isShowChooser"
        class="demo-container bg-theme1inv p-4">
        <div class="d-flex">
            <h6> Select a demo </h6>
            <b-btn class="ml-auto inverse"
                @click="isShowChooser=false"> <i class="dripicons-cross" />
            </b-btn>
        </div>
        <div class="small-scroll h-100 pt-4 p-2">

            <a v-for="index in 10"
                :key="index"
                :href="getDemoUrl(index)"
                class="demo-item d-flex flex-column px-4 py-2 mb-2 text-center">
                Demo {{index}}
                <img width="200px"
                    height="115px"
                    class="img-screen"
                    :src="'/img/screen/'+index+'.png'" />
            </a>
        </div>
    </div>
    <div v-else
        class="d-flex flex-column">
        <b-btn class="inverse sideicon btn-main"
            @click="isShowChooser=true"
            variant="primary">
            <svg-icon icon="equaliser"
                height="13px"
                width="13px"
                variant="primary"
                :lighten="false"> </svg-icon>

        </b-btn>

        <b-btn class="inverse mt-1 sideicon btn-main"
            href="/demo1/admin/doc"
            variant="primary">
            <svg-icon icon="graduation-cap"
                height="13px"
                width="13px"
                variant="primary"
                :lighten="false"> </svg-icon>

        </b-btn>

    </div>
</div>
</template>
<script>
import SvgIcon from '@/components/Base/Icon/SvgIcon'

export default {
  components: {

    SvgIcon
  },
  methods: {

    getDemoUrl (idx) {
      const indexUrl = this.mapIndex[idx - 1]

      return `/demo${idx}/admin/dashboard/${indexUrl}`
    }
  },
  data () {
    // Map index by demo number
    const mapIndex = [
      '1', // Demo 1
      '', // Demo 1
      '3', // Demo 2
      '1', // Demo 3
      '2', // Demo 4
      '3', // Demo 5
      '1', // Demo 6
      '3', // Demo 7
      '1', // Demo 8
      '3' // Demo 9
    ]
    return {
      mapIndex: mapIndex,
      isShowChooser: false
    }
  }
}

</script>


<style lang="scss" scoped>
.sidenav {
  /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 10; /* Stay on top */
  top: 40%; /* Stay at the top */
  right: 10px;
  background-color: var(--theme1inv); /* Black */
  overflow: hidden; /* Disable horizontal scroll */
  padding: 5px;
  display: flex;

  &.active-show {
    top: 0%; /* Stay at the top */
    height: 100%;
    right: 0px;
    padding: 0px;
    width: 100%;
    background-color: transparent;
  }
}

.sideicon {
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 4px !important;
  padding: 0 !important;
}

.img-screen {
  border: 1px solid var(--theme1-mixed-1);
}

.back-container {
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.6;
}

.demo-item {
  font-weight: 500;
}

.demo-container {
  margin-right: -10px;
}

.btn-main {
  height: 40px;
  width: 40px;
}

</style>

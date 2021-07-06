
<template>
<b-card v-if="componentMeta && componentMeta.bsLink"
    class="h-100">

    <div class="row h-100">
        <!-- add no-gutters to make it narrower -->

        <div class="col  h-100 my-auto">
            This component <code>{{componentMeta.tag}}</code> uses the excellent open source library <a href="https://bootstrap-vue.js.org/">bootstrap-vue</a>
            For more info please visit the vendor's <a :href="componentMeta.bsLink"
                target="_blank">External Link</a>.
        </div>
        <div class="col-auto align-self-end">
            <!-- or align-self-center -->

            <svg-icon height="40px"
                width="40px"
                icon="bullhorn"> </svg-icon>

        </div>
    </div>

</b-card>

<b-card v-else-if="componentMeta && componentMeta.isEcharts"
    class="h-100">

    <div class="row h-100">
        <!-- add no-gutters to make it narrower -->

        <div class="col  h-100 my-auto">
            This kit uses the excellent open source library <code> <a href="https://github.com/ecomfe/vue-echarts/">vue-echarts</a></code>

            For more info please visit the vendor's <a href="https://github.com/ecomfe/vue-echarts/"
                target="_blank">External Link</a>.
        </div>
        <div class="col-auto align-self-end">
            <!-- or align-self-center -->

            <svg-icon height="40px"
                width="40px"
                icon="bullhorn"> </svg-icon>

        </div>
    </div>

</b-card>
</template>
<script>
import { mapGetters } from 'vuex'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  computed: { ...mapGetters('theme', {
    'componentMeta': 'getComponentMeta'
  })
  }
}

</script>




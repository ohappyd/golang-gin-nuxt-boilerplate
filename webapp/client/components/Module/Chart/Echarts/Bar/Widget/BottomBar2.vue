
<template>
<b-card no-body
    class="widget no-bg bg-theme1inv shadow">
    <b-card-header>

        <h5 data-v-38c4b7e7
            class="card-title text-theme1 text-16 ">{{title}}</h5>
        <h6 data-v-38c4b7e7
            class="card-subtitle text-muted mb-0 op-5">Sales</h6>

    </b-card-header><!-- card-header -->

    <b-card-body style="height:120px"
        class="flex-row py-0 px-4">
        <div>
            <span class="text-11 opacity-5">Gross Sales</span>
            <h6 class><span :class="valueClass">$</span> {{ value | numeral('0,0') }} </h6>
        </div>
        <div>
            <span class="text-11 opacity-5">No. of Items</span>
            <h6 class> {{ nrItems }} </h6>
        </div>
        <div>
            <span class="text-11 opacity-5">Tax Return</span>
            <h6 class>$3020</h6>
        </div>
    </b-card-body><!-- card-footer -->
    <b-card-footer class="p-0 border-0">
        <bar17> </bar17>
    </b-card-footer><!-- card-body -->
</b-card><!-- card -->
</template>
<script>
import Scatter6 from '@/components/Module/Chart/Echarts/Scatter/Scatter6'
import Bar17 from '@/components/Module/Chart/Echarts/Bar/Bar17'

export default {
  components: {
    Scatter6,
    Bar17
  },
  props: {
    title: {
      type: String,
      default: 'Sales A'
    },
    footerClass: {
      type: String,
      default: 'bg-theme1inv text-dark'
    },
    nrItems: {
      type: Number,
      default: 123
    },
    value: {
      type: Number,
      default: 123123
    }
  },
  computed: {
    valueClass () {
      return this.value % 2 === 0 ? 'text-warning' : 'text-danger'
    }

  }
}

</script>

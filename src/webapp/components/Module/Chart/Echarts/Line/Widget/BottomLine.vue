
<template>
<div class="rounded overflow-hidden shadow ig-p-1 "
    :class="bgClass">
    <div class="widget-container ">
        <i class="text-40"
            :class="icon" />

        <div class="ml-auto text-right">
            <p class="text-10  text-uppercase  mb-0 "
                :class="textClass">{{title}}</p>
            <p class="text-24 main-value mb-0"
                :class="textClass">

                <i class="la"
                    :class="getIconClass(value)" />
                <span class="text-primary"> {{ value | numeral('0,0') }}
                </span></p>
            <span class="text-11  mt-0 "
                :class="textClass">{{ percent }}% higher yesterday</span>
        </div>
    </div>
    <div id="ch1"
        class="ht-50 tr-y-1 rickshaw_graph opacity-3">
        <line6 :mainColor="graphColor"
            :twoLines="twoLines"
            :graphOpacity="graphOpacity"> </line6>
    </div>
</div>
</template>
<script>
import Line6 from '@/components/Module/Chart/Echarts/Line/Line6'

/*
Example of component for rendering  bottom line inside a card
*/
export default {
  props: ['bgClass', 'textClass', 'icon', 'graphColor', 'graphOpacity', 'title', 'value', 'percent', 'twoLines'],
  components: {
    Line6
  },
  methods: {
    getIconClass (value) {
      return {
        'la-angle-double-up': value < 265198,
        'la-angle-double-down': value >= 265198,
        'text-primary': value < 265198,
        'text-danger': value >= 265198
      }
    }

  }
}

</script>


<style lang="scss" scoped>
.main-value {
  line-height: 26px;
}

.text-60 {
  line-height: 40px;
}

.widget-container {
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
}

</style>



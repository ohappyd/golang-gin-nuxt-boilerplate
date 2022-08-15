
<template>
<div class="bg-primary rounded overflow-hidden p-1"
    :class="bgClass">
    <div class="d-flex align-items-center border-top2 border-bottom"> Top </div>
    <div class="d-flex align-items-center">
        <i class="text-80"
            :class="icon" />
        <div class="ml-auto text-right">
            <p class="text-10  text-uppercase text-white mb-0 opacity-7"
                :class="textClass">{{title}}</p>
            <p class="text-24 text-white mb-0"
                :class="textClass">

                <i class="la"
                    :class="getIconClass(value)" />
                {{ value | numeral('0,0') }}</p>
            <span class="text-11 text-white mt-0 opacity-7"
                :class="textClass">{{ percent }}% higher yesterday</span>
        </div>
    </div>
    <div id="ch1"
        class="ht-50 tr-y-1 rickshaw_graph border-top">
        <line6 :mainColor="graphColor"
            :graphOpacity="0"> </line6>
    </div>
</div>
</template>
<script>
import Line6 from '@/components/Module/Chart/Echarts/Line/Line6'

/*
Example of component for rendering  bottom line inside a card
*/
export default {
  props: [
    'bgClass',
    'textClass',
    'icon',
    'graphColor',
    'graphOpacity',
    'title',
    'value',
    'percent'],
  components: {
    Line6
  },
  methods: {
    getIconClass (value) {
      return {
        'la-angle-double-up': value < 2435323,
        'la-angle-double-down': value >= 2435323,
        'text-success': value < 2435323,
        'text-danger': value >= 2435323
      }
    }
  }
}

</script>




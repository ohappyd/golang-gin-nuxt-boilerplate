
<template>
<div class="bg-primary rounded overflow-hidden card"
    :class="bgClass">
    <div class>
        <p class="ml-1 text-11 font-weight-bold  text-uppercase text-theme2 mb-0 opacity-7">{{title}}</p>
    </div>
    <div class="p-0 d-flex align-items-center">

        <div class="flex-grow-1 pl-0">
            <line6 :mainColor="graphColor"
                :graphOpacity="1.0"> </line6>
        </div>
    </div>
    <div class="d-flex">
        <p class="ml-2 text-18 text-white text-left mb-0"
            :class="textClass">

            {{ value | numeral('0,0') }}</p>
        <span class="ml-auto text-11 text-white mt-0 opacity-7 mr-2"
            :class="textClass">{{ percent }}% higher yesterday</span>

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




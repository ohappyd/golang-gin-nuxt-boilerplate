
<template>
<b-row>
    <b-col class="d-flex flex-grow mb-1">
        <div class="flex-fill p-3 border-right"
            style="min-width: 180px;">

            <pie10 title=""
                height="140px"> </pie10>
            <div class="ml-3 text-11 font-weight-bold  text-uppercase text-theme1 mb-0 opacity-7">
                Profit by Category</div>

        </div>
        <div v-for="item in items"
            :key="item.i"
            class="flex-fill w-100 ml-3 pt-2">
            <bottom-line3 :title="item.title"
                :value="item.value"
                :percent="item.percent"
                :icon="item.icon"
                :graphColor="currentColor(item.variant)"
                :graphOpacity="1"
                textClass="text-dark"
                :bgClass="item.bgClass"> </bottom-line3>

        </div>

    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import themeColors from '@@/client/util/theme/themeColors.js'
import Pie10 from '@/components/Module/Chart/Echarts/Pie/Pie10'
import BottomLine2 from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine2'
import BottomLine3 from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine3'

/*
Example of component for rendering  multiple bottom lines inside a card
*/
export default {
  components: {
    Pie10,
    BottomLine2,
    BottomLine3
  },

  data () {
    return {
      items: []
    }
  },

  computed: {
    variablesColors () {
      return themeColors(this.$store.state.theme.skin)
    }

  },
  methods: {
    currentColor (variant) {
      return this.variablesColors[variant]
    }

  },

  created () {
    faker.seed(2)
    const variants = ['primary', 'danger', 'secondary', 'dark']
    const kpi = ['Today\'s Profit', 'Week\'s Profit', 'Month\'s Profit', 'Year\'s Profit']
    const icons = ['shopping-cart', 'tachometer', 'certificate', 'diamond']

    for (let i of [0, 1, 2, 3]) {
      this.items.push({
        id: i,
        title: kpi.shift(),
        value: faker.random.number({
          min: 2000,
          max: 29999
        }),
        percent: faker.random.number({
          min: 0,
          max: 100
        }),
        bgClass: 'bg-transparent',
        // i % 2 !== 0 ? 'bg-light' : 'bg-light',
        icon: 'text-theme1 la la-' + icons.shift(),
        variant: variants[i]
      })
    }
  }

}

</script>

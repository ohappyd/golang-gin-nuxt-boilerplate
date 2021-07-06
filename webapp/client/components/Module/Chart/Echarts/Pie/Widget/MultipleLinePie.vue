
<template>
<b-row>
    <b-col class="mb-1 d-block d-lg-flex ">

        <div class="flex-fill">
            <b-row>
                <b-col md="6"
                    lg="3"
                    v-for="item in items"
                    :key="item.i"
                    class="w-100">
                    <bottom-line3 class="mx-1 p-3"
                        :title="item.title"
                        :value="item.value"
                        :percent="item.percent"
                        :icon="item.icon"
                        :graphColor="item.variant"
                        :graphOpacity="1"
                        textClass="text-theme1"
                        :bgClass="item.bgClass"> </bottom-line3>

                </b-col>

            </b-row>
        </div>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import themeColors from '@@/client/util/theme/themeColors.js'
import BottomLine3 from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine3'

/*
Example of component for rendering  multiple bottom lines inside a card
*/
export default {
  components: {
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
      return this.variablesColors.variantsObj[variant].trans
    }

  },

  created () {
    faker.seed(2)
    const variants = ['primary', 'danger', 'primary', 'danger']
    const kpi = ['Today\'s Profit', 'Week\'s Profit', 'Month\'s Profit', 'Year\'s Profit']
    const icons = ['key', 'dashboard', 'cart-plus', 'lightbulb-o']

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
        bgClass: 'bg-white',
        // i % 2 !== 0 ? 'bg-light' : 'bg-light',
        icon: 'text-theme2 la la-' + icons.shift(),
        // + ' text-' + variants[i],
        variant: variants[i]
      })
    }
  }

}

</script>




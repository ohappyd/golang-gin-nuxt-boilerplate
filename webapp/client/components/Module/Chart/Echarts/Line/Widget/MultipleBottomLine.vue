
<template>
<b-row>
    <b-col v-for="item in items"
        :key="item.i"
        lg="3"
        md="6"
        sm="12">
        <bottom-line :title="item.title"
            :value="item.value"
            :percent="item.percent"
            :icon="item.icon"
            graphColor="primary"
            :graphOpacity="1"
            textClass="text-theme1"
            :bgClass="item.bgClass"> </bottom-line>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import themeColors from '@@/client/util/theme/themeColors.js'
import BottomLine from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine'

/*
Example of component for rendering  multiple bottom lines inside a card
*/
export default {
  components: {
    BottomLine
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
  created () {
    faker.seed(2)
    const kpi = [ 'Today\'s Profit', 'Week\'s Profit', 'Month\'s Profit', 'Year\'s Profit' ]
    const icons = ['shopping-cart', 'tachometer', 'certificate', 'diamond']
    for (let i of [1, 2, 3, 4]) {
      this.items.push({
        id: i,
        title: kpi.shift(),
        value: faker.random.number({ min: 100000, max: 499999 }),
        percent: faker.random.number({ min: 0, max: 100 }),
        bgClass: 'bg-transparent', // i % 2 !== 0 ? 'bg-light' : 'bg-light',
        icon: 'text-theme1 la la-' + icons.shift()

      })
    }
  }
}

</script>




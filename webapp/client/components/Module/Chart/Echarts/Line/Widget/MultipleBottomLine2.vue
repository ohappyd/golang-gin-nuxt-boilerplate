
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
            :graphColor="item.graphVariant"
            :graphOpacity="1.0"
            :twoLines="twoLines"
            :icon="item.icon+ ' '+iconClassColor"
            bgClass="bg-theme1inv"
            :style="{color: mainColor}"
            textClass="text-theme1"> </bottom-line>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import variablesColors from '@@/client/styles/variables/base/_default-skin.scss'
import BottomLine from '@/components/Module/Chart/Echarts/Line/Widget/BottomLine'

/*
Example of component for rendering  multiple bottom lines inside a card
*/
export default {
  props: {
    mainColor: { default: variablesColors.primary },
    iconClassColor: { default: 'text-primary mixed' },
    twoLines: { default: false }
  },
  components: {
    BottomLine
  },
  computed: {
    variablesColors () {
      return variablesColors
    }

  },
  data () {
    return {
      items: []

    }
  },
  created () {
    faker.seed(3)

    const kpi = [ 'Today\'s Sales', 'Week\'s Sales', 'Month\'s Sales', 'Year\'s Sales' ]
    const icons = ['cart', 'meter', 'lightbulb', 'store']
    const variants = ['secondary', 'secondary', 'secondary', 'secondary']

    for (let i of [0, 1, 2, 3]) {
      this.items.push({
        id: i,
        title: kpi.shift(),
        value: faker.random.number({ min: 20000, max: 499999 }),
        percent: faker.random.number({ min: 0, max: 100 }),
        bgClass: i % 2 !== 0 ? 'bg-primary' : 'bg-secondary',
        icon: 'text-white  dripicons-' + icons.shift(),
        graphVariant: variants[i]

      })
    }
  }
}

</script>




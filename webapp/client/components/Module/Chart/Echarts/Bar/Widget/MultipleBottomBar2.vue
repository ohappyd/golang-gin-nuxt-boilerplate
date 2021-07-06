
<template>
<b-row>
    <b-col v-for="item in items"
        :key="item.i"
        lg="3"
        md="6"
        sm="12">
        <bottom-bar :title="item.title"
            :value="item.value"
            :icon="item.icon"
            bgClass="bg-info"> </bottom-bar>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import BottomBar from '@/components/Module/Chart/Echarts/Bar/Widget/BottomBar'

/*
Alternative example of component for rendering  multiple bottom bars inside a card
*/
export default {
  components: {
    BottomBar
  },
  data () {
    return {
      items: []

    }
  },
  created () {
    faker.seed(1)
    const kpi = [ 'TODAY\'S VISITS', 'WEEK\'S VISITS', 'MONTH\'S VISITS', 'YEAR\'S VISITS' ]
    const icons = ['shopping-cart', 'tachometer', 'certificate', 'diamond']
    for (let i of [1, 2, 3, 4]) {
      this.items.push({
        id: i,
        title: kpi.shift(),
        value: faker.random.number({ min: 1000000, max: 1999999 }),
        bgClass: i % 2 === 0 ? 'bg-primary' : 'bg-secondary',
        icon: 'la la-' + icons.shift()

      })
    }
  }
}

</script>


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
            :textClass="item.textClass"
            :valueClass="item.valueClass"
            :bgClass="item.bgClass"> </bottom-bar>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import BottomBar from '@/components/Module/Chart/Echarts/Bar/Widget/BottomBar'

/*
Example of component for rendering  multiple bottom bars inside a card
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
      const valueClass = i % 2 === 0 ? ' border-bottom border-info' : 'border-bottom border-primary'
      this.items.push({
        id: i,
        title: kpi.shift(),
        value: faker.random.number({ min: 1000000, max: 1999999 }),
        bgClass: 'bg-theme1inv',
        icon: 'text-theme1 la la-' + icons.shift(),
        textClass: 'text-theme1',
        valueClass: 'text-primary ' + valueClass
      })
    }
  }
}

</script>




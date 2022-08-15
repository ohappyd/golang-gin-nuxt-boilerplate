
<template>
<b-row>

    <b-col v-for="( item, i) in items"
        :key="i"
        md="12"
        lg="3">
        <basic-alt2 className="bg-primary inverse"
            :city="item.city"
            :wind="item.wind"
            :mainIcon="item.icon"
            :variant="item.variant"
            :temp="item.temp"> </basic-alt2>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import BasicAlt2 from '@/components/Module/Weather/Widget/BasicAlt2'

export default {
  components: {

    BasicAlt2
  },
  data () {
    return {
      items: []
    }
  },

  created () {
    const variants = ['primary', 'danger', 'warning', 'success', 'theme1', 'primary']
    // const icons = ['cart', 'crosshair', 'meter', 'jewel', 'user', 'calendar'] // Populate mock data

    faker.seed(1)
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston']
    const icons = ['thunder', 'sun', 'thunder', 'sun']
    for (let i of [ 0, 1, 2, 3 ]) {
      this.items.push({
        city: cities.pop(),
        temp: faker.random.number({
          min: 20,
          max: 80
        }),
        icon: icons[i],
        variant: variants.shift(),
        // icon: 'dripicons-' + icons.shift() + ' ' + variants.shift() + '',
        wind: faker.random.number({
          min: 20,
          max: 80
        })

      })
    }
  }
}

</script>




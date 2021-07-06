
<template>
<b-row>
    <b-col v-for="(item, i) in items"
        :key="i"
        lg="3"
        md="6"
        sm="12">
        <b-card no-body
            :class="bgCard">
            <b-card-body class="p-3 h-100"
                style="min-height:100px">
                <!-- Row -->
                <b-row class="h-100">
                    <!-- Column -->
                    <b-col class="col pr-0 align-self-center justify-content-end text-left ">

                        <h2 class="font-light text-theme1 mb-0">
                            <i :class="item.icon" />
                            {{item.count}}
                        </h2>
                        <h6 class="text-muted">{{item.title}}</h6>
                    </b-col>
                    <!-- Column -->
                    <b-col class="col text-right align-self-center border-left border-1"
                        :class="item.border">
                        <bar19> </bar19>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
    <!-- Column -->

</b-row>
</template>
<script>
import faker from 'faker'
import Bar19 from '@/components/Module/Chart/Echarts/Bar/Bar19'

/*
Render  four var chart on a group
*/
export default {
  props: {
    bgCard: {
      default: 'bg-theme1inv'
    }
  },
  components: {
    Bar19
  },

  data () {
    return {
      items: []
    }
  },

  created () {
    const borders = ['border-primary', 'border-info', 'border-warning', 'border-success']
    const icons = ['shopping-cart', 'tachometer', 'certificate', 'diamond'] // Populate mock data

    faker.seed(1)
    const kpis = ['New Clients', 'New Orders', 'New Contacts', 'New Leads']

    for (let i of [0, 1, 2, 3]) {
      this.items.push({
        title: kpis.pop(),
        count: faker.random.number({
          min: 100,
          max: 400
        }),
        icon: 'la la-' + icons.shift(),
        border: borders[i]
      })
    }
  }

}

</script>




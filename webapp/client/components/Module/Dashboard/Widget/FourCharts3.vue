
<template>
<b-row class>
    <b-col sm="6"
        md="6"
        lg="3"
        v-for="(item, i) in items"
        :key="i">
        <b-card no-body
            style="min-height:205px">
            <b-card-body class="h-100">
                <!-- Row -->

                <div class="equel-grid">
                    <div class="grid d-flex flex-column align-items-center justify-content-center">
                        <div class="grid-body text-center mt-3">
                            <div class=" icon-rounded inverse mx-auto mb-1"
                                :class="item.variant">
                                <i :class="item.icon" /></div>
                            <h3 class="font-weight-medium">
                                <span>{{item.total}}m</span></h3>
                            <small class="text-gray d-block mt-2">{{item.title}}</small> <small class="font-weight-medium text-success"><i class="mdi mdi-menu-up" /><span class="animated-count">12.01</span>%</small>
                        </div>
                    </div>
                </div>

            </b-card-body>
        </b-card>
    </b-col>
</b-row>
</template>
<script>
import faker from 'faker'

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

  },

  data () {
    return {
      items: []
    }
  },
  methods: {

  },

  created () {
    const variants = ['bg-primary', 'bg-info', 'bg-warning', 'bg-success']
    const icons = ['shopping-cart', 'tachometer', 'certificate', 'diamond'] // Populate mock data

    faker.seed(1)
    const kpis = ['Total Followers', 'Total Likes', 'Total Contacts', 'Total Leads']

    for (let i of [0, 1, 2, 3]) {
      this.items.push({
        title: kpis.pop(),
        total: faker.random.number({
          min: 10,
          max: 90
        }) + '.' + faker.random.number({
          min: 0,
          max: 9
        }),
        icon: 'la la-' + icons.shift(),
        variant: variants[i]

      })
    }
  }

}

</script>


<style lang="scss" scoped>
.icon-rounded {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 140%;
  }
}

</style>



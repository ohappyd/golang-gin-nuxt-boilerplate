
<template>
<b-row>
    <b-col sm="6"
        md="6"
        lg="3"
        v-for="(item, i) in items"
        :key="i">

        <b-card no-body
            style="height:120px"
            class="mb-0"
            :class="bgCard">
            <b-card-body class="p-2 h-100 d-flex flex-column">

                <div class="d-flex  flex-column  justify-content-start text-left"
                    style="min-width: 120px; margin-top: 20px; margin-bottom: -65px;">

                    <div class="count-value  text-theme1">
                        <strong>{{item.count}}</strong>
                        <br />{{item.title}}
                    </div>
                    <i :class="item.icon"
                        class="icon-widget" />

                </div>

            </b-card-body>
        </b-card>
    </b-col>
    <!-- Column -->

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

  created () {
    const variants = ['primary', 'info', 'warning', 'success', 'theme1', 'primary']
    const icons = ['cart', 'crosshair', 'meter', 'jewel', 'user', 'calendar'] // Populate mock data

    faker.seed(1)
    const kpis = ['New Clients', 'New Orders', 'New Contacts', 'New Leads', 'New Mails', 'New Touch']

    for (let i of [0, 1, 2, 3 ]) {
      this.items.push({
        title: kpis.pop(),
        count: faker.random.number({
          min: 100,
          max: 400
        }),
        icon: 'dripicons-' + icons.shift() + ' ' + variants.shift() + '',
        border: 'border-theme1' // borders[i]

      })
    }
  }

}

</script>


<style lang="scss" scoped>
.icon-widget {
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: var(--color);
}

.count-value {
  line-height: 14px;
  font-size: 11px;
  text-align: center;
  strong {
    font-size: 14px;
  }
}

.refresh-icon {
  display: flex;
  right: 8px;
  position: absolute;
}

</style>



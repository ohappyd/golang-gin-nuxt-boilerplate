
<template>
<b-row>
    <b-col sm="6"
        md="6"
        lg="3"
        v-for="(item, i) in items"
        :key="i">

        <b-card no-body
            style="min-height:140px"
            class="mb-0 "
            :class="bgCard">
            <b-card-body class="h-100"
                :class="item.variant">
                <!-- Row -->
                <div class="d-flex flex-column my-auto  w-100">
                    <!-- Column -->
                    <div class="d-flex w-100  justify-content-between text-left">

                        <div class=" text-theme1 text-left">
                            <div class="count-value ">{{item.count}}+</div>
                            <div class="text-theme1 mixed-1">{{item.title}} </div>
                        </div>
                        <svg-icon height="35px"
                            :icon="item.icon"
                            :variant="item.variant"
                            class="mb-1"
                            width="35px"> </svg-icon>

                    </div>
                    <div class="item  w-100 align-self-center "
                        :class="item.border">

                        <div class="item-progress mt-2">
                            <div class="progress">
                                <div role="progressbar"
                                    style="width: 45%;"
                                    :style="{width: item.percent+'%'}"
                                    :aria-valuenow="item.percent"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar" />
                            </div>
                        </div>

                    </div>

                    <!-- Column -->

                </div>
            </b-card-body>
        </b-card>
    </b-col>
    <!-- Column -->

</b-row>
</template>
<script>
import faker from 'faker'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

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
    SvgIcon
  },

  data () {
    return {
      items: []
    }
  },

  created () {
    const variants = ['primary', 'info', 'warning', 'success']
    const icons = ['badge', 'infinity', 'sun', 'shield'] // Populate mock data

    faker.seed(1)
    const kpis = ['New Clients', 'New Orders', 'New Contacts', 'New Leads']

    for (let i of [0, 1, 2, 3]) {
      this.items.push({
        title: kpis.pop(),
        count: faker.random.number({
          min: 100,
          max: 400
        }),
        percent: faker.random.number({
          min: 20,
          max: 50
        }),
        variant: variants.shift(),
        icon: icons.shift(),
        border: 'border-theme1' // borders[i]

      })
    }
  }

}

</script>


<style lang="scss" scoped>
.icon-widget {
  font-size: 33px;
  text-align: center;
}

.count-value {
  font-size: 16px;
}
.progress-bar {
  background-color: var(--color); //var(--primary);
  height: 6px;
  border-radius: 6px;
  margin: 2px 3px;
}
.item .project-progress {
  width: 100%;
}

.item-progress .progress {
  height: 10px;
  background-color: var(--color-mixed);
}

.card-body {
  display: flex;
  justify-content: center;
}

</style>



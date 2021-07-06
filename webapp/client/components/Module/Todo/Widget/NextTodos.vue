
<template>
<b-card no-body>
    <b-card-header>

        <card-title title="Todo Board"
            subTitle="Project view">
            <b-button-group class="flex-wrap">
                <b-button @click="currentIdx=0"
                    :class="currentIdx == 0 ? 'inverse' : 'inverse ig-ghost'">Today</b-button>
                <b-button @click="currentIdx=1"
                    :class="currentIdx == 1 ? 'inverse' : 'inverse ig-ghost'">Week</b-button>
                <b-button @click="currentIdx=2"
                    :class="currentIdx == 2 ? 'inverse' : 'inverse ig-ghost'">Month </b-button>
            </b-button-group>
        </card-title>

    </b-card-header>
    <b-card-body>

        <div v-for="(category, index) in categories"
            v-if="currentIdx == index"
            :key="index">

            <b-list-group class="text-theme2 list-group-flush w-100">
                <b-list-group-item v-for="(item, i) in items[category]"
                    :key="i"
                    class="d-flex ig-p">

                    <b-form-checkbox class="todo-check d-flex align-items-center"
                        v-model="item.checked">
                        <div v-html="item.description">

                        </div>
                        <div>Lorem impsuum asd asd</div>
                    </b-form-checkbox>

                    <div :class="classById(i)"
                        class="hour ml-auto font-weight-bold text-12">
                        {{getFormatedTime()}}
                    </div>
                </b-list-group-item>
            </b-list-group>

        </div>

    </b-card-body>
    <b-card-footer class="d-flex normalize">
        <div class="d-flex align-items-center flex-wrap">
            <div class="font-weight-bold mb-1 text-secondary">Filter by Agent:</div>
            <avatar-list :offset="-10"
                width="33"
                height="33"> </avatar-list>
        </div>

        <b-btn class="inverse ml-auto"
            variant="primary">Show All Tasks</b-btn>
    </b-card-footer>

</b-card>
</template>
<script>
import faker from 'faker'
import AvatarList from '@/components/Module/User/Widget/AvatarList'
import CardTitle from '@/components/Base/Card/CardTitle'

/* Render next todos from module */
export default {
  components: {
    AvatarList,
    CardTitle
  },

  data () {
    const items = {}
    faker.seed(3)
    items['Today'] = this.getTodoList(3)
    items['Tomorrow'] = this.getTodoList(2)
    items['Week'] = this.getTodoList(4)
    return {
      items,
      categories: ['Today', 'Tomorrow', 'Week'],
      currentIdx: 0
    }
  },

  methods: {
    getTodoList (numChecked) {
      const items = []
      const arrVariants = ['primary', 'secondary', 'success', 'danger', 'primary']
      const arrTexts = ['Open', 'Open', 'Paid', 'Due', 'Due'] // const variablesColors = themeColors(this.$store.state.theme.skin)

      for (let i of [0, 1, 2, 3, 5]) {
        const randomValue = faker.random.number({
          min: 1,
          max: 100
        })
        let description = faker.hacker.phrase()

        if (randomValue % 2 === 0) {
          description = `I need to transfer <span class="text-theme1 font-weight-bold">$${randomValue}</span> + taxs to <span class="font-weight-bold">` + faker.name.firstName() + `</span> to pay last order.`
        } else if (randomValue % 7 === 0) {
          description = `Generate invoice from <span class="text-primary font-weight-bold">$${randomValue}</span>  to <span class="font-weight-bold">` + faker.name.firstName() + `</span> . Generate a new order too.`
        }

        const firstName = faker.name.firstName()
        items.push({
          id: i,
          name: firstName + ' ' + faker.name.lastName(),
          description: description,
          created: faker.date.recent(),
          time: '0' + i + ':' + '20',
          // color: variablesColors[arrVariants[i]],
          total: faker.random.number({
            min: 60,
            max: 400
          }),
          checked: i < numChecked,
          variantState: arrVariants[i],
          textState: arrTexts[i]
        })
      }

      return items
    },

    getFormatedTime () {
      let hour = Math.floor(Math.random() * 11) + 1
      let minute = (Math.floor(Math.random() * 5) + 1) * 5

      if (minute < 10) {
        minute = '0' + minute
      }

      return hour + ':' + minute + ' pm'
    },

    classById (id) {
      if (id <= 2) return 'bg-primary text-primary inverse'; else if (id > 2) return 'bg-danger text-danger inverse'; else return 'bg-success text-success inverse'
    }

  }
}

</script>


<style lang="scss" scoped>
.hour {
  padding: 8px;
  text-align: center;
  height: 50px;
  width: 50px;
  min-width: 50px;
  overflow: hidden;
  border-radius: 2px 8px;
}

.avatars {
  margin-left: 20px;
}

</style>




<template>
<b-card no-body>
    <b-card-header>
        <card-title title="Active Visitors"
            subTitle="Live chat messages">
            <b-btn class="inverse ig-ghost btn-square btn-center"
                size="sm">

                <i class="fas fa-sync" />

            </b-btn>
        </card-title>
    </b-card-header>
    <b-card-body class="visitors p-4 small-scroll">

        <!-- visitor-->
        <div v-for="(visitor, i) in visitors"
            :key="i"
            class="visitor w-100">
            <div class="w-100 d-flex flex-nowrap ">

                <div class="visitor-title d-flex">
                    <div class="d-flex flex-column justify-content-center mr-2">

                        <svg-icon icon="chat"
                            width="35px"
                            :variant="visitor.variant"
                            height="35px"> </svg-icon>
                    </div>

                </div>

                <div class="text-container d-flex">
                    <div class="visitor-container pl-2">
                        <div class="visitor-name"> {{ visitor.firstName }} ({{ visitor.title }}) </div>
                        <div class="visitor-message">{{ visitor.message }} </div>
                    </div>
                    <section class="basis-numero-container mt-2 mt-sm-0">
                        <div class="d-flex text-left text-sm-center mr-2">
                            <div class="item">
                                <div class="description-name">Browser</div>
                                <i class=" la la-chrome text-22 text-theme1" />
                            </div>
                            <div class="item">
                                <div class="description-name">Location</div>
                                <div class="text-value text-theme1">{{visitor.location}}</div>
                            </div>

                            <div class="item ">
                                <div class="description-name">Visits</div>
                                <div class="text-value text-theme1">1</div>
                            </div>
                        </div>
                        <avatar-list class
                            style="min-width: 72px;"
                            :users="visitor.agents"> </avatar-list>
                    </section>

                </div>
            </div>
        </div>
    </b-card-body>
    <b-card-footer>
        <card-pagination> </card-pagination>
    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'
import AvatarList from '@/components/Module/User/Widget/AvatarList'
import CardPagination from '@/components/Base/Card/CardPagination'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Card to show small project list
*/
export default {
  components: {
    CardTitle,
    AvatarList,
    CardPagination,
    SvgIcon
  },
  computed: {
    skin () {
      return this.$store.state.theme.skin
    }

  },
  methods: {
    // Generate random user list
    getRandomUsers () {
      const users = []
      const max = faker.random.number({
        min: 2,
        max: 3
      })

      for (let i = 0; i < max; i++) {
        users.push(this.getRandomUser())
      }

      return users
    },

    // Generate user
    getRandomUser () {
      const id = faker.random.number({
        min: 1000,
        max: 3000
      })
      const avatarNum = id % 10
      const user = {
        id: id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        img: id % 3 === 0 ? null : `/img/user/${avatarNum}.jpg`
      }
      return user
    }

  },

  data () {
    // Generate mock data
    faker.seed(5)
    const visitors = []
    const variants = ['primary', 'secondary', 'danger', 'success', 'theme1']

    for (var i in [0, 1, 2, 4, 5]) {
      visitors.push({
        img: `/img/user/${i}.jpg`,
        title: '#' + faker.random.number({
          min: 1000,
          max: 3000
        }),
        id: i,
        variant: variants[i],
        firstName: i % 2 === 0 ? faker.name.firstName() : 'Guest',
        page: '/new-user',
        location: faker.address.state(),
        percentage: faker.random.number({
          min: 30,
          max: 90
        }),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed..',
        // faker.hacker.phrase(),
        comments: faker.random.number({
          min: 10,
          max: 150
        }),
        hour: faker.random.number({
          min: 1,
          max: 12
        }),
        agents: this.getRandomUsers()
      })
    }

    return {
      visitors
    }
  }

}

</script>


<style lang="scss" scoped>
.text-container {
  flex-grow: 1;
  flex-wrap: wrap;
}

.visitor-container {
  display: flex;
  flex-direction: column;
  flex-basis: 140px;
  flex-grow: 1;
}
.description-name,
.visitor-name {
  color: var(--secondary);
}

.basis-numero-container {
  flex-wrap: wrap;

  display: flex;
  padding-left: 0.4rem;
  .item {
    flex: 0 1 80px;
    padding: 0 2px 0 2px;
  }
}

.status-border {
  border-left-width: 2px !important;
}

.container {
  margin: 0 auto;
  display: flex;
}

.visitors {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.visitor-message {
}
.visitor {
  flex-grow: 1;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  padding: 0.75rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--theme1-mixed);
  }
}
.visitor .row {
  margin: 0;
}

.visitor .text h3 {
  margin-bottom: 0;
  color: #555;
  font-size: 1.1em;
}

.visitor .text small {
  color: #aaa;
}

.visitor .text-value {
  font-weight: 500;
}

.visitor .image {
  max-width: 50px;
  min-width: 50px;
  height: 50px;
  margin-right: 5px;
}

.visitor .description-container {
  flex-basis: 20%;
}

.visitor .time i,
.visitor .comments i,
.visitor .visitor-progress i {
  margin-right: 5px;
}

.visitor .visitor-progress {
  width: 200px;
}

.visitor .visitor-progress .progress {
  height: 4px;
}

.visitor .card {
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .visitor .visitor-progress {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .visitor .visitor-progress {
    display: none;
  }
}

</style>



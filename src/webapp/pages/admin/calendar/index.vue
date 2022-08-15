
<template>
<div class="calendar-container">
    <title-top icon="calendar"
        title="Calendar (w/ real database access)"
        subTitle="Test"> </title-top>
    <div class="section-page"
        id="app">
        <calendar :events="events"> </calendar>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import TitleTop from '@/components/Base/Title/TitleTop'
import Calendar from '@/components/Module/Calendar/Calendar'

export default {
  components: {
    TitleTop,
    Calendar
  },
  layout: 'admin',

  // Nuxt run fetch before rendering to request data from server
  async fetch ({
    store,
    params
  }) {
    // await this.findMails([])
    let queryParams = {
      query: {
        $sort: {
          startDate: -1
        },
        $limit: 50
      }
    }
    await store.dispatch('events/find', queryParams)
  },

  computed: { // Inject method to get events on store
    ...mapGetters('events', {
      findEventsInStore: 'find'
    }),

    // Event array from store
    events () {
      return this.findEventsInStore({}).data
    }

  },
  meta: {
    page: {
      contentCentered: true
    }
  }

}

</script>


<style lang="scss" scoped>
.calendar-container {
  height: calc(100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
}

#app {
  flex-grow: 1;
  height: 100%;
}

/deep/ .avatars {
  min-width: 40px;
}

</style>



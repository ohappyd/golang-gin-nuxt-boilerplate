
<template>
<div class="calendar-controls container-events w-100">
    <div class="flex-container">
        <div class="flex-item">

            <title-context title="Relevant Events"
                iconClass="la la-ellipsis-v"> </title-context>

            <div class="content small-scroll">
                <div class="list-events">

                    <div class="inbox_people">

                        <div class="inbox_chat">

                            <div v-for="(event,i) in events"
                                :key="i"
                                class="chat_list border-bottom border-theme3inv">
                                <div class="chat_people">

                                    <div class="chat_img  d-flex align-items-center">
                                        <svg-icon icon="check"
                                            height="20px"
                                            width="20px"> </svg-icon>
                                    </div>
                                    <div class="chat_ib ml-2">
                                        <div class="text-theme1"
                                            :title="event.title">
                                            {{getTitle(event.title) | truncate(12, '...')}} </div>
                                        <p class="text-theme2">Test, which is a new approach to have all solutions.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <footer>
                <div class="bg-theme2inv p-2 footer-events ig-rounded">
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <b-form-input v-model="newEventTitle"
                                size="sm"
                                type="text" />

                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Start date</label>
                        <div class="control">
                            <b-form-input v-model="newEventStartDate"
                                size="sm"
                                placeholder="Start date"
                                type="date" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">End date</label>
                        <div class="control">
                            <b-form-input v-model="newEventEndDate"
                                size="sm"
                                placeholder="End date"
                                type="date" />
                        </div>
                    </div>
                    <button-icon iconClass=" la la-plus"
                        variant="primary"
                        size="sm"
                        class="mt-2"
                        @click="clickTestAddEvent"> Add Event </button-icon>
                </div>

            </footer>
        </div>
    </div>

    <!--

-->
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonIcon from '@/components/Base/Button/ButtonIcon'
import TitleContext from '@/components/Base/Menu/TitleContext'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
This context bar searches the calendar server for events, as well as allowing manipulation of these events.
*/
export default {
  components: {
    ButtonIcon,
    TitleContext,
    SvgIcon
  },

  data () {
    return {
      /* Show the current month, and give it some fake events to show */
      message: '',
      startingDayOfWeek: 0,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: 'month',
      displayPeriodCount: 1,
      showEventTimes: true,
      newEventTitle: '',
      newEventStartDate: new Date().toISOString().substring(0, 10),
      newEventEndDate: new Date().toISOString().substring(0, 10),
      useDefaultTheme: true,
      useHolidayTheme: true,
      useTodayIcons: false
    }
  },

  methods: { // Create event methodo inject by vuex mapActions
    ...mapActions('events', {
      createEvent: 'create'
    }),
    getTitle (title) {
      return !title ? 'Untitled' : title
    },

    // Add event on click button
    clickTestAddEvent () {
      this.newEventTitle = ''
      this.createEvent({
        startDate: this.newEventStartDate,
        endDate: this.newEventEndDate,
        title: this.newEventTitle,
        id: 'e' + Math.random().toString(36).substr(2, 10)
      })
      this.message = 'You added an event!'
    }

  },

  async mounted () {
    // Dispaction action to server using vuex store
    let queryParams = {
      query: {
        $sort: {
          startDate: -1
        },
        $limit: 50
      }
    }
    await this.$store.dispatch('events/find', queryParams)
  },

  computed: { // Get method to return events from store
    ...mapGetters('events', {
      findEventsInStore: 'find'
    }),

    // Array of events from store
    events () {
      return this.findEventsInStore({}).data
    }

  }
}

</script>


<style lang="scss" scoped>
img {
  max-width: 100%;
}

.footer-events {
  label {
    margin-bottom: 0px;
    margin-top: 4px;
  }
}
.container-events {
  height: 100%;
}

.flex-container {
  display: flex;
  height: 100%;
}

.flex-item {
  box-sizing: border-box;
  align-self: center;
  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.inbox_people {
  float: left;
  overflow: hidden;
  width: 100%;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  font-size: 21px;
  margin: auto;
}

.chat_ib h5 span {
  font-size: 13px;
  float: right;
}

.chat_ib {
  width: 100%;
}

.chat_people {
  display: flex;
}
.chat_list {
  margin: 0;
  padding: 18px 16px 10px;
}

</style>



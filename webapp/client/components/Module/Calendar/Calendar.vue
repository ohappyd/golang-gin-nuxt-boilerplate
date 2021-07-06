
<template>
<div class="calendar-parent bg-theme1inv text-theme2">
    <client-only>
        <calendar-view :events="events"
            :show-date="showDate"
            :time-format-options="{hour: 'numeric', minute:'2-digit'}"
            :enable-drag-drop="true"
            :disable-past="disablePast"
            :disable-future="disableFuture"
            :show-event-times="showEventTimes"
            :display-period-uom="displayPeriodUom"
            :display-period-count="displayPeriodCount"
            :starting-day-of-week="startingDayOfWeek"
            :period-changed-callback="periodChanged"
            :current-period-label="useTodayIcons ? 'icons' : ''"
            @drop-on-date="onDrop"
            @click-date="onClickDay"
            @click-event="onClickEvent">
            <calendar-view-header slot="header"
                slot-scope="{ headerProps }"
                :header-props="headerProps"
                @input="setShowDate" />
            <div slot="event"
                slot-scope="{ event }"
                title="Multi-day event"
                class="cv-event"
                draggable="true"
                :class="event.classes"
                :style="getStyleTop(event.eventRow)">

                {{event.title}}

                <avatar-list style="float: right; top: 4px; "
                    :offset="-5"
                    height="28"
                    width="28"> </avatar-list>
            </div>

        </calendar-view>
    </client-only>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import AvatarList from '@/components/Module/User/Widget/AvatarList'

import CalendarMathMixin from '@@/client/third/vue-simple-calendar/CalendarMathMixin'
/*
This calendar page uses the vue-simple-calendar component to render information loaded from the database.
*/

export default {
  components: {
    AvatarList
  },
  layout: 'admin',
  mixins: [CalendarMathMixin],
  props: { events: Array },

  data () {
    return {
      /* Show the current month, and give it some fake events to show */
      showDate: this.thisMonth(1),
      message: '',
      startingDayOfWeek: 0,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: 'month',
      displayPeriodCount: 1,
      showEventTimes: true,
      newEventTitle: '',
      newEventStartDate: '',
      newEventEndDate: '',
      useDefaultTheme: true,
      useHolidayTheme: true,
      useTodayIcons: false
    }
  },

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

  },

  mounted () {
    this.newEventStartDate = this.isoYearMonthDay(this.today())
    this.newEventEndDate = this.isoYearMonthDay(this.today())
  },

  methods: { ...mapActions('events', {
    patchEvent: 'patch'
  }),

  getStyleTop (row) {
    const rowSize = 34 // Pixels

    const totalSize = (row + 1) * rowSize
    return {
      top: 'calc( ' + totalSize + 'px + 2px)'
    }
  },

  periodChanged (range, eventSource) {
    // Demo does nothing with this information, just including the method to demonstrate how
    // you can listen for changes to the displayed range and react to them (by loading events, etc.)

  },

  // Create a date containing the day sent as a parameter concatenated with month and current year
  thisMonth (d, h, m) {
    const t = new Date()
    return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
  },

  // Event on click day from calendar
  onClickDay (d) {
    this.message = `You clicked: ${d.toLocaleDateString()}`
  },

  // Event on click  from calendar
  onClickEvent (e) {
    this.message = `You clicked: ${e.title}`
  },

  // Method to set current date
  setShowDate (d) {
    this.message = `Changing calendar view to ${d.toLocaleDateString()}`
    this.showDate = d
  },

  // Event on drop day
  onDrop (event, date) {
    this.message = `You dropped ${event.id} on ${date.toLocaleDateString()}` // Determine the delta between the old start date and the date chosen,
    // and apply that delta to both the start and end date to move the event.

    const eLength = this.dayDiff(event.startDate, date) // Sends the modifications to the database

    this.patchEvent([event.originalEvent._id, {
      startDate: this.addDays(event.startDate, eLength),
      endDate: this.addDays(event.endDate, eLength)
    }])
  }

  }
}

</script>


<style lang="scss" scoped>
/deep/ /deep/ .cv-header {
  border: none;
  padding-bottom: 4px;
  .cv-header-nav {
    display: flex;
  }
  button {
    background-color: var(--theme1-mixed);
    font-size: 0.8rem;
    color: var(--theme1);
    border-style: none;
    margin: 0 2px;
    padding: 10px;
    line-height: 20px;

    &.previousYear,
    &.nextYear {
      display: none;
    }
    &.previousPeriod,
    &.nextPeriod {
      font-weight: 800;
      font-size: 18px;
    }
  }
}
/deep/ .cv-wrapper {
  padding: 5px;
}

/deep/ .cv-day-number {
  font-weight: 700;
  font-size: 120%;
}

/deep/ .cv-event {
  background-color: var(--theme1-mixed);
  color: var(--theme1);
}
/deep/ .cv-day,
/deep/ .cv-event,
/deep/ .cv-header-day,
/deep/ .cv-header-days,
/deep/ .cv-week,
/deep/ .cv-weeks {
  border-color: var(--theme1-mixed);
}

.calendar-parent {
  width: 100%;
  height: 100%;
}
/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
  min-height: 6rem;
}
/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */
/* Add some styling for events tagged with the "birthday" class */
.theme-default .cv-event.birthday {
  background-color: #e0f0e0;
  border-color: #d7e7d7;
}
.theme-default .cv-event.birthday::before {
  content: "\1F382"; /* Birthday cake */
  margin-right: 0.5em;
}

/* Easter: example of a holiday that changes each year. Easy to pre-populate for a reasonable number of years. */
.cv-wrapper.holiday-us-traditional .d2015-04-05 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2016-03-27 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2017-04-16 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2018-04-01 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2019-04-21 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2020-04-12 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2021-04-04 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2022-04-17 .cv-day-number::before {
  content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2023-04-09 .cv-day-number::before {
  content: "\271D";
}

/* Cinco de Mayo */
.cv-wrapper.holiday-us-traditional .d05-05 .cv-day-number::before {
  content: "\1F1F2\1F1FD";
}

/* Halloween - October 31 */
.cv-wrapper.holiday-us-traditional .d10-31 .cv-day-number::before {
  content: "\1F383";
}

/*
****************************************************
Official US Holidays
****************************************************
*/

/**** Same date every year ****/

/* New Year's Day - January 1 */
.cv-wrapper.holiday-us-official .d01-01 .cv-day-number::before {
  content: "\1F37E";
}

/* Independence Day - July 4 */
.cv-wrapper.holiday-us-official .d07-04 .cv-day-number::before {
  content: "\1F1FA\1F1F8";
}

/* Veteran's Day - November 11 */
.cv-wrapper.holiday-us-official .d11-11 .cv-day-number::before {
  content: "\1F396";
}

/* Christmas Day - December 25 */
.cv-wrapper.holiday-us-official .d12-25 .cv-day-number::before {
  content: "\1F384";
}

/**** Same month position every year ****/

/* Martin Luther King, Jr. Day - 3rd Monday of January */
.cv-wrapper.holiday-us-official.m01 .day.dow1.instance3 .cv-day-number::before {
  content: "\270C\1F3FE";
}

/* Washington's Birthday - 3rd Monday in February */
.cv-wrapper.holiday-us-official.m02 .day.dow1.instance3 .cv-day-number::before {
  content: "\1F34E";
}

/* Memorial Day - last Monday in May */
.cv-wrapper.holiday-us-official.m05
  .day.dow1.lastInstance
  .cv-day-number::before {
  content: "\1F1FA\1F1F8";
}

/* Labor Day - 1st Monday in September */
.cv-wrapper.holiday-us-official.m09 .day.dow1.instance1 .cv-day-number::before {
  content: "\1F4AA";
}

/* Columbus Day - 2nd Monday in October */
.cv-wrapper.holiday-us-official.m10 .day.dow1.instance2 .cv-day-number::before {
  content: "\2388";
}

/* Thanksgiving Day - 4th Thursday of November */
.cv-wrapper.holiday-us-official.m11 .day.dow4.instance4 .cv-day-number::before {
  content: "\1F64F";
}

</style>



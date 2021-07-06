
<template>
<b-card no-body>
    <b-card-header>
        <card-title title="Timeline"
            subTitle="Latest"> </card-title>
    </b-card-header>
    <b-card-body class="ig-p-">
        <div class="overflow-container small-scroll trans ">
            <ul class="timeline p-0">
                <li v-for="(item, i) in items"
                    class="p-2"
                    :key="i">
                    <!-- begin timeline-time -->
                    <div class="timeline-time"
                        :style="{'--current-bg':item.color}">
                        <span class="time">{{item.time}}</span>
                        <div class="icon-left">
                            <svg-icon :icon="item.iconVariant"
                                :lighten="true"
                                variant="theme1"> </svg-icon>
                        </div>
                    </div>
                    <div class="timeline-body d-flex">
                        <div class="timeline-header"
                            :class="i + 1 == items.length ? 'last-item' : ''">

                            <span class="username">
                                <a href="javascript:;">{{item.name}}</a> <small />
                            </span>
                            <p class="my-1"
                                style="max-width: 330px">
                                {{item.message}} </p>

                        </div>
                        <div class="timeline-avatar ml-auto d-flex flex-wrap">

                            <div class="icon-container">
                                <img :src="item.avatar"
                                    class="rounded-1"
                                    width="25"
                                    height="25">
                                </img></div>
                            <div class="icon-container">
                                <img :src="item.logo"
                                    class="opacity-8"
                                    width="25"
                                    height="25">
                                </img></div>

                        </div>

                    </div>
                    <!-- end timeline-body -->
                </li>
            </ul>

        </div>
    </b-card-body>
    <b-card-footer class="d-flex">
        <b-button-group class="ml-auto">
            <b-button @click="currentIdx=0"
                :variant="currentIdx == 0 ? 'theme1' : 'link'"
                :class="currentIdx == 0 ? 'inverse' : ''">You</b-button>
            <b-button @click="currentIdx=1"
                :variant="currentIdx == 1 ? 'theme1' : 'link'"
                :class="currentIdx == 1 ? 'inverse' : ''">Team</b-button>
            <b-button @click="currentIdx=2"
                :variant="currentIdx == 2 ? 'theme1' : 'link'"
                :class="currentIdx == 2 ? 'inverse' : ''">Company </b-button>
        </b-button-group>
    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import themeColors from '@@/client/util/theme/themeColors.js'
import CardTitle from '@/components/Base/Card/CardTitle'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Render time line for user
*/
export default {
  components: {
    CardTitle,
    SvgIcon
  },

  data () {
    const items = []
    const arrVariants = ['primary', 'secondary', 'success', 'danger', 'primary']
    const arrTexts = ['Open', 'Open', 'Paid', 'Due', 'Due']
    const logos = ['1', '2', '3', '4', '5']
    faker.seed(3)
    const variablesColors = themeColors(this.$store.state.theme.skin)
    const icons = ['cart', 'card', 'tablet', 'tablet', 'card']// ['cart', 'calendar', 'gift', 'graduation-cap', 'infinity']

    for (let i of [0, 1, 2, 3, 5]) {
      const firstName = faker.name.firstName()
      items.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.name.jobTitle(),
        created: faker.date.recent(),
        time: '0' + i + ':' + '20',
        color: variablesColors[arrVariants[i]],
        iconVariant: icons.shift(),
        message: faker.hacker.phrase(),
        total: faker.random.number({
          min: 60,
          max: 400
        }),
        logo: '/img/logo/' + logos.shift() + '.svg',
        avatar: '/img/user/' + i + '.jpg',
        variantState: arrVariants[i],
        textState: arrTexts[i]
      })
    }

    return {
      items,
      currentIdx: 0
    }
  }

}

</script>


<style lang="scss" scoped>
@import "~@@/client/styles/mixin/_breakpoint.scss";

.icon-container {
  padding: 0.3rem;
  margin: 0.06rem;
  height: 36px;
}
.icon-left {
  position: absolute;
  top: 20px;
  left: 5px;
}

.timeline .timeline-time {
  position: absolute;
  left: -80px;
  text-align: right;
  top: 8px;
  width: 40px;
}

.timeline .timeline-time .time {
  line-height: 24px;
  font-size: 14px;
  color: var(--theme1-mixed-1);
}

.rounded-1 {
  border-radius: 15%;
}

.overflow-container {
  overflow-y: auto;
  max-height: 370px;
}

.timeline {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.timeline-content {
  display: inline-block;
  vertical-align: top;
}

.timeline-avatar {
  flex-basis: 115px;
  justify-content: center;
}

.timeline > li {
  position: relative;
  min-height: 50px;
  margin-left: 95px;
  border-left: 3px solid var(--theme-border-color);
}

.timeline .timeline-time .date,
.timeline .timeline-time .time {
  display: block;
  font-weight: 600;
}

.timeline .timeline-time .date {
  line-height: 16px;
  font-size: 12px;
}

.timeline .timeline-body {
  margin-left: 5px;
  position: relative;
  padding: 2px 5px;
  border-radius: 6px;
}

.timeline .timeline-body > div + div {
  margin-top: 3px;
}

.timeline .timeline-body > div + div:last-child {
  margin-bottom: -20px;
  border-radius: 0 0 6px 6px;
}

.timeline-header {
  padding-bottom: 15px;

  line-height: 15px;

  &:not(.last-item) {
    border-bottom: 1px solid var(--theme-border-color);
  }
}

.timeline-header .userimage {
  float: left;
  width: 80px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  margin: -2px 10px -2px 0;
}

.timeline-header .username {
  font-weight: 500;
}

.timeline-header .username,
.timeline-header .username a {
  color: var(--theme1);
}

.timeline img {
  max-width: 100px;
  display: block;
}

.timeline-content {
  letter-spacing: 0.25px;
  line-height: 18px;
  font-size: 13px;
}

.timeline-content:after,
.timeline-content:before {
  content: "";
  display: table;
  clear: both;
}

.timeline-title {
  margin-top: 0;
}

.timeline-likes .stats-right {
  float: right;
}

.timeline-likes .stats-total {
  display: inline-block;
  line-height: 20px;
}

.timeline-likes .stats-icon {
  float: left;
  margin-right: 5px;
  font-size: 9px;
}

.timeline-likes .stats-icon + .stats-icon {
  margin-left: -2px;
}

.timeline-likes .stats-text {
  line-height: 20px;
}

.timeline-likes .stats-text + .stats-text {
  margin-left: 15px;
}

.timeline-comment-box {
  background: var(--theme2inv);
  margin-left: -25px;
  margin-right: -25px;
  padding: 20px 25px;
}

.lead {
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.ig-icon-dual-tone {
  width: 35px !important;
  height: 35px !important;
}

/*
		Responsive fix
*/

@include respond-below(xs) {
  .ig-icon-dual-tone {
    width: 20px !important;
    height: 20px !important;
  }
  .timeline {
    .timeline-time {
      left: -3.8rem;

      .time {
        font-size: 12px;
      }
    }

    & > li {
      margin-left: 3.1rem;
    }

    .icon-left {
      left: 15px;
    }
  }
}

</style>



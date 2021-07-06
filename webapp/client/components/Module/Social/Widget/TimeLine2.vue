
<template>
<b-card no-body>
    <b-card-header>
        <card-title title="Timeline"
            subTitle="Latest"> </card-title>
    </b-card-header>
    <b-card-body class="p-2">
        <div class="small-scroll"
            style="overflow-y: auto; height: 100%; max-height:400px;">
            <ul class="timeline p-2">
                <li v-for="(item, i) in items">
                    <!-- begin timeline-time -->
                    <div class="timeline-time">
                        <span class="time">04:20</span>
                    </div>
                    <!-- end timeline-time -->
                    <!-- begin timeline-icon -->
                    <div class="timeline-icon">
                        <a href="javascript:;"
                            :class="'text-'+item.variantState">&nbsp;</a>
                    </div>
                    <!-- end timeline-icon -->
                    <!-- begin timeline-body -->
                    <div class="timeline-body">
                        <div class="timeline-header">

                            <span class="username"><a href="javascript:;">John Smith</a> <small /></span>
                            <span class="pull-right text-muted">
                                <avatar-list> </avatar-list>
                            </span>
                        </div>
                        <div class="timeline-content">
                            <p class="mb-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
                            </p>
                        </div>
                    </div>
                    <!-- end timeline-body -->
                </li>
            </ul>
        </div>
    </b-card-body>
</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'
import AvatarList from '@/components/Module/User/Widget/AvatarList'

/*
Render time line for user
*/
export default {
  components: {
    CardTitle,
    AvatarList
  },

  data () {
    const items = []
    const arrVariants = ['primary', 'success', 'danger', 'warning', 'secondary']
    const arrTexts = ['Open', 'Open', 'Paid', 'Due', 'Due']
    faker.seed(3)

    for (let i of [0, 1, 2, 3, 4]) {
      const firstName = faker.name.firstName()
      items.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.name.jobTitle(),
        created: faker.date.recent(),
        total: faker.random.number({
          min: 60,
          max: 400
        }),
        variantState: arrVariants[i],
        textState: arrTexts[i]
      })
    }

    return {
      items
    }
  }

}

</script>


<style lang="scss" scoped>
.timeline {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline:before {
  content: "";
  position: absolute;
  top: 5px;
  bottom: 5px;
  width: 4px;
  background: var(--light);
  left: 11%;
  margin-left: -2.5px;
}

.timeline > li {
  position: relative;
  min-height: 50px;
  padding: 15px 0 10px 0;
}

.timeline .timeline-time {
  position: absolute;
  left: -8px;
  width: 10%;
  text-align: right;
  top: 38px;
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

.timeline .timeline-time .time {
  line-height: 24px;
  font-size: 13px;
  color: var(--theme2);
}

.timeline .timeline-icon {
  left: 4%;
  position: absolute;
  width: 10%;
  text-align: center;
  top: 40px;
}

.timeline .timeline-icon a {
  text-decoration: none;
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 15px;
  background: var(--theme1inv);
  line-height: 10px;
  font-size: 14px;
  border: 3px solid currentColor;
  outline: 5px solid var(--theme1inv);
  transition: border-color 0.2s linear;
}

.timeline .timeline-body {
  margin-left: 14%;
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
  padding-bottom: 4px;
  border-bottom: 1px solid #e2e7eb;
  line-height: 30px;
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
  font-size: 13px;
  font-weight: 600;
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

.timeline-comment-box .user {
  float: left;
  width: 34px;
  height: 34px;
  overflow: hidden;
  border-radius: 30px;
}

.timeline-comment-box .user img {
  max-width: 100%;
  max-height: 100%;
}

.timeline-comment-box .user + .input {
  margin-left: 44px;
}

.lead {
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

</style>



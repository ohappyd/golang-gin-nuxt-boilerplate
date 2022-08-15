
<template>
<b-card no-body
    class>
    <b-card-header class="d-flex">
        <card-title title="Latest Notifications"
            subTitle="Created and Verified"> </card-title>

    </b-card-header>
    <b-card-body class="message-box">
        <div class="message-widget m-t-20 w-100">
            <!-- Message -->
            <a href="#"
                v-for="(notification, i) in notifications"
                :key="i"
                class="w-100">
                <div class="user-img">

                    <svg-icon height="30px"
                        width="30px"
                        :icon="notification.icon"> </svg-icon>

                </div>
                <div class="mail-content w-100 d-flex">
                    <div class="mb-0">
                        <div class="font-weight-bold mb-0">{{notification.title}}</div>
                        <span class="mail-desc text-secondary">{{notification.names}}</span>
                    </div>
                    <span class="agent-container">
                        <small class="text-theme1">AGENTS</small>
                        <avatar-list :offset="-25"> </avatar-list>
                    </span>
                </div>
            </a>
        </div>
    </b-card-body>
    <b-card-footer class="text-center">
        <b-btn pill
            variant="primary"
            class="inverse"> Clear Notifications

        </b-btn>
    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'
import AvatarList from '@/components/Module/User/Widget/AvatarList'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

// Render notifications (static version)
export default {
  components: {
    CardTitle,
    AvatarList,
    SvgIcon
  },

  data () {
    const notifications = []
    const icons = ['envelope', 'newspaper', 'card', 'chat', 'mobile', 'flame']
    const variants = ['theme1', 'danger', 'primary', 'success', 'secondary', 'secondary']
    const titles = [
      'You have 3 new messages',
      'Newsfeed available ',
      '2 Invoices to pay',
      '15 New comments',
      '15 Calls Received',
      '2 Calls Lost'
    ]

    for (let i in [0, 1, 2, 3, 4]) {
      notifications.push({
        icon: icons[i],
        title: titles[i],
        variant: 'border-' + variants[i],
        names: faker.name.findName() + ', ' + faker.name.findName() + ', ' + faker.name.findName()
      })
    }

    return {
      notifications
    }
  }

}

</script>


<style lang="scss" scoped>
.contact-box .contact-widget > a .user-img {
  margin-bottom: 0px !important;
}
.message-box .message-widget a .user-img {
  width: 45px;
  position: relative;
  display: flex;
  margin: 0 10px 0px 0;
  align-items: center;
}
.message-box .message-widget a div {
  white-space: normal;
}

.contact-box .contact-widget > a {
  padding: 15px 10px;
}
.message-box .message-widget a {
  display: flex;
  text-decoration: none;
  padding: 9px 15px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--theme1-mixed);
  }
}

.message-box .message-widget {
  position: relative;
}
.message-box .message-widget a .mail-content {
  vertical-align: middle;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.agent-container {
  margin-left: auto;
  text-align: right;
  display: flex;
  flex-direction: column;
  min-width: 65px;
}

</style>



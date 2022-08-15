
<template>
<div>
    <div class="ig-title-dropdown d-flex align-items-center justify-content-center py-3 px-4">
        <div> {{title}} <strong> Realtime
            </strong></div>
    </div>
    <b-tabs justified>
        <b-tab title="Transactions"
            v-if="tabs.includes('transactions')"
            active>
            <div class="ig-active-scroll ghost-scroll small-scroll">
                <div class="ig-dropdown-container">
                    <div href="#"
                        v-for="(transaction, i) in transactions"
                        :key="i"
                        class="d-flex bottom p-1 item-drop align-items-center">
                        <div class="ig-left-icon">
                            <svg-icon :variant="transaction.isSent ? 'success' : 'danger'"
                                :height="iconHeight"
                                :width="iconWidth"
                                :icon="transaction.isSent ? 'angle-top' : 'angle-bottom'"
                                :lighten="false"> </svg-icon>
                        </div>
                        <div class="d-flex flex-column w-100 justify-content-between ml-2">
                            <div class="mb-1"
                                v-html="transaction.message">
                            </div>
                            <div>15 mins ago</div>
                        </div>

                    </div>
                </div>

            </div>
        </b-tab>

        <b-tab title="Todos"
            v-if="tabs.includes('todos')">
            <div class="ig-active-scroll ghost-scroll small-scroll">
                <div class="ig-dropdown-container">
                    <div href="#"
                        v-for="(todo, i) in todos"
                        :key="i"
                        class="d-flex bottom p-1 item-drop align-items-center">
                        <div :class="'text-'+todo.class"
                            class="hour-icon ig-left-icon">0{{todo.hour}}:00</div>
                        <div class="d-flex flex-column w-100 justify-content-between ml-2">
                            <strong class="mb-1">{{todo.title}}</strong>
                            <div>{{todo.message}}</div>
                        </div>

                    </div>
                </div>
            </div>
        </b-tab>

        <b-tab title="Events"
            v-if="tabs.includes('events')"
            fill>
            <div class="ig-active-scroll ghost-scroll small-scroll">
                <div class="ig-dropdown-container">
                    <div href="#"
                        v-for="(item, i) in items"
                        :key="i"
                        class="d-flex bottom p-1 item-drop align-items-center">
                        <div class="ig-left-icon">
                            <svg-icon :variant="item.class"
                                :height="iconHeight"
                                :width="iconWidth"
                                :icon="item.icon"
                                :lighten="false"> </svg-icon>
                        </div>
                        <div class="d-flex flex-column w-100 justify-content-between ml-2">
                            <strong class="mb-1">{{item.title}}</strong>
                            <div>3 days ago</div>
                        </div>

                    </div>
                </div>

            </div>
        </b-tab>
        <b-tab title="Chats"
            v-if="tabs.includes('chats')">
            <div class="ig-active-scroll ghost-scroll small-scroll">
                <div class="ig-dropdown-container">
                    <div href="#"
                        v-for="(chat, i) in chats"
                        :key="i"
                        class="d-flex bottom p-1 item-drop align-items-center">
                        <div class="ig-left-icon">
                            <svg-icon :variant="chat.class"
                                :height="iconHeight"
                                :width="iconWidth"
                                icon="chat"
                                :lighten="false"> </svg-icon>
                        </div>
                        <div class="d-flex flex-column w-100 justify-content-between ml-2">
                            <strong class="mb-1">{{chat.name}}</strong>
                            <div>{{chat.message}}</div>
                        </div>

                    </div>
                </div>
            </div>
        </b-tab>
        <b-tab title="Others">
            <div class="d-flex p-3 align-items-center">
                <div class="ig-left-icon">
                    <svg-icon variant="secondary"
                        height="60px"
                        width="60px"
                        icon="bulb"
                        :lighten="true"> </svg-icon>
                </div>
                <strong> Add more info here.</strong>
            </div>
        </b-tab>
    </b-tabs>

</div>
</template>
<script>
import faker from 'faker'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Render small contact list
*/
export default {
  components: {
    SvgIcon
  },

  props: {
    tabs: { type: Array, default: () => ['transactions', 'chats'] },
    title: { type: String, default: 'Notifications' },
    iconHeight: { type: String, default: '20px' },
    iconWidth: { type: String, default: '20px' }
  },
  methods: {
    classValue (value) {
      const className = value > 49 ? 'success' : 'danger'
      return 'text-' + className
    }

  },

  data () {
    const items = []
    const chats = []
    const todos = []
    const transactions = []
    faker.seed(1)
    const variants = ['primary', 'secondary', 'info', 'success', 'danger']
    const icons = ['gift', 'cloud-tools', 'graph-bar', 'check', 'vr', 'thunder']

    for (let i = 0; i < 5; i++) {
      items.push({
        name: faker.name.firstName(),
        title: faker.company.catchPhrase(),
        class: variants[i % 5],
        icon: icons[i % 5],
        value: faker.random.number({
          min: 1,
          max: 10
        }) * 10
      })
    }

    for (let i = 0; i < 5; i++) {
      chats.push({
        name: faker.name.firstName(),
        message: faker.hacker.phrase(),
        class: variants[i % 5],
        icon: icons[i % 5],
        value: faker.random.number({
          min: 1,
          max: 10
        }) * 10
      })
    }

    for (let i = 0; i < 5; i++) {
      todos.push({
        // name: faker.name.firstName(),
        title: faker.company.catchPhraseAdjective(),
        message: faker.hacker.phrase(),
        class: variants[i % 5],
        icon: icons[i % 5],
        hour: faker.random.number({
          min: 1,
          max: 9
        }),
        date: faker.random.number({
          min: 1,
          max: 30
        })
      })
    }

    for (let i = 0; i < 5; i++) {
      const value = faker.random.number({
        min: 100,
        max: 3000
      })
      const text = i % 2 === 0 ? 'transferred <strong class="text-primary"> $' + value + '</strong> to' : 'received value from'
      const message = ' ' +
' <span class="text-weight-bold"> ' + faker.name.firstName() + ' </span>' +
text +
' <span  class="text-weight-bold">' + faker.name.firstName() + '</span> ' +
      ''
      transactions.push({

        message: message,
        class: variants[i % 5],
        isSent: i % 2 === 0

      })
    }

    return {
      items,
      chats,
      todos,
      transactions
    }
  }

}

</script>


<style lang="scss" scoped>
/deep/ .ig-active-scroll {
  min-height: 400px;
}

/deep/ .ig-dropdown-container {
  padding: 0.8rem 1rem;
  cursor: pointer;
  position: absolute;

  .ig-left-icon {
    flex-basis: 42px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
  }

  .hour-icon {
    font-weight: 700;
    font-size: 0.9rem;
  }
}
.item-drop {
  border-bottom: 1px solid var(--theme-border-color);

  .ig-icon {
    margin-right: 6px;
  }
}

/deep/ .nav-tabs .nav-link.active,
/deep/ .nav-tabs .nav-item.show .nav-link {
  border-color: transparent !important;
  background-color: var(--theme1inv);
  color: var(--theme1);
  border-bottom: 3px solid var(--theme1) !important;
}

/deep/ .nav-tabs .nav-item {
  .nav-link {
    padding: 0.4rem;
  }
  .nav-link:not(.active) {
    color: var(--theme1-mixed-1);
  }
  //.nav-link:not(.active),
  .nav-link:hover,
  .nav-link:focus,
  .nav-link:active {
    border-color: transparent !important;
    //background-color: var(--primary-mixed-1);

    border-bottom: 3px solid var(--theme-border-color) !important;
  }
}

/deep/ .nav-tabs {
  border-bottom: 3px solid var(--theme-border-color) !important;
}

/deep/ .nav-tabs .nav-item {
  margin-bottom: -3px !important;
}

</style>



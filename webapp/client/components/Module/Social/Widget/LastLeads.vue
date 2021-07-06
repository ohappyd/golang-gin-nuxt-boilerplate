
<template>
<b-card no-body>
    <b-card-header>
        <card-title title="Latest Leads"
            subTitle="Check Here">
            <b-button icon
                variant="primary"
                class="inverse"> New Lead
            </b-button>
        </card-title>
    </b-card-header>
    <b-card-body>

        <div class="contact-widget">
            <!-- Message -->
            <a href="#"
                v-for="(contact, i) in contacts"
                :key="i"
                class="flex-wrap flex-sm-nowrap">
                <div class="item-1 user-img  text-primary img-container overlay avatar-container">

                    <avatar-icon :variant2="contact.variant"
                        class="opacity-7"
                        :icon="contact.i+''"> </avatar-icon>
                    <div class="avatar-min-icon">
                        <svg-icon :icon="contact.icon"
                            height="15px"
                            width="15px"
                            class="mixed-2"
                            :lighten="false"
                            variant="primary"> </svg-icon>
                    </div>
                </div>
                <div class="item-2 mail-contnet">
                    <div class="name">{{contact.name}}

                    </div>
                    <span class="mail-desc text-lowercase text-theme1 mixed-1">
                        {{contact.name}}@gmail.com
                    </span>
                </div>

                <div class="item-3 d-flex flex-wrap my-2 my-sm-3">
                    <div class>
                        <b-badge :variant="contact.variant"
                            pill
                            class="ig-badge inverse">
                            ${{contact.value}}+
                        </b-badge>
                    </div>
                    <div class="ml-3">

                        <rating :value="contact.i % 4 + 2"> </rating>

                    </div>

                </div>

            </a>
            <!-- Message -->

        </div>

    </b-card-body>
    <b-card-footer>
        <card-pagination> </card-pagination>
    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import CardTitle from '@/components/Base/Card/CardTitle'
import CardPagination from '@/components/Base/Card/CardPagination'
import AvatarIcon from '@/components/Base/Icon/AvatarIcon'
import Rating from '@/components/Base/Input/Rating'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Render small contact list
*/
export default {
  components: {
    ButtonGroup,
    CardTitle,
    CardPagination,
    AvatarIcon,
    Rating,
    SvgIcon
  },
  methods: {
    classValue (value) {
      const className = value > 49 ? 'success' : 'danger'
      return 'text-' + className
    }

  },

  data () {
    const contacts = []
    faker.seed(1)
    const variants = ['secondary', 'secondary', 'secondary', 'primary', 'primary', 'info', 'info']
    const icons = ['mobile', 'chat', 'flame', 'envelope', 'card']
    for (let i = 0; i < 5; i++) {
      contacts.push({
        i: i + 2,
        name: faker.name.firstName(),
        mail: faker.internet.email(),
        class: 'text-' + variants[i],
        variant: variants[i],
        value: faker.random.number({
          min: 1,
          max: 10
        }) * 100,

        icon: icons[i]
      })
    }

    return {
      contacts
    }
  }

}

</script>


<style lang="scss" scoped>
.item-1 {
  flex-grow: 0;
}

.item-2 {
  flex-grow: 4;
  flex-basis: 140px;
}

.item-3 {
  flex-grow: 0;
  flex-basis: 140px;
  justify-content: flex-end;
  flex-shrink: 0;
}

.name {
  font-size: 0.9rem;
  font-weight: 500;
}

.avatar-min-icon {
  right: -2px;
  bottom: -2px;

  width: 22px;
  height: 22px;

  position: absolute;

  background-color: var(--theme1-mixed);
  border-radius: 100%;
  border: 2px solid var(--theme1inv);

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }
}

.contact-widget a .user-img img {
  width: 100%;
}
.contact-widget a .user-img .online {
  background: currentColor;
}
.contact-widget a .user-img .profile-status {
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  left: 28px;
  position: absolute;
  top: 38px;
  width: 10px;
}

.contact-widget > a .user-img {
  margin-bottom: 0px !important;
}
.contact-widget a .user-img {
  width: 45px;
  position: relative;
  display: inline-block;
  margin: 0 10px 15px 0;
}
.contact-widget a div {
  white-space: normal;
}

.contact-widget a {
  border-bottom: 1px solid var(--theme-border-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.75rem 0 0.75rem;

  &:last-child {
    border-bottom: 0;
  }
}

.add-ct-btn {
  position: absolute;
  right: 14px;
  top: 14px;
}

.contact-widget {
  position: relative;
}
.contact-widget a .mail-contnet {
  display: inline-block;
  // max-width: 120px;
  font-size: 12px;
  vertical-align: middle;
}

</style>

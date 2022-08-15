
<template>
<b-card no-body>
    <b-card-header>
        <card-title title="New Leads"
            subTitle="Checkout my contacts here"> </card-title>
    </b-card-header>
    <b-card-body>
        <div class="message-box contact-box">
            <h2 class="add-ct-btn">
                <b-button size="sm"
                    icon
                    variant="secondary"
                    class="btn-unique">+
                </b-button>
            </h2>
            <div class="message-widget contact-widget">
                <!-- Message -->
                <a href="#"
                    v-for="(contact, i) in contacts"
                    :key="i"
                    class="flex-wrap">
                    <div class="user-img  text-primary avatar-container overlay">
                        <img :src="'/img/user/'+(i+5)+'.jpg'"
                            alt="user"
                            class="avatar  border-primary">
                        <span class="profile-status online pull-right"
                            :class="contact.class" />
                        </img>
                    </div>
                    <div class="mail-contnet">
                        <h6 class="mb-0">{{contact.name}}</h6>
                        <span class="mail-desc text-lowercase">{{contact.name}}@gmail.com</span>
                    </div>
                    <div class="ml-auto mr-3">
                        Chance <div class="mb-0 h5"
                            :class="classValue(contact.value)">{{contact.value}}%</div>
                    </div>
                    <div class="lead-value">

                        <button-group> </button-group>

                    </div>
                </a>
                <!-- Message -->

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
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import CardTitle from '@/components/Base/Card/CardTitle'
import CardPagination from '@/components/Base/Card/CardPagination'

/*
Render small contact list
*/
export default {
  components: {
    ButtonGroup,
    CardTitle,
    CardPagination
  },
  methods: {
    classValue (value) {
      const className = (value > 49) ? 'success' : 'danger'
      return 'text-' + className
    }
  },

  data () {
    const contacts = []
    faker.seed(1)
    const variants = ['primary', 'primary', 'success', 'success', 'danger']

    for (let i = 0; i < 5; i++) {
      contacts.push({
        name: faker.name.firstName(),
        mail: faker.internet.email(),
        class: 'text-' + variants[i],
        value: faker.random.number({ min: 1, max: 10 }) * 10
      })
    }

    return {
      contacts
    }
  }

}

</script>


<style lang="scss" scoped>
.message-box .message-widget a .user-img img {
  width: 100%;
}
.message-box .message-widget a .user-img .online {
  background: currentColor;
}
.message-box .message-widget a .user-img .profile-status {
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  left: 28px;
  position: absolute;
  top: 38px;
  width: 10px;
}

.contact-box .contact-widget > a .user-img {
  margin-bottom: 0px !important;
}
.message-box .message-widget a .user-img {
  width: 45px;
  position: relative;
  display: inline-block;
  margin: 0 10px 15px 0;
}
.message-box .message-widget a div {
  white-space: normal;
}

.contact-box .contact-widget > a {
  padding: 15px 10px;
}
.message-box .message-widget a {
  border-bottom: 1px solid rgba(120, 130, 140, 0.13);
  display: flex;

  text-decoration: none;
  padding: 9px 15px;
}

.contact-box .add-ct-btn {
  position: absolute;
  right: 14px;
  top: 14px;
}

.message-box .message-widget {
  position: relative;
}
.message-box .message-widget a .mail-contnet {
  display: inline-block;
  max-width: 120px;
  font-size: 12px;
  vertical-align: middle;
}

</style>


<template>
<div class="row">
    <div class="col-md-6 col-xl-4"
        v-for="(contact, i) in contacts"
        :key="i">
        <b-card no-body
            :class="contact.class">
            <b-card-body>
                <div class="media align-items-center">
                    <span :style="{backgroundImage: 'url('+contact.img+')'} "
                        class="avatar avatar-xl mr-3" />
                    <div class="media-body overflow-hidden text-12 pl-4 text-right ">
                        <div class="mb-0 text-theme1 text-13 font-weight-bold">{{contact.name}}</div>
                        <p class="card-text text-muted subtitle text-truncate">{{contact.jobTitle}}</p>
                        <p class="card-text text-theme1 text-truncate">

                            {{contact.email}} <br />
                            <abbr title="Phone">P: </abbr>{{contact.phone}}
                        </p>
                    </div>
                </div>
            </b-card-body>
        </b-card>
    </div>
</div>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'

/*
Render user card lists
*/
export default {
  components: {
    ButtonGroup
  },
  data () {
    return {
      contacts: []
    }
  },

  mounted () {
    // Generate mock data
    faker.seed(5)
    for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      const firstName = faker.name.firstName()
      this.contacts.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        jobTitle: faker.name.jobTitle(),
        email: firstName.toLowerCase() + '@company.com',
        phone: '+1 (851) 552-' + faker.random.number({ min: 1000, max: 9999 }),
        img: faker.image.avatar(),
        class: i >= 7 ? 'd-none d-xl-block' : ''

      })
    }
  }

}

</script>


<style lang="scss" scoped>
.avatar.avatar-xl {
  width: 3.5rem;
  height: 3.5rem;
}
.avatar {
  width: 2rem;
  height: 1.7rem;
  line-height: 1.5rem;
  border-radius: 50%;
  display: inline-block;
  background: #ced4da no-repeat center/cover;
  position: relative;
  text-align: center;
  color: #868e96;
  font-weight: 600;
  vertical-align: center;
  margin-right: 1.8rem;
}

.tile-link {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 30;
}

p.subtitle {
  margin-bottom: 0.1rem;
}

.card-text {
  font-size: 11px;
}

</style>



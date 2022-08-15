
<template>
<div class="avatars">
    <span :style="spanStyle"
        v-for="(user, i) in currentUsers()"
        :key="i">
        <img v-if="user.img"
            :style="imageStyle"
            :title="user.firstName + ' ' + user.lastName"
            class="avatar"
            :src="user.img">
        </img>
        <div v-else
            :style="imageStyle"
            :class="getNoImgBg(user.bgVariant)"
            :title="user.firstName + ' ' + user.lastName"
            class="avatar avatar-text text-theme1inv h6">
            <span>{{getInitials(user)}}
            </span>

        </div>
    </span>

</div>
</template>
<script>
import faker from 'faker'

/*
Render avatar list
*/
export default {
  props: {
    // Avatar hieght
    height: { default: 40 },
    // Avatar width
    width: { default: 40 },
    // Offset
    offset: { default: -25 },
    // Inset border
    insetBorder: { default: 1 },
    // Main variantion eg.: primary, secondary
    variant: { default: 'theme3' },
    // Avatar unit size
    unit: { default: 'px' },
    // Array with user list
    users: { default: () => {
      return []
    }
    }
  },
  mounted () {
    faker.seed(4)
  },
  methods: {
    getNoImgBg (bgVariant) {
      if (!bgVariant) {
        const random = faker.random.number({
          min: 1,
          max: this.variants.length - 1
        })

        return 'inverse bg-' + this.variants[random] + ' text-' + this.variants[random]
      }

      return bgVariant
    },
    currentUsers () {
      if (this.users.length === 0) {
        return this.getRandomUsers()
      } else {
        return this.users
      }
    },
    getRandomUsers (seed) {
      // faker.seed(seed)
      const users = []
      const max = faker.random.number({
        min: 1,
        max: 3
      })
      for (let i = 0; i < max; i++) {
        users.push(this.getRandomUser(i))
      }
      return users
    },
    getRandomUser (id) {
      const avatarNum = id % 10
      const variantNum = id % this.variants.length
      const user = {
        id: id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        bgVariant: 'inverse bg-' + this.variants[variantNum],
        img: id % 3 === 0 ? null : `/img/user/${avatarNum}.jpg`
      }
      return user
    },
    // Get name initials
    getInitials (user) {
      var names = user.firstName + ' ' + user.lastName
      var initials = names[0].substring(0, 1).toUpperCase()

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
      }
      return initials
    }
  },
  data () {
    const variants = ['primary', 'warning', 'danger', 'secondary', 'secondary', 'info']
    return { variants }
  },
  computed: {
    // Calculate container size
    spanStyle () {
      return {
        height: this.height + this.unit,
        width: this.width + this.unit,
        marginLeft: this.offset + this.unit }
    },
    // Calcula image style
    imageStyle () {
      return {
        lineHeight: 'inherit', // (this.height - (this.insetBorder * 2)) + this.unit,
        height: (this.height - (this.insetBorder * 2)) + this.unit,
        width: (this.width - this.insetBorder * 2) + this.unit

      }
    }
  }
}

</script>


<style lang="scss" scoped>
.avatar-text {
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  border: 3px solid var(--theme1inv) !important;
}

.avatar {
  border: 3px solid var(--theme1inv);

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>



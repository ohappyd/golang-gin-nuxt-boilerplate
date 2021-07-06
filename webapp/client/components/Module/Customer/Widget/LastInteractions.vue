
<template>
<div class="last-interactions">
    <div class="container-interactions">
        <div class="border-bottom ig-p-1 box-sm modern condensed d-flex flex-row  "
            test="flex-md-column  flex-lg-row"
            v-for="(interaction, i) in interactions"
            :key="i">
            <div class="type text-center">
                <i :class="getIconByType(interaction.type)" />

            </div>

            <div class="interaction-content text-left "
                test="text-md-center text-lg-left"
                :title="interaction.content">
                <div class="d-flex">
                    <div class="text-theme1">{{ interaction.subject }}</div>
                    <div class="date ml-auto">{{ interaction.time }}</div>
                </div>
                <div class="text-11 text-theme2 "> {{ interaction.content | truncate(24, '...') }} </div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },
  methods: {
    // Inject find action method on component
    ...mapActions('interactions', { findInteractions: 'find' }),
    // Get icon by interaction type
    getIconByType (type) {
      const typeIcon = {
        'phone': 'lnr lnr-phone-handset',
        'chat': 'lnr lnr-bubble',
        'email': 'lnr lnr-envelope',
        'sms': 'lnr lnr-smartphone',
        'social': 'lnr lnr-thumbs-up'
      }

      return typeIcon[type]
    }
  },
  mounted () {
    // Dispach find interactions to server
    this.findInteractions()
  },
  computed: {
    // Method do get
    ...mapGetters('interactions', { findInteractionsInStore: 'find' }),
    interactions () {
      return this.findInteractionsInStore({ query: { $sort: { time: -1 }, $limit: 10 } }).data
    }
  }
}

</script>


<style lang="scss" scoped>
.interaction-content {
  flex-grow: 8;
  text-align: left;
  padding-left: 4px;
  color: var(--dark);

  small {
    font-weight: 700;
    font-size: 90%;
  }
}

.container-interactions {
}

.type {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  i {
    font-size: 1rem;
    color: var(--light);
  }
}

div.date {
  color: var(--primary);
  font-weight: 600;
}

.user-list {
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}

</style>




<template>
<div class="inbox_people">
    <title-context title="Latest Chats"
        iconClass="la la-ellipsis-v"> </title-context>
    <div class="inbox_chat small-scroll p-1">
        <div v-for="(room, i) in rooms"
            :key="i"
            class="chat_list ">
            <nuxt-link :to="'/admin/chat/'+room._id">
                <div class="chat_people">
                    <div class="chat_img">
                        <img class="avatar"
                            :src="'/img/user/'+room.avatar"
                            alt="sunil"> </img>
                        <span class="profile-status online-status pull-right"
                            :class="getClass(room.status)" />
                    </div>
                    <div class="chat_ib w-100">
                        <div class="d-flex w-100 ">
                            <div class="flex-grow-1 font-weight-bold">{{room.fromName}}</div>
                            <span class="text-11  chat_date">{{formatDate(room.date)}}</span>

                        </div>
                        <p class="text-theme3">
                            {{room.lastMessage | truncate(20, '...')}}
                        </p>
                    </div>
                </div>
            </nuxt-link>
        </div>

    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import TitleContext from '@/components/Base/Menu/TitleContext'

/*
Context sidebar for chat module
*/
export default {
  components: {
    TitleContext
  },
  computed: { // Get rooms from store method
    ...mapGetters('rooms', {
      findRoomsInStore: 'find'
    }),

    // Rooms list
    rooms () {
      let queryRoomsParams = {
        query: {
          $sort: {
            status: -1
          },
          $limit: 15
        } // Dispactch action to find all rooms

      }
      return this.findRoomsInStore(queryRoomsParams).data
    }

  },
  methods: {
    // Format date based on us locale
    formatDate (dateRoom) {
      var d = new Date(dateRoom) // const month = date.;

      return d.toLocaleString('en-us', {
        month: 'short'
      }) + ' ' + d.getDate()
    },
    // Get class status based on bs state
    getClass (status) {
      const mapStatusClass = {
        'chatting': 'primary',
        'online': 'success',
        'busy': 'warning',
        'disconnected': 'secondary',
        'dnd': 'danger'
      }

      return 'text-' + mapStatusClass[status]
    }

  },

  async mounted () {
    // await this.findMails([])
    let queryRoomsParams = {
      query: {
        $sort: {
          date: -1,
          status: -1
        },
        $limit: 50
      } // Dispactch action to find all rooms

    }

    // Dispacth action to fathers demo server
    await this.$store.dispatch('rooms/find', queryRoomsParams)
  }

}

</script>


<style lang="scss" scoped>
img {
  max-width: 34px;
}

.profile-status {
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  left: 21px;
  position: absolute;
  top: 27px;
  width: 10px;
  background: currentColor;
}

.inbox_people {
  position: relative;
  height: 100%;
  width: 100%;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}

.inbox_chat {
  height: calc(100% - 40px);
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}

.recent_heading h4 {
  font-size: 18px;
  margin: auto;
}

.chat_ib h5 {
  font-size: 12px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 11px;
  float: right;
}
.chat_ib p {
  font-size: 12px;
  color: #989898;
  margin: auto;
}

.chat_ib {
}
.chat_img {
  margin-right: 4px;
  position: relative;
}

.chat_people {
  display: flex;
}
.chat_list {
  border-bottom: 1px solid var(--theme3inv);
  margin: 0;
  padding: 18px 12px 10px 2px;
}

</style>


<template>
<chat-window :currentRoomId="currentRoomId"
    :messages="messages"> </chat-window>
</template>
<script>
import { mapGetters } from 'vuex'
import ChatWindow from '@/components/Module/Chat/ChatWindow'

/*
This page receive id as parameter and find in server messages related do this id
*/
export default {
  components: {
    ChatWindow
  },
  layout: 'admin',
  computed: {
    // Get last rooms in store
    ...mapGetters('rooms', {
      findRoomsInStore: 'find'
    }),
    // Get last messages from store
    ...mapGetters('messages', {
      findMessagesInStore: 'find'
    }),
    // Rooms list
    rooms () {
      return this.findRoomsInStore({}).data
    },
    // Message list
    messages () {
      return this.findMessagesInStore({
        query: {
          room: this.currentRoomId,
          $sort: {
            date: -1
          }
        }
      }).data
    }

  },
  // Execute before render of component (nuxt behavior), dispatch actions to retrieve server infortion
  async asyncData ({
    store,
    params
  }) {
    let currentRoomId = null
    // Query used on dispatch to retrieve messages
    const queryMessagesParams = {
      query: {
        $sort: {
          date: -1
        }
      }
    }
    if (params.id) currentRoomId = params.id
    else {
      // Query to retrieve rooms
      const queryRoomsParams = {
        query: {
          $sort: {
            date: -1
          },
          $limit: 1
        }
      }
      // Dispatch action find rooms
      const roomsResult = await store.dispatch('rooms/find', queryRoomsParams)
      const roomId = roomsResult.data[0]._id
      currentRoomId = roomId
    }
    queryMessagesParams.query['room'] = currentRoomId
    // Dispatch action find messages
    await store.dispatch('messages/find', queryMessagesParams)
    // Inject currentRoomId to component instance, can be acessed using this.
    return {
      currentRoomId: currentRoomId
    }
  },
  meta: {
    page: {
      contentCentered: true
    }
  }

}

</script>




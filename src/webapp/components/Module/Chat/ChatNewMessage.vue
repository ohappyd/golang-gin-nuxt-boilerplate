
<template>
<div class="type_msg ig-rounded">
    <div class="input_msg_write">
        <b-input type="text"
            class="write_msg ig-rounded shadow"
            v-model="newMessage"
            placeholder="Type a message"
            @keyup.enter="onCreateMessage" />
        <b-btn icon
            class="msg_send_btn inverse"
            variant="primary"
            @click="onCreateMessage">
            <i class="lnr lnr-chevron-right-circle"
                aria-hidden="true" /></b-btn>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'

/*
Add new message to chat room with this component
*/
export default {
  methods: {
    // Inject create method from vuex
    ...mapActions('messages', { createMessage: 'create' }),
    // Define events on create message
    onCreateMessage () {
      // Create object message
      const newMessage = {
        room: this.currentRoomId,
        date: new Date(),
        message: this.newMessage,
        isFromThird: false
      }
      // Dispatch create action
      this.createMessage(newMessage)
      this.newMessage = ''
    }
  },
  data () {
    return { newMessage: '' }
  }
}

</script>


<style lang="scss" scoped>
.input_msg_write input {
  background: var(--theme1inv);
  border: medium none;
  color: var(--theme1);
  font-size: 15px;
  min-height: 48px;
  width: 100%;
  height: 70px;
}

.type_msg {
  position: relative;
}
.msg_send_btn {
  position: absolute;
  right: 20px;
  top: 17px;

  i {
    font-size: 200%;
  }
}

</style>



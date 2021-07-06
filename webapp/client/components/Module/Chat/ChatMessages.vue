
<template>
<div class="messaging">
    <div class="inbox_msg">
        <div class="mesgs">
            <div class="msg_history">
                <div v-for="(message, i) in messages"
                    :key="i">
                    <div v-if="message.isFromThird"
                        class="incoming_msg">
                        <div class="incoming_msg_img">
                            <img class="avatar"
                                :src="'/img/user/'+message.avatar"
                                alt="sunil"> </img></div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                                <p>{{message.message}}</p>
                                <span class="time_date text-theme1"> 11:01 AM | June 9</span>
                            </div>
                        </div>
                    </div>
                    <div v-else
                        class="outgoing_msg">
                        <div class="sent_msg">
                            <p class="bg-theme2inv">{{message.message}}</p>
                            <span class="time_date text-theme1"> 11:01 AM | June 9</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
</template>
<script>

/*
Render chat list content
*/
export default {
  props: ['messages']
}

</script>


<style lang="scss" scoped>
img {
  width: 60px;
}

.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
  padding: 2px;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
}
.received_withd_msg p {
  background: #fff none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 53%;
}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 90%;
  border-right: 1px solid #ffffff;
}

.sent_msg p {
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  width: 53%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
  height: 70px;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 100%;
  overflow-y: auto;
}

</style>

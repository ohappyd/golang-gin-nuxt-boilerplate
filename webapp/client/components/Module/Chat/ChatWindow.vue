
<template>
<div class="page">
    <div class="page-header shadow p-3 bg-theme1inv ig-rounded"
        :style="currentClass">
        <svg-icon icon="message"
            height="40px"
            class="mr-2"
            variant="secondary"
            width="40px"> </svg-icon>
        <h6 class=" text-left text-theme1">Chat Room: #{{currentRoomId}} </h6>

        <b-button class="inverse ml-auto"
            size="sm"> + Options</b-button>
    </div>
    <div class="page-content ig-active-scroll ghost-scroll">
        <chat-messages :messages="messages"> </chat-messages>
    </div>
    <div class="page-footer">
        <chat-new-message> </chat-new-message>
    </div>
</div>
</template>
<script>
import ChatMessages from '@/components/Module/Chat/ChatMessages'
import ChatNewMessage from '@/components/Module/Chat/ChatNewMessage'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

import layoutSize from '@@/client/styles/variables/base/_default-layout.scss'

/*
Chat windowm component
*/
export default {
  components: {
    ChatMessages,
    ChatNewMessage,
    SvgIcon
  },
  props: ['messages', 'currentRoomId'],
  computed: {
    currentClass () {
      if (this.isContextCollapsed && !this.showByBreakpoint) {
        return { 'position': 'fixed' }
      } else {
        return {
          // 'position': 'fixed',
          // 'position': 'sticky',
          // 'top': 0//
          // 'top': layoutSize['theme-header-space']
        }
      }
    }
  }
}

</script>


<style lang="scss" scoped>
.page {
  height: 100%; /* needed for proper layout */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.page-header {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 1;
}

.page-content {
  margin-bottom: 70px;
}

.page-footer {
  flex: 0 0 auto;
  position: sticky;
  bottom: 4px;
  z-index: 1;
  min-height: 70px;
  width: 100%;
  position: absolute;
}

</style>



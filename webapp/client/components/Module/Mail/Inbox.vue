
<template>
<div>
    <inbox-toolbar> </inbox-toolbar>

    <div class="inbox-body ig-active-scroll ghost-scroll">
        <div class="w-100">
            <div :class="{
                         'is-unread': mail.isUnread
                         }"
                v-for="(mail, i) in mails"
                :key="i"
                class="item-mail ig-rounded ig-p-1"
                @click="onMailClick(mail)">
                <div class="inbox-small-cells">
                    <input @input="mailSelected($event.target.checked)"
                        @click2="mailIsSelected($event.target.value)"
                        type="checkbox"
                        class="mail-form-check">
                    </input></div>
                <div class="inbox-small-cells">
                    <i class="la la-star-o" />
                </div>

                <div class="view-message  dont-show item-2  ">

                    <b-badge v-if="mail.state"
                        class="ig-badge inverse"
                        :variant="mail.state">{{mail.state}}</b-badge>
                </div>
                <div class="view-message  dont-show item-3">
                    {{mail.from}}

                </div>
                <div class="view-message item-3 ">{{mail.subject}}</div>
                <div class="view-message  inbox-small-cells">
                    <i v-if="mail.hasAttachment"
                        class="la la-paperclip" />
                </div>
                <div class="view-message  text-right item-2 ">
                    {{mailDate(mail)}}
                </div>
            </div>

        </div>

    </div>

</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import InboxToolbar from '@/components/Module/Mail/InboxToolbar'

/*
Inbox list mail component
*/
export default {
  components: {
    InboxToolbar
  },
  methods: { // Dispatch method to find mails
    ...mapActions('mails', {
      findMails: 'find'
    }),

    // On email click event
    onMailClick (mail) {
      this.$router.push({
        path: '/admin/mail/' + mail._id + '/'
      })
    },

    // Helper date function
    isToday (td) {
      var d = new Date()
      return td.getDate() === d.getDate() && td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear()
    },

    // Format date function
    mailDate (mail) {
      const dtMail = new Date(mail.date)

      if (this.isToday(dtMail)) {
        return dtMail.getHours() + ':' + dtMail.getMinutes()
      } else {
        return dtMail.toLocaleString('en-us', {
          month: 'long'
        }) + ' ' + dtMail.getDate()
      }
    },

    // Determine email state
    state (mail) {
      if (mail.state === '') return ''
      return `<span class="badge badge-${mail.state} float-right">${mail.state}</span>`
    }

  },
  computed: { // Find method to retrieve emails on store
    ...mapGetters('mails', {
      findMailsInStore: 'find'
    }),

    // Email list from store
    mails () {
      return this.findMailsInStore({}).data
    }

  },

  created () {
    // QUery param, used on featherjs server
    let queryParams = {
      query: {
        $sort: {
          date: -1
        },
        $limit: 50
      },
      paginate: {
        default: 100,
        max: 200
      } // Dispatch find to server

    }
    this.$store.dispatch('mails/find', queryParams)
  }

}

</script>


<style lang="scss" scoped>
.table-container {
  max-height: 90%;
}

.item-mail {
  display: flex;
  margin-bottom: 0.7rem;
  text-align: left;
  background-color: var(--secondary-mixed);

  &.is-unread,
  &:hover {
    background-color: var(--theme1inv);
    box-shadow: var(--theme-shadow);
  }

  & > div {
    flex: 1 1 auto;
    width: 30px;
  }

  & > div.item-2 {
    flex: 2 1 auto;

    width: 100px;
  }

  & > div.item-3 {
    flex: 6 1 auto;
    width: 200px;
  }
}

.mail-box {
  border-spacing: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}

.mail-box .sm-side {
  background: none repeat scroll 0 0 #e5e8ef63;
  border-radius: 4px 0 0 4px;
  width: 25%;
}
.mail-box .lg-side {
  background: none repeat scroll 0 0 #ffffff73;
  border-radius: 0 4px 4px 0;
  width: 100%;
}

.inbox-head {
  border-radius: 0 4px 0 0;
}
.inbox-head h3 {
  display: inline-block;
  margin: 0;
}
.inbox-head .sr-input {
  border: medium none;
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  float: left;
  height: 40px;
  padding: 0 10px;
}
.inbox-head .sr-btn {
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #fff;
  height: 40px;
  padding: 0 20px;
}
.table-inbox {
  margin-bottom: 0;
}
.table-inbox tr td {
  padding: 12px !important;
}
.table-inbox tr td:hover {
  cursor: pointer;
}
.table-inbox tr td .fa-star.inbox-started,
.table-inbox tr td .fa-star:hover {
  color: #f78a09;
}
.table-inbox tr td .fa-star {
  color: #d5d5d5;
}
.table-inbox tr.unread td {
  font-weight: 600;
}
ul.inbox-pagination {
  float: right;
}
ul.inbox-pagination li {
  float: left;
}
.mail-option {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
}
.mail-option .chk-all,
.mail-option .btn-group {
  margin-right: 5px;
}
.mail-option .chk-all,
.mail-option .btn-group a.btn {
  background: #ffffff;

  color: #afafaf;
  display: inline-block;
  padding: 5px 10px;
}
.inbox-pagination a.np-btn {
  background: none repeat scroll 0 0 #fcfcfc;
  border: 1px solid #e7e7e7;
  border-radius: 3px !important;
  color: #afafaf;
  display: inline-block;
  padding: 5px 15px;
}
.mail-option .chk-all input[type="checkbox"] {
  margin-top: 0;
}
.mail-option .btn-group a.all {
  border: medium none;
  padding: 0;
}
.inbox-pagination a.np-btn {
  margin-left: 5px;
}
.inbox-pagination li span {
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
}
.fileinput-button {
  background: none repeat scroll 0 0 #eeeeee;
  border: 1px solid #e6e6e6;
}
.inbox-body .modal .modal-body input,
.inbox-body .modal .modal-body textarea {
  border: 1px solid #e6e6e6;
  box-shadow: none;
}
.btn-send,
.btn-send:hover {
  background: none repeat scroll 0 0 #00a8b3;
  color: #fff;
}
.btn-send:hover {
  background: none repeat scroll 0 0 #009da7;
}
.modal-header h4.modal-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
.modal-body label {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
.heading-inbox h4 {
  border-bottom: 1px solid #ddd;
  color: #444;
  font-size: 18px;
  margin-top: 20px;
  padding-bottom: 10px;
}
.sender-info {
  margin-bottom: 20px;
}
.sender-info img {
  height: 30px;
  width: 30px;
}
.sender-dropdown {
  background: none repeat scroll 0 0 #eaeaea;
  color: #777;
  font-size: 10px;
  padding: 0 3px;
}
.view-mail a {
  color: #ff6c60;
}
.attachment-mail {
  margin-top: 30px;
}
.attachment-mail ul {
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
}
.attachment-mail ul li {
  float: left;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 150px;
}
.attachment-mail ul li img {
  width: 100%;
}
.attachment-mail ul li span {
  float: right;
}
.attachment-mail .file-name {
  float: left;
}
.attachment-mail .links {
  display: inline-block;
  width: 100%;
}

.fileinput-button {
  float: left;
  margin-right: 4px;
  overflow: hidden;
  position: relative;
}
.fileinput-button input {
  cursor: pointer;
  direction: ltr;
  font-size: 23px;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-300px, 0px) scale(4);
}
.fileupload-buttonbar .btn,
.fileupload-buttonbar .toggle {
  margin-bottom: 5px;
}
.files .progress {
  width: 200px;
}
.fileupload-processing .fileupload-loading {
  display: block;
}
* html .fileinput-button {
  line-height: 24px;
  margin: 1px -3px 0 0;
}
* + html .fileinput-button {
  margin: 1px 0 0;
  padding: 2px 15px;
}
@media (max-width: 767px) {
  .files .btn span {
    display: none;
  }
  .files .preview * {
    width: 40px;
  }
  .files .name * {
    display: inline-block;
    width: 80px;
    word-wrap: break-word;
  }
  .files .progress {
    width: 20px;
  }
  .files .delete {
    width: 60px;
  }
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

</style>

<style lang="scss">
.ig-content-view {
  height: calc(100% - 50px);
}

</style>



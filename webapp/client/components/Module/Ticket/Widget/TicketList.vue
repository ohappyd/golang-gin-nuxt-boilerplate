
<template>
<b-card no-body>
    <b-card-header class="d-flex">
        <card-title title="Tickets"
            subTitle="Summary tickets">
            <div class="form-inline">
                <label class="text-muted mr-3"
                    for="order-sort">Sort Orders</label>
                <select class="form-control"
                    id="order-sort">
                    <option>All</option>
                    <option>In Progress</option>
                    <option>Delayed</option>
                    <option>Closed</option>
                </select>
            </div>
        </card-title>

    </b-card-header>
    <b-card-body>
        <div class="table-responsive">
            <table class="table table-hover mb-0">
                <thead>
                    <tr>
                        <th>Ticket #</th>
                        <th>From</th>
                        <th>Date Opened</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket in tickets">

                        <td><a class="navi-link"
                                href="#order-details"
                                data-toggle="modal">{{ticket.id}}</a></td>
                        <td><span>{{ticket.from}}</span></td>
                        <td>{{ticket.date}}</td>
                        <td>
                            <span class="badge m-0"
                                :class="badgeClass(ticket.statusClass)">{{ticket.status}}</span></td>

                    </tr>

                </tbody>
            </table>
        </div>
    </b-card-body>
    <b-card-footer>

        <card-pagination> </card-pagination>
    </b-card-footer>

</b-card>
</template>
<script>
import CardTitle from '@/components/Base/Card/CardTitle'
import CardPagination from '@/components/Base/Card/CardPagination'

/*
Render ticket list
*/
export default {
  components: {
    CardTitle,
    CardPagination
  },
  methods: {
    badgeClass (status) {
      const classBadge = {}
      classBadge['badge-' + status] = true
      return classBadge
    }

  },

  data () {
    return {
      tickets: [{
        id: '78A643CD409',
        date: 'August 08, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'Canceled',
        statusClass: 'danger'
      }, {
        id: '34VB5540K83',
        date: 'July 21, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'In Progress',
        statusClass: 'secondary'
      }, {
        id: '112P45A90V2',
        date: 'June 15, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'Delayed',
        statusClass: 'warning'
      }, {
        id: '28BA67U0981',
        date: 'May 19, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'Delivered',
        statusClass: 'primary'
      }, {
        id: '502TR872W2',
        date: 'April 04, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'Delivered',
        statusClass: 'primary'
      }, {
        id: '47H76G09F33',
        date: 'March 30, 2017',
        from: 'Lorem Ipsum Corp',
        status: 'Delivered',
        statusClass: 'primary'
      }]
    }
  }

}

</script>


<style lang="scss" scoped>
.main-container {
  margin-top: 40px;
}
.widget-author {
  margin-bottom: 58px;
}
.author-card {
  position: relative;
  padding-bottom: 48px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.author-card .author-card-cover {
  position: relative;
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.author-card .author-card-cover::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.5;
}
.author-card .author-card-cover > .btn {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0 10px;
}
.author-card .author-card-profile {
  display: table;
  position: relative;
  margin-top: -22px;
  padding-right: 15px;
  padding-bottom: 16px;
  padding-left: 20px;
  z-index: 5;
}
.author-card .author-card-profile .author-card-avatar,
.author-card .author-card-profile .author-card-details {
  display: table-cell;
  vertical-align: middle;
}
.author-card .author-card-profile .author-card-avatar {
  width: 85px;
  border-radius: 50%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.author-card .author-card-profile .author-card-avatar > img {
  display: block;
  width: 100%;
}
.author-card .author-card-profile .author-card-details {
  padding-top: 20px;
  padding-left: 15px;
}
.author-card .author-card-profile .author-card-name {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
}
.author-card .author-card-profile .author-card-position {
  display: block;
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
}
.author-card .author-card-info {
  margin-bottom: 0;
  padding: 0 25px;
  font-size: 13px;
}
.author-card .author-card-social-bar-wrap {
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
}
.author-card .author-card-social-bar-wrap .author-card-social-bar {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);
}
.btn-style-1.btn-white {
  background-color: #fff;
}
.list-group-item i {
  display: inline-block;
  margin-top: -1px;
  margin-right: 8px;
  font-size: 1.2em;
  vertical-align: middle;
}

.list-group-item.active:not(.disabled) {
  border-color: #e7e7e7;
  background: #fff;
  color: #ac32e4;
  cursor: default;
  pointer-events: none;
}
.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0;
}

.list-group-flush .list-group-item {
  border-right: 0 !important;
  border-left: 0 !important;
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
a.list-group-item,
.list-group-item-action {
  color: #404040;
  font-weight: 600;
}
.list-group-item {
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid #e7e7e7 !important;
  border-radius: 0 !important;
  color: #404040;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

</style>

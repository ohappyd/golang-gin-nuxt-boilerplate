
<template>
<div class="card">
    <div class="card-block">
        <div class="row align-items-center justify-content-center">
            <div class="col-auto">
                <img class="img-fluid rounded-circle"
                    style="width:70px;"
                    src="http://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="dashboard-user">
                </img></div>
            <div class="col">
                <h5>John Doe</h5>
                <span>UX Designer</span>
            </div>
        </div>
        <ul class="task-list text-theme1">
            <li>
                <i class="task-icon bg-primary" />
                <h6>Anton Knudsen<span class="float-right text-muted">14 MAY</span></h6>
                <p class="text-muted">Lorem ipsum is dolorem…</p>
            </li>
            <li>
                <i class="task-icon bg-primary" />
                <h6>Anton Knudsen<span class="float-right text-muted">14 MAY</span></h6>
                <p class="text-muted">Lorem ipsum is dolorem…</p>
            </li>
            <li>
                <i class="task-icon bg-primary" />
                <h6>Anton Knudsen<span class="float-right text-muted">14 MAY</span></h6>
                <p class="text-muted">Lorem ipsum is dolorem…</p>
            </li>
            <li>
                <i class="task-icon bg-primary" />
                <h6>Anton Knudsen<span class="float-right text-muted">14 MAY</span></h6>
                <p class="text-muted">Lorem ipsum is dolorem…</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>

/*
Render user timeline
*/
export default {

  data () {
    return {
    }
  }
}

</script>


<style lang="scss" scoped>
.task-list {
  list-style: none;
  position: relative;
  margin: 0;
  padding: 30px 0 0;
}
.task-list:after {
  content: "";
  position: absolute;
  background: #ecedef;
  height: 100%;
  width: 2px;
  top: 0;
  left: 30px;
  z-index: 1;
}
.task-list li {
  margin-bottom: 30px;
  padding-left: 55px;
  position: relative;
}
.task-list li:last-child {
  margin-bottom: 0;
}
.task-list li .task-icon {
  position: absolute;
  left: 22px;
  top: 13px;
  border-radius: 50%;
  padding: 2px;
  width: 17px;
  height: 17px;
  z-index: 2;
}

.card .card-header {
  background-color: transparent;
  border-bottom: 1px solid #f1f1f1;
  padding: 20px 25px;
  position: relative;
}
.card .card-header h5 {
  margin-bottom: 0;
  color: #000;
  font-size: 17px;
  font-weight: 400;
  display: inline-block;
  margin-right: 10px;
  line-height: 1.1;
  position: relative;
}
.card .card-header h5:after {
  content: "";
  background-color: #04a9f5;
  position: absolute;
  left: -25px;
  top: 0;
  width: 4px;
  height: 20px;
}
.card .card-header.borderless {
  border-bottom: none;
}
.card .card-header.borderless h5:after {
  display: none;
}
.card .card-header .card-header-right {
  right: 10px;
  top: 10px;
  display: inline-block;
  float: right;
  padding: 0;
  position: absolute;
}
@media only screen and (max-width: 575px) {
  .card .card-header .card-header-right {
    display: none;
  }
}
.card .card-header .card-header-right .dropdown-menu {
  margin-top: 0;
}
.card .card-header .card-header-right .dropdown-menu li a {
  font-size: 14px;
  text-transform: capitalize;
}
.card .card-header .card-header-right .btn.dropdown-toggle {
  border: none;
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #888;
}
.card .card-header .card-header-right .btn.dropdown-toggle i {
  margin-right: 0;
}
.card .card-header .card-header-right .btn.dropdown-toggle:after {
  display: none;
}
.card .card-header .card-header-right .btn.dropdown-toggle:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.card .card-footer {
  border-top: 1px solid #f1f1f1;
  background: transparent;
  padding: 25px;
}
.card .card-block,
.card .card-body {
  padding: 30px 25px;
}
.card.card-load {
  position: relative;
  overflow: hidden;
}
.card.card-load .card-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
}
.card.card-load .card-loader i {
  margin: 0 auto;
  color: #04a9f5;
  font-size: 24px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card.full-card {
  z-index: 99999;
  border-radius: 0;
}

.bg-c-green {
  background: #1de9b6;
}

h6 {
  font-size: 14px;
}

</style>



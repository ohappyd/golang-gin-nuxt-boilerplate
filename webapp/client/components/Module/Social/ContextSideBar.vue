
<template>
<div>
    <b-card no-body
        class="mb-3 no-bg">
        <b-card-body class="text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt="Kathy Davis"
                class="img-fluid rounded-circle mb-2"
                width="128"
                height="128">
            <h4 class="card-title mb-0">Kathy Davis</h4>
            <div class="text-muted mb-2">Front-end Developer</div>

            <div>
                <b-btn variant="primary"
                    class="inverse"
                    size="sm"
                    href="#">Follow</b-btn>
                <b-btn variant="primary"
                    class="inverse"
                    size="sm"
                    href="#">
                    <i class="la la-comments" />
                    Message</b-btn>
            </div>
            </img>
        </b-card-body>
    </b-card>
    <b-card no-body
        class="mb-3 no-bg">
        <b-card-header>
            <div class="card-actions float-right">
                <div class="dropdown show">
                    <a href="#"
                        data-toggle="dropdown"
                        data-display="static">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-more-horizontal align-middle">
                            <circle cx="12"
                                cy="12"
                                r="1" />
                            <circle cx="19"
                                cy="12"
                                r="1" />
                            <circle cx="5"
                                cy="12"
                                r="1" />
                        </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item"
                            href="#">Action</a>
                        <a class="dropdown-item"
                            href="#">Another action</a>
                        <a class="dropdown-item"
                            href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <h5 class="card-title mb-0">About</h5>
        </b-card-header>
        <b-card-body class="text-11">
            <ul class="list-unstyled mb-0">
                <li class="mb-1">
                    <svg-icon icon="home"
                        width="24px"
                        height="24px"> </svg-icon>

                    Lives in <a href="#">San Francisco, SA</a>
                </li>
                <li class="mb-1">
                    <svg-icon icon="building"
                        width="24px"
                        height="24px"> </svg-icon> Works at <a href="#">GitHub</a>
                </li>
                <li class="mb-1">
                    <svg-icon icon="map-marker"
                        width="24px"
                        height="24px"> </svg-icon>
                    From <a href="#">Boston</a>
                </li>
            </ul>
        </b-card-body>
    </b-card>

    <b-card no-body
        class="mb-3 no-bg">
        <b-card-header>
            <div class="card-actions float-right">
                <div class="dropdown show">
                    <a href="#"
                        data-toggle="dropdown"
                        data-display="static">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-more-horizontal align-middle">
                            <circle cx="12"
                                cy="12"
                                r="1" />
                            <circle cx="19"
                                cy="12"
                                r="1" />
                            <circle cx="5"
                                cy="12"
                                r="1" />
                        </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item"
                            href="#">Action</a>
                        <a class="dropdown-item"
                            href="#">Another action</a>
                        <a class="dropdown-item"
                            href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <h5 class="card-title mb-0">Following</h5>
        </b-card-header>
        <b-card-body>

            <div class="media">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    width="56"
                    height="56"
                    class="rounded-circle mr-2"
                    alt="Andrew Jones">
                <div class="media-body">
                    <p class="my-1"><strong>Andrew Jones</strong></p>
                    <a class="btn btn-sm btn-outline-primary"
                        href="#">Unfollow</a>
                </div>
                </img>
            </div>

            <hr class="my-2">

            <div class="media">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    width="56"
                    height="56"
                    class="rounded-circle mr-2"
                    alt="John Smit">
                <div class="media-body">
                    <p class="my-1"><strong>John Smit</strong></p>
                    <a class="btn btn-sm btn-outline-primary"
                        href="#">Unfollow</a>
                </div>
                </img>
            </div>

            <hr class="my-2">

            <div class="media">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    width="56"
                    height="56"
                    class="rounded-circle mr-2"
                    alt="Marie Salter">
                <div class="media-body">
                    <p class="my-1"><strong>Marie Salter</strong></p>
                    <a class="btn btn-sm btn-outline-primary"
                        href="#">Unfollow</a>
                </div>
                </img>
            </div>

            </hr>
            </hr>
        </b-card-body>
    </b-card>

</div>
</template>
<script>
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Social context sidebar menu
*/
export default {
  components: {
    SvgIcon
  }
}

</script>


<style lang="scss" scoped>
.context-sidebar {
  font-size: 0.8rem;
}

.nav-link {
  padding: 0.2rem 1rem;
}

a.mail-dropdown {
  background: none repeat scroll 0 0 #80d3d9;
  border-radius: 2px;
  color: #01a7b3;
  font-size: 10px;
  margin-top: 20px;
  padding: 3px 5px;
}

.nav.nav-pills.nav-stacked.labels-info p {
  color: #9d9f9e;
  font-size: 11px;
  margin-bottom: 0;
  padding: 0 22px;
}

ul.inbox-nav {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
}
.inbox-divider {
  border-bottom: 1px solid #d5d8df;
}
ul.inbox-nav li {
  display: inline-block;
  line-height: 30px;
  width: 100%;
}
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 30px;
  padding: 0 20px;
  width: 100%;
}
ul.inbox-nav li a:hover,
ul.inbox-nav li.active a,
ul.inbox-nav li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.inbox-nav li a i {
  color: #6a6a6a;
  font-size: 16px;
  padding-right: 10px;
}
ul.labels-info li h4 {
  color: #5c5c5e;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  text-transform: uppercase;
}
ul.labels-info li {
  margin: 0;
}
ul.labels-info li a {
  border-radius: 0;
  color: #6a6a6a;
}
ul.labels-info li a:hover,
ul.labels-info li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.labels-info li a i {
  padding-right: 10px;
}

</style>



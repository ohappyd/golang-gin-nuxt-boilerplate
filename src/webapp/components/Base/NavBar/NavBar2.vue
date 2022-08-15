
<template>
<b-navbar toggleable="sm"
    light>

    <b-navbar-brand href="#">

        <div class="text-25 logo-text d-flex"
            style>
            SOPH <span class="text-secondary">NEXT</span>
            <div class="d-flex flex-column">
                <div class="dot bg-primary">
                </div>
                <div class="dot bg-warning">
                </div>
                <div class="dot bg-danger">
                </div>
            </div>
        </div>

    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse"
        is-nav>
        <b-navbar-nav class="mr-auto">
            <b-nav-item href="/admin/doc/">Documentation</b-nav-item>
            <b-nav-item href="#"
                disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-nav-form class="nav-item">
            <transition name="slide-fade">
                <b-form-input size="sm"
                    class="mr-sm-2"
                    v-if="isShowSearching"
                    ref="inputSearch"
                    @blur="toggleIsShowSearching"
                    placeholder="Search" />
            </transition>
        </b-nav-form>

        <b-navbar-nav>

            <li class="nav-item">
                <div class="d-flex">

                    <b-button size="sm"
                        variant="link"
                        @click.prevent="toggleIsShowSearching"
                        class="my-2 my-sm-0 "
                        type="button"> <i class="la la-search icon-header text-dark " /></b-button>
                </div>
            </li>

            <b-nav-item-dropdown right
                no-caret>
                <div slot="button-content">
                    <i class="la la-calendar icon-header ">
                        <span class="badge badge-secondary">5</span>
                    </i>
                </div>
                <b-dropdown-header tag="h6"
                    class="p-3 border-bottom">
                    Events
                </b-dropdown-header>

                <b-dropdown-item v-for="i in 5"
                    :key="i"
                    href="#"
                    class="text-12 drop-item">
                    <i class="la la-calendar text-secondary" />
                    <div class="d-flex flex-column ">
                        <div class="text-muted text-11">15 April</div>
                        <div>Lorem ipsum dolor sit...</div>

                    </div>

                    <span class="date ml-auto text-10 text-muted">Sales Team</span>
                </b-dropdown-item>

                <b-dropdown-header>
                    <b-button class="float-right mb-2 text-12"
                        size="sm"
                        variant="outline-secondary"> More
                    </b-button>
                </b-dropdown-header>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right
                no-caret>

                <div slot="button-content">
                    <i class="icon-header la la-comments">
                        <span class="badge badge-secondary">6</span>
                    </i>
                </div>

                <b-dropdown-header tag="h6"
                    class="p-3 border-bottom">
                    Notifications
                </b-dropdown-header>
                <b-dropdown-item v-for="i in 5"
                    :key="i"
                    href="#"
                    class="text-12 drop-item">
                    <i class="la la-comments text-secondary" />
                    <div class="d-flex flex-column ">
                        <div class="text-muted text-11">Anderson</div>
                        <div>Lorem ipsum dolor sit...</div>

                    </div>

                    <span class="date ml-auto text-10 text-muted">15m Ago</span>
                </b-dropdown-item>

                <b-dropdown-header>
                    <b-button class="float-right mb-2 text-12"
                        size="sm"
                        variant="outline-secondary"> More
                    </b-button>
                </b-dropdown-header>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right
                no-caret>
                <template slot="button-content">
                    <img src="/img/flag/united-states.png"
                        alt="Avatar" />
                </template>
                <b-dropdown-item href="#">
                    <img src="/img/flag/italy.png"
                        class="flag" /> Italy
                </b-dropdown-item>
            </b-nav-item-dropdown>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                    href="http://example.com"
                    id="dropdown09"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"><span class="flag-icon flag-icon-us"> </span>TESTE English</a>
                <div class="dropdown-menu"
                    aria-labelledby="dropdown09">
                    <a class="dropdown-item"
                        href="#fr"><span class="flag-icon flag-icon-fr"> </span> French</a>
                    <a class="dropdown-item"
                        href="#it"><span class="flag-icon flag-icon-it"> </span> Italian</a>
                    <a class="dropdown-item"
                        href="#ru"><span class="flag-icon flag-icon-ru"> </span> Russian</a>
                </div>
            </li>

            <b-nav-item-dropdown right
                no-caret>
                <template slot="button-content">
                    <img class="avatar"
                        src="/img/user/1.jpg"
                        alt="Avatar" />
                </template>
                <b-dropdown-item href="#"> <i class="la la-user text-secondary" />My Profile</b-dropdown-item>
                <b-dropdown-item href="#"><i class="la la-comments text-secondary" />Messages</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item href="#"><i class="la la-sign-out text-secondary" />Logout</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar-nav>

    </b-collapse>
</b-navbar>
</template>


<style lang="scss" scoped>
$navHeight: 40px;

/deep/ .flag {
  width: 30px;
  height: 30px;
}

.logo-text {
  font-weight: 700;
  letter-spacing: -2px;
}

.dot {
  width: 6px;
  height: 6px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

/deep/ .drop-item a {
  display: flex;
}

/deep/ .icon-header {
  font-size: 2.1rem;
  width: 25px;

  .badge {
    position: relative;
    font-size: 0.6rem;
    top: -5px;
    left: -10px;
  }
}

.nav-link {
  font-size: 12px;
}

/deep/ .dropdown-menu {
  font-size: 0.9rem;
  width: 250px;
  i {
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }

  .dropdown-item {
    padding-left: 0.8rem;
  }

  &.has-divider .dropdown-item {
    border-bottom: 1px solid #e8e8e9;
  }
}

.avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: 50% !important;
  box-shadow: 0px 0px 0 1px #ffffff, -1px 1px 0 1px #f5f5f5;
}

</style>

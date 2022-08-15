
<template>
<div>

    <b-navbar toggleable="md"
        class="nav-bar-main animated"
        :style="{
                'background': layout.headerBg,
                '--header-bg': layout.headerBg
                }">
        <b-container :fluid="!layout.headerBoxed"
            class="header-container">
            <div>
                <b-navbar-brand v-if="!hideLogo"
                    href="#">
                    <logo hideOnSmall> </logo>
                </b-navbar-brand>

                <b-btn v-if="!layout.menuHide"
                    class="navbar-toggler ig-ghost inverse btn-square ml-1"
                    :aria-expanded="isSideCollapsed ? 'true' : 'false'"
                    variant="theme1"
                    @click.prevent.stop="$emit('update:isSideCollapsed', !isSideCollapsed);">
                    <svg-icon icon="menu"
                        height="25px"
                        :lighten="layout.headerIconLighten"
                        :variant="iconVariant"
                        width="25px" />
                </b-btn>

                <b-navbar-toggle v-if="layout.menuHide"
                    target="nav-menu-top" />

            </div>

            <top-menu :prefixHref="prefixHref"
                :menu="menu"> </top-menu>

            <b-navbar>

                <b-nav-form class="nav-item ml-auto">
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
                                type="button">
                                <svg-icon :lighten="layout.headerIconLighten"
                                    :variant="iconVariant"
                                    icon="search"
                                    :class="{'mixed-2': !layout.headerIconLighten}"
                                    height="25px"
                                    width="25px"> </svg-icon>

                            </b-button>
                        </div>
                    </li>

                    <b-nav-item-dropdown right
                        menu-class="dropdown-lg"
                        no-caret>
                        <div slot="button-content">

                            <svg-icon :lighten2="layout.headerIconLighten"
                                :class="{'mixed-2': !layout.headerIconLighten}"
                                :variant="iconVariant"
                                icon="calendar"
                                height="25px"
                                width="25px"> </svg-icon>
                        </div>
                        <dropdown-tab title="Calendar"
                            :tabs="['events', 'todos']"> </dropdown-tab>

                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right
                        menu-class="dropdown-lg"
                        no-caret>

                        <div slot="button-content">
                            <svg-icon :variant="iconVariant"
                                :lighten2="false && layout.headerIconLighten"
                                icon="chat"
                                :class="{'mixed-2': !layout.headerIconLighten}"
                                height="25px"
                                width="25px"> </svg-icon>

                        </div>

                        <dropdown-tab> </dropdown-tab>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right
                        class="l-divider ml-3"
                        :class="{'mixed': !layout.headerIconLighten}"
                        no-caret>
                        <template slot="button-content">
                            <div class="d-flex text-right text-13">
                                <div class="d-none d-lg-flex  flex-column mr-1 avatar-description justify-content-center">
                                    <span class="text-navtop font-weight-normal"> Hello, </span>
                                    <span class="text-navtop ">
                                        {{user ? user.fname : 'Guest'}}
                                    </span>

                                </div>

                                <avatar-icon width="35px"
                                    height="35px"
                                    style="border-radius: 50%; opacity:0.5; border: 2px solid #fff"
                                    variant="theme1"
                                    :lighten="false"
                                    icon="4"> </avatar-icon>

                            </div>
                        </template>
                        <div class="ig-title-dropdown h6 d-flex align-items-begin justify-content-begin py-3 px-4">
                            <div> Hello, <strong> {{user ? user.fname : 'Guest'}} </strong> </div>
                        </div>
                        <b-dropdown-item href="#">
                            <i class="la la-user text-secondary" />My Profile</b-dropdown-item>
                        <b-dropdown-item href="#">
                            <i class="la la-comments text-secondary" />Messages</b-dropdown-item>
                        <b-dropdown-divider />
                        <b-dropdown-item href="#">
                            <i class="la la-sign-out text-secondary" />Logout</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>

            </b-navbar>

        </b-container>
    </b-navbar>

    <div v-if="layout.headerExtended"
        :style="{'background-color': layout.headerExtendedBg}"
        class="extended-nav-top mb-4">
        <b-container :fluid="!layout.headerBoxed"
            class="d-flex container-extend-navbar">
            <b-nav pills
                class="m-1">
                <b-nav-item active
                    class="inverse">Active</b-nav-item>
                <b-nav-item link-classes="text-dark">Link</b-nav-item>
                <b-nav-item link-classes="text-dark">Another Link</b-nav-item>
                <b-nav-item link-classes="text-dark"
                    disabled>Disabled</b-nav-item>
            </b-nav>
            <div class="ml-auto right-extended text-primary mixed-1 pr-2">
                <i class="lnr lnr-calendar-full m-1" />{{currentDate}}
            </div>
        </b-container>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import Logo from '@/components/Base/NavBar/Logo'
import DropdownTab from '@/components/Base/Dropdown/DropdownTab'
import SvgIcon from '@/components/Base/Icon/SvgIcon'
import AvatarIcon from '@/components/Base/Icon/AvatarIcon'
import TopMenu from '@/components/Base/Menu/TopMenu/TopMenu'

/*
Render admin top navbar
*/
export default {
  components: {
    Logo,
    DropdownTab,
    SvgIcon,
    AvatarIcon,
    TopMenu
  },

  data () {
    return {
      isShowSearching: false,
      iconLighten: true,
      iconLighten2: true,
      iconVariant: 'theme1'
    }
  },

  mounted () {
    // var self = this
    // setInterval(function () {
    // self.iconLighten2 = !self.iconLighten2
    // }, 2000)
  },

  props: {
    menu: Array,
    prefixHref: String,
    hideLogo: Boolean,
    layout: Object,
    isSideCollapsed: Boolean
  },
  computed: {
    ...mapState('auth', ['user']),
    currentDate () {
      var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
      var today = new Date()
      return today.toLocaleDateString('en-US', options)
    }

  },
  methods: {
    // Control searching top navbar state
    toggleIsShowSearching () {
      this.isShowSearching = !this.isShowSearching

      if (this.isShowSearching) {
        this.$nextTick(() => {
          this.$refs.inputSearch.focus()
        })
      }
    }

  }
}

</script>


<style lang="scss" scoped>
$navHeight: 40px;

.avatar-description {
  line-height: 12px;
}

.container-extend-navbar {
  padding: 0 30px 0 10px;
}

/deep/ .nav-item.inverse .nav-link.active {
  background-color: var(--primary-mixed);
  color: var(--primary);
}

.right-extended {
  align-items: center;

  display: flex;
  font-size: 90%;

  i {
    font-size: 13px;
    height: 13px;
    vertical-align: middle;
  }
}

.l-divider.mixed:before {
  background: var(--theme1);
}

.l-divider:before {
  position: absolute;
  left: -5px;
  top: 50%;
  background: var(--primary-mixed);
  width: 3px;
  height: 30px;
  border-radius: 3px;
  margin-top: -15px;
  content: "";
}

/deep/ .navbar-collapse.collapse.show {
  position: absolute;
  top: 80px;
  background-color: var(--theme1inv);
  z-index: 2;
}

/deep/ .icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--theme1);

  i {
    margin-right: 5px;
    color: var(--theme3);
  }
}

/deep/ .flag {
  width: 16px;
  margin-right: 7px;
}
/deep/ .navbar-nav .nav-item {
  padding-left: 0.1rem;
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
  min-width: 250px;

  &.dropdown-lg {
    min-width: 290px;
  }
  i {
    font-size: 1.2rem;
    padding-right: 0.3rem;
  }

  .dropdown-item {
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

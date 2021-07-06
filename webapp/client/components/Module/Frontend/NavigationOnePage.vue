
<template>
<nav class="navbar navbar-expand-lg  fixed-top"
    id="mainNav">
    <div class="container">
        <a class="navbar-brand"
            href="#page-top">
            <logo variant="theme1"> </logo>
        </a>
        <button class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse"
            id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0"
                v-scroll-spy-active="{selector: 'li a', class: 'active'}"
                v-scroll-spy-link>
                <li class="nav-item">
                    <a class="nav-link text-nowrap"
                        href="#features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-nowrap"
                        href="#components">Components</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-nowrap"
                        href="#services">Customize</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-nowrap "
                        href="#portfolio">Pages & Demos</a>
                </li>

            </ul>
        </div>
        <div class="collapse navbar-collapse"
            id="navbarCall">
            <ul class="navbar-nav  ml-auto my-2 my-lg-0">
                <li class="nav-item nav-action">
                    <b-btn class="btn-preview"
                        href="/demo2/admin/dashboard/1"
                        variant="theme1"> Preview</b-btn>

                </li>
                <li class="nav-item ml-2 nav-action">
                    <b-btn class="btn-buy"
                        target="_top"
                        :href="buyLink"
                        variant="outline-theme1"> Buy Now</b-btn>

                </li>

            </ul>
        </div>
    </div>
</nav>
</template>
<script>
import Logo from '@/components/Base/NavBar/Logo'

export default {
  components: {
    Logo
  },
  props: {
    wrapbootstrap: Boolean
  },
  methods: {
  	onBuyClick () {
    		if (window.self !== window.top) { // checking if it is an iframe
        window.parent.location.href = this.buyLink
      } else {
        window.location.href = this.buyLink
      }
    }
  },
  computed: {
    buyLink () {
      return (this.wrapbootstrap) ? 'https://wrapbootstrap.com/user/ignityapps' : 'https://themeforest.net/item/ignity-admin-bootstrap-4-vue-vuex-dashboard-template/24949173'
    }

  }
}

</script>


<style lang="scss">
@import "~@@/client/styles/helpers/_bs-breakpoint-mixin.scss";

// Base styling for the navbar
#mainNav {
  background-color: #fff;
  padding: 1rem 0.6rem;

  transition: background-color 0.2s ease;
  margin-right: 10px;

  .btn-buy {
    border: 2px solid var(--theme1-mixed-1);
  }

  .btn-preview {
    border: 2px solid var(--primary);
  }

  .navbar-nav {
    .nav-item {
      .nav-action .btn {
      }
      a.btn {
        font-weight: 500;
        width: 90px;

        &:hover span.btn-label {
          background: rgba(255, 255, 255, 0.08);
        }

        span.btn-label {
          padding: 0 8px 0 8px;

          background: rgba(255, 255, 255, 0.78);
          i {
            font-size: 20px !important;
            line-height: 30px;
          }
        }
      }
      .nav-link {
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.75rem 0;

        &:hover,
        &:active {
          color: var(--theme1) !important;
        }
        &.active {
          color: var(--theme1) !important;
        }
      }
    }
  }
  @include media-breakpoint-up(lg) {
    // Base styling for the navbar - screen sizes greater than the large breakpoint
    box-shadow: none;
    background-color: transparent;

    .navbar-brand {
      color: var(--theme1-mixed-1);
      &:hover {
        color: var(--theme1);
      }
    }

    .logo {
      .text1 {
        color: var(--theme1-mixed-1) !important;
      }
      .icon,
      .text2 {
        color: var(--theme1) !important;
      }
    }
    .navbar-nav {
      .nav-item {
        .nav-link {
          color: var(--theme1);
          padding: 0 1rem;
          &:hover {
            color: var(--theme1);
          }
        }
        &:last-child {
          .nav-link {
            padding-right: 0;
          }
        }
      }
    }
    // Navbar styling applied when the page is scrolled
    &.navbar-scrolled {
      background-color: #fff;
      padding-bottom: 0.9rem;
      padding-top: 0.9rem;
      box-shadow: var(--theme-shadow);
      .logo {
        .text1 {
          color: var(--theme1-mixed-1) !important;
        }
        .icon,
        .text2 {
          color: var(--theme1) !important;
        }
      }

      .navbar-brand {
        color: var(--primary-mixed-1);
        &:hover {
          color: var(--primary);
        }
      }
      .navbar-nav {
        .nav-item {
          .btn-preview {
            background-color: var(--theme1-mixed);
            color: var(--theme1);
            border: 2px solid var(--theme1-mixed);
          }
          .nav-link {
            color: var(--theme1-mixed-1);

            &:hover,
            &:active {
              color: var(--primary);
            }
            &.active {
              color: var(--primary) !important;
              transition: opacity 1s;
            }
          }
        }
      }
    }
  }
}

</style>

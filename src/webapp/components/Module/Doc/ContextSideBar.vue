
<template>
<div class>
    <nav id="sidebar"
        class="sidebar-wrapper">
        <div class="sidebar-content">

            <title-context title="Documentation"> </title-context>
            <div class="sidebar-menu">
                <ul class="items-menu">

                    <li v-for="menu in menus"
                        :class="{'header-menu': menu.header}">

                        <span v-if="menu.header">
                            <i class="la la-arrow-circle-right opacity-3" /> <span> {{menu.title}}</span>
                        </span>

                        <nuxt-link v-else
                            :to="urlPrefix+menu.href">
                            <i class="la la-circle-o  text-muted" />
                            <span>{{menu.title}}</span>

                        </nuxt-link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>

    <title-context title="Versions"> </title-context>
    <div class="text-right  p-2 doc-btn-container">
        <div class="partner-item ig-rounded">

            <img src="/img/logo/12544273531557996975.svg" />
            <div> Theme </div>
            <div class="version">{{versions.theme}}</div>

        </div>

        <div class="partner-item ig-rounded">

            <img src="/img/logo/bootstrap.svg" />
            <div>Bootstrap </div>
            <div class="version">{{versions.bootstrap}}</div>

        </div>

        <div class="partner-item ig-rounded">

            <img src="/img/logo/nuxt-square.svg" />
            <div> Nuxt.js </div>
            <div class="version">{{versions.nuxt}}</div>

        </div>

        <div class="partner-item ig-rounded">

            <img src="/img/logo/feathersjs.svg" />
            <div> Feathers.js </div>
            <div class="version">{{versions.feathersjs}}</div>

        </div>

    </div>

</div>
</template>
<script>
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import TitleContext from '@/components/Base/Menu/TitleContext'

import versions from '@@/config/version.json'

/*
Contextual documentation sidebar
*/
export default {
  components: {
    ButtonGroup,
    TitleContext
  },
  methods: {},
  data () {
    return { versions }
  },
  computed: {
    urlPrefix () {
      const metaPage = this.$router.currentRoute.meta
      return metaPage.layout ? '/' + metaPage.layout : ''
    },
    menus () {
      return [{
        title: 'Basic',
        header: true
      }, {
        title: 'Getting Started',
        href: '/admin/doc/basic/getting-started'
      }, {
        title: 'Features',
        href: '/admin/doc/basic/features'
      }, {
        title: 'Project Structure',
        href: '/admin/doc/basic/project-structure'
      }, {
        title: 'How to customize?',
        header: true
      }, {
        title: 'Adding Page and Route',
        href: '/admin/doc/client/new-page-route'
      }, {
        title: 'Change Layout & Color',
        href: '/admin/doc/client/change-layout-color'
      }, {
        title: 'Adding Component',
        href: '/admin/doc/client/new-component'
      }, {
        title: 'Using Optional Server',
        header: true
      }, {
        title: 'Why Feathers?',
        href: '/admin/doc/server/why-feathers'
      }, {
        title: 'Adding Service',
        href: '/admin/doc/server/new-micro-service'
      }, {
        title: 'Others',
        header: true
      }, {
        title: 'Why Universal Code?',
        href: '/admin/doc/basic/what-is'
      }, {
        title: 'Third Libraries',
        href: '/admin/doc/other/libraries'
      }, {
        title: 'Changelog',
        href: '/admin/doc/other/changelog'
      }]
    }
  }

}

</script>


<style lang="scss" scoped>
img {
  max-width: 100%;
}
.doc-btn-container {
  display: flex;
  flex-wrap: wrap;
}
.partner-item {
  display: flex;
  background-color: var(--primary-mixed);
  color: var(--theme1);
  padding: 0.4rem;
  margin: 0.2rem;
  //width: 70px;
  flex: 1 0 46%;
  flex-direction: column;
  align-items: center;

  .version {
    font-weight: bold;
  }

  img {
    width: 30px;
    height: 30px;
    opacity: 0.5;
  }
}

.container-events {
  height: 100%;
}

.flex-container {
  display: flex;
  height: 100%;
}

.flex-item {
  box-sizing: border-box;
  align-self: center;
  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 100%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
}

.recent_heading h4 {
  font-size: 21px;
  margin: auto;
}

.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 13px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 12px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  margin: 0;
  padding: 18px 16px 10px;
}

</style>

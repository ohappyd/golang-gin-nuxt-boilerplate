
<template>
<section-container previousUrl="/admin/doc/server/new-micro-service"
    nextUrl="/admin/doc/other/changelog">
    <title-page title="Libraries Included">
        <div />
    </title-page>
    <div class="section-body">
        <p>
            With this ecosystem, the kit provides a lot of native and added features through third-party packages.

        </p>
        <p>Here is a list of the main packages imported into the project:</p>
        <ul>
            <li>
                Powered by
                <a href="https://vuejs.org"
                    rel="nofollow">Vue</a>
            </li>

            <li>
                <a href="https://nuxtjs.org/"
                    rel="nofollow">Nuxt</a>

            </li>
            <li>
                <a href="https://github.com/twbs/bootstrap"
                    rel="nofollow">Bootstrap</a>

            </li>

            <li>
                <a href="https://github.com/bootstrap-vue/bootstrap-vue"
                    rel="nofollow">Bootstrap Vue</a>

            </li>
            <li>
                <a href="https://feathersjs.com/"
                    rel="nofollow">Feathers</a> Optional Backend
            </li>
            <li>
                <a href="https://vuex.vuejs.org/"
                    rel="nofollow">Vuex</a>
            </li>
            <li>
                <a href="https://router.vuejs.org/"
                    rel="nofollow">Vue Router</a> Enhaced with Auto Routing
            </li>
            <li>
                <a href="https://github.com/axios/axios"
                    rel="nofollow">Axios</a>
            </li>
            <li>SASS Powered</li>
            <li>
                Charts
                <ul>
                    <li>
                        <a href="https://apexcharts.com/vue-chart-demos/"
                            rel="nofollow">Apex Charts</a>
                    </li>

                    <li>
                        <a href="https://ecomfe.github.io/vue-echarts/demo/"
                            rel="nofollow">eCharts</a>
                    </li>
                    <li>
                        <a href="https://morrisjs.github.io/morris.js/"
                            rel="nofollow">Morris</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="https://github.com/BrockReece/vue-kanban"
                    rel="nofollow">Vue Kanban</a>
            </li>
            <li>
                <a href="https://github.com/richardtallent/vue-simple-calendar"
                    rel="nofollow">Vue Simple Calendar</a>
            </li>
            <li>
                <a href="https://www.npmjs.com/package/vue-upload-multiple-image"
                    rel="nofollow">Vue Upload Multiple Image</a>
            </li>
            <li>
                <a href="https://github.com/davidroyer/vue2-editor"
                    rel="nofollow">Vue Quill w/ vue2-editor</a>
            </li>
            <li>
                <a href="https://github.com/dmester/jdenticon"
                    rel="nofollow">JdentIcon</a>
            </li>

            <li>
                Icons and Fonts from CDN
                <ul>
                    <li>DripIcons</li>
                    <li>
                        Font Awesome 5
                    </li>
                    <li>Linear Icons</li>
                    <li>Material Icon</li>
                    <li>Vivid Icons</li>
                    <li>Poppins</li>

                </ul>
            </li>

        </ul>
    </div>
</section-container>
</template>
<script>
import SectionContainer from '@/components/Module/Doc/SectionContainer'
import TitlePage from '@/components/Base/Title/TitlePage'

export default {
  components: {
    SectionContainer,
    TitlePage
  },
  layout: 'admin',
  meta: {
    page: {
      contentCentered: true
    }
  }
}

</script>


<template>
<div class>

    <title-page title="Basic Jumbotron">
        A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
    </title-page>

    <card-component>
        <b-jumbotron header="Bootstrap Vue"
            lead="Bootstrap 4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary"
                href="#">More Info</b-button>
        </b-jumbotron>

        <b-jumbotron>
            <template slot="header">Bootstrap Vue</template>

            <template slot="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
            </template>

            <hr class="my-4">

            <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
            </p>

            <b-button variant="primary"
                href="#">Do Something</b-button>
            <b-button variant="success"
                href="#">Do Something Else</b-button>
            </hr>
        </b-jumbotron>
    </card-component>

    <title-page title="Variants">
        <p>BootstrapVue's image components support rounded images, thumbnail styling, alignment, and even the
            ability to create blank images with an optional solid background color. Support for lazy loaded
            images is available via the <code>&lt;b-img-lazy&gt;</code> complimentary component.</p>
    </title-page>

    <card-component>
        <b-jumbotron bg-variant="info"
            text-variant="white"
            border-variant="dark">
            <template slot="header">Bootstrap Vue</template>

            <template slot="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
            </template>

            <hr class="my-4">

            <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
            </p>
            </hr>
        </b-jumbotron>
    </card-component>
</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-jumbotron',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/jumbotron/#component-reference'
    }
  }
}

</script>

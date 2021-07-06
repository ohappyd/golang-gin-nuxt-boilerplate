
<template>
<div class>

    <title-page title="Responsive Embeds">
        Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.
    </title-page>

    <card-component>
        <b-embed type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">

        </b-embed>
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
      tag: 'b-embed',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/embed/#component-reference'
    }
  }
}

</script>




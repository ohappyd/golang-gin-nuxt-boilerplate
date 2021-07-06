
<template>
<div>
    <title-page title="Basic Examples">
        Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. </title-page>
    <card-component>
        <b-breadcrumb :items="items" />
        <b-breadcrumb :items="items" />
        <b-breadcrumb :items="items" />

    </card-component>

</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import TitleTop from '@/components/Base/Title/TitleTop'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    TitleTop,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-breadcrumb',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/breadcrumb/#component-reference'
    }
  },

  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }

}

</script>




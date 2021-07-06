
<template>
<div>

    <title-page title="Basic Link">
        <p class="bd-lead">Use BootstrapVue's custom <code>b-link</code> component for generating a standard <code>&lt;a&gt;</code> link or
            <code>&lt;router-link&gt;</code>. <code>&lt;b-link&gt;</code> supports the <code>disabled</code> state and <code>click</code> event propagation.</p>
    </title-page>

    <card-component>
        <b-link href="#foo">Link</b-link>
    </card-component>

    <title-page title="Link disabled state">
        <p>Disable link functionality by setting the <code>disabled</code> prop to true.</p>
    </title-page>

    <card-component>
        <b-link href="#foo"
            disabled>Disabled Link</b-link>
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
      tag: 'b-link',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/link/#component-reference'
    }
  }
}

</script>




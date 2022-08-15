
<template>
<div>

    <title-page title="Basic Nav">
        <p class="bd-lead">Navigation available in Bootstrap share general markup and styles, from the base <code>&lt;b-nav&gt;</code> class
            to the <code>active</code> and <code>disabled</code> states. Swap modifier props to switch between each style.</p>
    </title-page>

    <card-component>
        <b-nav>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </card-component>

    <title-page title="Tab style">
        <p>Make the nav look like tabs by setting the prop <code>tabs</code>.</p>
    </title-page>

    <card-component>
        <b-nav tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </card-component>

    <title-page title="Pill style">
        <p>Use the pill style by setting the prop <code>pills</code>.</p>
    </title-page>

    <card-component>
        <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </card-component>

    <title-page title="Fill">
        <p>To proportionately fill all available space with your <code>&lt;b-nav-item&gt;</code> components, set the <code>fill</code>
            prop. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
    </title-page>

    <card-component>
        <b-nav fill
            tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link with a long name </b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </card-component>

    <title-page title="Justified">
        <p>For equal-width elements, set prop <code>justified</code> instead. All horizontal space will be occupied by nav
            links, but unlike <code>fill</code> above, every <code>&lt;b-nav-item&gt;</code> will be the same width.</p>
    </title-page>

    <card-component>
        <b-nav justified
            tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link with a long name </b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </card-component>

    <title-page title="Vertical variation">
        <p>By default <code>&lt;b-nav&gt;</code> appear on a horizontal line. Stack your navigation by setting the <code>vertical</code>
            prop.</p>
    </title-page>

    <card-component>
        <b-nav vertical
            class="w-25">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
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
      tag: 'b-nav',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/nav/#component-reference'
    }
  }
}

</script>




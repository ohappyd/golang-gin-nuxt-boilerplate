
<template>
<div>

    <title-page title="Spinners">
        <p class="bd-lead">The <code>&lt;b-spinner&gt;</code> component can be used to show the loading state in your projects. They're
            rendered only with basic HTML and CSS as a lightweight Vue functional component. Their appearance,
            alignment, and sizing can be easily customized with a few built-in props and/or Bootstrap V4
            utility classes.</p>
    </title-page>

    <card-component>
        <b-spinner label="Spinning" />
        <b-spinner type="grow"
            label="Spinning" />
        <b-spinner variant="primary"
            label="Spinning" />
        <b-spinner variant="primary"
            type="grow"
            label="Spinning" />
        <b-spinner variant="success"
            label="Spinning" />
        <b-spinner variant="success"
            type="grow"
            label="Spinning" />
    </card-component>

    <title-page title="Border spinner">
        <p>Use the default <code>border</code> type spinners for a lightweight loading indicator.</p>
    </title-page>

    <card-component>
        <b-spinner label="Loading..." />
    </card-component>

    <title-page title="Grow spinner">
        <p>If you don't fancy a <code>border</code> spinner, switch to the <code>grow</code> spinner by setting the prop <code>type</code> to
            <code>'grow'</code>. While it doesn't technically spin, it does repeatedly grow!</p>
    </title-page>

    <card-component>
        <b-spinner type="grow"
            label="Loading..." />
    </card-component>

    <title-page title="Spinner color variants">
        <p>Spinners use <code>currentColor</code> for their color, meaning it inherits the current font color. You can
            customize the color using the standard text color variants using the <code>variant</code> prop, or place
            classes or styles on the component to change it's color.</p>
    </title-page>

    <card-component>
        <div class="text-center mb-3 d-flex justify-content-between">
            <b-spinner v-for="variant in variants"
                :variant="variant"
                :key="variant" />
        </div>

        <div class="text-center d-flex justify-content-between">
            <b-spinner v-for="variant in variants"
                :variant="variant"
                :key="variant"
                type="grow" />
        </div>
    </card-component>

    <title-page title="Size">
        <p>Set the prop <code>small</code> to <code>true</code> to make a smaller spinner that can quickly be used within other
            components.</p>
    </title-page>

    <card-component>
        <b-spinner small
            label="Small Spinner" />
        <b-spinner small
            label="Small Spinner"
            type="grow" />
    </card-component>

    <title-page title="Margin">
        <p>Use margin utilities like <code>.m-5</code> for easy spacing.</p>
    </title-page>

    <card-component>
        <b-spinner class="m-5"
            label="Busy" />
    </card-component>

    <title-page title="Flex">
        Using flex utility classes:
    </title-page>

    <card-component>
        <div class="d-flex justify-content-center mb-3">
            <b-spinner label="Loading..." />
        </div>

        <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <b-spinner class="ml-auto" />
        </div>

    </card-component>

    <title-page title="Floats">
        Using float utility classes:
    </title-page>

    <card-component>
        Floated Right
        <div class="clearfix">
            <b-spinner class="float-right"
                label="Floated Right" />
        </div>
    </card-component>

    <title-page title="Text align">
        Using text alignment utility classes:
    </title-page>

    <card-component>
        <b-spinner variant="primary"
            label="Text Centered" />

    </card-component>

    <title-page title="Spinners in buttons">
        Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the label text out of the spinner element and utilize button text as needed.
    </title-page>

    <card-component>
        <b-button variant="primary"
            disabled>
            <b-spinner small />
            <span class="sr-only">Loading...</span>
        </b-button>

        <b-button variant="primary"
            disabled>
            <b-spinner small
                type="grow" />
            Loading...
        </b-button>

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
      tag: 'b-spinner',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/spinner/#component-reference'
    }
  },

  data () {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
    }
  }

}

</script>




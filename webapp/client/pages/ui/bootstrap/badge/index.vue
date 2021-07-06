
<template>
<div class>
    <title-page title="Basic Badges">
        Small and adaptive tag for adding context to just about any content.
    </title-page>
    <card-component>
        <h2>Example heading <b-badge variant="primary"
                class="inverse">New</b-badge>
        </h2>
        <h3>Example heading <b-badge variant="primary"
                class="inverse">New</b-badge>
        </h3>
        <h4>Example heading <b-badge variant="primary"
                class="inverse">New</b-badge>
        </h4>
        <h5>Example heading <b-badge variant="primary"
                class="inverse">New</b-badge>
        </h5>
        <h6>Example heading <b-badge variant="primary"
                class="inverse">New</b-badge>
        </h6>
    </card-component>

    <title-page title="Badges w/ Buttons">
        <template>
            <span>Badges used as part of links or buttons to provide a counter. </span>
        </template>
    </title-page>
    <card-component>
        <b-button variant="primary"
            class="inverse">
            Notifications <b-badge variant="primary"
                class="inverse">4</b-badge>
        </b-button>
        <b-button variant="secondary"
            class="inverse">
            Notifications <b-badge variant="theme1"
                class="inverse">4</b-badge>
        </b-button>

        <b-button variant="info"
            class="inverse">
            Notifications <b-badge variant="info"
                class="inverse">4</b-badge>
        </b-button>

        <b-button variant="info"
            class="inverse">
            Notifications <b-badge variant="light"
                class="inverse">4</b-badge>
        </b-button>
    </card-component>
    <title-page title="Contextual Variations">
        <span>Add any of the following variants via the <code>variant</code> prop to change the appearance of a <code>&lt;b-badge&gt;</code>:
            <code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>info</code>, and <code>danger</code>. If no variant is specified
            <code>default</code> will be used.
        </span>
    </title-page>
    <card-component>
        <b-badge variant="primary">Primary</b-badge>
        <b-badge variant="secondary">Secondary</b-badge>
        <b-badge variant="success">Success</b-badge>
        <b-badge variant="danger">Danger</b-badge>
        <b-badge variant="warning">Warning</b-badge>
        <b-badge variant="info">Info</b-badge>
        <b-badge variant="light">Light</b-badge>
        <b-badge variant="dark">Dark</b-badge>
    </card-component>
    <title-page title="Inverse Variations">
        <span>Add any of the following variants via the <code>variant</code> prop to change the appearance of a <code>&lt;b-badge&gt;</code>:
            <code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>info</code>, and <code>danger</code>. If no variant is specified
            <code>default</code> will be used.
        </span>
    </title-page>
    <card-component>
        <b-badge variant="primary"
            class="inverse">Primary</b-badge>
        <b-badge variant="secondary"
            class="inverse">Secondary</b-badge>
        <b-badge variant="success"
            class="inverse">Success</b-badge>
        <b-badge variant="danger"
            class="inverse">Danger</b-badge>
        <b-badge variant="warning"
            class="inverse">Warning</b-badge>
        <b-badge variant="info"
            class="inverse">Info</b-badge>
        <b-badge variant="light"
            class="inverse">Light</b-badge>
        <b-badge variant="dark"
            class="inverse">Dark</b-badge>
    </card-component>
    <title-page title="Pill badges">
        <div>Use the <code>pill</code> prop to make badges more rounded (with a larger border-radius and additional
            horizontal padding). Useful if you miss the badges from Bootstrap v3.</div>
    </title-page>
    <card-component>
        <b-badge pill
            variant="primary">Primary</b-badge>
        <b-badge pill
            variant="secondary">Secondary</b-badge>
        <b-badge pill
            variant="success">Success</b-badge>
        <b-badge pill
            variant="danger">Danger</b-badge>
        <b-badge pill
            variant="warning">Warning</b-badge>
        <b-badge pill
            variant="info">Info</b-badge>
        <b-badge pill
            variant="light">Light</b-badge>
        <b-badge pill
            variant="dark">Dark</b-badge>
    </card-component>
    <title-page title="Actionable badges">
        <p>Quickly provide actionable badges with hover and focus states by specifying either the <code>href</code> prop
            (links) or <code>to</code> prop (router-links):</p>
    </title-page>
    <card-component>
        <b-badge href="#"
            variant="primary">Primary</b-badge>
        <b-badge href="#"
            variant="secondary">Secondary</b-badge>
        <b-badge href="#"
            variant="success">Success</b-badge>
        <b-badge href="#"
            variant="danger">Danger</b-badge>
        <b-badge href="#"
            variant="warning">Warning</b-badge>
        <b-badge href="#"
            variant="info">Info</b-badge>
        <b-badge href="#"
            variant="light">Light</b-badge>
        <b-badge href="#"
            variant="dark">Dark</b-badge>
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
  meta: {
    component: {
      tag: 'b-badge',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/badge/#component-reference'
    }
  },
  layout: 'admin'
}

</script>




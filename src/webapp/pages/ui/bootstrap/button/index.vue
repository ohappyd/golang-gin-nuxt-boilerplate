
<template>
<div class>
    <title-page title="Basic Buttons">
        Use Bootstrap’s custom b-button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more. </title-page>

    <card-component>

        <b-button variant="primary"
            class="inverse">Button</b-button>
        <b-button class="inverse">Button</b-button>
        <b-button variant="primary">Button</b-button>
        <b-button variant="theme1">Dark</b-button>

    </card-component>

    <title-page title="Prepend icon"> </title-page>
    <card-component>
        <button-icon variant="primary"
            class="inverse"> </button-icon>
        <button-icon variant="secondary"
            class="inverse"> </button-icon>
        <button-icon class="inverse"
            variant="theme1"> </button-icon>
        <button-icon class="inverse"
            variant="warning"> </button-icon>
    </card-component>

    <title-page title="Button inverse variants">
        <p>Use the <code>variant</code> prop to generate the various Bootstrap contextual button variants.</p>
        <p>By default <code>&lt;b-button&gt;</code> will render with the <code>secondary</code> variant.</p>
    </title-page>
    <card-component>

        <b-button variant="primary"
            class="inverse">Primary</b-button>
        <b-button variant="secondary"
            class="inverse">Secondary</b-button>
        <b-button variant="success"
            class="inverse">Success</b-button>
        <b-button variant="danger"
            class="inverse">Danger</b-button>
        <b-button variant="warning"
            class="inverse">Warning</b-button>
        <b-button variant="info"
            class="inverse">Info</b-button>
        <b-button variant="light"
            class="inverse">Light</b-button>
        <b-button variant="dark"
            class="inverse">Dark</b-button>

    </card-component>

    <title-page title="Button solid variants">
        <p>Use the <code>variant</code> prop to generate the various Bootstrap contextual button variants.</p>
        <p>By default <code>&lt;b-button&gt;</code> will render with the <code>secondary</code> variant.</p>
    </title-page>
    <card-component>

        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>

    </card-component>

    <title-page title="Button outline variants">
        <p>In need of a button, but not the hefty background colors they bring? Use the <code>outline-*</code> variants to
            remove all background images and colors on any <code>&lt;b-button&gt;</code>:</p>
    </title-page>
    <card-component>

        <b-button variant="outline-primary">Primary</b-button>
        <b-button variant="outline-secondary">Secondary</b-button>
        <b-button variant="outline-success">Success</b-button>
        <b-button variant="outline-danger">Danger</b-button>
        <b-button variant="outline-warning">Warning</b-button>
        <b-button variant="outline-info">Info</b-button>
        <b-button variant="outline-light">Light</b-button>
        <b-button variant="outline-dark">Dark</b-button>
    </card-component>

    <title-page title="Button element type">
        The <code>&lt;b-button&gt;</code> component generally renders a <code>&lt;button&gt;</code> element. However, you can also render an
        <code>&lt;a&gt;</code> element by providing an <code>href</code> prop value. You may also generate <code>vue-router</code> <code>&lt;router-link&gt;</code>
        when providing a value for the <code>to</code> prop (<code>vue-router</code> is required). </title-page>
    <card-component>

        <b-button variant="primary"
            class="inverse">I am a Button</b-button>
        <b-button variant="primary"
            href="#"
            class="inverse">I am a Link</b-button>

    </card-component>

    <title-page title="Pill style">
        <p>Prefer buttons with a more rounded-pill style? Just set the prop <code>pill</code> to true.</p>
    </title-page>
    <card-component>
        <b-button variant="primary"
            class="inverse"
            pill>Button</b-button>
        <b-button variant="danger"
            class="inverse"
            pill>Button</b-button>
        <b-button pill
            variant="outline-secondary">Button</b-button>

        <b-button pill
            variant="outline-danger">Button</b-button>
        <b-button pill
            variant="info">Button</b-button>
        <b-button pill
            variant="primary">Button</b-button>
    </card-component>

    <title-page title="Button sizing">
        <p>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</p>
    </title-page>
    <card-component>
        <b-row>
            <b-col lg="4"
                class="pb-2">
                <b-button size="sm"
                    variant="primary"
                    class="inverse">Small Button</b-button>
            </b-col>
            <b-col lg="4"
                class="pb-2">
                <b-button variant="primary"
                    class="inverse">Default Button</b-button>
            </b-col>
            <b-col lg="4"
                class="pb-2">
                <b-button size="lg"
                    variant="primary"
                    class="inverse">Large Button</b-button>
            </b-col>
        </b-row>
    </card-component>
</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import ButtonIcon from '@/components/Base/Button/ButtonIcon'
import TitleTop from '@/components/Base/Title/TitleTop'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    ButtonIcon,
    TitleTop,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-button',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/button/#component-reference'
    }
  }
}

</script>




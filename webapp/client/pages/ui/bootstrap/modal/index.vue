
<template>
<div>

    <title-page title="Basic Modal">
        Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.
    </title-page>

    <card-component>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <!-- Modal Component -->
        <b-modal id="modal-1"
            title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </card-component>

    <title-page title="Using show(), hide(), and toggle() component methods">
        <p>You can access modal using <code>ref</code> attribute and then call the <code>show()</code>, <code>hide()</code> or <code>toggle()</code>
            methods.</p>
    </title-page>

    <card-component>
        <b-button id="show-btn"
            @click="showModal">Open Modal</b-button>
        <b-button id="toggle-btn"
            @click="toggleModal">Toggle Modal</b-button>

        <b-modal ref="my-modal"
            hide-footer
            title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3"
                variant="outline-danger"
                block
                @click="hideModal">Close Me</b-button>
            <b-button class="mt-2"
                variant="outline-warning"
                block
                @click="toggleModal">Toggle Me</b-button>
        </b-modal>
    </card-component>

    <title-page title="Using v-model property">
        <p><code>v-model</code> property is always automatically synced with <code>&lt;b-modal&gt;</code> visible state and you can
            show/hide using <code>v-model</code>.</p>
    </title-page>

    <card-component>
        <b-button @click="modalShow = !modalShow">Open Modal</b-button>

        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
    </card-component>

    <title-page title="Modal sizing">
        <p>Modals have three optional sizes, available via the prop <code>size</code>. These sizes kick in at certain
            breakpoints to avoid horizontal scrollbars on narrower viewports. Valid optional sizes are <code>sm</code>,
            <code>lg</code>, and <code>xl</code></p>
    </title-page>

    <card-component>
        <b-button v-b-modal.modal-xl
            variant="primary">xl modal</b-button>
        <b-button v-b-modal.modal-lg
            variant="primary">lg modal</b-button>
        <b-button v-b-modal.modal-sm
            variant="primary">sm modal</b-button>

        <b-modal id="modal-xl"
            size="xl"
            title="Extra Large Modal">Hello Extra Large Modal!</b-modal>
        <b-modal id="modal-lg"
            size="lg"
            title="Large Modal">Hello Large Modal!</b-modal>
        <b-modal id="modal-sm"
            size="sm"
            title="Small Modal">Hello Small Modal!</b-modal>
    </card-component>

    <title-page title="Scrolling long content">
        When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
    </title-page>

    <card-component>
        <b-button v-b-modal.modal-tall>Launch overflowing modal</b-button>

        <b-modal id="modal-tall"
            title="Overflowing Content">
            <p class="my-4"
                v-for="i in 20"
                :key="i">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
        </b-modal>
    </card-component>

    <title-page title="Vertically centered modal">
        <p>Vertically center your modal in the viewport by setting the <code>centered</code> prop.</p>
    </title-page>

    <card-component>
        <b-button v-b-modal.modal-center>Launch centered modal</b-button>

        <!-- Modal Component -->
        <b-modal id="modal-center"
            centered
            title="BootstrapVue">
            <p class="my-4">Vertically centered modal!</p>
        </b-modal>
    </card-component>

    <title-page title="Tooltips and popovers">
        Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed. Tooltips and popovers are automatically appended to the modal element (to ensure correct z-indexing), although you can override where they are appended by specifying a container ID (refer to tooltip and popover docs for details).
    </title-page>

    <card-component>
        <b-button v-b-modal.modalPopover>Show Modal</b-button>

        <b-modal id="modalPopover"
            title="Modal with Popover"
            ok-only>
            <p>
                This
                <b-button v-b-popover="'Popover inside a modal!'"
                    title="Popover">Button</b-button>
                triggers a popover on click.
            </p>
            <p>
                This <a href="#"
                    v-b-tooltip
                    title="Tooltip in a modal!">Link</a> will show a tooltip on
                hover.
            </p>
        </b-modal>
    </card-component>

    <title-page title="Variants">
        Customize with Bootstrap state variants.
    </title-page>

    <card-component>

        <div>
            <b-button @click="show=true"
                variant="primary">Show Modal</b-button>

            <b-modal v-model="show"
                title="Modal Variants"
                :header-bg-variant="headerBgVariant"
                :header-text-variant="headerTextVariant"
                :body-bg-variant="bodyBgVariant"
                :body-text-variant="bodyTextVariant"
                :footer-bg-variant="footerBgVariant"
                :footer-text-variant="footerTextVariant">
                <b-container fluid>
                    <b-row class="mb-1 text-center">
                        <b-col cols="3" />
                        <b-col>Background</b-col>
                        <b-col>Text</b-col>
                    </b-row>

                    <b-row class="mb-1">
                        <b-col cols="3">Header</b-col>
                        <b-col>
                            <b-form-select v-model="headerBgVariant"
                                :options="variants" />
                        </b-col>
                        <b-col>
                            <b-form-select v-model="headerTextVariant"
                                :options="variants" />
                        </b-col>
                    </b-row>

                    <b-row class="mb-1">
                        <b-col cols="3">Body</b-col>
                        <b-col>
                            <b-form-select v-model="bodyBgVariant"
                                :options="variants" />
                        </b-col>
                        <b-col>
                            <b-form-select v-model="bodyTextVariant"
                                :options="variants" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="3">Footer</b-col>
                        <b-col>
                            <b-form-select v-model="footerBgVariant"
                                :options="variants" />
                        </b-col>
                        <b-col>
                            <b-form-select v-model="footerTextVariant"
                                :options="variants" />
                        </b-col>
                    </b-row>
                </b-container>

                <div slot="modal-footer"
                    class="w-100">
                    <p class="float-left">Modal Footer Content</p>
                    <b-button variant="primary"
                        size="sm"
                        class="float-right"
                        @click="show=false">
                        Close
                    </b-button>
                </div>
            </b-modal>
        </div>

    </card-component>

    <title-page title="Multiple modal support">
        <p>To disable stacking for a specific modal, just set the prop <code>no-stacking</code> on the <code>&lt;b-modal&gt;</code>
            component. This will hide the modal before another modal is shown.</p>
    </title-page>

    <card-component>
        <b-button v-b-modal.modal-multi-1>Open First Modal</b-button>

        <b-modal id="modal-multi-1"
            size="lg"
            title="First Modal"
            ok-only
            no-stacking>
            <p class="my-2">First Modal</p>
            <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
        </b-modal>

        <b-modal id="modal-multi-2"
            title="Second Modal"
            ok-only>
            <p class="my-2">Second Modal</p>
            <b-button v-b-modal.modal-multi-3
                size="sm">Open Third Modal</b-button>
        </b-modal>

        <b-modal id="modal-multi-3"
            size="sm"
            title="Third Modal"
            ok-only>
            <p class="my-1">Third Modal</p>
        </b-modal>
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
      tag: 'b-modal',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/modal/#component-reference'
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },

    hideModal () {
      this.$refs['my-modal'].hide()
    },

    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }

  },

  data () {
    return {
      modalShow: false,
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark'
    }
  }

}

</script>




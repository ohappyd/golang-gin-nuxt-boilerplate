
<template>
<div>

    <title-page title="Basic Group">
        <p class="bd-lead">The <code>&lt;b-form-group&gt;</code> component is the easiest way to add some structure to forms. Its purpose is
            to pair form controls with a legend or label, and to provide help text and invalid/valid feedback
            text, as well as visual (color) contextual state feedback.</p>
    </title-page>

    <card-component>
        <b-form-group id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state">
            <b-form-input id="input-1"
                v-model="name"
                :state="state"
                trim />
        </b-form-group>
    </card-component>

    <title-page title="Horizontal layout">
        <p>By default, the label appears above the input element(s), but you may optionally render horizontal
            (label to the left of the input) at the various standard Bootstrap breakpoints.</p>
    </title-page>

    <card-component>
        <b-form-group id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-horizontal">
            <b-form-input id="input-horizontal" />
        </b-form-group>
    </card-component>

    <title-page title="Label size">
        <p>You can control the label text size match the size of your form input(s) via the optional
            <code>label-size</code> prop. Values can be <code>'sm'</code> or <code>'lg'</code> for small or large label, respectively. Sizes work
            for both <code>horizontal</code> and non-horizontal form groups.</p>
    </title-page>

    <card-component>
        <b-form-group label-cols="4"
            label-cols-lg="2"
            label-size="sm"
            label="Small"
            label-for="input-sm">
            <b-form-input id="input-sm"
                size="sm" />
        </b-form-group>

        <b-form-group label-cols="4"
            label-cols-lg="2"
            label="Default"
            label-for="input-default">
            <b-form-input id="input-default" />
        </b-form-group>

        <b-form-group label-cols="4"
            label-cols-lg="2"
            label-size="lg"
            label="Large"
            label-for="input-lg">
            <b-form-input id="input-lg"
                size="lg" />
        </b-form-group>
    </card-component>

    <title-page title="Nested form groups">
        <p>Feel free to nest <code>&lt;b-form-group&gt;</code> components to produce advanced form layouts and semantic grouping
            of related form controls:</p>
    </title-page>

    <card-component>
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3"
                label="Shipping Address"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form-group label-cols-sm="3"
                    label="Street:"
                    label-align-sm="right"
                    label-for="nested-street">
                    <b-form-input id="nested-street" />
                </b-form-group>

                <b-form-group label-cols-sm="3"
                    label="City:"
                    label-align-sm="right"
                    label-for="nested-city">
                    <b-form-input id="nested-city" />
                </b-form-group>

                <b-form-group label-cols-sm="3"
                    label="State:"
                    label-align-sm="right"
                    label-for="nested-state">
                    <b-form-input id="nested-state" />
                </b-form-group>

                <b-form-group label-cols-sm="3"
                    label="Country:"
                    label-align-sm="right"
                    label-for="nested-country">
                    <b-form-input id="nested-country" />
                </b-form-group>

                <b-form-group label-cols-sm="3"
                    label="Ship via:"
                    label-align-sm="right"
                    class="mb-0">
                    <b-form-radio-group class="pt-2"
                        :options="['Air', 'Courier', 'Mail']" />
                </b-form-group>
            </b-form-group>
        </b-card>
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
      tag: 'b-form-group',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-group/#component-reference'
    }
  },
  computed: {
    state () {
      return this.name.length >= 4
    },

    invalidFeedback () {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },

    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }

  },

  data () {
    return {
      name: ''
    }
  }

}

</script>




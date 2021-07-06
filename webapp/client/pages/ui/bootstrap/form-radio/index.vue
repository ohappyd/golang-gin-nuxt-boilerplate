
<template>
<div class="section-page">
    <title-page title="Basic Radio Input">
        <p class="bd-lead">For cross browser consistency, <code>&lt;b-form-radio-group&gt;</code> and <code>&lt;b-form-radio&gt;</code> uses Bootstrap's custom
            radio input to replace the browser default radio input. It is built on top of semantic and
            accessible markup, so it is a solid replacement for the default radio input.</p>
    </title-page>

    <card-component>
        <b-form-group label="Individual radios">
            <b-form-radio v-model="selected"
                name="some-radios"
                value="A">Option A</b-form-radio>
            <b-form-radio v-model="selected"
                name="some-radios"
                value="B">Option B</b-form-radio>
        </b-form-group>

        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </card-component>

    <title-page title="Grouped radios">
        <p>The individual radio inputs in <code>&lt;b-form-radio-group&gt;</code> can be specified via the <code>options</code> prop, or
            via manual placement of the <code>&lt;b-form-radio&gt;</code> sub component. When using manually placed
            <code>&lt;b-form-radio&gt;</code> components within a <code>&lt;b-form-radio-group&gt;</code>, they will inherit most props and the
            v-model from the <code>&lt;b-form-radio-group&gt;</code>.</p>
    </title-page>

    <card-component>
        <b-form-group label="Radios using options">
            <b-form-radio-group id="radio-group-1"
                v-model="selected2"
                :options="options2"
                name="radio-options" />
        </b-form-group>

        <b-form-group label="Radios using sub-components">
            <b-form-radio-group id="radio-group-2"
                v-model="selected2"
                name="radio-sub-component">
                <b-form-radio value="first">Toggle this custom radio</b-form-radio>
                <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
                <b-form-radio value="third"
                    disabled>This one is Disabled</b-form-radio>
                <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
            </b-form-radio-group>
        </b-form-group>

        <div class="mt-3">Selected: <strong>{{ selected2 }}</strong></div>
    </card-component>

    <title-page title="Inline or stacked radios">
        <p>By default <code>&lt;b-form-radio-group&gt;</code> generates inline radio inputs, while <code>&lt;b-form-radio&gt;</code> generates
            stacked radios. Set the prop <code>stacked</code> on <code>&lt;b-form-radio-group&gt;</code> to make the radios appear one over
            the other, or when using radios not in a group, set the <code>inline</code> prop on <code>b-form-radio</code> to true to
            render them inline.</p>
    </title-page>

    <card-component>
        <b-form-group label="Inline radios (default)">
            <b-form-radio-group v-model="selected3"
                :options="options3"
                name="radio-inline" />
        </b-form-group>

        <b-form-group label="Stacked radios">
            <b-form-radio-group v-model="selected3"
                :options="options3"
                name="radios-stacked"
                stacked />
        </b-form-group>

        <div class="mt-3">Selected: <strong>{{ selected3 }}</strong></div>
    </card-component>

    <title-page title="Button style radios">
        <p>Render radios with the look of buttons by setting the prop <code>buttons</code> to <code>true</code> on
            <code>&lt;b-form-radio-group&gt;</code>. Set the button variant by setting the <code>button-variant</code> prop to one of the
            standard Bootstrap button variants (see <a href="/docs/components/button"><code>&lt;b-button&gt;</code></a> for supported
            variants). The default <code>button-variant</code> is <code>secondary</code>.</p>
    </title-page>

    <card-component>
        <b-form-group label="Button style radios">
            <b-form-radio-group id="btn-radios-1"
                v-model="selected4"
                :options="options4"
                buttons
                name="radios-btn-default" />
        </b-form-group>

        <b-form-group label="Button style radios with outline-primary variant and size lg">
            <b-form-radio-group id="btn-radios-2"
                v-model="selected4"
                :options="options4"
                buttons
                button-variant="outline-primary"
                size="lg"
                name="radio-btn-outline" />
        </b-form-group>

        <b-form-group label="Stacked button style radios">
            <b-form-radio-group id="btn-radios-3"
                v-model="selected4"
                :options="options4"
                buttons
                stacked
                name="radio-btn-stacked" />
        </b-form-group>
    </card-component>

    <title-page title="Non-custom style radio inputs (plain)">
        <p>You can have <code>&lt;b-form-radio&gt;</code> and <code>&lt;b-form-radio-group&gt;</code> render a browser native-styled radio input
            by setting the <code>plain</code> prop.</p>
    </title-page>

    <card-component>
        <b-form-group label="Plain inline radios">
            <b-form-radio-group v-model="selected5"
                :options="options5"
                plain
                name="plain-inline" />
        </b-form-group>

        <b-form-group label="Plain stacked radios">
            <b-form-radio-group v-model="selected5"
                :options="options5"
                plain
                stacked
                name="plain-stacked" />
        </b-form-group>
    </card-component>

    <title-page title="Contextual state with feedback example">
        <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p>
    </title-page>

    <card-component>
        <b-form-radio-group v-model="value"
            :options="options6"
            :state="state"
            name="radio-validation">
            <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
            <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
        </b-form-radio-group>
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
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-radio/#component-reference'
    }
  },
  computed: {
    state () {
      return Boolean(this.value6)
    }

  },

  data () {
    return {
      selected: '',
      selected3: 'first',
      options3: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }],
      selected2: 'first',
      options2: [{
        text: 'Toggle this custom radio',
        value: 'first'
      }, {
        text: 'Or toggle this other custom radio',
        value: 'second'
      }, {
        text: 'This one is Disabled',
        value: 'third',
        disabled: true
      }, {
        text: 'This is the 4th radio',
        value: {
          fourth: 4
        }
      }],
      selected4: 'radio1',
      options4: [{
        text: 'Radio 1',
        value: 'radio1'
      }, {
        text: 'Radio 3',
        value: 'radio2'
      }, {
        text: 'Radio 3 (disabled)',
        value: 'radio3',
        disabled: true
      }, {
        text: 'Radio 4',
        value: 'radio4'
      }],
      selected5: 'first',
      options5: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }],
      value6: null,
      options6: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }]
    }
  }

}

</script>




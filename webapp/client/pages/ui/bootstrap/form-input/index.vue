
<template>
<div>

    <title-page title="Textual and Value inputs">
        <p class="bd-lead">Create various type inputs such as: <code>text</code>, <code>password</code>, <code>number</code>, <code>url</code>, <code>email</code>, <code>search</code>,
            <code>range</code>, <code>date</code> and more.</p>
    </title-page>

    <card-component>
        <b-form-input v-model="text"
            placeholder="Enter your name" />
        <div class="mt-2">Value: {{ text }}</div>
    </card-component>

    <title-page title="Input type">
        <p><code>&lt;b-form-input&gt;</code> defaults to a <code>text</code> input, but you can set the <code>type</code> prop to one of the supported
            native browser HTML5 types: <code>text</code>, <code>password</code>, <code>email</code>, <code>number</code>, <code>url</code>, <code>tel</code>, <code>search</code>, <code>date</code>,
            <code>datetime</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>range</code>, or <code>color</code>.</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row class="my-1"
                v-for="type in types"
                :key="type">
                <b-col sm="3">
                    <label :for="`type-${type}`">Type {{ type }}:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input :id="`type-${type}`"
                        :type="type" />
                </b-col>
            </b-row>
        </b-container>
    </card-component>

    <title-page title="Range type input">
        <p>Inputs with type <code>range</code> render using Bootstrap V4's <code>.custom-range</code> class. The track (the
            background) and thumb (the value) are both styled to appear the same across browsers.</p>
    </title-page>

    <card-component>
        <label for="range-1">Example range with min and max</label>
        <b-form-input id="range-1"
            v-model="value"
            type="range"
            min="0"
            max="5" />
        <div class="mt-2">Value: {{ value }}</div>
    </card-component>

    <title-page title="Range stepped">
    </title-page>

    <card-component>
        <label for="range-2">Example range with step value</label>
        <b-form-input id="range-2"
            v-model="value"
            type="range"
            min="0"
            max="5"
            step="0.5" />
        <div class="mt-2">Value: {{ value }}</div>
    </card-component>

    <title-page title="Control sizing">
        <p>Set heights using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively.</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="2">
                    <label for="input-small">Small:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input id="input-small"
                        size="sm"
                        placeholder="Enter your name" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="2">
                    <label for="input-default">Default:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input id="input-default"
                        placeholder="Enter your name" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="2">
                    <label for="input-large">Large:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input id="input-large"
                        size="lg"
                        placeholder="Enter your name" />
                </b-col>
            </b-row>
        </b-container>
    </card-component>

    <title-page title="Contextual States">
        <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="3">
                    <label for="input-none">No State:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="input-none"
                        :state="null"
                        placeholder="No validation" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="input-valid">Valid State:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="input-valid"
                        :state="true"
                        placeholder="Valid input" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="input-invalid">Invalid State:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="input-invalid"
                        :state="false"
                        placeholder="Invalid input" />
                </b-col>
            </b-row>
        </b-container>
    </card-component>

    <title-page title="Live Example">
    </title-page>

    <card-component>
        <div role="group">
            <label for="input-live">Name:</label>
            <b-form-input id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your name"
                trim />

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">
                Enter at least 3 letters
            </b-form-invalid-feedback>

            <!-- This is a form text block (formerly known as help block) -->
            <b-form-text id="input-live-help">Your full name.</b-form-text>
        </div>
    </card-component>

    <title-page title="Formatter support">
        <p><code>&lt;b-form-input&gt;</code> and <code>&lt;b-form-textarea&gt;</code> optionally supports formatting by passing a function
            reference to the <code>formatter</code> prop.</p>
    </title-page>

    <card-component>
        <label for="input-formatter">Text input with formatter (on input)</label>
        <b-form-input id="input-formatter"
            v-model="text1"
            :formatter="format"
            placeholder="Enter your name"
            aria-describedby="input-formatter-help" />
        <b-form-text id="input-formatter-help">
            We will convert your name to lowercase instantly
        </b-form-text>
        <div>Value: {{ text1 }}</div>

        <label for="input-lazy">Text input with lazy formatter (on blur)</label>
        <b-form-input id="input-lazy"
            v-model="text2"
            :formatter="format"
            placeholder="Enter your name"
            aria-describedby="input-lazy-help"
            lazy-formatter />
        <b-form-text id="input-lazy-help">This one is a little lazy!</b-form-text>
        <div>Value: {{ text2 }}</div>
    </card-component>

    <title-page title="Datalist support">
        <p>Datalists are a native HTML tag <code>&lt;datalist&gt;</code> that contains a list of <code>&lt;option&gt;</code> tags. By assigning
            an ID to the datalist tag, the list can be references from a text input by adding a <code>list</code>
            attribute.</p>
    </title-page>

    <card-component>
        <b-form-input list="my-list-id" />

        <datalist id="my-list-id">
            <option>Manual Option</option>
            <option v-for="size in sizes">{{ size }}</option>
        </datalist>
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
      tag: 'b-form-input',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-input/#component-reference'
    }
  },
  computed: {
    nameState () {
      return this.name.length > 2
    }

  },
  methods: {
    format (value, event) {
      return value.toLowerCase()
    }

  },

  data () {
    return {
      text1: '',
      text2: '',
      value: '2',
      name: '',
      text: '',
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
      types: ['text', 'password', 'email', 'number', 'url', 'tel', 'date', `time`, 'range', 'color']
    }
  }

}

</script>





<template>
<div class>

    <title-page title="Basic Textarea">
        Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.
    </title-page>

    <card-component>
        <b-form-textarea id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6" />

        <pre class="mt-3 mb-0">{{ text }}</pre>
    </card-component>

    <title-page title="Control sizing">
        <p>Set text height using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively.</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row>
                <b-col sm="2">
                    <label for="textarea-small">Small:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea id="textarea-small"
                        size="sm"
                        placeholder="Small textarea" />
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col sm="2">
                    <label for="textarea-default">Default:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea id="textarea-default"
                        placeholder="Default textarea" />
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col sm="2">
                    <label for="textarea-large">Large:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea id="textarea-large"
                        size="lg"
                        placeholder="Large textarea" />
                </b-col>
            </b-row>
        </b-container>
    </card-component>

    <title-page title="Displayed rows">
        <p>To set the height of <code>&lt;b-form-textarea&gt;</code>, set the <code>rows</code> prop to the desired number of rows. If no
            value is provided to <code>rows</code>, then it will default to <code>2</code> (the browser default and minimum acceptable
            value). Setting it to null or a value below 2 will result in the default of <code>2</code> being used.</p>
    </title-page>

    <card-component>
        <b-form-textarea id="textarea-rows"
            placeholder="Tall textarea"
            rows="8" />
    </card-component>

    <title-page title="Disable resize handle">
        <p>Some web browsers will allow the user to re-size the height of the textarea. To disable this
            feature, set the <code>no-resize</code> prop to <code>true</code>.</p>
    </title-page>

    <card-component>
        <b-form-textarea id="textarea-no-resize"
            placeholder="Fixed height textarea"
            rows="3"
            no-resize />
    </card-component>

    <title-page title="Auto height">
        <p><code>&lt;b-form-textarea&gt;</code> can also automatically adjust its height (text rows) to fit the content, even as
            the user enters or deletes text. The height of the textarea will either grow or shrink to fit the
            content (grow to a maximum of <code>max-rows</code> or shrink to a minimum of <code>rows</code>).</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row>
                <b-col sm="2">
                    <label for="textarea-auto-height">Auto height:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea id="textarea-auto-height"
                        placeholder="Auto height textarea"
                        rows="3"
                        max-rows="8" />
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col sm="2">
                    <label for="textarea-no-auto-shrink">No auto-shrink:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea id="textarea-no-auto-shrink"
                        placeholder="Auto height (no-shrink) textarea"
                        rows="3"
                        max-rows="8"
                        no-auto-shrink />
                </b-col>
            </b-row>
        </b-container>

    </card-component>

    <title-page title="Contextual states">
        <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p>
    </title-page>

    <card-component>
        <b-form-textarea id="textarea-state"
            v-model="text"
            :state="text.length >= 10"
            placeholder="Enter at least 10 characters"
            rows="3" />
    </card-component>

    <title-page title="Readonly plain text">
        <p>If you want to have <code>&lt;b-form-textarea readonly&gt;</code> elements in your form styled as plain text, set the
            <code>plaintext</code> prop (no need to set <code>readonly</code> as it will be set automatically) to remove the default
            form field styling and preserve the correct text size, margin, padding and height.</p>
    </title-page>

    <card-component>
        <b-form-textarea id="textarea-plaintext"
            plaintext
            :value="text2" />
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
      tag: 'b-form-textarea',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-textarea/#component-reference'
    }
  },

  data () {
    return {
      text: '',
      text2: "This is some text.\nIt is read only and doesn't look like an input."
    }
  }

}

</script>




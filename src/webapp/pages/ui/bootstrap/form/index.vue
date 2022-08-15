
<template>
<div class>

    <title-page title="Basic Form">
        <p class="bd-lead">BootstrapVue form component and helper components that optionally support inline form styles and
            validation states. Pair them up with other BootstrapVue form cotrol components for an easy
            customized, and responsive, layout with a consistent look and feel.</p>
    </title-page>

    <card-component>
        <b-form @submit="onSubmit"
            @reset="onReset"
            v-if="show">
            <b-form-group id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else.">
                <b-form-input id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email" />
            </b-form-group>

            <b-form-group id="input-group-2"
                label="Your Name:"
                label-for="input-2">
                <b-form-input id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name" />
            </b-form-group>

            <b-form-group id="input-group-3"
                label="Food:"
                label-for="input-3">
                <b-form-select id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required />
            </b-form-group>

            <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked"
                    id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit"
                variant="primary">Submit</b-button>
            <b-button type="reset"
                variant="secondary">Reset</b-button>
        </b-form>
        <b-card class="mt-3"
            header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </card-component>

    <title-page title="Inline form">
        <p>Use the <code>inline</code> prop on <code>&lt;b-form&gt;</code> to display a series of labels, form controls, and buttons on a
            single horizontal row. Form controls within inline forms vary slightly from their default states.</p>
    </title-page>

    <card-component>
        <b-form inline>
            <label class="sr-only"
                for="inline-form-input-name">Name</label>
            <b-input id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Jane Doe" />

            <label class="sr-only"
                for="inline-form-input-username">Username</label>
            <b-input-group prepend="@"
                class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="inline-form-input-username"
                    placeholder="Username" />
            </b-input-group>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

            <b-button variant="primary">Save</b-button>
        </b-form>
    </card-component>
    <title-page title="Form Text helper">
        <p>Display a block of help text below an input with the <code>&lt;b-form-text&gt;</code> helper component. text is
            displayed with a muted color and slightly smaller font-size.</p>
    </title-page>

    <card-component>
        <b-form @submit.prevent="">
            <label for="text-password">Password</label>
            <b-input type="password"
                id="text-password"
                aria-describedby="password-help-block" />
            <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
            </b-form-text>
        </b-form>
    </card-component>

    <title-page title="Feedback helpers">
        <p>The <code>&lt;b-form-valid-feedback&gt;</code> and <code>&lt;b-form-invalid-feedback&gt;</code> helper components will display
            feedback (based on input state) as a block of colored text. They rely on being placed after an input
            (sibling) and will show based on the browser native validation state of the input. To force them to
            show, set the prop <code>force-show</code> to <code>true</code>, or bind the controls <code>state</code> to the <code>state</code> prop of the
            feedback helper, or set the <code>was-validated</code> class on a parent element (such as a form). See the
            <strong>Validation</strong> section below for additional details.</p>
    </title-page>

    <card-component>
        <b-form @submit.prevent="">
            <label for="feedback-user">User ID</label>
            <b-input v-model="userId"
                :state="validation"
                id="feedback-user" />
            <b-form-invalid-feedback :state="validation">
                Your user ID must be 5-12 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
                Looks Good.
            </b-form-valid-feedback>
        </b-form>
    </card-component>

    <title-page title="Datalist helper">
        <p>For browsers that support
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"><code>&lt;datalist&gt;</code></a> elements, the
            <code>&lt;b-form-datalist&gt;</code> helper component will allow you to quickly create a <code>&lt;datalist&gt;</code> and child
            <code>&lt;option&gt;</code> elements via an array passed to the <code>options</code> prop.</p>
    </title-page>

    <card-component>
        <label for="input-with-list">Input with datalist</label>
        <b-form-input list="input-list"
            id="input-with-list" />
        <b-form-datalist id="input-list"
            :options="options" />
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
      tag: 'b-form',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form/#component-reference'
    }
  },
  computed: {
    validation () {
      return this.userId.length > 4 && this.userId.length < 13
    }

  },

  data () {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      userId: '',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    onReset (evt) {
      evt.preventDefault() // Reset our form values

      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = [] // Trick to reset/clear native browser form validation state

      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  }
}

</script>





<template>
<div class>

    <title-page title="Basic Form Select">
        <p class="bd-lead">Bootstrap custom <code>&lt;select&gt;</code> using custom styles. Optionally specify options based on an array,
            array of objects, or an object.</p>
    </title-page>

    <card-component>
        <b-form-select v-model="selected"
            :options="options" />
        <b-form-select v-model="selected"
            :options="options"
            size="sm"
            class="mt-3" />

        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </card-component>

    <title-page title="Value in single mode">
        <p>In non <code>multiple</code> mode, <code>&lt;b-form-select&gt;</code> returns the a single <code>value</code> of the currently selected
            option.</p>
    </title-page>

    <card-component>
        <b-form-select v-model="selected2"
            :options="options2" />
        <div class="mt-3">Selected: <strong>{{ selected2 }}</strong></div>
    </card-component>

    <title-page title="Select sizing (displayed rows)">
        <p>You can use the <code>select-size</code> prop to switch the custom select into a select list-box, rather than a
            dropdown. Set the <code>select-size</code> prop to a numerical value greater than 1 to control how many rows of
            options are visible.</p>
    </title-page>

    <card-component>
        <b-form-select v-model="selected3"
            :options="options3"
            :select-size="4" />
        <div class="mt-3">Selected: <strong>{{ selected3 }}</strong></div>
    </card-component>

    <title-page title="Value in multiple mode">
        <p>In <code>multiple</code> mode, <code>&lt;b-form-select&gt;</code> always returns an array of option values. You <strong>must</strong> provide
            an array reference as your <code>v-model</code> when in <code>multiple</code> mode.</p>
    </title-page>

    <card-component>
        <b-form-select v-model="selected4"
            :options="options4"
            multiple
            :select-size="4" />
        <div class="mt-3">Selected: <strong>{{ selected4 }}</strong></div>
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
      tag: 'b-form-select',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-select/#component-reference'
    }
  },

  data () {
    return {
      selected: null,
      options: [{
        value: null,
        text: 'Please select an option'
      }, {
        value: 'a',
        text: 'This is First option'
      }, {
        value: 'b',
        text: 'Selected Option'
      }, {
        value: {
          C: '3PO'
        },
        text: 'This is an option with object value'
      }, {
        value: 'd',
        text: 'This one is disabled',
        disabled: true
      }],
      selected2: null,
      options2: [{
        value: null,
        text: 'Please select some item'
      }, {
        value: 'a',
        text: 'This is First option'
      }, {
        value: 'b',
        text: 'Default Selected Option'
      }, {
        value: 'c',
        text: 'This is another option'
      }, {
        value: 'd',
        text: 'This one is disabled',
        disabled: true
      }],
      selected3: null,
      options3: [{
        value: null,
        text: 'Please select some item'
      }, {
        value: 'a',
        text: 'This is option a'
      }, {
        value: 'b',
        text: 'Default Selected Option b'
      }, {
        value: 'c',
        text: 'This is option c'
      }, {
        value: 'd',
        text: 'This one is disabled',
        disabled: true
      }, {
        value: 'e',
        text: 'This is option e'
      }, {
        value: 'e',
        text: 'This is option f'
      }],
      selected4: ['b'],
      // Array reference
      options4: [{
        value: 'a',
        text: 'This is First option'
      }, {
        value: 'b',
        text: 'Default Selected Option'
      }, {
        value: 'c',
        text: 'This is another option'
      }, {
        value: 'd',
        text: 'This one is disabled',
        disabled: true
      }, {
        value: 'e',
        text: 'This is option e'
      }, {
        value: 'f',
        text: 'This is option f'
      }, {
        value: 'g',
        text: 'This is option g'
      }]
    }
  }

}

</script>




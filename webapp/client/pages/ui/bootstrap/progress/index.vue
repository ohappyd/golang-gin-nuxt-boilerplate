
<template>
<div>

    <title-page title="Basic Bar">
        Use our custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.
    </title-page>

    <card-component>
        <div>
            <b-progress :value="counter"
                :max="max"
                show-progress
                animated />
            <b-progress class="mt-2"
                :max="max"
                show-value>
                <b-progress-bar :value="counter*(6/10)"
                    variant="success" />
                <b-progress-bar :value="counter*(2.5/10)"
                    variant="warning" />
                <b-progress-bar :value="counter*(1.5/10)"
                    variant="danger" />
            </b-progress>

            <b-button class="mt-3"
                @click="clicked">Click me</b-button>
        </div>
    </card-component>

    <title-page title="Labels">
        <p>Add labels to your progress bars by either enabling <code>show-progress</code> (percentage of max) or
            <code>show-value</code>for the current absolute value. You may also set the precision (number of digits after
            the decimal) via the <code>precision</code> prop (default is <code>0</code>digits after the decimal).</p>
    </title-page>

    <card-component>
        <h5>No label</h5>
        <b-progress :value="value"
            :max="max"
            class="mb-3" />

        <h5>Value label</h5>
        <b-progress :value="value"
            :max="max"
            show-value
            class="mb-3" />

        <h5>Progress label</h5>
        <b-progress :value="value"
            :max="max"
            show-progress
            class="mb-3" />

        <h5>Value label with precision</h5>
        <b-progress :value="value"
            :max="max"
            :precision="2"
            show-value
            class="mb-3" />

        <h5>Progress label with precision</h5>
        <b-progress :value="value"
            :max="max"
            :precision="2"
            show-progress
            class="mb-3" />
    </card-component>

    <title-page title="Custom progress label">
        <p>Need more control over the label? Provide your own label by using the default slot within a
            <code>&lt;b-progress-bar&gt;</code> sub-component, or by using the <code>label</code> prop on <code>&lt;b-progress-bar&gt;</code> (HTML
            supported):</p>
    </title-page>

    <card-component>
        <h5>Custom Label via Default Slot</h5>
        <b-progress :max="max"
            height="2rem">
            <b-progress-bar :value="value">
                Progress: <strong>{{ value.toFixed(3) }} / {{ max }}</strong>
            </b-progress-bar>
        </b-progress>

        <h5 class="mt-3">Custom Label via Prop</h5>
        <b-progress :max="max">
            <b-progress-bar :value="value"
                :label="`&lt;${value.toFixed(0)}&gt;`" />
        </b-progress>
    </card-component>

    <title-page title="Width and Height">
        <p><code>&lt;b-progress&gt;</code> will always expand to the maximum with of it's parent container. To change the width,
            place <code>&lt;b-progress&gt;</code> in a standard Bootstrap column or apply one of the standard Bootstrap width
            classes.</p>
    </title-page>

    <card-component>
        <h5>Default width</h5>
        <b-progress :value="value"
            class="mb-3" />

        <h5>Custom widths</h5>
        <b-progress :value="value"
            class="w-75 mb-2" />
        <b-progress :value="value"
            class="w-50 mb-2" />
        <b-progress :value="value"
            class="w-25" />
    </card-component>

    <title-page title="Backgrounds">
        <p>Use background variants to change the appearance of individual progress bars. The default variant is
            <code>primary</code>.</p>
    </title-page>

    <card-component>
        <div v-for="bar in bars"
            class="row mb-1">
            <div class="col-sm-2">{{ bar.variant }}:</div>
            <div class="col-sm-10 pt-1">
                <b-progress :value="bar.value"
                    :variant="bar.variant"
                    :key="bar.variant" />
            </div>
        </div>
    </card-component>

    <title-page title="Striped backgrounds">
        <p>Set <code>striped</code> to apply a stripe via CSS gradient over the progress bar’s background variant.</p>
    </title-page>

    <card-component>
        <b-progress :value="25"
            variant="success"
            :striped="striped" />
        <b-progress :value="50"
            variant="info"
            :striped="striped"
            class="mt-2" />
        <b-progress :value="75"
            variant="warning"
            :striped="striped"
            class="mt-2" />
        <b-progress :value="100"
            variant="danger"
            :striped="striped"
            class="mt-2" />

        <b-button variant="secondary"
            @click="striped = !striped"
            class="mt-3">
            {{ striped ? 'Remove' : 'Add' }} Striped
        </b-button>
    </card-component>

    <title-page title="Animated backgrounds">
        <p>The striped gradient can also be animated by setting the <code>animated</code>prop.</p>
    </title-page>

    <card-component>
        <b-progress :value="25"
            variant="success"
            striped
            :animated="animate" />
        <b-progress :value="50"
            variant="info"
            striped
            :animated="animate"
            class="mt-2" />
        <b-progress :value="75"
            variant="warning"
            striped
            :animated="animate"
            class="mt-2" />
        <b-progress :value="100"
            variant="danger"
            :animated="animate"
            class="mt-3" />

        <b-button variant="secondary"
            @click="animate = !animate"
            class="mt-3">
            {{ animate ? 'Stop' : 'Start' }} Animation
        </b-button>
    </card-component>

    <title-page title="Multiple bars">
        <p>Include multiple <code>&lt;b-progress-bar&gt;</code> sub-components in a <code>&lt;b-progress&gt;</code> component to build a
            horizontally stacked set of progress bars.</p>
    </title-page>

    <card-component>
        <b-progress :max="max"
            class="mb-3">
            <b-progress-bar variant="primary"
                :value="values[0]" />
            <b-progress-bar variant="success"
                :value="values[1]" />
            <b-progress-bar variant="info"
                :value="values[2]" />
        </b-progress>

        <b-progress show-progress
            :max="max"
            class="mb-3">
            <b-progress-bar variant="primary"
                :value="values[0]" />
            <b-progress-bar variant="success"
                :value="values[1]" />
            <b-progress-bar variant="info"
                :value="values[2]" />
        </b-progress>

        <b-progress show-value
            striped
            :max="max"
            class="mb-3">
            <b-progress-bar variant="primary"
                :value="values[0]" />
            <b-progress-bar variant="success"
                :value="values[1]" />
            <b-progress-bar variant="info"
                :value="values[2]" />
        </b-progress>

        <b-progress :max="max">
            <b-progress-bar variant="primary"
                :value="values[0]"
                show-progress />
            <b-progress-bar variant="success"
                :value="values[1]"
                animated
                show-progress />
            <b-progress-bar variant="info"
                :value="values[2]"
                striped
                show-progress />
        </b-progress>

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
      tag: 'b-progress',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/progress/#component-reference'
    }
  },

  data () {
    return {
      counter: 45,
      max: 100,
      value: 33.333333333,
      values: [15, 30, 20],
      bars: [{
        variant: 'success',
        value: 75
      }, {
        variant: 'info',
        value: 75
      }, {
        variant: 'warning',
        value: 75
      }, {
        variant: 'danger',
        value: 75
      }, {
        variant: 'primary',
        value: 75
      }, {
        variant: 'secondary',
        value: 75
      }, {
        variant: 'dark',
        value: 75
      }],
      timer: null,
      striped: true,
      animate: true
    }
  },

  mounted () {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => bar.value = 25 + Math.random() * 75)
    }, 2000)
  },

  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },

  methods: {
    clicked () {
      this.counter = Math.random() * this.max
    }

  }
}

</script>




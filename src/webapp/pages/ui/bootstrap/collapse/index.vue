
<template>
<div>
    <title-page title="Basic Example">

        Easily toggle visibility of almost any content on your pages. Includes support for making accordions.
    </title-page>

    <card-component>
        <b-button v-b-toggle.collapse-1
            variant="primary">Toggle Collapse</b-button>
        <b-collapse id="collapse-1"
            class="mt-2">
            <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-button v-b-toggle.collapse-1-inner
                    size="sm">Toggle Inner Collapse</b-button>
                <b-collapse id="collapse-1-inner"
                    class="mt-2">
                    <b-card>Hello!</b-card>
                </b-collapse>
            </b-card>
        </b-collapse>
    </card-component>

    <title-page title="Usage">
        Other elements can easily toggle <code>&lt;b-collapse&gt;</code> components using the <code>v-b-toggle</code> directive.
    </title-page>

    <card-component>
        <!-- Using modifiers -->
        <b-button v-b-toggle.collapse-2
            class="m-1">Toggle Collapse</b-button>

        <!-- Using value -->
        <b-button v-b-toggle="'collapse-2'"
            class="m-1">Toggle Collapse</b-button>

        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
            <b-card>I am collapsible content!</b-card>
        </b-collapse>
    </card-component>

    <title-page title="Initial visibility (start expanded)">
    </title-page>

    <card-component>
        <b-button v-b-toggle.collapse-3
            class="m-1">Toggle Collapse</b-button>
        <b-collapse visible
            id="collapse-3">
            <b-card>I should start open!</b-card>
        </b-collapse>
    </card-component>

    <title-page title="v-model support">
        <p>The component's collapsed (visible) state can also be set with <code>v-model</code> which binds internally to
            the <code>visible</code> prop.</p>
    </title-page>

    <card-component>
        <b-button :class="showCollapse ? 'collapsed' : null"
            :aria-expanded="showCollapse ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="showCollapse = !showCollapse">
            Toggle Collapse
        </b-button>
        <b-collapse id="collapse-4"
            v-model="showCollapse"
            class="mt-2">
            <b-card>I should start open!</b-card>
        </b-collapse>
    </card-component>

    <title-page title="Trigger multiple collapse elements">
        <p>You can even collapse multiple <code>&lt;b-collapse&gt;</code> components via a single <code>v-b-toggle</code> by providing
            multiple target IDs using modifiers:</p>
    </title-page>

    <card-component>
        <!-- Single button triggers two "<b-collapse>" components -->
        <b-button v-b-toggle.collapse-a.collapse-b>Toggle Both Collapse A and B</b-button>

        <!-- Elements to collapse -->
        <b-collapse id="collapse-a"
            class="mt-2">
            <b-card>I am collapsible content A!</b-card>
        </b-collapse>
        <b-collapse id="collapse-b"
            class="mt-2">
            <b-card>I am collapsible content B!</b-card>
        </b-collapse>
    </card-component>

    <title-page title="Accordion Support">
        <p>Turn a group of <code>&lt;b-collapse&gt;</code> components into an accordion by supplying an accordion group
            identifier via the <code>accordion</code> prop:</p>
    </title-page>

    <card-component>
        <div role="tablist">
            <b-card no-body
                class="mb-1">
                <b-card-header header-tag="header"
                    class="p-1"
                    role="tab">
                    <b-button block
                        href="#"
                        v-b-toggle.accordion-1
                        variant="primary">Accordion 1</b-button>
                </b-card-header>
                <b-collapse id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel">
                    <b-card-body>
                        <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                        <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body
                class="mb-1">
                <b-card-header header-tag="header"
                    class="p-1"
                    role="tab">
                    <b-button block
                        href="#"
                        v-b-toggle.accordion-2
                        variant="primary">Accordion 2</b-button>
                </b-card-header>
                <b-collapse id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel">
                    <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body
                class="mb-1">
                <b-card-header header-tag="header"
                    class="p-1"
                    role="tab">
                    <b-button block
                        href="#"
                        v-b-toggle.accordion-3
                        variant="primary">Accordion 3</b-button>
                </b-card-header>
                <b-collapse id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel">
                    <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
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
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-collapse',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/collapse/#component-reference'
    }
  },

  data () {
    return {
      showCollapse: true,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  }

}

</script>




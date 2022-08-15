
<template>
<div>

    <title-page title="Tooltips">
        <p class="bd-lead">Easily add tooltips to elements or components via the <code>&lt;b-tooltip&gt;</code> component or
            <a href="/docs/directives/tooltip"><code>v-b-tooltip</code></a> directive (preferred method).</p>
    </title-page>

    <card-component>
        <b-button v-b-tooltip.hover
            title="Tooltip content">Hover Me</b-button>
    </card-component>

    <title-page title="Component Usage">
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row>
                <b-col md="4"
                    class="py-4">
                    <b-button id="button-1"
                        variant="outline-secondary">Live chat</b-button>
                </b-col>
                <b-col md="4"
                    class="py-4">
                    <b-button id="button-2"
                        variant="outline-secondary">Html chat</b-button>
                </b-col>
                <b-col md="4"
                    class="py-4">
                    <b-button ref="button-3"
                        variant="outline-secondary">Alternative chat</b-button>
                </b-col>
            </b-row>

            <!-- Tooltip title specified via prop title -->
            <b-tooltip target="button-1"
                title="Online!" />

            <!-- HTML title specified via default slot -->
            <b-tooltip target="button-2"
                placement="bottom">
                Hello <strong>World!</strong>
            </b-tooltip>

            <!-- Tooltip for an element identified by ref -->
            <b-tooltip :target="() => $refs['button-3']"
                title="Alternative!" />
        </b-container>
    </card-component>

    <title-page title="Programmatically show and hide tooltip">
        <p>You can manually control the visibility of a tooltip via the syncable Boolean <code>show</code> prop. Setting
            it to <code>true</code> will show the tooltip, while setting it to <code>false</code> will hide the tooltip.</p>
    </title-page>

    <card-component>
        <div class="text-center">
            <div>
                <b-button id="tooltip-button-1"
                    variant="primary">I have a tooltip</b-button>
            </div>

            <div class="mt-3">
                <b-button @click="show = !show">Toggle Tooltip</b-button>
            </div>

            <b-tooltip :show.sync="show"
                target="tooltip-button-1"
                placement="top">
                Hello <strong>World!</strong>
            </b-tooltip>
        </div>
    </card-component>

    <title-page title="Directive Usage">
        <p>The <code>v-b-tooltip</code> directive makes adding tooltips even easier, without additional placeholder
            markup:</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row>
                <b-col md="6"
                    class="py-4">
                    <b-button v-b-tooltip
                        title="Online!"
                        variant="outline-secondary">Live chat</b-button>
                </b-col>

                <b-col md="6"
                    class="py-4">
                    <b-button v-b-tooltip.html
                        title="Hello <strong>World!</strong>"
                        variant="outline-secondary">
                        Html chat
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
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
  data: function () {
    return {
      show: true
    }
  },
  meta: {
    component: {
      tag: 'b-tooltip',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/tooltip/#component-reference'
    }
  }
}

</script>




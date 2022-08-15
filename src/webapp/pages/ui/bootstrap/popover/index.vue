
<template>
<div>

    <title-page title="Popover">
        <p class="bd-lead">The Popover feature, which provides a tooltip-like behavior, can be easily applied to any
            interactive element via the <code>&lt;b-popover&gt;</code> component or <a href="/docs/directives/popover"><code>v-b-popover</code></a>
            directive.</p>
    </title-page>

    <card-component>
        <div class="text-center my-3">
            <b-button v-b-popover.hover="'I am popover content!'"
                title="Popover Title">Hover Me</b-button>
        </div>
    </card-component>

    <title-page title="Component basic usage">
        <p>Twelve options are available for positioning: <code>top</code>, <code>topleft</code>, <code>topright</code>, <code>right</code>, <code>righttop</code>,
            <code>rightbottom</code>, <code>bottom</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>left</code>, <code>lefttop</code>, and <code>leftbottom</code> aligned.
            Positioning is relative to the trigger element.</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <h5 class="my-3">Placement</h5>
            <b-row>
                <b-col v-for="placement in placements"
                    :key="placement"
                    md="4"
                    class="py-4 text-center">
                    <b-button :id="`popover-1-${placement}`"
                        variant="primary">{{ placement }}</b-button>
                    <b-popover :target="`popover-1-${placement}`"
                        :placement="placement"
                        title="Popover!"
                        triggers="hover focus"
                        :content="`Placement ${placement}`" />
                </b-col>
            </b-row>

            <h5 class="my-3">Content via properties or slots</h5>
            <b-row>
                <b-col md="6"
                    class="py-4 text-center">
                    <b-button id="popover-2"
                        variant="primary">Using properties</b-button>
                    <b-popover target="popover-2"
                        title="Prop Examples"
                        triggers="hover focus"
                        content="Embedding content using properties is easy" />
                </b-col>

                <b-col md="6"
                    class="py-4 text-center">
                    <b-button id="popover-3"
                        variant="primary">Using slots</b-button>
                    <b-popover target="popover-3"
                        triggers="hover focus">
                        <template slot="title">Content via Slots</template>
                        Embedding content <span class="text-danger">using slots</span> affords you
                        <em>greater <strong>control.</strong></em> and basic HTML support.
                    </b-popover>
                </b-col>
            </b-row>
        </b-container>
    </card-component>
    <title-page title="Programmatically show and hide popover">
        <p>You can manually control the visibility of a popover via the syncable Boolean <code>show</code> prop. Setting
            it to <code>true</code> will show the popover, while setting it to <code>false</code> will hide the popover.</p>
    </title-page>

    <card-component>
        <div class="d-flex flex-column text-md-center">
            <div class="p-2">
                <b-button id="popover-button-sync"
                    variant="primary">I have a popover</b-button>
            </div>

            <div class="p-2">
                <b-button class="px-1"
                    @click="show = !show">Toggle Popover</b-button>

                <b-popover :show.sync="show"
                    target="popover-button-sync"
                    title="Popover">
                    Hello <strong>World!</strong>
                </b-popover>
            </div>
        </div>
    </card-component>

    <title-page title=" Directive usage">
        <p>Just need quick popovers without too much markup? Use the
            <a href="/docs/directives/popover"><code>v-b-popover</code> directive</a>:</p>
    </title-page>

    <card-component>
        <b-container fluid>
            <b-row class="text-center">
                <b-col md="3"
                    class="py-3">
                    <b-button v-b-popover.hover.top="'Popover!'"
                        variant="primary">Top</b-button>
                </b-col>

                <b-col md="3"
                    class="py-3">
                    <b-button v-b-popover.hover.right="'Popover!'"
                        variant="primary">Right</b-button>
                </b-col>

                <b-col md="3"
                    class="py-3">
                    <b-button v-b-popover.hover.left="'Popover!'"
                        variant="primary">Left</b-button>
                </b-col>

                <b-col md="3"
                    class="py-3">
                    <b-button v-b-popover.hover.bottom="'ToolTip!'"
                        variant="primary">Bottom</b-button>
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
  meta: {
    component: {
      tag: 'b-popover',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/popover/#component-reference'
    }
  },

  data () {
    return {
      show: false,
      placements: ['topright', 'top', 'topleft', 'bottomright', 'bottom', 'bottomleft', 'righttop', 'right', 'lefttop', 'rightbottom', 'left', 'leftbottom']
    }
  }

}

</script>




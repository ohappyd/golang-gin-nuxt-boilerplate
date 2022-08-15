
<template>
<div>

    <title-page title="Basic Example">
        <p class="bd-lead">Quick first, previous, next, last, and page buttons for pagination control of another component
            (such as <code>&lt;b-table&gt;</code> or lists).</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table" />

            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small />
        </div>
    </card-component>

    <title-page title="Button content">
        <p>For a full list of all available slots see the <a href="#comp-ref-b-pagination-slots">Slots</a> section below.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <!-- Use text in props -->
            <b-pagination v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last" />

            <!-- Use emojis in props -->
            <b-pagination v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-text="⏮"
                prev-text="⏪"
                next-text="⏩"
                last-text="⏭"
                class="mt-4" />

            <!-- Use HTML and sub-components in slots -->
            <b-pagination v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                class="mt-4">
                <span class="text-success"
                    slot="first-text">First</span>
                <span class="text-danger"
                    slot="prev-text">Prev</span>
                <span class="text-warning"
                    slot="next-text">Next</span>
                <span class="text-info"
                    slot="last-text">Last</span>
                <div slot="ellipsis-text">
                    <b-spinner small
                        type="grow" />
                    <b-spinner small
                        type="grow" />
                    <b-spinner small
                        type="grow" />
                </div>
                <span slot="page"
                    slot-scope="{ page, active }">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
                </span>
            </b-pagination>
        </div>
    </card-component>

    <title-page title="Button Size">
        <p>Optionally change from the default button size by setting the <code>size</code> prop to either <code>'sm'</code> for
            smaller buttons or <code>'lg'</code> for larger buttons.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <div>
                <h6>Small</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    size="sm" />
            </div>

            <div class="mt-3">
                <h6>Default</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows" />
            </div>

            <div class="mt-3">
                <h6>Large</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    size="lg" />
            </div>
        </div>
    </card-component>

    <title-page title="Alignment">
        <p>By default the pagination component is left aligned. Change the alignment to <code>center</code>, <code>right</code>
            (<code>right</code> is an alias for <code>end</code>), or <code>fill</code> by setting the prop <code>align</code> to the appropriate value.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <div>
                <h6>Left alignment (default)</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows" />
            </div>

            <div class="mt-3">
                <h6 class="text-center">Center alignment</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    align="center" />
            </div>

            <div class="mt-3">
                <h6 class="text-right">Right (end) alignment</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    align="right" />
            </div>

            <div class="mt-3">
                <h6 class="text-center">Fill alignment</h6>
                <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    align="fill" />
            </div>
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
      tag: 'b-pagination',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/pagination/#component-reference'
    }
  },

  data () {
    return {
      perPage: 3,
      currentPage: 1,
      items: [{
        id: 1,
        first_name: 'Fred',
        last_name: 'Flintstone'
      }, {
        id: 2,
        first_name: 'Wilma',
        last_name: 'Flintstone'
      }, {
        id: 3,
        first_name: 'Barney',
        last_name: 'Rubble'
      }, {
        id: 4,
        first_name: 'Betty',
        last_name: 'Rubble'
      }, {
        id: 5,
        first_name: 'Pebbles',
        last_name: 'Flintstone'
      }, {
        id: 6,
        first_name: 'Bamm Bamm',
        last_name: 'Rubble'
      }, {
        id: 7,
        first_name: 'The Great',
        last_name: 'Gazzoo'
      }, {
        id: 8,
        first_name: 'Mr',
        last_name: 'Slate'
      }, {
        id: 9,
        first_name: 'Pearl',
        last_name: 'Slaghoople'
      }]
    }
  },

  computed: {
    rows () {
      return this.items.length
    }

  }
}

</script>




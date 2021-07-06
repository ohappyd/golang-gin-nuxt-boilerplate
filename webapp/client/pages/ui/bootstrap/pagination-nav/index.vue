
<template>
<div>

    <title-page title="Pagination Navigation">
        Quick first, previous, next, last, and page buttons for navigation based pagination, supporting regular links or router links.
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <b-pagination-nav :link-gen="linkGen"
                :number-of-pages="10"
                use-router />
        </div>
    </card-component>

    <title-page title="Page number generation">
        <p>By default, <code>&lt;b-pagination-nav&gt;</code> renders page numbers (1-N) in the page link buttons. You can
            override this behaviour by supplying a function reference to the <code>page-gen</code> property. The function
            reference should accept a single argument which is a page number (1-N). The <code>page-gen</code> function
            should return a string.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <b-pagination-nav :link-gen="linkGen"
                :page-gen="pageGen"
                :number-of-pages="links.length" />
        </div>
    </card-component>

    <title-page title="Providing an array of pages">
        <p>Rather than using <code>number-of-pages</code> to auto generate page links, you can pass an array of links via
            the <code>pages</code> prop. When the <code>pages</code> prop has an array of length <code>1</code> or greater, it will be used to
            generate the page links.</p>
    </title-page>

    <card-component>
        <b-pagination-nav :pages="pages1"
            use-router />
        <b-pagination-nav :pages="pages2"
            use-router />
        <b-pagination-nav :pages="pages3"
            use-router />
    </card-component>

    <title-page title="Button content">
        <p><code>&lt;b-pagination-nav&gt;</code> supports several props/slots that allow you to customize the appearance. All
            <code>*-text</code> props are text-only and strip out HTML but you can use their equally named slot
            counterparts for that.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <!-- Use text in props -->
            <b-pagination-nav number-of-pages="10"
                base-url="#"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last" />

            <!-- Use emojis in props -->
            <b-pagination-nav number-of-pages="10"
                base-url="#"
                first-text="⏮"
                prev-text="⏪"
                next-text="⏩"
                last-text="⏭"
                class="mt-4" />

            <!-- Use HTML and sub-components in slots -->
            <b-pagination-nav number-of-pages="10"
                base-url="#"
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
            </b-pagination-nav>
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
                <b-pagination-nav size="sm"
                    number-of-pages="10"
                    base-url="#" />
            </div>

            <div class="mt-3">
                <h6>Default</h6>
                <b-pagination-nav number-of-pages="10"
                    base-url="#" />
            </div>

            <div class="mt-3">
                <h6>Large</h6>
                <b-pagination-nav size="lg"
                    number-of-pages="10"
                    base-url="#" />
            </div>
        </div>
    </card-component>

    <title-page title="Alignment">
        <p>By default the pagination component is left aligned. Change the alignment to <code>center</code>, <code>right</code>
            (<code>right</code> is an alias for <code>end</code>), or 'fill' by setting the prop <code>align</code> to the appropriate value.</p>
    </title-page>

    <card-component>
        <div class="overflow-auto">
            <div>
                <h6>Left alignment (default)</h6>
                <b-pagination-nav number-of-pages="10"
                    base-url="#" />
            </div>

            <div class="mt-3">
                <h6 class="text-center">Center alignment</h6>
                <b-pagination-nav number-of-pages="10"
                    base-url="#"
                    align="center" />
            </div>

            <div class="mt-3">
                <h6 class="text-right">Right (end) alignment</h6>
                <b-pagination-nav number-of-pages="10"
                    base-url="#"
                    align="right" />
            </div>

            <div class="mt-3">
                <h6 class="text-center">Fill alignment</h6>
                <b-pagination-nav number-of-pages="10"
                    base-url="#"
                    align="fill" />
            </div>
        </div>
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
      tag: 'b-pagination-nav',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/pagination-nav/#component-reference'
    }
  },

  data () {
    return {
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [{
        link: '?page=1',
        text: 'One'
      }, {
        link: '?page=2',
        text: 'Two'
      }, {
        link: '?page=3',
        text: 'Three'
      }],
      // Array of objects with router `to` locations
      pages3: [{
        link: {
          query: {
            page: 1
          }
        },
        text: 'Page 1'
      }, {
        link: {
          query: {
            page: 2
          }
        },
        text: 'Page 2'
      }, {
        link: {
          query: {
            page: 3
          }
        },
        text: 'Page 3'
      }],
      links: ['#foo', '#bar', '#baz', '#faz']
    }
  },

  methods: {
    linkGen (pageNum) {
      return this.links[pageNum - 1]
    },

    pageGen (pageNum) {
      return this.links[pageNum - 1].slice(1)
    }

  }
}

</script>




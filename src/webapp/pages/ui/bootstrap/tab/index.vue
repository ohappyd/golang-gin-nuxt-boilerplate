
<template>
<div>

    <title-page title="Basic Tab">
        <p class="bd-lead">Create a widget of tabbable panes of <em>local content</em>. The tabs component is built upon navs and
            cards internally, and provides full keyboard navigation control of the tabs.</p>
    </title-page>

    <card-component>
        <b-tabs content-class="mt-3">
            <b-tab title="first"
                active>
                <p>I'm the first fading tab</p>
            </b-tab>
            <b-tab title="second">
                <p>I'm the second tab content</p>
            </b-tab>
            <b-tab title="disabled"
                disabled>
                <p>Disabled tab!</p>
            </b-tab>
        </b-tabs>
    </card-component>

    <title-page title="Cards Integration">
        <p>Tabs support integrating with Bootstrap cards. Just add the <code>card</code> property to <code>&lt;b-tabs&gt;</code>. and place
            it inside a <code>&lt;b-card&gt;</code> component. Note that you should add the<code>no-body</code> prop on the <code>&lt;b-card&gt;</code>
            component in order to properly decorate the card header and remove the extra padding introduced by
            <code>card-body</code>.</p>
    </title-page>

    <card-component>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Tab 1"
                    active>
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </card-component>
    <card-component>
        <b-card no-body>
            <b-tabs card>
                <b-tab no-body
                    title="Picture 1">
                    <b-card-img bottom
                        src="https://picsum.photos/600/200/?image=21" />
                    <b-card-footer>Picture 1 footer</b-card-footer>
                </b-tab>

                <b-tab no-body
                    title="Picture 2">
                    <b-card-img bottom
                        src="https://picsum.photos/600/200/?image=25" />
                    <b-card-footer>Picture 2 footer</b-card-footer>
                </b-tab>

                <b-tab no-body
                    title="Picture 3">
                    <b-card-img bottom
                        src="https://picsum.photos/600/200/?image=26" />
                    <b-card-footer>Picture 3 footer</b-card-footer>
                </b-tab>

                <b-tab title="Text">
                    <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
                    <b-card-text>
                        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                        consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
                        consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
                        veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                        esse irure.
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </card-component>

    <title-page title="Pills variant">
        <p>Tabs use the <code>tabs</code> styling by default. Just add <code>pills</code> property to <code>&lt;b-tabs&gt;</code> for the pill style
            variant.</p>
    </title-page>

    <card-component>
        <b-card no-body>
            <b-tabs pills
                card>
                <b-tab title="Tab 1"
                    active>
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </card-component>

    <title-page title="Bottom placement of tab controls">
        <p>Visually move the tab controls to the bottom by setting the prop <code>end</code></p>
    </title-page>

    <card-component>
        <b-card no-body>
            <b-tabs pills
                card
                end>
                <b-tab title="Tab 1"
                    active>
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </card-component>

    <title-page title="Vertical tabs">
        <p>Have the tab controls placed on the lefthand side by setting the <code>vertical</code> prop to <code>true</code>. Vertical
            tabs work with or without <code>card</code> mode enabled.</p>
    </title-page>

    <card-component>
        <b-card no-body>
            <b-tabs pills
                card
                vertical>
                <b-tab title="Tab 1"
                    active>
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
                <b-tab title="Tab 3">
                    <b-card-text>Tab Contents 3</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </card-component>

    <title-page title="Add Tabs without content">
        <p>If you want to add extra tabs that do not have any content, you can put them in <code>tabs</code> slot:</p>
    </title-page>

    <card-component>
        <b-tabs>
            <!-- Add your b-tab components here -->
            <template slot="tabs">
                <b-nav-item href="#"
                    @click="() => {}">Another tab</b-nav-item>
                <li class="nav-item align-self-center">Plain Text</li>
            </template>
        </b-tabs>
    </card-component>

    <title-page title="Add custom content to tab title">
        <p>If you want to add custom content to tab title, like HTML code, icons, or another non-interactive
            Vue component, this possible by using <code>title</code> slot of <code>&lt;b-tab&gt;</code>.</p>
    </title-page>

    <card-component>
        <b-tabs>
            <b-tab active>
                <template slot="title">
                    <b-spinner type="grow"
                        small /> I'm <i>Custom</i> <strong>Title</strong>
                </template>
                <p class="p-3">Tab Contents 1</p>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border"
                        small /> Tab 2
                </template>
                <p class="p-3">Tab Contents 2</p>
            </b-tab>
        </b-tabs>
    </card-component>

    <title-page title="Apply custom classes to the generated nav-tabs or pills">
        <p>The tab selectors are based on Bootstrap V4's <code>nav</code> markup ( i.e.
            <code>ul.nav &gt; li.nav-item &gt; a.nav-link</code>). In some situations, you may want to add classes to the <code>&lt;li&gt;</code>
            (nav-item) and/or the <code>&lt;a&gt;</code> (nav-link) on a per tab basis. To do so, simply supply the classname to
            the <code>title-item-class</code> prop (for the <code>&lt;li&gt;</code> element) or <code>title-link-class</code> prop (for the <code>&lt;a&gt;</code>
            element). Value's can be passed as a string or array of strings.</p>
    </title-page>

    <card-component>
        <div>
            <b-card no-body>
                <b-tabs v-model="tabIndex"
                    card>
                    <b-tab title="Tab 1"
                        :title-link-class="linkClass(0)">Tab Contents 1</b-tab>
                    <b-tab title="Tab 2"
                        :title-link-class="linkClass(1)">Tab Contents 2</b-tab>
                    <b-tab title="Tab 3"
                        :title-link-class="linkClass(2)">Tab Contents 3</b-tab>
                </b-tabs>
            </b-card>
        </div>
    </card-component>

    <title-page title="External controls using v-model">
        <p>Use the <code>&lt;b-tabs&gt;</code> <code>v-model</code> to control which tab is active by setting the <code>v-model</code> to the index
            (zero-based) of the tab to be shown (see example below).</p>
    </title-page>

    <card-component>
        <div>
            <!-- Tabs with card integration -->
            <b-card no-body>
                <b-tabs v-model="tabIndex"
                    small
                    card>
                    <b-tab title="General">I'm the first fading tab</b-tab>
                    <b-tab title="Edit profile">
                        I'm the second tab
                        <b-card>I'm the card in tab</b-card>
                    </b-tab>
                    <b-tab title="Premium Plan"
                        disabled>Sibzamini!</b-tab>
                    <b-tab title="Info">I'm the last tab</b-tab>
                </b-tabs>
            </b-card>

            <!-- Control buttons-->
            <div class="text-center">
                <b-button-group class="mt-2">
                    <b-button @click="tabIndex--">Previous</b-button>
                    <b-button @click="tabIndex++">Next</b-button>
                </b-button-group>

                <div class="text-muted">Current Tab: {{ tabIndex }}</div>
            </div>
        </div>
    </card-component>

    <title-page title="Dynamic Tabs + tabs slot">
        <div />
    </title-page>

    <card-component>
        <b-card no-body>
            <b-tabs card>
                <!-- Render Tabs, supply a unique `key` to each tab -->
                <b-tab v-for="i in tabs"
                    :key="`dyn-tab-${i}`"
                    :title="`Tab ${i}`">
                    Tab Contents {{ i }}
                    <b-button size="sm"
                        variant="danger"
                        class="float-right"
                        @click="() => closeTab(i)">
                        Close tab
                    </b-button>
                </b-tab>

                <!-- New Tab Button (Using tabs slot) -->
                <template slot="tabs">
                    <b-nav-item @click.prevent="newTab"
                        href="#"><b>+</b></b-nav-item>
                </template>

                <!-- Render this if no tabs -->
                <div slot="empty"
                    class="text-center text-muted">
                    There are no open tabs<br>
                    Open a new tab using the <b>+</b> button above.
                    </br></div>
            </b-tabs>
        </b-card>
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
      tag: 'b-tab',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/tabs/#component-reference'
    }
  },

  data () {
    return {
      tabs: [],
      tabCounter: 0,
      tabIndex: 0
    }
  },

  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },

    closeTab (x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },

    newTab () {
      this.tabs.push(this.tabCounter++)
    }

  }
}

</script>





<template>
<div>

    <title-page title="Basic Navbar">
        <p class="bd-lead">The component <code>&lt;b-navbar&gt;</code> is a wrapper that positions branding, navigation, and other elements
            into a concise header. It’s easily extensible and thanks to the <code>&lt;b-collapse&gt;</code> component, it can
            easily integrate responsive behaviors.</p>
    </title-page>

    <card-component>
        <b-navbar toggleable="lg"
            type="dark"
            variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />

            <b-collapse id="nav-collapse"
                is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#"
                        disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm"
                            class="mr-sm-2"
                            placeholder="Search" />
                        <b-button size="sm"
                            class="my-2 my-sm-0"
                            type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang"
                        right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </card-component>

    <title-page title="<b-navbar-brand>">
        <p>The <code>&lt;b-navbar-brand&gt;</code> generates a link if <code>href</code> is provided, or a <code>&lt;router-link&gt;</code> if <code>to</code> is
            provided. If neither is given it renders as a <code>&lt;div&gt;</code> tag. You can override the tag type by setting
            the <code>tag</code> prop to the element you would like rendered:</p>
    </title-page>

    <card-component>
        <b-navbar variant="faded"
            type="light">
            <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
        </b-navbar>
    </card-component>

    <title-page title="<b-nav-text>">
        <p>Navbars may contain bits of text with the help of <code>&lt;b-nav-text&gt;</code>. This component adjusts vertical
            alignment and horizontal spacing for strings of text.</p>
    </title-page>

    <card-component>
        <b-navbar toggleable
            type="light"
            variant="light">
            <b-navbar-toggle target="nav-text-collapse" />

            <b-navbar-brand>BootstrapVue</b-navbar-brand>

            <b-collapse id="nav-text-collapse"
                is-nav>
                <b-navbar-nav>
                    <b-nav-text>Navbar text</b-nav-text>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </card-component>

    <title-page title="<b-nav-item-dropdown>">
        <p>For <code>&lt;b-nav-item-dropdown&gt;</code> usage, see the <a href="/docs/components/dropdown"><code>&lt;b-dropdown&gt;</code></a> docs. Note
            split dropdowns are not supported in <code>&lt;b-navbar&gt;</code> and <code>&lt;b-navbar-nav&gt;</code>.</p>
    </title-page>

    <card-component>
        <b-navbar type="dark"
            variant="dark">
            <b-navbar-nav>
                <b-nav-item href="#">Home</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang"
                    right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="User"
                    right>
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </card-component>

    <title-page title="<b-nav-form>">
        <p>Use <code>&lt;b-nav-form&gt;</code> to place inline form controls into your navbar</p>
    </title-page>

    <card-component>
        <b-navbar type="light"
            variant="light">
            <b-nav-form>
                <b-form-input class="mr-sm-2"
                    placeholder="Search" />
                <b-button variant="outline-success"
                    class="my-2 my-sm-0"
                    type="submit">Search</b-button>
            </b-nav-form>
        </b-navbar>
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
  meta: {
    component: {
      tag: 'b-navbar',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/navbar/#component-reference'
    }
  },
  layout: 'admin'
}

</script>




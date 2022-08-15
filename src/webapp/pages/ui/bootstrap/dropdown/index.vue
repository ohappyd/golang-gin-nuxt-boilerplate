
<template>
<div class>

    <title-page title="Basic Example">

        Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.
    </title-page>

    <card-component>
        <b-dropdown id="dropdown-1"
            text="Dropdown Button"
            class="m-md-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Dropdown button content">
        <p>You can customize the text of the dropdown button by using either the <code>text</code> prop (shown in previous
            examples), or use the <code>button-content</code> slot instead of the <code>text</code> prop. The <code>button-content</code> slot
            allows you to use basic HTML and icons in the button content.</p>
    </title-page>

    <card-component>
        <b-dropdown text="Button text via Prop">
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown>
            <template slot="button-content">
                Custom <strong>Content</strong> with <em>HTML</em> via Slot
            </template>
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Menu left and right alignment">
        <p>The dropdown menu can either be left aligned (default) or right aligned with respect to the button
            above it. To have the dropdown aligned on the right, set the <code>right</code> prop.</p>
    </title-page>

    <card-component>
        <b-dropdown id="dropdown-left"
            text="Left align"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-right"
            right
            text="Right align"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Dropup">
        <p>Turn your dropdown menu into a drop-up menu by setting the <code>dropup</code> prop.</p>
    </title-page>

    <card-component>
        <b-dropdown id="dropdown-dropup"
            dropup
            text="Drop-Up"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Drop right or left">
        <p>Turn your dropdown menu into a drop-right menu by setting the <code>dropright</code> prop. Or, turn it into a
            drop-left menu by setting the <code>dropleft</code> right prop to true.</p>
    </title-page>

    <card-component>
        <b-dropdown id="dropdown-dropright"
            dropright
            text="Drop-Right"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-dropleft"
            dropleft
            text="Drop-Left"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Menu offset">
        <p>Like to move your menu away from the toggle buttons a bit? Then use the <code>offset</code> prop to specify the
            number of pixels to push right (or left when negative) from the toggle button:</p>
    </title-page>

    <card-component>
        <b-dropdown id="dropdown-offset"
            offset="25"
            text="Offset Dropdown"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Dropdown color variants">
        <p>The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by
            setting the prop <code>variant</code> to <code>success</code>, <code>primary</code>, <code>info</code>, <code>danger</code>, <code>link</code>, <code>outline-dark</code>, etc.
            (or custom variants, if defined). The default variant is <code>secondary</code>.</p>
    </title-page>

    <card-component>
        <b-dropdown text="Primary"
            variant="primary"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Success"
            variant="success"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Outline Danger"
            variant="outline-danger"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Split button support">
        <p>The left split button defaults to an element of type <code>&lt;button&gt;</code> (a <code>&lt;b-button&gt;</code> to be exact). To
            convert this button into a link or <code>&lt;router-link&gt;</code>, specify the href via the <code>split-href</code> prop or a
            router link <code>to</code> value via the <code>split-to</code> prop, while maintaining the look of a button.</p>
    </title-page>

    <card-component>
        <b-dropdown split
            text="Split Dropdown"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Split button color variant">
        <p>By default the left split button uses the same <code>variant</code> as the <code>toggle</code> button. You can give the
            split button its own variant via the <code>split-variant</code> prop.</p>
    </title-page>

    <card-component>
        <b-dropdown split
            split-variant="outline-primary"
            variant="primary"
            text="Split Variant Dropdown"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Split button link support">
        <h3 id="split-button-link-support"><span class="bd-content-title">Split button link support<a class="anchorjs-link"
                    href="#split-button-link-support"
                    aria-label="Anchor" /></span></h3>
    </title-page>

    <card-component>
        <b-dropdown split
            split-href="#foo/bar"
            text="Split Link"
            class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </card-component>

    <title-page title="Sizing">
        <p>Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons.</p>
        <p>Set the <code>size</code> prop to either <code>sm</code> for small button(s), or <code>lg</code> for large button(s).</p>
    </title-page>

    <card-component>
        <div>
            <b-dropdown size="lg"
                text="Large"
                class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown size="lg"
                split
                text="Large Split"
                class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
            </b-dropdown>
        </div>
        <div>
            <b-dropdown size="sm"
                text="Small"
                class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown size="sm"
                split
                text="Small Split"
                class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
            </b-dropdown>
        </div>
    </card-component>

    <title-page title="Hidden Caret">
        <p>The dropdown can be created with the toggle's caret visually hidden by setting the <code>no-caret</code> prop
            to <code>true</code>. This is useful when the dropdown is to be displayed as an icon.</p>
    </title-page>

    <card-component>
        <b-dropdown variant="link"
            size="lg"
            no-caret>
            <template slot="button-content">&#x1f50d;<span class="sr-only">Search</span></template>

            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
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
      tag: 'b-dropdown',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/dropdown/#component-reference'
    }
  }
}

</script>




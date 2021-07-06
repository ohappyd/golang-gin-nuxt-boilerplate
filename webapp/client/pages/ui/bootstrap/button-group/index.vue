
<template>
<div class>

    <title-page title="Basic Group">
        Group a series of buttons together on a single line with <code>&lt;b-button-group&gt;</code>.
    </title-page>

    <card-component>
        <div>
            <b-button-group>
                <b-button variant="primary"
                    class="inverse">Button 1</b-button>
                <b-button variant="primary"
                    class="inverse">Button 2</b-button>
                <b-button variant="primary"
                    class="inverse">Button 3</b-button>
            </b-button-group>
        </div>
        <div class="mt-3">
            <b-button-group>
                <b-button class="inverse"
                    variant="danger">Button 1</b-button>
                <b-button class="inverse"
                    variant="danger">Button 2</b-button>
                <b-button class="inverse"
                    variant="danger">Button 3</b-button>
            </b-button-group>
        </div>

        <div class="mt-3">
            <b-button-group>
                <b-button variant="primary">Button 1</b-button>
                <b-button variant="danger">Button 2</b-button>
                <b-button variant="warning">Button 3</b-button>
            </b-button-group>
        </div>
    </card-component>

    <title-page title="Sizing">
        <p>Set the size prop to <code>lg</code> or <code>sm</code> to render larger or smaller, respectively, buttons. There is no
            need to specify the size on the individual buttons.</p>
    </title-page>
    <card-component>
        <div class="mt-3">
            <b-button-group size="sm">
                <b-button class="inverse"
                    variant="primary">Button 1</b-button>
                <b-button class="inverse"
                    variant="primary">Button 2</b-button>
                <b-button class="inverse"
                    variant="primary">Button 3</b-button>
            </b-button-group>
        </div>
        <div class="mt-3">
            <b-button-group>
                <b-button class="inverse"
                    variant="primary">Button 1</b-button>
                <b-button class="inverse"
                    variant="primary">Button 2</b-button>
                <b-button class="inverse"
                    variant="primary">Button 3</b-button>
            </b-button-group>
        </div>

        <div class="mt-3">
            <b-button-group size="lg">
                <b-button class="inverse"
                    variant="primary">Button 1</b-button>
                <b-button class="inverse"
                    variant="primary">Button 2</b-button>
                <b-button class="inverse"
                    variant="primary">Button 3</b-button>
            </b-button-group>
        </div>
    </card-component>

    <title-page title="Vertical variation">

        <p>Make a set of buttons appear vertically stacked rather than horizontally by setting the <code>vertical</code>
            prop. Split button dropdowns are not supported here.</p>
    </title-page>
    <card-component>
        <b-row>
            <b-col>
                <b-button-group vertical>
                    <b-button class="inverse"
                        variant="primary">Top</b-button>
                    <b-button class="inverse"
                        variant="primary">Middle</b-button>
                    <b-button class="inverse"
                        variant="primary">Bottom</b-button>
                </b-button-group>
            </b-col>
            <b-col>
                <b-button-group vertical>
                    <b-button variant="primary">Top</b-button>
                    <b-button variant="primary">Middle</b-button>
                    <b-button variant="primary">Bottom</b-button>
                </b-button-group>
            </b-col>
            <b-col>
                <b-button-group vertical>
                    <b-button variant="theme1">Top</b-button>
                    <b-button variant="theme1">Middle</b-button>
                    <b-button variant="theme1">Bottom</b-button>
                </b-button-group>
            </b-col>

        </b-row>

    </card-component>

    <title-page title="Dropdown menu support">
        <p>Add <code>&lt;b-dropdown&gt;</code> menus directly inside your <code>&lt;b-button-group&gt;</code>. Note
            that split dropdown menus are not supported when prop <code>vertical</code> is set.</p>

    </title-page>
    <card-component>
        <b-button-group>
            <b-button variant="primary">Button</b-button>
            <b-dropdown right
                variant="primary"
                text="Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
            <b-dropdown right
                variant="primary"
                split
                text="Split Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
        </b-button-group>

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
      tag: 'b-button-group',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/button-group/#component-reference'
    }
  }
}

</script>





<template>
<div>

    <title-page title="Basic Group">List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within. They can also be used as navigation via various props.

    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="Active items">
        <p>Set the <code>active</code> prop on a <code>&lt;b-list-group-item&gt;</code> to indicate the current active selection.</p>
    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="Disabled items">
        <p>Set the <code>disabled</code> prop on a <code>&lt;b-list-group-item&gt;</code> to make it appear disabled (also works with
            actionalable items. see below).</p>
    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item disabled>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="Actionable list group items">
        <p>Turn a <code>&lt;b-list-group-item&gt;</code> into an actionable link by specifying either an <code>href</code> prop or
            <a href="/docs/reference/router-links">router-link</a> <code>to</code> prop.</p>
    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#"
                active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar"
                disabled>Disabled link</b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="Contextual variants">
        <p>Use contextual variants to style list items with a stateful background and color, via the <code>variant</code>
            prop.</p>
    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item>Default list group item</b-list-group-item>
            <b-list-group-item variant="primary">Primary list group item</b-list-group-item>
            <b-list-group-item variant="secondary">Secondary list group item</b-list-group-item>
            <b-list-group-item variant="success">Success list group item</b-list-group-item>
            <b-list-group-item variant="danger">Danger list group item</b-list-group-item>
            <b-list-group-item variant="warning">Warning list group item</b-list-group-item>
            <b-list-group-item variant="info">Info list group item</b-list-group-item>
            <b-list-group-item variant="light">Light list group item</b-list-group-item>
            <b-list-group-item variant="dark">Dark list group item</b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="With badges">
        <p>Add badges to any list group item to show unread counts, activity, and
            more with the help of some <a href="http://getbootstrap.com/docs/4.0/utilities/flex/">utility classes</a>.</p>
    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Cras justo odio
                <b-badge variant="primary"
                    pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <b-badge variant="primary"
                    pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Morbi leo risus
                <b-badge variant="primary"
                    pill>1</b-badge>
            </b-list-group-item>
        </b-list-group>
    </card-component>

    <title-page title="List groups inside cards">
        <p>Incorporate list groups into <a href="/docs/components/card">cards</a>. Use the <code>&lt;b-list-group&gt;</code> prop <code>flush</code>
            prop when using cards with <code>no-body</code> to make the sides of the list group flush with the card.</p>
    </title-page>

    <card-component>
        <b-card-group deck>
            <b-card header="<b>Card with list group</b>">
                <b-list-group>
                    <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                    <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                    <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                </b-list-group>

                <p class="card-text mt-2">
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                    consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
                    mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
                </p>
            </b-card>

            <b-card no-body
                header="<b>Card with flush list group</b>">
                <b-list-group flush>
                    <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                    <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                    <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                </b-list-group>

                <b-card-body>
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                    consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
                    mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
                </b-card-body>
            </b-card>
        </b-card-group>
    </card-component>

    <title-page title="Horizontal list groups">
        <p>Set the prop <code>horizontal</code> to <code>true</code> to change the layout of list group items from vertical to
            horizontal across all breakpoints. Alternatively, set <code>horizontal</code> to a responsive breakpoint (<code>sm</code>,
            <code>md</code>, <code>lg</code> or <code>xl</code>) to make a list group horizontal starting at that breakpoint’s min-width.
            Currently horizontal list groups cannot be combined with <code>flush</code> list groups.</p>
    </title-page>

    <card-component>
        <div>
            <b-list-group horizontal>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
            </b-list-group>
        </div>
    </card-component>
    <title-page title="Custom content">
        <p>Add nearly any HTML or component within, even for linked list groups like the one below, with the
            help of <a href="http://getbootstrap.com/docs/4.0/utilities/flex/">flexbox utility classes</a>.</p>

    </title-page>

    <card-component>
        <b-list-group>
            <b-list-group-item href="#"
                active
                class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                </div>

                <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small>Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#"
                class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                </div>

                <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#"
                disabled
                class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Disabled List group item</h5>
                    <small class="text-muted">3 days ago</small>
                </div>

                <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>
        </b-list-group>
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
      tag: 'b-list-group',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/list-group/#component-reference'
    }
  }
}

</script>




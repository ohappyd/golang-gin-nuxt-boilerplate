
<template>
<section>

    <title-page title="Button Toolbar">
        Group a series of buttons together on a single line with <code>&lt;b-button-group&gt;</code>.
    </title-page>

    <div class="section-body">
        <b-button-toolbar key-nav
            aria-label="Toolbar with button groups">
            <b-button-group class="mx-1">
                <b-button>&laquo;</b-button>
                <b-button>&lsaquo;</b-button>
            </b-button-group>
            <b-button-group class="mx-1">
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
                <b-button>Redo</b-button>
            </b-button-group>
            <b-button-group class="mx-1">
                <b-button>&rsaquo;</b-button>
                <b-button>&raquo;</b-button>
            </b-button-group>
        </b-button-toolbar>
    </div>

    <div class="section-body">
        <b-button-toolbar aria-label="Toolbar with button groups and input groups">
            <b-button-group size="sm"
                class="mr-1">
                <b-button>Save</b-button>
                <b-button>Cancel</b-button>
            </b-button-group>
            <b-input-group size="sm"
                prepend="$"
                append=".00">
                <b-form-input value="100"
                    class="text-right" />
            </b-input-group>
        </b-button-toolbar>
    </div>

    <div class="section-body">

        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
            <b-button-group class="mx-1">
                <b-button>New</b-button>
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
            </b-button-group>
            <b-dropdown class="mx-1"
                right
                text="menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
            <b-button-group class="mx-1">
                <b-button>Save</b-button>
                <b-button>Cancel</b-button>
            </b-button-group>
        </b-button-toolbar>

    </div>
</section>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'

export default {
  components: {
    TitlePage
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-button-toolbar',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/button-toolbar/#component-reference'
    }
  }
}

</script>

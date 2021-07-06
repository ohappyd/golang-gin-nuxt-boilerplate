
<template>
<div class>

    <title-page title="Form File Input">

        Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode)
    </title-page>

    <card-component>
        <!-- Styled -->
        <b-form-file v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..." />
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

        <!-- Plain mode -->
        <b-form-file v-model="file2"
            class="mt-3"
            plain />
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
    </card-component>

    <title-page title="Limiting to certain file types">
        <p>You can limit the file types by setting the <code>accept</code> prop to a string containing the allowed file
            type(s). To specify more than one type, separate the values with a comma.</p>
    </title-page>

    <card-component>
        <!-- Accept all image formats by IANA media type wildcard-->
        <b-form-file accept="image/*" />

        <!-- Accept specific image formats by IANA type -->
        <b-form-file accept="image/jpeg, image/png, image/gif" />

        <!-- Accept specific image formats by extension -->
        <b-form-file accept=".jpg, .png, .gif" />
    </card-component>

    <title-page title="File name formatter function">
        <p>Set the prop <code>file-name-formatter</code> to a function that accepts a single argument which is an array of
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/File"><code>File</code></a> objects. The function should return
            a single formatted string (HTML is not supported). The formatter will not be called if no files are
            selected.</p>
    </title-page>

    <card-component>
        <b-form-file multiple
            :file-name-formatter="formatNames" />
    </card-component>

    <title-page title="File name formatting via scoped slot">
        <p>Alternatively, you can use the scoped slot <code>file-name</code> to render the file names. The scoped slot
            will receive the following properties:</p>
    </title-page>

    <card-component>
        <b-form-file multiple>
            <template slot="file-name"
                slot-scope="{ names }">
                <b-badge variant="dark">{{ names[0] }}</b-badge>
                <b-badge v-if="names.length > 1"
                    variant="dark"
                    class="ml-1">
                    + {{ names.length - 1 }} More files
                </b-badge>
            </template>
        </b-form-file>
    </card-component>

    <title-page title="Clearing the file selection">
        <p>With inputs of type file, normally the <code>v-model</code> is uni-directional (meaning you cannot pre-set the
            selected files). However, you can clear the file input's selected files by setting the <code>v-model</code> to
            either <code>null</code>, an empty string, or an empty array).</p>
    </title-page>

    <card-component>
        <b-form-file v-model="file"
            ref="file-input"
            class="mb-2" />

        <b-button @click="clearFiles"
            class="mr-2">Reset via method</b-button>
        <b-button @click="file = null">Reset via v-model</b-button>

        <p class="mt-2">Selected file: <b>{{ file ? file.name : '' }}</b></p>
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
      tag: 'b-form-file',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/form-file/#component-reference'
    }
  },

  data () {
    return {
      file: null,
      file2: null
    }
  },

  methods: {
    clearFiles () {
      this.$refs['file-input'].reset()
    },

    formatNames (files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    }

  }
}

</script>





<template>
<div>
    <title-top title="Upload Plugin"> </title-top>

    <section class="section-page">
        <title-page title="Upload Image">
            Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code class="highlighter-rouge">.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts jQuery plugin</a>.
        </title-page>
        <div class="section-body">
            <div style="display: flex; justify-content: center;">
                <client-only>
                    <vue-upload-multiple-image @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                        @data-change="dataChange"
                        :data-images="images"
                        idUpload="myIdUpload"
                        dragText="Drag Text"
                        browseText="Browse Text"
                        primaryText="	Primary Text"
                        markIsPrimaryText="Set default image"
                        popupText="Description default image"
                        editUpload="myIdEdit" />
                </client-only>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import TitleTop from '@/components/Base/Title/TitleTop'

export default {
  components: {
    TitlePage,
    TitleTop
  },
  layout: 'admin',
  name: 'app',

  data () {
    return {
      images: []
    }
  },

  meta: {
    component: {
      description: 'Multiple file upload component. '
    }
  },
  methods: {
    uploadImageSuccess (formData, index, fileList) {
      // console.log('data', formData, index, fileList) // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },

    beforeRemove (index, done, fileList) {
      var r = confirm('remove image')

      if (r === true) {
        done()
      } else {}
    },

    editImage (formData, index, fileList) {

    },

    dataChange (data) {

    }

  }
}

</script>




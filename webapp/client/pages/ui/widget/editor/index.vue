
<template>
<div>
    <title-top title="HTML Editor"> </title-top>
    <section class="section-page">
        <title-page title="HTML Editor">
            Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code class="highlighter-rouge">.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts jQuery plugin</a>.
        </title-page>
        <div class="section-body">
            <client-only>
                <vue-editor v-model="content" />
            </client-only>
            <div v-html="content" />
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

  data () {
    return {
      content: '<h1>Initial Content</h1>'
    }
  },

  meta: {
    component: {
      description: 'Full HTML content editor. '
    }
  }
}

</script>





<template>
<section-container previousUrl="/admin/doc/client/new-page-route"
    nextUrl="/admin/doc/server/why-feathers">
    <title-page title="Creating new component">
        <div />
    </title-page>

    <div class="section-body">
        <p>
            As with any vue project you can create new components inside path <code>/client/components/ </code>
        </p>

        <p>
            In this project in the root folder of the components: <code>/[project root]/client/components</code>
        </p>
        <p>we have 2 groups in root subfolders, specific components for modules located in the <code>Module</code> folder, and components used as the base, and reusable throughout the project, located in the <code>Base</code> folder

        </p>
        <p>You can follow the organization proposed by us (in the current project) or use your preferred organization.
        </p>

        <pre><code>client/
--| components/
----| Module/
------| Chat/
--------| ChatDetails.vue
----| Base/
------| Card/
--------| CardTitle.vue</code></pre>

        <p>

            This project register globally all components of bootstrap, so just add the tag with the name of the component you want to use and enjoy all the benefits that the integration of Vue with Bootstrap can offer.
        </p>
        <p>
            To check the complete list, and the updated documentation of the available components, you can access the library's official website by clicking here:
            <a target="_blank"
                href="https://bootstrap-vue.js.org/docs/components/
        ">Bootstrap Vue

            </a></p>
        <p>
            This is a simple component that prints the value of a variable within an alert component, provided by Bootstrap Vue:
        </p>
        <pre>
    <code>
&lt;template&gt;
&lt;b-alert&gt;&#123; &#123; greeting &#125; &#125; World!&lt;/b-alert&gt;
&lt;/template&gt;

&lt;script&gt;
module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
&lt;/script&gt;
 </code>
</pre>
    </div>

    <title-page title="Learn More">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <p>
            The more you know about Vue and Bootstrap, the more agile your development will be using our seed project, so we have separated 2 external links that are mandatory to read in order to make progress in your new venture.

        </p>
        <b-btn variant="primary"
            class="inverse"
            href="https://vuejs.org/v2/guide/single-file-components.html"
            target="_blank"> Creating Component File</b-btn>

        <b-btn variant="primary"
            class="inverse ml-2"
            target="_blank"
            href="https://bootstrap-vue.js.org/docs/components/
        ">Bootstrap Vue Components </b-btn>
    </div>

</section-container>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import BottomBar from '@/components/Module/Doc/BottomBar'
import SectionContainer from '@/components/Module/Doc/SectionContainer'

export default {
  components: {
    TitlePage,
    BottomBar,
    SectionContainer
  },
  layout: 'admin',
  meta: {
    page: {
      contentCentered: true
    }
  }
}

</script>

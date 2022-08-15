
<template>
<section-container previousUrl="/admin/doc/basic/getting-started"
    nextUrl="/admin/doc/basic/project-structure">
    <title-page title="Features">
        <div />
    </title-page>
    <div class="section-body">
        <p>We bring together current technologies used by well-established companies in the market, with this solution we tackle the problem on several fronts.

        </p>
        <p>A short list of the main resources contained in this project:</p>
        <ul>
            <li>Modern and clean look</li>
            <li>Search engine friendly</li>
            <li>Hundreds of Reusable Components</li>
            <li>Universal code, rendered in client and/or server ( much more efficient for SEO, loved by search engines )</li>
            <li>Maximum productivity with reactive web and reusable components (using vue)</li>
            <li>Easy custom to your company style (SCSS variables)</li>
            <li>Automatic routes based on file structure</li>
            <li>Enables real-time updates easily. </li>
            <li>Stay in the top of the search engine rankings. HTML rendered on the server</li>
            <li>Perfect for apps like chats, boards and more.</li>
            <li>Use several databases, exchanging only one line of code (thank you feathers.js) :)</li>
            <li>Several modules with real example working (including access to query and database editing)</li>
            <li>Ready and functional authentication example</li>
            <li>Clean, commented and easily customizable codes</li>
            <li>Enterprise Grade Ready</li>
            <li>Migrate to microservices or maintain your legacy by
                connecting to multiple databases. </li>

        </ul>
    </div>

</section-container>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import SectionContainer from '@/components/Module/Doc/SectionContainer'

export default {
  components: {
    TitlePage,
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

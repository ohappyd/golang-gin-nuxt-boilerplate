
<template>
<section-container previousUrl="/admin/doc/server/why-feathers"
    nextUrl="/admin/doc/other/what-is">
    <title-page title="Creating New Service">
        <div />
    </title-page>

    <div class="section-body">
        <p>
            In Feathers any API endpoint is represented as a service, which we already learned about in the basics guide.
            To generate a new service, we can run the following command from the project root using the command line: <p>
            </p>
            <pre><code>feathers generate service
</code></pre>

        </p>
        <p>A series of questions will be asked in order for you to define the basic data of the service.</p>
        <p>First we have to choose what kind of service we'd like to create. You can choose amongst many databases and ORMs but for this guide we will go with the default <a href="https://github.com/louischatriot/nedb"
                target="_blank">NeDB</a>. NeDB is a database that stores its data locally in a file and requires no additional configuration or database server.</p>
        <p>Next, when asked for the name of the service, enter <code>messages</code>. Then keep the default path (<code>/messages</code>) by pressing enter.</p>
        <p>The <em>database connection string</em> can also be answered with the default. (In this case of NeDB, this is the path where it should store its database files.)</p>
    </div>

    <title-page title="The generated files">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <p>As we can see, several files were created:</p>

        <ul>
            <li><code>src/services/messages/messages.service.js</code> - The service setup file which registers the service in a <a href="../basics/generator.html">configure function</a></li>
            <li><code>src/services/messages/messages.hooks.js</code> - A file that returns an <a href="../basics/hooks.html">object with all hooks</a> that should be registered on the service.</li>
            <li><code>src/models/messages.model.js</code> - The model for our messages. Since we are using NeDB, this will simply instantiate the filesystem database.</li>
            <li><code>test/services/messages.test.js</code> - A Mocha test for the service. Initially, it only tests that the service exists.</li>
        </ul>
    </div>

    <title-page title="Learn More">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <p>If you are interested in going deeper into our optional backend, we strongly suggest that you read the official project documentation in the following external link:</p>
        <b-button variant="primary"
            class="inverse"
            target="_blank"
            href="https://docs.feathersjs.com/">Feathers Backend
        </b-button>
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

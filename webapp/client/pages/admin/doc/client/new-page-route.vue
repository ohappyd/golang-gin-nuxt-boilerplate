
<template>
<section-container previousUrl="/admin/doc/basic/project-structure"
    nextUrl="/admin/doc/client/new-component">
    <title-page title="Creating new page">
        <div />
    </title-page>

    <div class="section-body">
        <p>
            It is very simple to create new pages and routes in your project, for this Nuxt.js automatically generates the vue-router configuration based on your file tree of Vue files inside the pages directory. </p>
        <p>
            So by creating only one .vue file, you create the route for browser access, based on the directory of that file.
        </p>
    </div>

    <title-page title="Generating routes">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <p>
            For the correct generation of access routes to your new pages, locate the /client/pages folder inside the root of your project. In this folder create a .vue file following the structure below: </p>
        <p>Create file <code>details.vue</code> inside <code>client/pages/user/</code> folder:</p>
        <pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;h2&gt;</span>User Details<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></pre>

        <p>At the end you must have this file structure:</p>
        <pre><code class="hljs bash">pages/
--| user/
-----| details.vue
</code></pre>

        <p>
            If you are running the project in development mode as taught in the previous session, the project will perform the automatic reload due to the change in the file structure.
            You should be able to access address
            http://localhost:3031<strong>/user/details</strong> and view the contents of the created vue file. Remember that within the pages you can use any vue component available in the project.
        </p>

        <p>
            <div>

                <div class="Alert Alert--grey">

                    <p>To navigate between pages, we recommend to use the <a href="https://nuxtjs.org/api/components-nuxt-link"><code>&lt;nuxt-link&gt;</code></a> component.</p>
                </div>

                <blockquote>
                    <p>Nuxt.js automatically generates the <a href="https://github.com/vuejs/vue-router">vue-router</a> configuration based on your file tree of Vue files inside the <code>pages</code> directory.</p>
                </blockquote>

                <p>will automatically generate:</p>
                <pre><code class="hljs js">router: {
  <span>routes</span>: [
    {
      <span>name</span>: <span class="hljs-string">'user'</span>,
      <span>path</span>: <span class="hljs-string">'/user/details'</span>,
      <span>component</span>: <span class="hljs-string">'pages/user/details.vue'</span>
    }
  ]
}</code></pre>
                <p>Read more about pages in the official documentation of Nuxt.</p>

            </div>

            <title-page title="Dynamic Routes">
                <div>
                </div>
            </title-page>
            <div class="section-body">

                <p>To define a dynamic route with a parameter, you need to define a .vue file OR a directory <strong>prefixed by an underscore</strong>.</p>

                <p>This file tree:</p>
                <pre><code class="hljs bash">pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue</code></pre>
                <p>will automatically generate:</p>
                <pre><code class="hljs js">router: {
  <span>routes</span>: [
    {
      <span>name</span>: <span class="hljs-string">'index'</span>,
      <span>path</span>: <span class="hljs-string">'/'</span>,
      <span>component</span>: <span class="hljs-string">'pages/index.vue'</span>
    },
    {
      <span>name</span>: <span class="hljs-string">'users-id'</span>,
      <span>path</span>: <span class="hljs-string">'/users/:id?'</span>,
      <span>component</span>: <span class="hljs-string">'pages/users/_id.vue'</span>
    },
    {
      <span>name</span>: <span class="hljs-string">'slug'</span>,
      <span>path</span>: <span class="hljs-string">'/:slug'</span>,
      <span>component</span>: <span class="hljs-string">'pages/_slug/index.vue'</span>
    },
    {
      <span>name</span>: <span class="hljs-string">'slug-comments'</span>,
      <span>path</span>: <span class="hljs-string">'/:slug/comments'</span>,
      <span>component</span>: <span class="hljs-string">'pages/_slug/comments.vue'</span>
    }
  ]
}</code></pre>
                <p>As you can see the route named <code>users-id</code> has the path <code>:id?</code> which makes it optional, if you want to make it required, create an <code>index.vue</code> file in the <code>users/_id</code> directory instead.</p>
            </div>

            <title-page title="Validate Route Params">
                <div>
                </div>
            </title-page>
            <div class="section-body">

                <p>Nuxt.js lets you define a validator method inside your dynamic route component.</p>
                <p>In this example: <code>pages/users/_id.vue</code></p>
                <pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  validate ({ params }) {
    <span class="hljs-comment">// Must be a number</span>
    <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^\d+$/</span>.test(params.id)
  }
}</code></pre>
                <p>If the validate method does not return <code>true</code> or a <code>Promise</code> that resolve to <code>true</code>, or throws an Error, Nuxt.js will automatically load the 404 error page or 500 error page in case of an error.</p>
                <p>More information about the validate method: <a href="https://nuxtjs.org/api/pages-validate">API Pages validate</a></p>
                <h2 id="nested-routes"><a class="anchor"
                        aria-hidden="true"
                        href="#nested-routes">
                    </a>Nested Routes</h2>
                <p>Nuxt.js lets you create nested route by using the children routes of vue-router.</p>
                <p>To define the parent component of a nested route, you need to create a Vue file with the <strong>same name as the directory</strong> which contain your children views.</p>
                <div class="Alert Alert--orange">

                    <p><b>Warning:</b> don't forget to include <code>&lt;nuxt-child/&gt;</code> inside the parent component (<code>.vue</code> file).</p>
                </div>

                <p>This file tree:</p>
                <pre><code class="hljs bash">pages/
--| users/
-----| _id.vue
--| users.vue</code></pre>
                <p>will automatically generate:</p>
                <pre><code class="hljs js">router: {
  <span>routes</span>: [
    {
      <span>path</span>: <span class="hljs-string">'/users'</span>,
      <span>component</span>: <span class="hljs-string">'pages/users.vue'</span>,
      <span>children</span>: [
        {
          <span>path</span>: <span class="hljs-string">''</span>,
          <span>component</span>: <span class="hljs-string">'pages/users/index.vue'</span>,
          <span>name</span>: <span class="hljs-string">'users'</span>
        },
        {
          <span>path</span>: <span class="hljs-string">':id'</span>,
          <span>component</span>: <span class="hljs-string">'pages/users/_id.vue'</span>,
          <span>name</span>: <span class="hljs-string">'users-id'</span>
        }
      ]
    }
  ]
}</code></pre>

            </div>

            <title-page title="Dynamic Nested Routes">
                <div>
                </div>
            </title-page>
            <div class="section-body">

                <h2 id="dynamic-nested-routes"><a class="anchor"
                        aria-hidden="true"
                        href="#dynamic-nested-routes">

                    </a></h2>
                <p>This scenario should not often happen, but it is possible with Nuxt.js: having dynamic children inside dynamic parents.</p>
                <p>This file tree:</p>
                <pre><code class="hljs bash">pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue</code></pre>
                <p>will automatically generate:</p>
                <pre><code class="hljs js">router: {
  <span>routes</span>: [
    {
      <span>path</span>: <span class="hljs-string">'/'</span>,
      <span>component</span>: <span class="hljs-string">'pages/index.vue'</span>,
      <span>name</span>: <span class="hljs-string">'index'</span>
    },
    {
      <span>path</span>: <span class="hljs-string">'/:category'</span>,
      <span>component</span>: <span class="hljs-string">'pages/_category.vue'</span>,
      <span>children</span>: [
        {
          <span>path</span>: <span class="hljs-string">''</span>,
          <span>component</span>: <span class="hljs-string">'pages/_category/index.vue'</span>,
          <span>name</span>: <span class="hljs-string">'category'</span>
        },
        {
          <span>path</span>: <span class="hljs-string">':subCategory'</span>,
          <span>component</span>: <span class="hljs-string">'pages/_category/_subCategory.vue'</span>,
          <span>children</span>: [
            {
              <span>path</span>: <span class="hljs-string">''</span>,
              <span>component</span>: <span class="hljs-string">'pages/_category/_subCategory/index.vue'</span>,
              <span>name</span>: <span class="hljs-string">'category-subCategory'</span>
            },
            {
              <span>path</span>: <span class="hljs-string">':id'</span>,
              <span>component</span>: <span class="hljs-string">'pages/_category/_subCategory/_id.vue'</span>,
              <span>name</span>: <span class="hljs-string">'category-subCategory-id'</span>
            }
          ]
        }
      ]
    }
  ]
}</code></pre>
            </div>

            <title-page title="Middleware">
                <div>
                </div>
            </title-page>
            <div class="section-body">

                <blockquote>
                    <p>Middleware lets you define custom functions that can be run before rendering either a page or a group of pages.</p>
                </blockquote>
                <p><strong>Every middleware should be placed in the <code>middleware/</code> directory.</strong> The filename will be the name of the middleware (<code>middleware/auth.js</code> will be the <code>auth</code> middleware).</p>
                <p>A middleware receives <a href="https://nuxtjs.org/api/context">the context</a> as first argument:</p>
                <pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">context</span>) </span>{
  context.userAgent = process.server ? context.req.headers[<span class="hljs-string">'user-agent'</span>] : navigator.userAgent
}</code></pre>
                <p>In universal mode, middlewares will be called server-side once (on the first request to the Nuxt app or when page refreshes) and client-side when navigating to further routes. In SPA mode, middlewares will be called client-side on the first request and when navigating to further routes. </p>
                <p>The middleware will be executed in series in this order:</p>
                <ol>
                    <li><code>nuxt.config.js</code> (in the order within the file)</li>
                    <li>Matched layouts</li>
                    <li>Matched pages</li>
                </ol>
                <p>A middleware can be asynchronous. To do this, simply return a <code>Promise</code> or use the 2nd <code>callback</code> argument:</p>
                <p><code>middleware/stats.js</code></p>
                <pre><code class="hljs js"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">'axios'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">{ route }</span>) </span>{
  <span class="hljs-keyword">return</span> axios.post(<span class="hljs-string">'http://my-stats-api.com'</span>, {
    <span>url</span>: route.fullPath
  })
}</code></pre>
                <p>Then, in your <code>nuxt.config.js</code>, use the <code>router.middleware</code> key:</p>
                <p><code>nuxt.config.js</code></p>
                <pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span>router</span>: {
    <span>middleware</span>: <span class="hljs-string">'stats'</span>
  }
}</code></pre>
                <p>Now the <code>stats</code> middleware will be called for every route change.</p>
                <p>You can add your middleware to a specific layout or page as well:</p>
                <p><code>pages/index.vue</code> or <code>layouts/default.vue</code></p>
                <pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span>middleware</span>: <span class="hljs-string">'stats'</span>
}</code></pre>
            </div>

        </p>
    </div>

    <title-page title="Learn More">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <b-button variant="primary"
            class="inverse"
            target="_blank"
            href="https://nuxtjs.org/guide/routing"> Learn More: Auto Routing w/ Nuxt
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

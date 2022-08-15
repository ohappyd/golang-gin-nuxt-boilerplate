
<template>
<section-container previousUrl="/admin/doc/server/new-micro-service"
    nextUrl="/admin/doc/other/libraries">
    <title-page title="Why?">
        <div />
    </title-page>

    <div class="section-body">

        <p class="graf graf--p graf-after--h4">A universal application is about preloading your application on a web server and sending rendered HTML as the response to the browser for every route in your app in order to improve SEO, make loading happen faster, along with <a href="https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b?source=user_profile---------3----------------"
                data-href="https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b?source=user_profile---------3----------------"
                class="markup--anchor markup--p-anchor"
                rel="noreferrer nofollow noopener"
                target="_blank">many other benefits</a>.</p>

    </div>

    <title-page title="What is Nuxt.js">
        <div />
    </title-page>
    <div class="section-body">
        <p class="graf graf--p graf-after--h3">Nuxt.js is a higher-level framework that builds <em class="markup--em markup--p-em">on top</em> of Vue. It simplifies the development of universal or single page Vue apps.</p>

        <p class="graf graf--p graf-after--p">Nuxt.js abstracts away the details of server and client code distribution so you can focus on application development. The goal with Nuxt is for it to be flexible enough for you to use as a main project base. Because most of what Nuxt does happens during the development phase, you get a lot of features with only a few extra kilobytes added to your JavaScript files.</p>
    </div>

    <title-page title="Nuxt.js helps you write universal apps more simply">
        <div />
    </title-page>
    <div class="section-body">
        <p class="graf graf--p graf-after--h4">Building universal applications can be tedious because you have to do a lot of configuration on both the server side and client side.</p>
        <p class="graf graf--p graf-after--p">This is the problem Nuxt.js aims to solve for Vue applications. Nuxt.js makes it simple to share code between the client and the server so you can focus on your application’s logic.</p>
        <p class="graf graf--p graf-after--p">Nuxt.js gives you <a href="https://nuxtjs.org/api/context/"
                data-href="https://nuxtjs.org/api/context/"
                class="markup--anchor markup--p-anchor"
                rel="noreferrer nofollow noopener nofollow noopener"
                target="_blank">access to properties</a> like <code class="markup--code markup--p-code">isServer</code> and <code class="markup--code markup--p-code">isClient</code> on your components so you can easily decide if you’re rendering something on the client or on the server. There’s also special components like the <code class="markup--code markup--p-code">no-ssr</code> <a href="https://nuxtjs.org/api/components-no-ssr/"
                data-href="https://nuxtjs.org/api/components-no-ssr/"
                class="markup--anchor markup--p-anchor"
                rel="noreferrer nofollow noopener nofollow noopener"
                target="_blank">component</a> which is used to purposely prevent the component from rendering on the server side.</p>
        <p class="graf graf--p graf-after--p">Lastly, Nuxt gives you access to an <a href="https://nuxtjs.org/api/"
                data-href="https://nuxtjs.org/api/"
                class="markup--anchor markup--p-anchor"
                rel="noreferrer nofollow noopener nofollow noopener"
                target="_blank">asyncData method</a> inside of your components you can use to fetch data and render it on the server side.</p>
        <p class="graf graf--p graf-after--p">That’s the tip of the iceberg of how Nuxt helps you with creating universal applications. <a href="https://nuxtjs.org/guide"
                data-href="https://nuxtjs.org/guide"
                class="markup--anchor markup--p-anchor"
                rel="noreferrer nofollow noopener nofollow noopener"
                target="_blank">Click here</a> to learn more about what Nuxt offers for rendering Universal applications.</p>
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

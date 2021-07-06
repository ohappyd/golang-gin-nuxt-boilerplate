
<template>
<section-container previousUrl="/admin/doc/client/new-component"
    nextUrl="/admin/doc/server/new-micro-service">
    <title-page title="Why Feathers?">
        <div />
    </title-page>

    <div class="section-body">
        <p>
            This development kit can be used with any server technology, however, to make your life easier, we have embarked on our server framework solution that can enhance your entire development cycle.
        </p>
        <p>
            Feathers provides a lot of the things that you need for building modern web and mobile applications. Here are some of the things that you get out of the box with Feathers. All of them are optional so you can choose exactly what you need. No more, no less. We like to think of Feathers as a "batteries included but easily swappable" framework. <p>

            </p>
        </p>
    </div>

    <title-page title="Feathers Features">
        <div>
        </div>
    </title-page>
    <div class="section-body">
        <div class="col col-12 col-8-tablet center-element">

            <ul class="ig-list">
                <li>
                    <div>Instant REST APIs</div>
                    <div>Feathers automatically provides REST APIs for all your services. This industry best practice makes it easy
                        for mobile applications, a web front-end and other developers to communicate with your application.</div>
                </li>
                <li>
                    <div>Unparalleled Database Support</div>
                    <div>With Feathers service adapters you can connect to all of the most popular databases, and query them with a
                        unified interface no matter which one you use. This makes it easy to swap databases and use entirely different
                        DBs in the same app without changing your application code.</div>
                </li>
                <li>
                    <div>Real Time</div>
                    <div>Feathers services can notify clients when something has been created, updated or removed. To get even better
                        performance, you can communicate with your services through websockets, by sending and receiving data directly.</div>
                </li>
                <li>
                    <div>Cross-Cutting Concerns</div>
                    <div>Using "hooks" you have an extremely flexible way to share common functionality or <a href="https://en.wikipedia.org/wiki/Cross-cutting_concern"
                            target="_blank">concerns</a>. Keeping with the Unix philosophy, these hooks are small functions that do one
                        thing and are easily tested but can be chained to create complex processes.</div>
                </li>
                <li>
                    <div>Universal Usage</div>
                    <div>Services and hooks are a powerful and flexible way to build full stack applications. In addition to the server,
                        these constructs also work incredibly well on the client. That's why Feathers works the same in NodeJS, the
                        browser and React Native.
                    </div>
                </li>
                <li>
                    <div>Authentication</div>
                    <div>Almost every app needs authentication so Feathers comes with support for email/password, OAuth and Token (JWT)
                        authentication out of the box.</div>
                </li>
                <li>
                    <div>Pagination</div>
                    <div>Today's applications are very data rich so most of the time you cannot load all the data for a resource all
                        at once. Therefore, Feathers gives you pagination for every service from the start.</div>
                </li>
                <li>
                    <div>Error Handling</div>
                    <div>Feathers removes the pain of defining errors and handling them. Feathers services automatically return appropriate
                        errors, including validation errors, and return them to the client in an easily consumable format.</div>
                </li>
            </ul>

        </div>
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


<template>
<div class>

    <title-page title="Basic Example">
        The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
    </title-page>

    <card-component>
        <b-card>
            <b-media>
                <b-img slot="aside"
                    blank
                    blank-color="#ccc"
                    width="64"
                    alt="placeholder" />

                <h5 class="mt-0">Media Title</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>

                <b-media>
                    <b-img slot="aside"
                        blank
                        blank-color="#ccc"
                        width="64"
                        alt="placeholder" />

                    <h5 class="mt-0">Nested Media</h5>
                    <p class="mb-0">
                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                    </p>
                </b-media>
            </b-media>
        </b-card>
    </card-component>

    <title-page title="No Body ">
        Media with sub-components
    </title-page>

    <card-component>
        <b-card>
            <b-media no-body>
                <b-media-aside vertical-align="center">
                    <b-img blank
                        blank-color="#ccc"
                        width="128"
                        height="256"
                        alt="placeholder" />
                </b-media-aside>

                <b-media-body class="ml-3">
                    <h5 class="mt-0">Media Title</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <p class="mb-0">
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <b-media>
                        <b-img slot="aside"
                            blank
                            blank-color="#ccc"
                            width="64"
                            alt="placeholder" />
                        <h5 class="mt-0">Nested Media</h5>
                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                    </b-media>
                </b-media-body>
            </b-media>
        </b-card>
    </card-component>

    <title-page title="Order">
        <p>Change the order of content in media objects by adding <code>right-align</code> property.</p>

    </title-page>

    <card-component>

        <b-media right-align
            vertical-align="center">
            <b-img slot="aside"
                blank
                blank-color="#ccc"
                width="80"
                alt="placeholder" />

            <h5 class="mt-0 mb-1">Media object</h5>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
        </b-media>
    </card-component>

    <title-page title="Media list">
        <p>Because the media object has so few structural requirements, you can also use these component as
            list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the class <code>list-unstyled</code> to remove any browser
            default list styles, and then use the <code>&lt;b-media&gt;</code> component with <code>tag</code> prop set to <code>li</code>. As always,
            use spacing utilities wherever needed to fine tune.</p>
    </title-page>

    <card-component>
        <ul class="list-unstyled">
            <b-media tag="li">
                <b-img slot="aside"
                    blank
                    blank-color="#abc"
                    width="64"
                    alt="placeholder" />

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </b-media>

            <b-media tag="li"
                class="my-4">
                <b-img slot="aside"
                    blank
                    blank-color="#cba"
                    width="64"
                    alt="placeholder" />

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </b-media>

            <b-media tag="li">
                <b-img slot="aside"
                    blank
                    blank-color="#bac"
                    width="64"
                    alt="placeholder" />

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </b-media>
        </ul>
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
      tag: 'b-media',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/media/#component-reference'
    }
  }
}

</script>




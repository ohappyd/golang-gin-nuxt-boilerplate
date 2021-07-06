
<template>
<div>

    <div class>

        <title-page title="Basic Card">
            A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
        </title-page>

        <div class="section-body">
            <b-card title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#"
                    variant="primary">Go somewhere</b-button>
            </b-card>
        </div>

        <title-page title="Card Body">
            <p>The building block of a <code>&lt;b-card&gt;</code> is the <code>&lt;b-card-body&gt;</code> section which provides a padded section
                within a card.</p>
            <p>By default the <code>&lt;b-card&gt;</code> content is automatically placed in a <code>&lt;b-card-body&gt;</code> section:</p>
        </title-page>

        <div class="section-body">
            <b-card class="text-center">
                <div class="bg-secondary text-light">
                    This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
                    <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
                    gray <samp>&lt;div&gt;</samp>.
                </div>
            </b-card>
        </div>

        <title-page title="Titles, text, and links">
            <p><em>Card titles</em> are adding via the <code>title</code> prop, and <em>sub titles</em> are added via the <code>sub-title</code> prop.
                The title is rendered using the sub-component <code>&lt;b-card-title&gt;</code> while the Sub Title is rendered using
                the sub-component <code>&lt;b-card-sub-title&gt;</code>.</p>
            <p>With sub-component <code>&lt;b-card-text&gt;</code>, paragraph text can be added to the card. The last
                <code>&lt;b-card-text&gt;</code> in the card body will have it's bottom margin automatically removed (via CSS). Text
                within <code>&lt;b-card-text&gt;</code> can also be styled with the standard HTML tags.</p>
        </title-page>

        <div class="section-body">
            <b-card title="Card title"
                sub-title="Card subtitle">
                <b-card-text>
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                </b-card-text>

                <b-card-text>A second paragraph of text in the card.</b-card-text>

                <a href="#"
                    class="card-link">Card link</a>
                <b-link href="#"
                    class="card-link">Another link</b-link>
            </b-card>
        </div>

        <title-page title="Images">
            <p>The <code>&lt;b-card&gt;</code> prop <code>img-src</code> places an image on the top of the card, and use the <code>img-alt</code> prop to
                specify a string to be placed in the image's <code>alt</code> attribute. The image specified by the <code>img-src</code>
                prop will be responsive and will adjust it's width when the width of the card is changed.</p>
        </title-page>

        <div class="section-body">
            <div>
                <h4>Top and Bottom</h4>
                <b-card-group deck>
                    <b-card img-src="https://placekitten.com/1000/300"
                        img-alt="Card image"
                        img-top>
                        <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                        </b-card-text>
                    </b-card>

                    <b-card img-src="https://placekitten.com/1000/300"
                        img-alt="Card image"
                        img-bottom>
                        <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </div>
            <div class="mt-4">
                <h4>Left and Right (or Start and End)</h4>
                <b-card img-src="https://placekitten.com/300/300"
                    img-alt="Card image"
                    img-left
                    class="mb-3">
                    <b-card-text>
                        Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card img-src="https://placekitten.com/300/300"
                    img-alt="Card image"
                    img-right>
                    <b-card-text>
                        Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>
            </div>
        </div>

        <title-page title="Overlay image">
            <p>Place the image in the background of the card by setting the boolean prop <code>overlay</code>:</p>
        </title-page>

        <div class="section-body">
            <b-card overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                title="Image Overlay"
                sub-title="Subtitle">
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>

        <title-page title="Kitchen sink Example">
            <p>Mix and match multiple content types to create the card you need, or throw everything in there.
                Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width
                card.</p>
        </title-page>

        <div class="section-body">
            <b-card no-body
                style="max-width: 20rem;"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top>
                <h4 slot="header">Hello World</h4>

                <b-card-body>
                    <b-card-title>Card Title</b-card-title>
                    <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </b-card-text>
                </b-card-body>

                <b-list-group flush>
                    <b-list-group-item>Cras justo odio</b-list-group-item>
                    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                    <b-list-group-item>Vestibulum at eros</b-list-group-item>
                </b-list-group>

                <b-card-body>
                    <a href="#"
                        class="card-link">Card link</a>
                    <a href="#"
                        class="card-link">Another link</a>
                </b-card-body>

                <b-card-footer>This is a footer</b-card-footer>

                <b-card-img src="https://placekitten.com/480/210"
                    alt="Image"
                    bottom />
            </b-card>
        </div>

        <title-page title="Horizontal card layout">
            <p>Using a combination of grid components, utility classes and individual card sub-components, cards
                can be made horizontal in a mobile-friendly and responsive way.</p>
            <p>In the example below, we remove the row grid gutters with the <code>no-gutters</code> prop on <code>&lt;b-row&gt;</code> and use
                <code>md</code> props on <code>&lt;b-col&gt;</code> to make the card horizontal at the <code>md</code> breakpoint. Class <code>rounded-0</code>
                removes the rounding of the <code>&lt;b-card-img&gt;</code> corners while class <code>overflow-hidden</code> on <code>&lt;b-card&gt;</code> will
                appropriately clip the image's corners based on the border-radius of the card. Further adjustments
                may be needed depending on your card content.</p>
        </title-page>

        <div class="section-body">
            <b-card no-body
                class="overflow-hidden"
                style="max-width: 540px;">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20"
                            class="rounded-0" />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>
                                This is a wider card with supporting text as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>

        <title-page title="Text variants">
            <p>By default, cards use dark text and assume a light background. You can reverse that by toggling the
                color of text within, as well as that of the card's sub-components, via the prop <code>text-variant</code>.
                Then, specify a dark background variant.</p>
        </title-page>

        <div class="section-body">
            <b-card bg-variant="dark"
                text-variant="white"
                title="Card Title">
                <b-card-text>
                    With supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-button href="#"
                    variant="primary">Go somewhere</b-button>
            </b-card>
        </div>

        <title-page title="Background and Border variants">
            <p>Cards include their own variant style for quickly changing the background-color and of a card via
                the <code>bg-variant</code> and <code>border-variant</code> props. Darker solid variants my require setting the prop
                <code>text-variant</code> to adjust the text color.</p>
        </title-page>

        <div class="section-body">
            <b-card-group deck>
                <b-card bg-variant="primary"
                    text-variant="white"
                    header="Primary"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card bg-variant="secondary"
                    text-variant="white"
                    header="Secondary"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card bg-variant="success"
                    text-variant="white"
                    header="Success"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck>
                <b-card bg-variant="info"
                    text-variant="white"
                    header="Info"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card bg-variant="warning"
                    text-variant="white"
                    header="Warning"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card bg-variant="danger"
                    text-variant="white"
                    header="Danger"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck>
                <b-card bg-variant="light"
                    header="Light"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card bg-variant="dark"
                    header="Dark"
                    text-variant="white"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card header="Default"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>

        <title-page title="Bordered">
            <div />
        </title-page>

        <div class="section-body">
            <b-card-group deck>
                <b-card border-variant="primary"
                    header="Primary"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card border-variant="secondary"
                    header="Secondary"
                    header-border-variant="secondary"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card border-variant="success"
                    header="Success"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck>
                <b-card border-variant="info"
                    header="Info"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card border-variant="warning"
                    header="Warning"
                    header-bg-variant="transparent"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card border-variant="danger"
                    header="Danger"
                    header-border-variant="danger"
                    header-text-variant="danger"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck
                class="mb-3">
                <b-card border-variant="light"
                    header="Light"
                    class="text-center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>

                <b-card border-variant="dark"
                    header="Dark"
                    align="center">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
            </b-card-group>
        </div>

        <title-page title="Card deck groups">
            <p>Use card groups to render cards as a single, attached element with equal width and height columns.
                Card groups use display: flex; to achieve their uniform sizing.</p>
        </title-page>

        <div class="section-body">
            <b-card-group deck>
                <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>

                <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>

                <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>
            </b-card-group>
        </div>

        <title-page title="Card column groups">
            <p>Cards can be organized into Masonry-like columns with by wrapping them in a <code>&lt;b-card-group&gt;</code> with
                the prop <code>columns</code> set. Cards are built with CSS column properties instead of flexbox for easier
                alignment. Cards are ordered from top to bottom and left to right.</p>
        </title-page>

        <div class="section-body">
            <b-card-group columns>
                <b-card title="Card title that wraps to a new line"
                    img-src="https://placekitten.com/g/400/450"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                </b-card>

                <b-card header="Quote">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </b-card>

                <b-card title="Title"
                    img-src="https://placekitten.com/500/350"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                </b-card>

                <b-card bg-variant="primary"
                    text-variant="white">
                    <blockquote class="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>
                            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                        </footer>
                    </blockquote>
                </b-card>

                <b-card>
                    <b-card-title>Title</b-card-title>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                </b-card>

                <b-card img-src="https://picsum.photos/400/400/?image=41"
                    img-alt="Image"
                    overlay />

                <b-card img-src="https://picsum.photos/400/200/?image=41"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Footer Text</small></div>
                </b-card>
            </b-card-group>
        </div>

        <title-page title="Default card group">
            <p>Use card groups to render cards as a single, attached element with equal width and height columns.
                Card groups use display: flex; to achieve their uniform sizing.</p>
        </title-page>

        <div class="section-body">
            <b-card-group>
                <b-card title="Title"
                    img-src="https://placekitten.com/g/300/450"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>

                <b-card title="Title"
                    img-src="https://placekitten.com/g/300/450"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>

                <b-card title="Title"
                    img-src="https://placekitten.com/g/300/450"
                    img-alt="Image"
                    img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-card>
            </b-card-group>
        </div>

        <title-page title="Header and Footer variants">
        </title-page>

        <div class="section-body">
            <b-card header="Card Header"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="dark"
                footer="Card Footer"
                footer-tag="footer"
                footer-bg-variant="success"
                footer-border-variant="dark"
                title="Title"
                style="max-width: 20rem;">
                <b-card-text>Header and footers variants.</b-card-text>
            </b-card>
        </div>

    </div>
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
  meta: {
    component: {
      tag: 'b-card',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/card/#component-reference'
    }
  }
}

</script>




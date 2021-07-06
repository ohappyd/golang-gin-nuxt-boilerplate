
<template>
<div class>

    <title-page title="Basic Carousel">

        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
    </title-page>

    <card-component>
        <b-carousel id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52" />

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <img slot="img"
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot">
                </img></b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image"
                img-blank
                img-alt="Blank image">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
            </b-carousel-slide>
        </b-carousel>

        <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
            </br></p>
    </card-component>

    <title-page title="Crossfade animation">
        <p>Set the <code>&lt;b-carousel&gt;</code> <code>fade</code> prop to <code>true</code> to animate slides with a fade transition instead of the
            default slide animation.</p>
    </title-page>

    <card-component>
        <b-carousel id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480">
            <b-carousel-slide caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10" />
            <b-carousel-slide caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12" />
            <b-carousel-slide caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22" />
        </b-carousel>
    </card-component>

    <title-page title="Disable animation">
        <p>Set the <code>&lt;b-carousel&gt;</code> <code>no-animation</code> prop to <code>true</code> to disable slide animation.</p>
    </title-page>

    <card-component>
        <b-carousel id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            indicators
            img-width="1024"
            img-height="480">
            <b-carousel-slide caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10" />
            <b-carousel-slide caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12" />
            <b-carousel-slide caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22" />
            <b-carousel-slide caption="Fourth Slide"
                img-src="https://picsum.photos/1024/480/?image=23" />
        </b-carousel>
    </card-component>

</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import TitleTop from '@/components/Base/Title/TitleTop'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    TitleTop,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-carousel',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/carousel/#component-reference'
    }
  },

  data () {
    return {
      slide: 0,
      sliding: null
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },

    onSlideEnd (slide) {
      this.sliding = false
    }

  }
}

</script>




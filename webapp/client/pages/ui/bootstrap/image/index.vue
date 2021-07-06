
<template>
<div class>

    <title-page title="Basic Image">
        <p>BootstrapVue's image components support rounded images, thumbnail styling, alignment, and even the
            ability to create blank images with an optional solid background color. Support for lazy loaded
            images is available via the <code>&lt;b-img-lazy&gt;</code> complimentary component.</p>
    </title-page>

    <title-page title="Responsive images">
        <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p>
    </title-page>

    <card-component>
        <b-img src="https://picsum.photos/1024/400/?image=41"
            fluid
            alt="Responsive image" />

    </card-component>

    <title-page title="">
        <p>To make a fluid image that will grow to fill the width of it's container, use the <code>fluid-grow</code> prop.
            Note this may cause blurring on small bitmap images.</p>
    </title-page>

    <card-component>
        <h5>Small image with <code>fluid</code>:</h5>
        <b-img src="https://picsum.photos/300/150/?image=41"
            fluid
            alt="Fluid image" />

        <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
        <b-img src="https://picsum.photos/300/150/?image=41"
            fluid-grow
            alt="Fluid-grow image" />
    </card-component>

    <title-page title="Image thumbnails">
        <p>You can use prop <code>thumbnail</code> to give an image a rounded light border appearance.</p>
    </title-page>

    <card-component>

        <b-container fluid
            class="p-4 bg-dark">
            <b-row>
                <b-col>
                    <b-img thumbnail
                        fluid
                        src="https://picsum.photos/250/250/?image=54"
                        alt="Image 1" />
                </b-col>
                <b-col>
                    <b-img thumbnail
                        fluid
                        src="https://picsum.photos/250/250/?image=58"
                        alt="Image 2" />
                </b-col>
                <b-col>
                    <b-img thumbnail
                        fluid
                        src="https://picsum.photos/250/250/?image=59"
                        alt="Image 3" />
                </b-col>
            </b-row>
        </b-container>
    </card-component>

    <title-page title="Rounded corners">

        <p>You can control which corners are rounded by setting the rounded prop to one of the following
            values:</p>
        <ul>
            <li><code>true</code> (or prop present with no value): round all corners</li>
            <li><code>false</code> (or prop not present): no explicit rounding or corners (default)</li>
            <li><code>'top'</code>: round the top corners</li>
            <li><code>'right'</code>: round the right corners</li>
            <li><code>'bottom'</code>: round the bottom corners</li>
            <li><code>'left'</code>: round the left corners</li>
            <li><code>'circle'</code>: make a circle (if square image) or oval (if not square) border</li>
            <li><code>'0'</code>: explicitly turn off rounding of corners</li>
        </ul>
    </title-page>

    <card-component>
        <b-img v-bind="mainProps"
            rounded
            alt="Rounded image" />
        <b-img v-bind="mainProps"
            rounded="top"
            alt="Top-rounded image" />
        <b-img v-bind="mainProps"
            rounded="right"
            alt="Right-rounded image" />
        <b-img v-bind="mainProps"
            rounded="bottom"
            alt="Bottom-rounded image" />
        <b-img v-bind="mainProps"
            rounded="left"
            alt="Left-rounded image" />
        <b-img v-bind="mainProps"
            rounded="circle"
            alt="Circle image" />
        <b-img v-bind="mainProps"
            rounded="0"
            alt="Not rounded image" />
    </card-component>

    <title-page title="Aligning images">
        <p>Align images with the boolean props <code>left</code> (floats left) <code>right</code>(floats right), and <code>center</code> (auto
            left+right margins). You can also center images by placing them in a container that has the class
            <code>text-center</code>.</p>
    </title-page>

    <card-component>
        <div class="clearfix">
            <b-img left
                src="https://picsum.photos/125/125/?image=58"
                alt="Left image" />
            <b-img right
                src="https://picsum.photos/125/125/?image=58"
                alt="Right image" />
        </div>
    </card-component>

    <title-page title="Blank (or solid color) Images">
        <p><code>&lt;b-img&gt;</code> provides built-in support for generating blank images (transparent by default) of any
            width and height, by setting the <code>blank</code> prop, and specifying <code>width</code> and <code>height</code> values (in
            pixels). You can apply any of the other <code>&lt;b-img&gt;</code> props to change the style/behavior of the
            generated image.</p>
    </title-page>

    <card-component>
        <b-img v-bind="mainProps"
            alt="Transparent image" />
        <b-img v-bind="mainProps"
            blank-color="#777"
            alt="HEX shorthand color image (#777)" />
        <b-img v-bind="mainProps"
            blank-color="red"
            alt="Named color image (red)" />
        <b-img v-bind="mainProps"
            blank-color="black"
            alt="Named color image (black)" />
        <b-img v-bind="mainProps"
            blank-color="#338833"
            alt="HEX color image" />
        <b-img v-bind="mainProps"
            blank-color="rgba(128, 255, 255, 0.5)"
            alt="RGBa color image" />
        <b-img v-bind="mainProps"
            blank-color="#88f"
            alt="HEX shorthand color (#88f)" />
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
      tag: 'b-img',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/image/#component-reference'
    }
  },

  data () {
    return {
      mainProps2: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5'
      },
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1'
      }
    }
  },

  methods: {
    getImageUrl (imageId) {
      const {
        width,
        height
      } = this.mainProps
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`
    }

  }
}

</script>




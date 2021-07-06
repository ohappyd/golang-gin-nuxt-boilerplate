
<template>
<b-card overlay
    no-body
    text-variant="white"
    class="h-100 mb-0  bg-theme1inv">
    <b-card-body class="p-0">
        <b-carousel id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            :indicators="false"
            class="h-100"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide v-for="(post, index) in posts"
                :key="index"
                :img-src="post.img"
                class="ig-p-1">
                <h4 style="padding-left: 15%;padding-right: 15%">{{post.title}} </h4>
                <div class="bottom-caption mt-auto w-100 d-sm-flex justify-content-between align-items-center text-16">
                    <b-container>
                        <b-row>
                            <b-col class="item-container ig-p-3">

                                <svg-icon icon="thunder"
                                    :width="iconSize"
                                    :height="iconSize"
                                    class="mr-3"> </svg-icon>
                                <a href
                                    class="container-info ">

                                    <span class="text-value">

                                        {{post.likes}}</span>
                                    <div>Likes </div>
                                </a>

                            </b-col>
                            <b-col class="item-container ig-p-3">

                                <svg-icon icon="pen"
                                    :width="iconSize"
                                    :height="iconSize"
                                    class="mr-3"> </svg-icon>
                                <a href
                                    class="container-info">

                                    <span class="text-value">

                                        {{post.comments}}</span>
                                    <div>Comments
                                    </div>
                                </a>

                            </b-col>
                            <b-col class="item-container ig-p-3">

                                <svg-icon icon="share"
                                    :width="iconSize"
                                    :height="iconSize"
                                    class="mr-3"> </svg-icon>
                                <a href
                                    class="container-info ">
                                    <span class="text-value">

                                        {{post.repost}}</span>
                                    <div>Reposts
                                    </div>
                                </a>

                            </b-col>

                        </b-row>

                    </b-container>
                </div>

            </b-carousel-slide>

        </b-carousel>

    </b-card-body>
</b-card>
</template>
<script>
import faker from 'faker'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Show hot posts from blog, you can easily change this component to get data from any database.
See modules: Calendar, chat or todo to REAL working examples.
*/
export default {
  components: {
    SvgIcon
  },

  data () {
    const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'

    faker.seed(3)
    return {
      iconSize: '30px',
      posts: [{
        title: sentence, // faker.hacker.phrase(),
        img: '/img/social3.jpg', // 'https://picsum.photos/1024/480/?image=52',
        likes: 20,
        date: '17/03',
        repost: 33,
        comments: 137,
        by: faker.name.findName()
      }, {
        title: sentence,
        img: '/img/social4.jpg',
        likes: 20,
        date: '19/03',
        repost: 25,
        comments: 460,
        by: faker.name.findName()
      }, {
        title: sentence,
        img: '/img/social5.jpg',
        likes: 20,
        date: '16/03',
        repost: 19,
        comments: 99,
        by: faker.name.findName()
      }],
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


<style lang="scss" scoped>
/deep/ .carousel-caption {
  position: absolute;
  right: 0%;
  left: 0%;
  top: 33%;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  flex-direction: column;
  text-shadow: none;
}

/deep/ .item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  border-left: 1px solid var(--theme1-mixed);
  &:first-child {
    border-left: 0;
  }
}

/deep/ .container-info {
  text-align: left;
  display: block;
  font-size: 14px;
  line-height: 15px;
  color: var(--theme1-mixed-1);
}

/deep/ .text-value {
  font-size: 18px;
  line-height: 14px;
  font-weight: 500;
  color: var(--theme1);
}

/deep/ .bottom-caption {
  color: var(--theme1);
  background: var(--theme1inv);
}

/deep/ .carousel-inner,
.carousel-item {
  height: 100%;
}

/deep/ .carousel-item {
  width: 100%; /* or whatever is required */
  text-align: center; /* ensures the image is always in the h-middle */
  overflow: hidden; /* hide the cropped portion */
}

/deep/ img {
  position: absolute; /* allows repositioning */
  min-height: 400px;
  opacity: 0.7;
}

/deep/ .carousel-control-prev,
/deep/ .carousel-control-next {
  z-index: 10;
}
.card-body {
  min-height: 300px;
}

</style>



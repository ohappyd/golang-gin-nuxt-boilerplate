
<template>
  <b-card overlay
    no-body
    text-variant="white"
    style2="max-height:500px"
    class="h-100 mb-0">
    <b-card-body class="p-0">
        <b-carousel id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            :indicators="false"
            class="h-100"
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->

            <b-carousel-slide v-for="post in posts"
                :img-src="post.img"
                style>
                <h4 style="padding-left: 15%;padding-right: 15%">{{post.title}} </h4>
                <div class="bottom-caption mt-auto w-100 d-sm-flex justify-content-between align-items-center text-16">
                    <span class="d-block text-white mr-2">{{post.date}}</span>
                    <a href
                        class="d-block text-white mr-4"><i class="fa fa-heart-o mr-2" /> {{post.likes}} Likes</a>
                    <a href
                        class="d-block text-white"><i class="fa fa-comment-o mr-2" /> {{post.comments}} Comments</a>
                    <span>By: <a href
                            class="text-white">{{post.by}}</a></span>
                </div>

            </b-carousel-slide>

        </b-carousel>

    </b-card-body>
</b-card>
</template>
<script>
import faker from 'faker'

export default {
  data () {
    return {
      posts: [
        {
          title: faker.hacker.phrase(),
          img: 'https://picsum.photos/1024/480/?image=52',
          likes: 20,
          date: 'Mar 25,2019',
          comments: 137,
          by: faker.name.findName()
        },
        {
          title: faker.hacker.phrase(),
          img: 'https://picsum.photos/1024/480/?image=54',
          likes: 20,
          date: 'Mar 19,2019',
          comments: 460,
          by: faker.name.findName()
        },
        {
          title: faker.hacker.phrase(),
          img: 'https://picsum.photos/1024/480/?image=58',
          likes: 20,
          date: 'Mar 16,2019',
          comments: 99,
          by: faker.name.findName()
        }
      ],
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
  top: 50%;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  flex-direction: column;
}

/deep/ .bottom-caption {
  border-top: 1px solid #ffffff80;
  padding: 30px;
}

/deep/ .container {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
}

.container img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>

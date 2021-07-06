
<template>
<!-- Masthead -->
<header class="masthead"
    id="page-top">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-left pb-5">
            <div class="col-lg-8 align-self-end text-center">
                <h2>IGNITY ADMIN - VUE UI KIT </h2>
                <animated-word-change v-if="false"
                    :textRotate="['UI KIT', 'ADMIN', 'SERVER']"
                    class="animated-container text-uppercase text-white font-weight-bold">
                    <span class="opacity-10">IGNITY THEME + </span></animated-word-change>
                <hr class="divider my-4">
                </hr>
            </div>
            <div class="col-lg-8 align-self-baseline text-center">
                <p class="text-theme1 mixed-1 font-weight-bold mb-5">
                    This theme and starter kit will give you access in a few moments, a fully functional, modularized panel, where you can start your development from scratch or reuse part of your legacy.
                </p>
                <b-carousel id="carousel-fade"
                    style="margin-bottom: -100px;"
                    fade
                    indicators
                    img-width="100%">
                    <b-carousel-slide class="shadow"
                        img-src="/img/screen/1.png" />
                    <b-carousel-slide class="shadow"
                        img-src="/img/screen/3.png" />
                    <b-carousel-slide class="shadow"
                        img-src="/img/screen/black.png" />
                </b-carousel>

            </div>
        </div>
    </div>
</header>
</template>
<script>
import AnimatedWordChange from '@/components/Module/Frontend/AnimatedWordChange'

export default {
  components: {
    AnimatedWordChange
  }
}

</script>


<style lang="scss" scoped>
$navbar-height: 72px;
$dark: #000000;
$shadowColor: #a2a2a2;
$opacity: 0.5;

@import "~@@/client/styles/helpers/_bs-breakpoint-mixin.scss";

/deep/ .carousel-indicators {
  bottom: -50px;
  justify-content: center;
  margin-left: 2%;
  margin-right: 2%;
}
/deep/ .carousel-item > img {
  border-radius: 8px;
}

/deep/ .carousel-indicators li {
  background-color: var(--theme1);
  width: 15px;
  height: 15px;
  border: 1px solid var(--theme1-mixed);
  border-radius: 25%;
}

/deep/ .carousel {
}

.btn-main {
  margin-top: -200px;
  position: relative;
  z-index: 1;
}

// Styling for the masthead

.animated-container {
  margin-left: 13%;
}

.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - #{$navbar-height});
  margin-bottom: 0px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  h1 {
    font-size: 2.25rem;
  }
  @include media-breakpoint-up(lg) {
    height: 100vh;
    min-height: 40rem;
    padding-top: $navbar-height;
    padding-bottom: 0;
    p {
      font-size: 1.15rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
  @include media-breakpoint-up(xl) {
    h1 {
      font-size: 3.5rem;
    }
  }
}

@keyframes animatedBackground {
  from {
    background-position: center;
  }
  to {
    background-position: top;
  }
}

</style>

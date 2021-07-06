
<template>
<section class="h-100 page-compare page-menu text-primary"
    id="about"
    style="min-height: 120vh;">
    <div class="container h-100">
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <section-title title="Dark or Light Skins"
                    subTitle="For Your Needs"> </section-title>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-lg-12 text-center">

                <client-only>
                    <image-compare :before="before"
                        :after="after">
                        <i class="la la-angle-left"
                            aria-hidden="true"
                            slot="icon-left" />
                        <i class="la la-angle-right text-dark"
                            aria-hidden="true"
                            slot="icon-right" />
                    </image-compare>
                </client-only>

            </div>

        </div>
    </div>
</section>
</template>
<script>
import SectionTitle from '@/components/Module/Frontend/SectionTitle'

export default {
  components: {
    SectionTitle
  },

  data () {
    return {
      before: '/img/screen/white.png',
      after: '/img/screen/black.png'
    }
  }

}

</script>


<style lang="scss">
.image-compare {
  img {
    border-radius: 8px;
  }

  .image-compare-wrapper {
    border-radius: 8px;

    img {
      border-radius: 8px;
    }
  }
}

</style>

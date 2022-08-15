
<template>
<section class="
                 h-100
                 page-section
                 page-compare
                 page-menu
                 bg-primary
                 inverse
                 text-primary
                 ig-rounded"
    id="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

                <section-title title="Light or Dark"
                    subTitle=" Night or light mode on skins variants."> </section-title>

            </div>
            <div class="col-lg-12 text-center">

                <client-only>
                    <image-compare :before="before"
                        :after="after">
                        <i v-show="false"
                            class="la la-angle-left"
                            aria-hidden="true"
                            slot="icon-left" />
                        <i v-show="false"
                            class="la la-angle-right text-dark"
                            aria-hidden="true"
                            slot="icon-right" />
                    </image-compare>
                </client-only>

                <b-btn class="mt-3"
                    size="lg"
                    variant="dark"> Dark Mode</b-btn>
                <b-btn class="mt-3"
                    size="lg"
                    variant="outline-theme1"> Light Mode</b-btn>
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


<style lang="scss" scoped>
/deep/ .image-compare {
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



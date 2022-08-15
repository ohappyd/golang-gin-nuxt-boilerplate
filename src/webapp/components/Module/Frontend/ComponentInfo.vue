
<template>
<section class="page-menu"
    id="components"
    tyle="min-height: 100vh;">

    <div class="container">

        <div class="row">
            <div class="col-lg-6 text-center">
                <section-title title="Components"
                    subTitle="Hundreds of Ready Components"
                    hasDivider> </section-title>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 text-center">

                <div class="img-container">
                    <img src="/img/screen/component/1.png"
                        class="img-fluid shadow-1 img-component " />
                    <img src="/img/screen/component/2.png"
                        class="img-fluid img-special shadow-1 position-absolute img-component" />
                    <img src="/img/screen/component/3.png"
                        class="img-fluid img-special-2 shadow-1 position-absolute img-component" />

                </div>

            </div>

            <div class="col-lg-6 text-left content-side">
                <h3 class="subtitle text-theme1 mixed-1 mt-0">Components that you can reuse in any business segment</h3>

                <p class=" mb-4">
                    <strong>Ignity Admin </strong> has everything you need to get your new website up and running in no time!
                    Choose one of our included skins, or edit any component of the package.</p>

                <h3 class="subtitle text-theme1 mixed-1 mt-4">Clean and beautiful design </h3>
                <p class="mb-4">
                    Regardless of the color scheme you define, all components, including graphics, color classes and bootstrap elements, will have their colors adjusted to ensure perfect harmony across the application.
                </p>
                <h3 class="subtitle text-theme1 mixed-1 mt-4">Use with several backends </h3>
                <p class="mb-4">Use our optional backend included or any backend with our super reactive components written in Vue.
                    No matter the technology of your legacy, you will benefit greatly by adopting a new tool for generating your interfaces.

                </p>
                <hr class="divider light my-4">
                <div>
                    <b-btn size="xl"
                        class="btn-preview"
                        variant="outline-theme1"
                        href="/demo2/admin/dashboard/1">
                        <div class="d-flex">
                            <svg-icon height="20px"
                                :lighten="false"
                                variant="theme1"
                                width="20px"
                                icon="arrow-right"> </svg-icon>
                            <div class="ml-3">Preview Now
                            </div>
                        </div>
                    </b-btn>
                </div>
                </hr>

            </div>

        </div>

    </div>

</section>
</template>
<script>
import SvgIcon from '@/components/Base/Icon/SvgIcon'
import SectionTitle from '@/components/Module/Frontend/SectionTitle'

export default {
  components: {
    SvgIcon,
    SectionTitle
  }
}

</script>


<style lang="scss" scoped>
.img-container {
  img {
    position: relative;
    transition: transform 0.5s;

    &:hover {
      transform: translate(0px, -5px);
      z-index: 2;
    }

    &.img-special {
      bottom: 0;
      left: 0;
    }

    &.img-special-2 {
      bottom: 0;
      right: 0;
    }
  }
}

.img-component {
  border-radius: 8px;
}

h3.subtitle {
  font-weight: 400;
  font-size: 1rem;
}

p {
  color: var(--theme1);
}

</style>

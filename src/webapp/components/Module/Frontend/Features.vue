
<template>
<section class="page-menu bg-white"
    id="features">
    <div class="container">
        <div v-if="false"
            class="text-center opacity-3">
            <a href="#features"
                class="nav-link text-nowrap js-scroll-trigger">
                <i class="lnr lnr-chevron-down icon-3x text-theme1" /></a>
        </div>
        <section-title class="text-center "
            title="Features"
            subTitle> </section-title>

        <h2 v-if="false"
            class="text-center mt-0 text-theme1">Features</h2>
        <hr class="divider my-4" />
        <div class="row">
            <div v-for="(feature, i) in features"
                :key="i"
                class="col-lg-3 col-md-6 text-center feature-item">
                <div class=" bg-white h-100  ig-rounded">
                    <i class="lnr icon-feature icon-7x text-theme1 mb-4"
                        :class="feature.icon" />
                    <h5 class="mb-2 feature-title">{{feature.title}}</h5>
                    <p class="text-muted mb-0 px-2 feature-desc">
                        {{feature.description}}
                    </p>
                </div>
            </div>

        </div>
    </div>

</section>
</template>
<script>
const SectionTitle = () => import('@/components/Module/Frontend/SectionTitle')

export default {
  components: {
    SectionTitle
  },

  data () {
    return {
      features: [{
        title: 'Awesome Visual',
        icon: 'lnr-diamond',
        description: 'This template was created with the main objective of having a clean and extremely pleasant look.'
      }, {
        title: 'Optional Server',
        icon: 'lnr-laptop',
        description: 'Along with template is sent an optional server, modular, and with access to several databases.'
      }, {
        title: 'Fast Publish',
        icon: 'lnr-rocket',
        description: 'Easily change its components to suit any business!'
      }, {
        title: 'Made for Developers',
        icon: 'lnr-heart',
        description: 'Designed to make life easier for developers and entrepreneurs.'
      }]
    }
  }

}

</script>


<style lang="scss" scoped>
.icon-feature {
  // -webkit-text-stroke: 2px white;

  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--theme1)),
    to(var(--primary))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-item > div {
  min-height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}
.feature-title {
  font-weight: 500;
}

.feature-desc {
  min-height: 95px;
}

</style>

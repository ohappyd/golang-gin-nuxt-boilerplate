
<template>
<section class="section feature bg-primary inverse text-primary ig-rounded"
    id="partners">
    <div class="container p-5">
        <div class="row">
            <div class=" text-left">

                <section-title title="Stack"
                    subTitle="Project Stack"> </section-title>
                <div class="support-container">
                    <div v-for="(item, i) in items"
                        class="item-support-container  p-2 "
                        :class="item.size"
                        :key="i">
                        <div class="ig-p-1
                                    ig-rounded
                                    shadow
                                    bg-white
                                    item-support">

                            <svg-icon height="40px"
                                width="100%"
                                :icon="item.logo"> </svg-icon>

                            {{item.text}} <strong>{{item.version}}
                            </strong>
                        </div>
                    </div>
                </div>
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
  },

  data () {
    const logos = ['html5', 'bootstrap', 'vue', 'nuxtjs', 'nodejs1', 'feathersjs']
    const texts = ['HTML', 'Bootstrap', 'Vue', 'Nuxt', 'NodeJs', 'Feathers']
    const sizes = ['col-4', 'col-4', 'col-4', 'col-4', 'col-4', 'col-4']
    const versions = ['5', '4.3+', '2.6+', '2.10+', '10+ / ES 6', '3.3+']
    const items = []

    for (let i = 0; i <= 5; i++) {
      items.push({
        logo: logos[i],
        text: texts[i],
        size: sizes[i],
        version: versions[i]
      })
    }

    return {
      items
    }
  }

}

</script>


<style lang="scss" scoped>
.support-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  i {
    font-size: 4em;
    margin: 0.5em 1em;
    color: var(--theme1-mixed-1);
  }
}

.item-support {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

.item-support-container {
  width: 164px;
}

.feature .feature-item .icon {
  margin-bottom: 25px;
}

.feature .feature-item .icon i {
  font-size: 48px;
  color: var(--primary);
}

.feature .feature-item .content h5 {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature .feature-item:not(:last-child) {
  margin-bottom: 80px;
}

@media (max-width: 768px) {
  .feature .feature-item {
    margin-bottom: 80px;
  }
}

.feature .app-screen {
  margin: 40px 0;
}

.feature .feature-content h2,
.feature .feature-content p {
  margin-bottom: 25px;
}

@media (max-width: 768px) {
  .feature .feature-content h2,
  .feature .feature-content p {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .feature .testimonial {
    text-align: center;
  }
}

.feature .testimonial p {
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 10px;
  font-style: italic;
  color: #242424;
}

.feature .testimonial ul.meta li {
  font-size: 12px;
  margin-right: 10px;
}

.feature .testimonial ul.meta li img {
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

/*# sourceMappingURL=maps/style.css.map */

</style>



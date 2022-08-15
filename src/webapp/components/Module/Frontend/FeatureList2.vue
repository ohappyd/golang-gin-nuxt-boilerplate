
<template>
<section class="page-section feature bg-white text-theme1"
    id="feature">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section-title title="Key Features"
                    subTitle="Main project features"> </section-title>
            </div>
        </div>
        <div class="row bg-elipse">
            <div v-for="(item, i) in items"
                :key="i"
                class="col-lg-4">
                <!-- Feature Item -->
                <div class="feature-item">
                    <!-- Icon -->
                    <div class="icon mr-auto"
                        :class="item.class">
                        <i :class="item.icon" />

                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>{{item.title}}</h5>
                        <p>
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <!-- Feature Item -->

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
    const items = []
    items.push({
      class: 'danger',
      icon: 'lnr lnr-star-half',
      title: 'Reusable Components',
      text: 'Total reuse of code, self-portable components that can be used in your own way. All power of Vue components in your hand.'
    })
    items.push({
      class: 'primary',
      icon: 'lnr lnr-database',
      title: 'Real Database Examples',
      text: 'Several pages contain real database access components in our universal code. Easily write servers with secure JS.'
    })
    items.push({
      class: 'secondary',
      icon: 'lnr lnr-bubble',
      title: 'Clean Look on Included Skins',
      text: 'Awesome design on premaid design or completely change the style of your project by choosing or customizing skins.'
    })
    items.push({
      class: 'warning',
      icon: 'lnr lnr-pie-chart',
      title: 'Enterprise Grade Ready',
      text: 'Last stabled verions of Vue 2, Bootstrap 4, Nuxt, to enable Universal Code (Microservices using Feathers), Server Side Rendering for SEO.'
    })
    items.push({
      class: 'dark',
      icon: 'lnr lnr-laptop',
      title: 'Connect to any backend',
      text: 'Whether by web consumption, socket or directly to the database. Use virtually any existing legacy to power your components.'
    })
    items.push({
      class: 'success',
      icon: 'lnr lnr-layers',
      title: '+ BONUS Bundle',
      text: 'Super optional NodeJs server, w/ SSR enabled, landing page, auto routing, working authentication and more.'
    })
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

  i {
    font-size: 4em;
    margin: 0.5em 1em;
  }
}

.feature .feature-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;

  &.dir {
    align-items: flex-start;
  }
  &.center {
    align-items: center;
  }
}

.feature .feature-item .icon {
  //background-color: var(--color-mixed);
  //border-radius: 100%;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  position: relative;
}

.feature .feature-item .icon i {
  color: var(--color-mixed);
  text-shadow: 3px -2px var(--color-mixed-1);
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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




<template>
<section class="section feature bg-primary inverse text-primary"
    id="partners">
    <div class="container p-5">
        <div class="row">
            <div class="col-12 text-left">
                <h4 class="text-theme1 mb-0 mt-3">Product Stack</h4>
                <div class="support-container">
                    <div v-for="(item, i) in brands"
                        :key="i">
                        <i class="fab"
                            :class="'fa-'+item" />

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>
<script>
import MultipleScreen from '@/components/Module/Frontend/MultipleScreen'

export default {
  components: {
    MultipleScreen
  },

  data () {
    const brands = [ 'php', 'vuejs', 'microsoft', 'node', 'laravel' ]
    return { brands }
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



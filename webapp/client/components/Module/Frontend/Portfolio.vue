
<template>
<section id="portfolio"
    class="page-menu">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-lg-12 text-center">

                <section-title title="Dashboards & Pages"
                    subTitle="Make your Choice"> </section-title>
            </div>
            <div v-for="i in 10"
                :key="i"
                class="col-lg-4 col-sm-6 text-center p-3">
                <div class="demo-title text-dark">
                    Demo {{i}}
                </div>
                <a class="portfolio-box m-3"
                    :href="getDemoUrl(i)">
                    <img class="img-fluid img-portfolio"
                        width="350px"
                        :src="'/img/screen/'+i+'.png'"
                        alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50 d-none">
                            <b-btn size="sm"
                                variant="outline-secondary"
                                :href="getDemoUrl(i)">View</b-btn>
                        </div>

                    </div>

                </a>

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
  methods: {
    getDemoUrl (idx) {
      const indexUrl = this.mapIndex[idx - 1]
      return `/demo${idx}/admin/dashboard/${indexUrl}`
    }

  },

  data () {
    const mapIndex = ['1', // Demo 10
      '', // Demo 1
      '3', // Demo 2
      '1', // Demo 3
      '2', // Demo 4
      '3', // Demo 5
      '1', // Demo 6
      '3', // Demo 7
      '1', // Demo 8
      '3' // Demo 9
    ]
    return {
      mapIndex: mapIndex,
      isShowChooser: false
    }
  }

}

</script>


<style lang="scss" scoped>
img {
  border-radius: 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.18);
}

.demo-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--theme1-mixed-1);
  margin-bottom: 20px;
}

.img-portfolio:hover {
  transition: transform 0.2s; /* Animation */
  transform: scale(1.1);
}

</style>

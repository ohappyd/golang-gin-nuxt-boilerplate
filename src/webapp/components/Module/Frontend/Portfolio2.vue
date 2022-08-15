
<template>
<section id="portfolio"
    class="page-menu page-section bg-white">
    <div class="container p-0">
        <b-row class="no-gutters">
            <div class="col-lg-12 ">
                <section-title title="Dashboards & Demos"
                    subTitle="+10 layouts/skins to your need"> </section-title>

            </div>
            <b-col v-for="i in 10"
                :key="i"
                cols="12"
                class="text-center mb-3">
                <div class="h5 text-theme1 mt-4 mb-2">
                    Demo {{i}}
                </div>
                <a class="portfolio-box mb-3"
                    :href="getDemoUrl(i)">
                    <img class="img-fluid"
                        width="538px"
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

            </b-col>
        </b-row>
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

</style>




<template>
<div v-scroll-spy="{ sectionSelector: '.page-menu' , offset: 30 }"
    id="main-container">
    <!-- Navigation -->
    <navigation-one-page :wrapbootstrap="wrapbootstrap"> </navigation-one-page>
    <masthead class="item-content hasDividerA"> </masthead>
    <features class="item-content  hasDivider"> </features>
    <feature-list class="item-content  hasDivider"> </feature-list>
    <partners class="item-content  hasDivider hasDividerA"> </partners>
    <component-info class="item-content"> </component-info>

    <compare-image class="item-content hasDivider"> </compare-image>

    <skin-choose v-if="false"
        class="bg-primary inverse"> </skin-choose>
    <!-- </div> -->
    <portfolio class="item-content hasDivider hasDividerA"> </portfolio>
    <why-choose v-if="false"
        id="more"> </why-choose>

    <!-- Footer -->
    <footer class="bg-white py-5">
        <div class="container">
            <div class="small text-left text-dark">Copyright &copy; {{year}} - <strong>Ignity.co</strong></div>
        </div>
    </footer>

    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5db7417ee4c2fa4b6bd8d3c9/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    </script>
    <!--End of Tawk.to Script-->

</div>
</template>
<script>
import FeatureList from '@/components/Module/Frontend/FeatureList'
import SkinChoose from '@/components/Module/Frontend/SkinChoose'
import CompareImage from '@/components/Module/Frontend/CompareImage'
import Portfolio from '@/components/Module/Frontend/Portfolio'
import Masthead from '@/components/Module/Frontend/Masthead'
import Features from '@/components/Module/Frontend/Features'
import WhyChoose from '@/components/Module/Frontend/WhyChoose'
import ComponentInfo from '@/components/Module/Frontend/ComponentInfo'
import NavigationOnePage from '@/components/Module/Frontend/NavigationOnePage'
import Partners from '@/components/Module/Frontend/Partners'

export default {
  components: {
    FeatureList,
    SkinChoose,
    CompareImage,
    Portfolio,
    Masthead,
    Features,
    WhyChoose,
    ComponentInfo,
    Partners,
    NavigationOnePage
  },
  layout: 'frontend',
  props: {
    wrapbootstrap: Boolean
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}

</script>


<style lang="scss">
.page-compare {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #fff;
  display: flex;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.hasDivider:before,
.hasDividerA:after {
  content: " ";
  display: block;
  border: 2px solid var(--primary-mixed);
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  box-shadow: inset 0 1px 1px var(--primary-mixed);
  -webkit-box-shadow: inset 0 1px 1px var(--primary-mixed);
  -moz-box-shadow: inset 0 1px 1px var(--primary-mixed);
}

.item-content > .container {
  padding-top: 50px;
  padding-bottom: 70px;
}

.section-title-2 {
  font-weight: 400;
  margin-top: 50px !important;
}
.section-subtitle-2 {
  font-weight: 400;
}

</style>

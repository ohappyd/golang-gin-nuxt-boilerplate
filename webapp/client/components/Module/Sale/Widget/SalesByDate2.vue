
<template>
<b-row class>
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Today's"
            :value="43"
            :nrItems="58"
            footerClass="bg-primary text-white"> </scatter-sales>
    </div><!-- col-3 -->

    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Week's"
            :value="113"
            :nrItems="63"
            footerClass="bg-secondary text-white"> </scatter-sales>
    </div><!-- col-3 -->
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Month's"
            :value="1208"
            :nrItems="700"
            footerClass="bg-primary text-white"> </scatter-sales>
    </div><!-- col-3 -->
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Year's"
            :value="23113"
            :nrItems="5812"
            footerClass="bg-secondary text-white"> </scatter-sales>
    </div><!-- col-3 -->
</b-row>
</template>
<script>
import ScatterSales from '@/components/Module/Sale/Widget/ScatterSales'

/*
Component (alternative) that render a card with scatter chart to show sales by date.
*/
export default {
  components: {
    ScatterSales
  }
}

</script>

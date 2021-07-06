
<template>
<b-row class>
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Today's"
            :value="23113"
            :nrItemS="58"
            footerClass="bg-theme1inv text-theme1 border-top border-theme3"> </scatter-sales>
    </div><!-- col-3 -->
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Week's"
            :value="53118"
            :nrItemS="240"
            footerClass="bg-theme1inv text-theme1 border-top border-theme3"> </scatter-sales>
    </div><!-- col-3 -->
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Month's"
            :value="19313"
            :nrItemS="1210"
            footerClass="bg-theme1inv text-theme1 border-top border-theme3"> </scatter-sales>
    </div><!-- col-3 -->
    <div class="col-sm-6 col-lg-3">
        <scatter-sales title="Year's"
            :value="120313"
            :nrItemS="12310"
            footerClass="bg-theme1inv text-theme1 border-top border-theme3"> </scatter-sales>
    </div><!-- col-3 -->
</b-row>
</template>
<script>
import ScatterSales from '@/components/Module/Sale/Widget/ScatterSales'

/*
Component that render a card with scatter chart to show sales by date.
*/
export default {
  components: {
    ScatterSales
  }
}

</script>




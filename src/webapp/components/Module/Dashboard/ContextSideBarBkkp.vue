
<template>
  <div class="context-sidebar">
    <h5> Type X Conversion</h5>
    <PieArea class="pie-chart"> </PieArea>

    <b-list-group>
        <b-list-group-item class="bg-theme1inv">Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
    </b-list-group>

    <SmallList> </SmallList>
    <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
    </b-list-group>
    <h5> Titulo de teste </h5>
    <Gauge class="gauge-chart"> </Gauge>
    <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
    </b-list-group>

</div>
</template>
<script>
import PieArea from '@/components/Module/Chart/Pie/PieArea'
import Gauge from '@/components/Module/Chart/Gauge/Gauge'
import SmallList from '@/components/Module/Todo/Widget/SmallList'

export default {
  components: {
    PieArea,
    Gauge,
    SmallList
  }
}

</script>


<style lang="scss" scoped>
.list-group-item {
  position: relative;
  display: block;
  padding: 0px 15px;
  margin-bottom: -1px;
  border: 1px solid #ddd;
  line-height: 1em;
}
.pie-chart,
.gauge-chart {
  height: 140px;
}

h5 {
  font-size: 16px;
}
.context-sidebar {
  font-size: 0.8rem;
}

</style>

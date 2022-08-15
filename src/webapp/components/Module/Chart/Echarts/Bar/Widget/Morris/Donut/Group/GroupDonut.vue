
<template>
  <b-card no-body>
    <b-card-header>
        <h4 class="card-title text-secondary ">KPIs</h4>
        <h6 class="card-subtitle text-muted mb-0 op-5">Main indicators</h6>
    </b-card-header>
    <div class="d-flex m-auto">
        <div class="d-flex flex-column">
            <Donut> </Donut>
            <Donut> </Donut>
            <Donut> </Donut>
            <Donut> </Donut>

        </div>
        <div class="d-flex flex-column">
            <Donut> </Donut>
            <Donut> </Donut>
            <Donut> </Donut>
            <Donut> </Donut>

        </div>

    </div>

</b-card>
</template>
<script>
import Donut from '@/components/Module/Chart/Echarts/Bar/Widget/Morris/Donut/Donut'

// Donut
export default {
  // Testando
  components: {
    Donut
  }
}

</script>

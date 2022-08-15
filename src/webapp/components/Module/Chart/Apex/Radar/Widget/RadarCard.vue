
<template>
<b-card no-body
    class="ig-rounded"
    :class="[bgClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass]">

        <card-title title="Conversion Rate"
            subTitle="Sales / Period">

            <svg-icon icon="graph-pie"
                variant="secondary"
                width="28px"
                height="28px"
                rounded
                class="ml-1"
                :lighten="false"> </svg-icon>

            <svg-icon icon="graph-poly"
                variant="secondary"
                width="28px"
                height="28px"
                rounded
                class="ml-1"
                :lighten="false"> </svg-icon>

            <svg-icon icon="graph-bar"
                variant="secondary"
                width="28px"
                height="28px"
                class="ml-1"
                rounded
                :lighten="false"> </svg-icon>

        </card-title>

    </b-card-header>
    <b-card-body>
        <radar> </radar>
    </b-card-body>

</b-card>
</template>
<script>
import Radar from '@/components/Module/Chart/Apex/Radar/Radar'
import CardTitle from '@/components/Base/Card/CardTitle'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

export default {
  components: {
    Radar,
    CardTitle,
    SvgIcon
  },
  props: ['bgClass']
}

</script>





<template>
<b-card no-body
    style="min-height: 330px;"
    class="ig-rounded">
    <b-card-body>
        <column> </column>
        <div class="text-container">

            <div class="mx-auto">

                <div class="text-24 mb-0 text-theme1">
                    2240<span class>+</span>
                </div>
                <p class="text-10  text-uppercase  mb-0 opacity-7">Today's Leads</p>

            </div>

        </div>
    </b-card-body>

</b-card>
</template>
<script>
import Radar from '@/components/Module/Chart/Apex/Radar/Radar'
import CardTitle from '@/components/Base/Card/CardTitle'
import SvgIcon from '@/components/Base/Icon/SvgIcon'
import RadialMultiple from '@/components/Module/Chart/Apex/Radial/RadialMultiple'
import Column from '@/components/Module/Chart/Apex/Column/Column'

export default {
  components: {
    Radar,
    CardTitle,
    SvgIcon,
    RadialMultiple,
    Column
  }
}

</script>


<style lang="scss" scoped>
.card-body {
  display: flex;
  justify-content: center;
  align-itens: center;
  flex-direction: column;
  position: relative;
}

.text-container {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}

</style>



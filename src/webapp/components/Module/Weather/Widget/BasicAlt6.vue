
<template>
<b-card no-body
    class="shadow bg-theme1inv">

    <b-card-body class="d-flex justify-content-between align-items-center p-3">
        <div class="text-center float-left text-35 text-primary mixed">
            <i class="wi wi-day-sleet-storm " />
        </div>

        <div class="h4 block blue-grey text-25 text-primary  font-weight-light">
            {{temp}}° {{city}}
        </div>

    </b-card-body>
    <b-card-footer class="p-0">
        <div class="table-responsive">
            <table class="table mb-0 ">
                <tbody>
                    <tr>
                        <td>
                            <div class="details-left float-left">
                                <span class>WIND</span>
                                <span class="text-weight">&lt;{{wind}}MPH</span>
                            </div>
                            <div class="float-right align-middle">
                                <i class="wi wi-strong-wind  lighten-1 font-large-1" />
                            </div>
                        </td>
                        <td>
                            <div class="details-left float-left">
                                <span class="block">REAL FEEL</span>
                                <span class="text-weight">{{real}}°</span>
                            </div>
                            <div class="float-right align-middle">
                                <i class="wi wi-thermometer lighten-1" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="details-left float-left">
                                <span class>UV INDEX</span>
                                <span class="text-weight">{{uv}}%</span>
                            </div>
                            <div class="float-right align-middle">
                                <i class="wi wi-sunset" />
                            </div>
                        </td>
                        <td>
                            <div class="details-left float-left">
                                <span>PRESSURE</span>
                                <span class="text-weight">{{pressure}} in</span>
                            </div>
                            <div class="float-right align-middle">
                                <i class="wi wi-barometer" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </b-card-footer>

</b-card>
</template>
<script>

/*
Render card for weather module
*/

export default {
  props:
  {
    city: { default: 'London, UK' },
    temp: { default: '-5' },
    wind: { default: '12' },
    real: { default: '36.5' },
    uv: { default: '5' },
    pressure: { default: '5' }
  }
}

</script>

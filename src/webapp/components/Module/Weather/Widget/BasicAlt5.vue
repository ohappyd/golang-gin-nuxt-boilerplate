
<template>
<b-card no-body
    class="text-secondary"
    :class="'bg-'+bgVariant">

    <b-card-body class="p-4">
        <div class="animated-weather-icons text-theme3 text-center float-left">
            <i class="wi wi-day-sleet-storm  text-light text-30"> </i>
        </div>
        <div class="weather-details text-center text-20">

            <span class="font-weight-bold text-theme3">{{temp}}°</span>
            <span class="text-theme3">{{city}}</span>
        </div>
    </b-card-body>
    <b-card-footer class="py-2 text-theme1 bg-primary inverse">
        <b-row>
            <div class="col-4 text-center">

                <div>
                    <i class="wi wi-strong-wind text-30   opacity-5 align-middle " />
                </div>
                <span class="align-middle">{{wind}}mph</span>
            </div>
            <div class="col-4 text-center">
                <div>
                    <i class="wi wi-humidity  text-30  opacity-5 align-middle" />
                </div>
                <span class="align-middle">{{uv}}<span>
                    </span></span>
            </div>
            <div class="col-4 text-center">
                <div>
                    <i class="wi wi-thermometer  text-30   opacity-5 align-middle " />
                </div>
                <span class="align-middle">{{real}}°</span>
            </div>
        </b-row>
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
    pressure: { default: '5' },
    lineVariant: { default: 'danger' },
    bgVariant: { default: 'theme1inv' }
  }
}

</script>




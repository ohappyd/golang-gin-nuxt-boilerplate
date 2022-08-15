
<template>
<div>
    <b-card no-body>
        <b-card-body class="p-0">
            <div class="img-container overlay"
                :class="'text-'+variant">
                <img class="img-fluid card-img "
                    src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/backgrounds/mountain.png"
                    alt="Deer in nature">
                </img></div>
            <div class="card-img-overlay d-flex"
                style="z-index:1;">
                <div class="my-auto  mx-auto text-center text-white">
                    <h4 class="card-title">{{city}}</h4>
                    <h6 class="text-50">{{tempMin}}° - {{tempMax}}° </h6>
                    <p class="card-text h6">Tired of their servitude to man, a group of farm animals revolt and establish their own society...</p>
                </div>
            </div>
        </b-card-body>

        <b-card-footer class="text-center bg-theme1inv">
            <div class="row">
                <div class="col-2">
                    <span class="block">Mon</span>
                    <i class="wi wi-day-rain" />
                    <span class="block">13°</span>
                </div>
                <div class="col-2">
                    <span class="block">Tue</span>
                    <i class="wi wi-day-storm-showers" />
                    <span class="block">12°</span>
                </div>
                <div class="col-2">
                    <span class="block">Wed</span>
                    <i class="wi wi-day-cloudy" />
                    <span class="block">10°</span>
                </div>
                <div class="col-2">
                    <span class="block">Thu</span>
                    <i class="wi wi-thunderstorm" />
                    <span class="block">12°</span>
                </div>
                <div class="col-2">
                    <span class="block">Fri</span>
                    <i class="wi wi-day-light-wind" />
                    <span class="block">9°</span>
                </div>
                <div class="col-2">
                    <span class="block">Sat</span>
                    <i class="wi wi-day-cloudy-high" />
                    <span class="block">6°</span>
                </div>
            </div>
        </b-card-footer>

    </b-card>

</div>
</template>
<script>

/*
Render card for weather module
*/
export default {
  props:
  {
    city: { default: 'London, UK' },
    tempMin: { default: '48' },
    tempMax: { default: '59' },
    variant: { default: 'primary' }

  }
}

</script>


<template>
<div class="card weather">
    <div class="current d-flex flex-column align-items-center justify-content-center">
        <div class="info text-center w-100 text-theme1">
            <div class="icon">
                <span :class="mainIcon"
                    class="text-light" />
            </div>
            <div class="city"><small><small>CITY:</small></small> {{city}}</div>
            <div class="temp">{{temp}}&deg; <small>F</small></div>
            <div class="wind"><small><small>WIND:</small></small> {{wind}} km/h</div>
            <div>&nbsp;</div>
        </div>

    </div>
    <div class="future text-dark p-2 ml-auto bg-primary inverse text-weight-light">
        <div class="day">
            <h5>Mon</h5>
            <p><span class="wi wi-day-cloudy   opacity-5" /></p>
        </div>
        <div class="day">
            <h5>Tue</h5>
            <p><span class="wi wi-showers   opacity-5" /></p>
        </div>
        <div class="day">
            <h5>Wed</h5>
            <p><span class="wi wi-rain   opacity-5" /></p>
        </div>
    </div>
</div>
</template>
<script>

/*
Render card for weather module
*/
export default {
  props: {
    mainIcon: {
      default: 'wi wi-day-sunny'
    },
    city: {
      default: 'New York'
    },
    wind: { default: '21' },
    temp: { default: '58' }
  }

}

</script>


<style lang="scss" scoped>
.weather {
  display: flex;
  flex-flow: row wrap !important;
  box-shadow: 0px 1px 10px 0px #cfcfcf;
  overflow: hidden;
}

.weather .current {
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  color: #515151;
  padding: 20px;
  font-weight: 500;
}

.weather .current .info {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  flex-grow: 2;
}

.weather .current .info .city {
  font-size: 20px;
  color: var(--light);
}

.weather .current .info .temp {
  font-size: 40px;
  color: var(--primary);
}

.weather .current .info .wind {
  font-size: 20px;
  color: var(--light);
}

.weather .current .icon {
  text-align: center;
  font-size: 64px;
  flex-grow: 1;
}

.weather .future {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.weather .future .day {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;

  .wi {
    font-size: 2.2rem;
  }
}

.weather .future .day {
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}

.weather .future .day h3 {
  text-transform: uppercase;
}

.weather .future .day p {
  font-size: 28px;
}

</style>

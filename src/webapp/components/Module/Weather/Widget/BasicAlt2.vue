
<template>
<b-card no-body
    style="min-height: 300px;"
    class="weather">
    <b-card-body class="p-0">
        <div class="current">
            <div class="info pl-2">
                <div>&nbsp;</div>
                <div class="temp">{{temp}}&deg; <small>F</small></div>
                <div class="city text-weight-light"><small><small /></small> {{city}}</div>

                <div class="wind"><small /> {{wind}} km/h</div>
                <div>&nbsp;</div>
            </div>
            <div class="icon">
                <svg-icon variant="secondary"
                    :icon="mainIcon"
                    height="50px"
                    width="50px"> </svg-icon>

            </div>
        </div>
        <div class="future text-theme2  inverse ig-p-1 mb-4 mt-auto"
            style="max-height: 82px;"
            :class="'bg-'+variant">
            <div class="day">
                <div class="font-weight-light">Mon</div>
                <div>
                    58° F

                </div>
            </div>
            <div class="day">
                <div class="font-weight-light">Tue</div>
                <div>
                    56° F

                </div>
            </div>
            <div class="day">

                <div class="font-weight-light">Wed</div>
                <div>
                    52° F
                </div>
            </div>
        </div>
    </b-card-body>
</b-card>
</template>
<script>
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Render card for weather module
*/
export default {
  components: {
    SvgIcon
  },
  props: {
    mainIcon: {
      default: 'wi wi-day-sunny'
    },
    city: {
      default: 'New York'
    },
    wind: {
      default: '21'
    },
    temp: {
      default: '58'
    },
    variant: {
      default: 'primary'
    },
    className: {
      default: 'bg-secondary inverse'
    }
  }
}

</script>


<style lang="scss" scoped>
.weather {
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
  }
}

.weather .current {
  display: flex;
  flex-flow: row wrap;
  color: var(--primary-mixed-1);
  padding: 20px;
  font-weight: 400;
  width: 100%;
}

.weather .current .info {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  flex-grow: 2;
}

.weather .current .info .city {
  font-size: 16px;
}

.weather .current .info .temp {
  font-size: 30px;
  color: var(--primary);
  font-weight: 400;
  line-height: 30px;
}

.weather .current .info .wind {
  font-size: 16px;
}

.weather .current .icon {
  text-align: center;
  font-size: 54px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-mixed);
}

.weather .future {
  display: flex;
  flex-flow: row nowrap;
  min-height: 82px;
  width: 100%;
}

.weather .future .day {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  line-height: 20px;

  .wi {
    font-size: 2.4rem;
  }
}

.weather .future .day:hover {
  color: var(--theme1);
}

.weather .future .day h3 {
  text-transform: uppercase;
}

.weather .future .day p {
  font-size: 28px;
}

</style>



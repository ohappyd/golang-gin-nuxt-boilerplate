
<template>
<b-card no-body
    style="min-height: 300px;"
    class="widget">
    <b-card-body class="p-0">
        <div class="current">
            <div class="info pl-2">
                <div>&nbsp;</div>
                <div class="temp">321,131 <small>+</small></div>
                <div class="city text-weight-light">
                    Performance
                </div>

                <div class="wind"><small /> {{wind}}%</div>
                <div>&nbsp;</div>
            </div>
            <div class="icon">
                <svg-icon :variant2="variant"
                    variant="secondary"
                    :lighten="true"
                    height="50px"
                    :icon="mainIcon"
                    width="50px"> </svg-icon>

            </div>
        </div>
        <div class="future text-theme2 inverse ig-p-1 mb-4"
            style="max-height: 82px;"
            :class="'bg-'+variant">

            <line9 height="40px"
                :variant="variant"> </line9>

        </div>
    </b-card-body>
</b-card>
</template>
<script>
import Line9 from '@/components/Module/Chart/Echarts/Line/Line9'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Render card for weather module
*/
export default {
  components: {
    Line9,
    SvgIcon
  },
  props: {
    mainIcon: {
      default: 'rocket'
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
.widget {
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
  }
}

.widget .current {
  display: flex;
  flex-flow: row wrap;
  color: var(--primary-mixed-1);
  padding: 20px;
  font-weight: 400;

  width: 100%;
}

.widget .current .info {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  flex-grow: 2;
}

.widget .current .info .city {
  font-size: 16px;
}

.widget .current .info .temp {
  font-size: 30px;
  color: var(--primary);
  font-weight: 400;
  line-height: 30px;
}

.widget .current .info .wind {
  font-size: 16px;
}

.widget .current .icon {
  text-align: center;
  font-size: 54px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-mixed);
}

.widget .future {
  display: flex;
  flex-flow: row nowrap;
  min-height: 82px;
  max-height: 82px;
  width: 100%;
}

.widget .future .day {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  line-height: 20px;

  .wi {
    font-size: 2.4rem;
  }
}

.widget .future .day:hover {
  color: var(--theme1);
}

.widget .future .day h3 {
  text-transform: uppercase;
}

.widget .future .day p {
  font-size: 28px;
}

</style>



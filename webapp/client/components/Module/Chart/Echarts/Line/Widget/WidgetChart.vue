
<template>
<b-card no-body
    class="mb-0"
    :class="[bgClass, lighten ? 'lighten': '']"
    style="min-height: 175px">
    <b-card-body :class="textClass">

        <div class="chart-container ">

            <div class="text-center"
                style="height: 60px;">
                <div class=" main-text  title-text   mb-2"
                    v-html="title">

                </div>

                <div v-if="isUpgrade"
                    class="text-container d-flex justify-content-center">
                    <div class="d-flex">
                        <b-btn variant="theme1"
                            class="btn-action mx-2 d-flex">
                            <svg-icon variant="theme1"
                                icon="flame"
                                :lighten="false"
                                height="20px"
                                class="mr-2"
                                width="20px"> </svg-icon>
                            Get Bonus Now
                        </b-btn>
                    </div>

                </div>
                <div v-else-if="isSocial">
                    <ul class="social list-inline">
                        <li class="list-inline-item"><a href="#"
                                class="social-link">
                                <i class="fab fa-facebook-f" />
                            </a></li>
                        <li class="list-inline-item"><a href="#"
                                class="social-link">
                                <i class="fab fa-twitter" /></a>

                        </li>
                        <li class="list-inline-item"><a href="#"
                                class="social-link">
                                <i class="fab fa-instagram" /></a>

                        </li>
                        <li class="list-inline-item"><a href="#"
                                class="social-link">
                                <i class="fab fa-linkedin" /></a>

                        </li>
                    </ul>
                </div>

                <div v-else
                    class="text-container">
                    <div>

                        Earnings from <strong>15%</strong> to <strong>25%</strong> on
                        Monthly Plan

                    </div>

                </div>

            </div>
        </div>
    </b-card-body>
</b-card>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import faker from 'faker'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Example of component for rendering  simple line chart inside card
*/
export default {
  components: {
    SvgIcon
  },
  props: {
    functionName: {
      type: String,
      default: 'sinusoidalInOut'
    },
    title: {
      type: String,
      default: 'Upgrade Now'
    },

    bgClass: {
      type: String,
      default: 'theme1inv '
    },
    textClass: {
      type: String,
      default: 'text-theme1 '
    },
    lighten: {
      type: Boolean,
      default: false
    },
    isUpgrade: {
      type: Boolean,
      default: false
    },
    isSocial: {
      type: Boolean,
      default: false
    }

  },

  created () {
  },

  methods: {
    randomSerie (baseValue) {
      // debugger
      const MAX_SERIE = 100
      const data = []

      for (let i = 0; i <= MAX_SERIE; i++) {
        const value = faker.random.number({
          min: 1,
          max: 100
        })
        const minValue = faker.random.number({
          min: 1,
          max: 80
        })
        data.push(value < 10 ? minValue : baseValue)
      }

      return data
    },

    randomValue () {
      return faker.random.number({
        min: 10,
        max: 99
      })
    }

  },
  computed: {
    options () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      var data = []
      var data2 = []
      data = this.randomSerie(1)
      data2 = []
      let option = {
        xAxis: {
          show: false,
          type: 'category'
        },
        yAxis: {
          show: false,
          type: 'value',
          max: 100
        },
        grid: {
          right: 0,
          left: 0,
          top: 0,
          bottom: '10%'
        },
        series: [{
          name: this.functionName,
          type: 'line',
          data,
          // smooth: true,
          showSymbol: false,
          animationEasing: this.functionName,
          animationDuration: 1000,
          lineStyle: {
            color: variablesColors.primary
          }
        }, {
          name: this.functionName,
          type: 'line',
          data: data2,
          // smooth: true,
          showSymbol: false,
          animationEasing: this.functionName,
          animationDuration: 1000,
          lineStyle: {
            color: variablesColors.secondary
          }
        }]
      }
      return option
    }

  }
}

</script>


<style lang="scss" scoped>
.title-text {
  font-weight: 500;
  color: var(--secondary);
}

.main-text {
  font-size: 18px;
  font-weight: 500;
  color: var(--theme1);
}

.main-title {
  font-weight: 500;
  font-size: 16px;
}

.btn-action {
  border: 1px solid var(--primary);
}

.chart-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.text-container {
  min-width: 120px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--theme1);
}

.lighten {
  .text-container {
    color: var(--theme1-mixed);
  }

  .main-text,
  .social-link {
    color: var(--theme1-mixed-1);
  }
}

.card {
  background-color: var(--color) !important;
}

.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid var(--theme1-mixed-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--theme1);
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
  background: var(--theme1-mixed);
  text-decoration: none;
  color: var(--theme1);
}

</style>



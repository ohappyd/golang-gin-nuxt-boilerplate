
<template>
<b-card no-body
    class="ig-rounded"
    :class="[bgClass, textClass]">
    <b-card-header class="h5 default d-flex"
        :class="[bgClass, borderClass]">
        <card-title title="Conversion Rate"
            subTitle="Sales / Period">

            <b-button icon
                variant="primary"
                class="inverse btn-square"> <i class="fas fa-chart-line" />
            </b-button>

            <b-button icon
                variant="primary"
                class="inverse btn-square"> <i class="fas fa-chart-pie" />
            </b-button>

            <b-button icon
                variant="primary"
                class="btn-square">
                <i class="fas fa-chart-bar" />
            </b-button>
        </card-title>

    </b-card-header>
    <b-card-body>
        <div class="side-chart">
            <bar11 :maxSerie="maxSerie"
                title=""
                style="height:100%;"
                subtitle
                :colorList="colorList"> </bar11>
        </div>
        <div class="container-footer">
            <div class="widget-list-container  side-item ">

                <div v-for="(item, i) in items"
                    :key="i"
                    :class="[item.variantDot, item.cardTheme]"
                    class="ig-p-1 ig-rounded  inverse d-flex bottom item-list align-items-center ">
                    <div class="left-icon ">
                        <svg-icon :icon="item.icon"
                            height="50px"
                            width="50px"> </svg-icon>

                    </div>
                    <div class="item-text">
                        <div class="d-flex flex-column justify-content-between ">
                            <strong>{{item.title}}</strong>
                            <div>

                                Team A
                            </div>

                        </div>
                        <div class>
                            <strong>
                                <span class="text-primary">+</span>
                                <span class="text-theme1">{{item.percentage}}%</span>

                            </strong>
                            <div>

                                ${{item.value}}
                            </div>

                        </div>

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
import CardTitle from '@/components/Base/Card/CardTitle'
import Bar11 from '@/components/Module/Chart/Echarts/Bar/Bar11'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Example of component for rendering the big bars inside a card
*/
export default {
  props: {
    // Main card bg class
    bgClass: {
      type: String,
      default: 'bg-theme1inv'
    },
    // Main text class
    textClass: {
      type: String,
      default: 'text-dark'
    },
    // Title class
    titleClass: {
      type: String,
      default: 'text-secondary'
    },
    // Subtitle class
    subtitleClass: {
      type: String,
      default: 'text-muted'
    },
    // Border class
    borderClass: {
      type: String,
      default: 'border-muted'
    },
    // Icon class
    icon: {
      type: String
    },
    // Dark mode
    dark: {
      type: Boolean
    },
    // Chat color list
    colorList: {
      type: Array,
      default: () => [themeColors().primary, themeColors().secondary]
    },
    // Max chart series length
    maxSerie: {
      type: Number,
      default: 80
    }
  },
  components: {
    Bar11,
    CardTitle,
    SvgIcon
  },

  data () {
    faker.seed(2)
    const items = []
    const variants = ['warning', 'danger', 'info', 'theme1', 'theme1']
    const variantsDot = ['primary', 'primary', 'primary', 'success', 'danger'] //

    const titles = ['DT', 'TI', 'AP', 'TC', 'TI'] // const icons = ['gift', 'cloud-tools', 'graph-bar', 'check', 'vr', 'thunder']

    const icons = ['flame', 'infinity', 'activity', 'layers', 'layers']

    for (let i = 0; i < 3; i++) {
      items.push({
        name: faker.name.firstName(),
        title: faker.name.jobArea(),
        // class: 'theme1',
        class: variants[i % 5],
        icon: icons[i % 5],
        variantDot: variantsDot[i % 5],
        value: faker.random.number({
          min: 2000,
          max: 10000
        }) * 10,
        dataRadial: [
          faker.random.number({ min: 1, max: 90 }),
          faker.random.number({ min: 1, max: 90 })
        ],
        percentage: faker.random.number({
          min: 20,
          max: 99
        }),
        cardTheme: 'text-secondary',
        // i === 0 ? 'text-theme1' : 'text-secondary',
        cardTitle: titles[i % 5]
      })
    }

    return {
      iconHeight: '40px',
      iconWidth: '40px',
      items
    }
  }

}

</script>


<style lang="scss" scoped>
.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  //align-items: stretch;
  height: 100%;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}

.label-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  font-size: 18px;
  color: var(--theme1);
}
.item-text {
  flex-grow: 1;
  text-align: center;
}
.side-item {
  flex: 0 0 100px;
}

.side-chart {
  flex: 1 1 100%;
  padding-bottom: 40px;
}

.left-icon {
  flex: 0 1 90px;
  border-radius: 8px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-list {
  position: relative;
  min-width: 33.3%;
  flex: 1 1 33.3%;
  flex-wrap: wrap;
  justify-content: center;
  color: var(--secondary);
}

.widget-list-container {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--theme-border-color);
  border-radius: 0 0 8px 8px;
}

.item-dot {
  background-color: var(--color);
  height: 35px;
  min-width: 1px;

  margin-right: 5px;
}

</style>



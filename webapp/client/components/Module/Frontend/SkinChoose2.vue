
<template>
<section class="py-5">
    <div class="container">
        <b-row>

            <b-col cols="12"
                class="text-center">

                <h3 class="text-theme1">
                    Choose your skin:
                </h3>

            </b-col>
            <b-col cols="12">

                <ul class="swatch-list">
                    <li class="swatch"
                        :style="getStyleColor(skin.class, 'theme1inv')"
                        v-for="(skin, i) in lightSkins"
                        :key="i">
                        <div>
                            <div class="swatch-color"
                                :class="'skin-'+skin.class">
                                <div class="item-color"
                                    :style="getStyleColor(skin.class, 'primary')"> P </div>
                                <div class="item-color"
                                    :style="getStyleColor(skin.class, 'secondary')">S </div>
                                <div class="item-color"
                                    :style="getStyleColor(skin.class, 'theme1')">T </div>

                            </div>
                            <div class="swatch-info">

                                <div class="d-flex">
                                    <div v-for="(variant, i) in otherVariants"
                                        class="flex-grow-1 other-colors"
                                        :style="getStyleColor(skin.class, variant)"
                                        :key="i">

                                    </div>
                                </div>
                                <p :style="getStyleTextColor(skin.class, 'theme1')">{{skin.name}}</p>

                            </div>

                        </div>
                        <div>
                            <img src="/img/screen/dark.png"
                                style="width: 100%;" />
                        </div>
                    </li>
                    <li class="swatch"
                        :style="getStyleColor(skin.class, 'theme1inv')"
                        v-for="(skin, i) in darkSkins"
                        :key="i">
                        <div class="swatch-color"
                            :class="'skin-'+skin.class">
                            <div class="item-color"
                                :style="getStyleColor(skin.class, 'primary')"> P </div>
                            <div class="item-color"
                                :style="getStyleColor(skin.class, 'secondary')">S </div>
                            <div class="item-color"
                                :style="getStyleColor(skin.class, 'theme1')">T </div>
                        </div>
                        <div class="swatch-info">
                            <div class="d-flex">
                                <div v-for="(variant, i) in otherVariants"
                                    class="flex-grow-1 other-colors"
                                    :style="getStyleColor(skin.class, variant)"
                                    :key="i">

                                </div>
                            </div>
                            <p :style="getStyleTextColor(skin.class, 'theme1')">{{skin.name}}</p>

                        </div>
                    </li>

                </ul>
            </b-col>

        </b-row>
    </div>
</section>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'

export default {
  methods: {
    getVariablesColors (skin) {
      return themeColors(skin)
    },
    getStyleColor (skin, variant) {
      const variableColors = this.getVariablesColors(skin)
      return { 'background-color': variableColors[variant] }
    },
    getStyleTextColor (skin, variant) {
      const variableColors = this.getVariablesColors(skin)
      return { 'color': variableColors[variant] }
    }
  },
  data () {
    return {
      otherVariants: ['info', 'success', 'warning', 'danger', 'light', 'dark'],
      lightSkins: [
        {
          name: 'Purple',
          class: 'purple'
        },
        {
          name: 'Blue',
          class: 'blue'
        },
        {
          name: 'Red',
          class: 'red'
        },
        {
          name: 'Grey',
          class: 'grey'
        },
        {
          name: 'Dark Yellow',
          class: 'dark-golden'
        },
        {
          name: 'Dark Blue',
          class: 'dark-blue'
        },
        {
          name: 'Dark Grey',
          class: 'dark-grey'
        },
        {
          name: 'Dark Purple',
          class: 'dark-purple'
        }

      ],
      darkSkins: [

      ]
    }
  }
}

</script>


<template>
<section class="py-5">
    <div class="container">
        <b-row>
            <b-col cols="12 mb-3"
                class="text-center">

                <h3 class="text-theme1">
                    Choose your skin:
                </h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12"
                class="text-center">
                <b-tabs>
                    <b-tab active>
                        <template slot="title">
                            <h4 class="font-weight-light"> Clean Skins
                            </h4>
                        </template>
                        <skin-palette textClass="text-dark"
                            :skins="skins1"> </skin-palette>
                    </b-tab>

                    <b-tab>
                        <template slot="title">
                            <h4 class="font-weight-light"> Dark Versions
                            </h4>
                        </template>
                        <skin-palette textClass="text-white"
                            :skins="skins2"> </skin-palette>
                    </b-tab>
                    <b-tab>
                        <template slot="title">
                            <h4 class="font-weight-light"> Misc Skins
                            </h4>
                        </template>
                        <skin-palette :skins="skins3"> </skin-palette>
                    </b-tab>
                </b-tabs>

            </b-col>
        </b-row>
    </div>
</section>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import SkinPalette from '@/components/Module/Frontend/SkinPalette'

export default {
  components: {
    SkinPalette
  },

  methods: {
    getVariablesColors (skin) {
      return themeColors(skin)
    },

    getStyleColor (skin, variant) {
      const variableColors = this.getVariablesColors(skin)
      return {
        'background-color': variableColors[variant]
      }
    },

    getStyleTextColor (skin, variant) {
      const variableColors = this.getVariablesColors(skin)
      return {
        'color': variableColors[variant]
      }
    }

  },

  data () {
    return {
      otherVariants: ['info', 'success', 'warning', 'danger', 'light', 'dark'],
      skins1: [{
        name: 'Material',
        class: 'material'
      }, {
        name: 'Purple',
        class: 'purple'
      }, {
        name: 'Blue',
        class: 'blue'
      }, {
        name: 'Red',
        class: 'red'
      }, {
        name: 'Grey',
        class: 'grey'
      } ],
      skins2: [{
        name: 'Dark Blue',
        class: 'dark-blue'
      }, {
        name: 'Dark Grey',
        class: 'dark-grey'
      }, {
        name: 'Dark Purple',
        class: 'dark-purple'
      }, {
        name: 'Dark Golden',
        class: 'dark-golden'
      }, {
        name: 'Dark Material',
        class: 'dark-material'
      }],
      skins3: [ {
        name: 'Carbon',
        class: 'color-carbon'
      }, {
        name: 'Grey Material',
        class: 'grey-material'
      }, {
        name: 'Purple Air',
        class: 'color-purple-air'
      }, {
        name: 'Dark Sky',
        class: 'color-dark-sky'
      }, {
        name: 'Back Image',
        class: 'back-image'
      }]

    }
  }

}

</script>


<style lang="scss">
.nav-tabs .nav-item {
  flex-grow: 1;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: transparent;
  border: 0px solid transparent;
  font-weight: 300;
}

.nav-tabs .nav-link {
  border-bottom: 4px solid var(--theme3);
  &.active {
    border-bottom: 4px solid var(--primary);
  }
}

.swatch {
  width: 16.57%;
  border-radius: 5px;
  float: left;
  margin: 0 20px 20px 0;
  overflow: hidden;

  &:nth-child(5n) {
    margin-right: 0;
  }

  .other-colors {
    height: 15px;
    width: 15px;
    border-radius: 5%;
  }

  .swatch-color {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    .item-color {
      height: 30px;
      width: 30px;
      line-height: 30px; /* The same as your div height */
      text-align: center;
      vertical-align: middle;
      border-radius: 50%;
      margin-left: -10px;
    }
  }

  .swatch-info {
    padding: 1em;
    color: #808080;
    text-align: center;

    p {
      font-size: 0.85rem;
      margin-bottom: 0.75em;

      &:first-child {
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #fff;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.other-colors {
  min-width: 10px;
  min-height: 15px;
}

</style>

<style lang="scss">
.square-flip {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;

  -webkit-transform: perspective(1000px);
  -moz-transform: perspective(1000px);
  -ms-transform: perspective(1000px);
  transform: perspective(1000px);

  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  /*border:1px solid #efefef;*/

  position: relative;
  float: left;
  margin: 2px;
}
.square-flip {
  width: 100%;
  height: 100%;
  min-height: 180px;
}
.square,
.square2 {
  width: 100%;
  height: 100%;
}
.square {
  background-size: cover;
  background-position: center center;

  -ms-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  -webkit-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  overflow: hidden;

  position: absolute;
  top: 0;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.square-flip .square {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  z-index: 1;
}
.square-flip:hover .square {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.square2 {
  background-size: cover;
  background-position: center center;

  -ms-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  -webkit-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  overflow: hidden;

  position: absolute;
  top: 0;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.square-flip .square2 {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  z-index: 1;
}
.square-flip:hover .square2 {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

/*Square content*/
.square-container {
  padding: 20px;
  text-align: center;
  position: relative;
  top: 50%;
  height: 100%;

  -ms-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  -webkit-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);

  -webkit-transform: translateY(-50%) translateX(0px) scale(1);
  -ms-transform: translateY(-50%) translateX(0px) scale(1);
  transform: translateY(-50%) translateX(0px) scale(1);
  transform-style: preserve-3d;
  z-index: 2;
}
.square-flip:hover .square-container {
  -webkit-transform: translateY(-50%) translateX(-650px) scale(0.88);
  -ms-transform: translateY(-50%) translateX(-650px) scale(0.88);
  transform: translateY(-50%) translateX(-650px) scale(0.88);
  transform-style: preserve-3d;
}

.square-container2 {
  padding: 20px;
  text-align: center;
  position: relative;
  top: 50%;

  height: 100%;

  -ms-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  -webkit-transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);

  -webkit-transform: translateY(-50%) translateX(650px) translateZ(60px)
    scale(0.88);
  -ms-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
  transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);

  transform-style: preserve-3d;
  z-index: 2;
}
.square-flip:hover .square-container2 {
  -webkit-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  -ms-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  transform-style: preserve-3d;
}

/*Style text*/
.square-flip h2 {
  color: white;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 22px;
}
.square-flip h3 {
  color: white;
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
}
/*Elements*/
.flip-overlay {
  display: block;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.align-center {
  margin: 0 auto;
}
.kallyas-button {
  display: block;
  width: 160px;
  padding: 18px 30px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #fff;
  background: #ff2024;
  margin: 0 auto;
  border-radius: 2px;
  text-decoration: none;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffa067+0,ff2959+49,ff2024+100 */
  background: #ffa067; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #ffa067 0%,
    #ff2959 49%,
    #ff2024 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #ffa067 0%,
    #ff2959 49%,
    #ff2024 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #ffa067 0%,
    #ff2959 49%,
    #ff2024 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa067', endColorstr='#ff2024',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

/*ADD SHADOWS OPTIONAL*/
.square-flip .square .boxshadow,
.square-flip .square .textshadow,
.square-flip .square2 .boxshadow,
.square-flip .square2 .textshadow {
  -ms-transition: 0.6s;
  transition: 0.6s;
  -webkit-transition: 0.6s;
}

.square-flip .square .boxshadow {
  -webkit-box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}
.square-flip .square .textshadow {
  -webkit-text-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  -moz-text-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  text-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}
.square-flip:hover .square .boxshadow,
.square-flip:hover .square .textshadow {
  -webkit-box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  -moz-box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}

.square-flip .square2 .boxshadow {
  -webkit-box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  -moz-box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}
.square-flip .square2 .textshadow {
  -webkit-text-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  -moz-text-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
  text-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}
.square-flip:hover .square2 .boxshadow,
.square-flip:hover .square2 .textshadow {
  -webkit-box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
  box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}

/*You can delete this style*/
.centerflipcards {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
}
.clearfix {
  clear: both;
}
.centerflipcards p {
  font-family: "Open Sans";
  font-size: 13px;
  margin-top: 10px;
  font-weight: 700;
}

</style>

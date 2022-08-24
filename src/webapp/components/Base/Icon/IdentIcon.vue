
<template>
<client-only>
    <div>
        <div v-html="identicon()" />
    </div>
</client-only>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'

import jdenticon from 'jdenticon'
/*
Generate random ident icon
*/
export default {
  props: {
    id: { default: '' },
    skin: { default: '' },
    variant: { default: 'secondary', type: String },
    lighten: { default: true, type: Boolean },
    // Hexa opacity
    backgroundOpacity: { default: '30', type: String }
  },
  methods: { // Get avatar from id
    hexToHsl (color) {
      const rgb = this.hexToRgb(color)
      const hsl = this.rgbToHsl(rgb)
      return hsl
    },
    hexToRgb (color) {
      let hex = color[0] === '#' ? color.slice(1) : color
      let c

      // expand the short hex by doubling each character, fc0 -> ffcc00
      if (hex.length !== 6) {
        hex = ((() => {
          const result = []
          for (c of Array.from(hex)) {
            result.push(`${c}${c}`)
          }
          return result
        })()).join('')
      }
      const colorStr = hex.match(/#?(.{2})(.{2})(.{2})/).slice(1)
      const rgb = colorStr.map(col => parseInt(col, 16))
      rgb.push(1)
      return rgb
    },

    rgbToHsl (rgb) {
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255

      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      const diff = max - min
      const add = max + min

      const hue =
    min === max
      ? 0
      : r === max
        ? (((60 * (g - b)) / diff) + 360) % 360
        : g === max
          ? ((60 * (b - r)) / diff) + 120
          : ((60 * (r - g)) / diff) + 240

      const lum = 0.5 * add

      const sat =
    lum === 0
      ? 0
      : lum === 1
        ? 1
        : lum <= 0.5
          ? diff / add
          : diff / (2 - add)

      const h = Math.round(hue)
      const s = Math.round(sat * 100)
      const l = Math.round(lum * 100)
      const a = rgb[3] || 1

      return [h, s, l, a]
    },
    identicon () {
      const variablesColors = themeColors(this.skin)
      if (!this.lighten) {
        const hslColor = this.hexToHsl(variablesColors.variantsObj[this.variant]['base'])
        jdenticon.config = {
          hues: [hslColor[0]],
          lightness: {
            color: [hslColor[2] / 100, hslColor[2] / 100],
            grayscale: [1.00, 1.00]
          },
          saturation: {
            color: hslColor[1] / 100,
            grayscale: 1.00
          },
          backColor: variablesColors.variantsObj[this.variant].mixed
        }
      } else {
        const hslColor = this.hexToHsl(variablesColors.variantsObj[this.variant]['mixed-1'])
        jdenticon.config = {
          hues: [hslColor[0]],
          lightness: {
            color: [hslColor[2] / 100, hslColor[2] / 100],
            grayscale: [1.00, 1.00]
          },
          saturation: {
            color: hslColor[1] / 100,
            grayscale: 1.00
          },
          backColor: variablesColors.variantsObj[this.variant].mixed
        }
      }

      // console.log('######################### updated', variablesColors)

      return jdenticon.toSvg(this.id, 50)
    }
  },
  mounted () {

    // alert(variablesColors.secondary)
  }

}

</script>




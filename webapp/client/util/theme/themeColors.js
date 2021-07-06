
import skinDefault from '@@/client/styles/variables/base/_default-skin.scss'

import skinBlue from '@@/client/styles/variables/skin/_blue.scss'
import skinBlueLight from '@@/client/styles/variables/skin/_blue-light.scss'
import skinPurple from '@@/client/styles/variables/skin/_purple.scss'
import skinRed from '@@/client/styles/variables/skin/_red.scss'
import skinGrey from '@@/client/styles/variables/skin/_grey.scss'
import skinGreen from '@@/client/styles/variables/skin/_green.scss'
import skinMaterial from '@@/client/styles/variables/skin/_material.scss'

import skinDarkBlue from '@@/client/styles/variables/skin/_dark-blue.scss'
import skinDarkGolden from '@@/client/styles/variables/skin/_dark-golden.scss'
import skinDarkGrey from '@@/client/styles/variables/skin/_dark-grey.scss'
import skinDarkPurple from '@@/client/styles/variables/skin/_dark-purple.scss'
import skinDarkMaterial from '@@/client/styles/variables/skin/_dark-material.scss'

import skinGreyGolden from '@@/client/styles/variables/skin/_grey-golden.scss'
import skinGreyMaterial from '@@/client/styles/variables/skin/_grey-material.scss'
import skinBackImage from '@@/client/styles/variables/skin/_back-image.scss'
import skinColorPurpleAir from '@@/client/styles/variables/skin/_color-purple-air.scss'
import skinColorDarkSky from '@@/client/styles/variables/skin/_color-dark-sky.scss'
import skinColorCarbon from '@@/client/styles/variables/skin/_color-carbon.scss'

function getValueByName (name, arrValues) {
  for (let i = 0; i < arrValues.length; i++) {
    // debugger
    const arrValueItem = arrValues[i].trim().split(':')
    if (arrValueItem[0].trim() === name) return arrValueItem[1].trim()
  }
  return false
}

// Receive sass variables using string format, to avoid :export problem using inner maps
function strVariantToMap (strVariants) {
  const data = {}

  if (!strVariants) return data

  const tmpVariants = strVariants.substring(1, strVariants.length - 1)

  const strColors = tmpVariants.split(',')
  for (let i = 0; i < strColors.length; i++) {
    let colorStr = strColors[i].trim()
    colorStr = colorStr.substring(1, colorStr.length - 1) // strColors[i]
    const values = colorStr.split(';')
    // console.log(values)
    const colorName = getValueByName('name', values)
    data[colorName] = {
      light: getValueByName('light', values),
      dark: getValueByName('dark', values),
      mixed: getValueByName('mixed', values),
      'mixed-1': getValueByName('mixed-1', values),
      base: getValueByName('base', values),
      trans: getValueByName('trans', values).replace(/\[COMMA\]/g, ',')
    }
  }

  return data
}

export default (skinName) => {
  let variablesColors = skinDefault
  if (skinName === 'blue') variablesColors = skinBlue
  if (skinName === 'blue-light') variablesColors = skinBlueLight
  if (skinName === 'purple') variablesColors = skinPurple
  if (skinName === 'red') variablesColors = skinRed
  if (skinName === 'grey') variablesColors = skinGrey
  if (skinName === 'green') variablesColors = skinGreen
  if (skinName === 'material') variablesColors = skinMaterial
  if (skinName === 'dark-blue') variablesColors = skinDarkBlue
  if (skinName === 'dark-golden') variablesColors = skinDarkGolden
  if (skinName === 'dark-grey') variablesColors = skinDarkGrey
  if (skinName === 'dark-purple') variablesColors = skinDarkPurple
  if (skinName === 'dark-material') variablesColors = skinDarkMaterial
  if (skinName === 'grey-golden') variablesColors = skinGreyGolden
  if (skinName === 'grey-material') variablesColors = skinGreyMaterial
  if (skinName === 'back-image') variablesColors = skinBackImage
  if (skinName === 'color-purple-air') variablesColors = skinColorPurpleAir
  if (skinName === 'color-dark-sky') variablesColors = skinColorDarkSky
  if (skinName === 'color-carbon') variablesColors = skinColorCarbon
  variablesColors.variantsObj = strVariantToMap(variablesColors.variants)

  return variablesColors
}

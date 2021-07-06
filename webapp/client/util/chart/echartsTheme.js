
/*
Define theme settings to echarts
*/

import themeColors from '@@/client/util/theme/themeColors'

var initTheme = async function (echarts, skinName) {
  const variablesColors = themeColors(skinName)

  var colorPalette = [

    variablesColors.variantsObj.primary['mixed-1'],
    variablesColors.variantsObj.theme1['mixed-1'],
    variablesColors.variantsObj.secondary['base'],
    variablesColors.variantsObj.primary['mixed-1'],
    variablesColors.variantsObj.info['base'],
    variablesColors.variantsObj.danger['mixed-1'],
    variablesColors.variantsObj.primary['mixed-1']

  ]

  var theme = {

    color: colorPalette,

    title: {
      show: false,
      textStyle: {
        fontWeight: 'normal'
      }
    },
    legend: {
      textStyle: {
        color: variablesColors.theme1
      }
    },

    textStyle: {
      fontFamily: 'Poppins'
    },

    visualMap: {
      color: [variablesColors.primary, variablesColors.secondary]
    },

    toolbox: {
      show: false,
      iconStyle: {
        normal: {
          borderColor: variablesColors.primary
        }
      }
    },

    tooltip: {
      padding: 20,
      backgroundColor: variablesColors.variantsObj.theme1inv['base'],
      textStyle: {
        color: variablesColors.variantsObj.theme1['base']
      }
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: variablesColors.variantsObj.secondary['mixed-1']
        }
      },
      splitLine: {
        lineStyle: {
          color: [variablesColors.variantsObj.secondary['mixed-1']]
        }
      }
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: variablesColors.theme1
        }
      },

      splitLine: {
        lineStyle: {
          color: [variablesColors.variantsObj.secondary['mixed-1']]
        }
      }
    },

    dataZoom: {
      dataBackgroundColor: variablesColors.theme1inv,
      fillerColor: 'rgba(154,217,247,0.2)',
      handleColor: variablesColors.primary
    },

    timeline: {
      lineStyle: {
        color: variablesColors.primary
      },
      controlStyle: {
        normal: {
          color: variablesColors.primary,
          borderColor: variablesColors.primary
        }
      }
    },

    candlestick: {
      itemStyle: {
        normal: {
          color: variablesColors.primary,
          color0: variablesColors.secondary,
          lineStyle: {
            width: 1,
            color: variablesColors.primary,
            color0: variablesColors.secondary
          }
        }
      }
    },

    graph: {
      color: colorPalette
    },

    map: {
      label: {
        normal: {
          textStyle: {
            color: variablesColors.primary
          }
        },
        emphasis: {
          textStyle: {
            color: variablesColors.secondary
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#eee',
          areaColor: '#ddd'
        },
        emphasis: {
          areaColor: variablesColors.primary
        }
      }
    },

    gauge: {
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, variablesColors.primary], [0.8, variablesColors.secondary], [1, variablesColors.danger]],
          width: 5
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 8,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        length: '90%',
        width: 3,
        color: 'auto'
      },
      title: {
        textStyle: {
          color: '#333'
        }
      },
      detail: {
        textStyle: {
          color: 'auto'
        }
      }
    }
  }
  // console.log('echart pallete', colorPalette)
  //* /
  echarts.registerTheme('default', theme)
}

export { initTheme }


<template>
<wrapper-echarts :options="option"> </wrapper-echarts>
</template>
<script>
import themeColors from '@@/client/util/theme/themeColors.js'
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'

export default {
  components: {
    WrapperEcharts
  },
  computed: {
    option () {
      const variablesColors = themeColors(this.$store.state.theme.skin)
      var colors = [
        variablesColors.variantsObj.danger.mixed,
        variablesColors.variantsObj.secondary.mixed,
        variablesColors.variantsObj.theme1.mixed,
        variablesColors.variantsObj.danger.mixed,
        variablesColors.variantsObj.dark.mixed.mixed
      ]
      var bgColor = variablesColors.theme2inv
      var itemStyle = {
        star5: {
          color: colors[0]
        },
        star4: {
          color: colors[1]
        },
        star3: {
          color: colors[2]
        },
        star2: {
          color: colors[3]
        }
      }
      var data = [{
        name: 'Profit',
        itemStyle: {
          normal: {
            color: colors[1]
          }
        },
        children: [{
          name: 'Productivity',
          children: [{
            name: '5☆',
            children: [{
              name: 'Aggregate'
            }, {
              name: 'Profit'
            }, {
              name: 'Valuable'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Replacement'
            }, {
              name: 'Flex'
            }, {
              name: 'New Site'
            }]
          }, {
            name: '3☆',
            children: [{
              name: 'A/B Test'
            }]
          }]
        }, {
          name: 'Business',
          children: [{
            name: '5☆',
            children: [{
              name: 'Region A'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Social'
            }, {
              name: 'Region B'
            }]
          }, {
            name: '3☆',
            children: [{
              name: 'Region C'
            }]
          }]
        }]
      }, {
        name: 'Cost',
        itemStyle: {
          color: colors[2]
        },
        children: [{
          name: 'Grow',
          children: [{
            name: '5☆',
            children: [{
              name: 'Mult Channel'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Marketplace'
            }, {
              name: 'IA'
            }]
          }, {
            name: '3☆',
            children: [{
              name: 'Gamefication'
            }]
          }]
        }, {
          name: 'Key I',
          children: [{
            name: '5☆',
            children: [{
              name: 'Modern'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Marketing'
            }, {
              name: 'Contacts'
            }, {
              name: 'Leads'
            }]
          }, {
            name: '3☆',
            children: [{
              name: 'Sales'
            }]
          }]
        }, {
          name: 'Content',
          children: [{
            name: '5☆',
            children: [{
              name: 'Key A'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Key B'
            }, {
              name: 'Key C'
            }]
          }, {
            name: '3☆'
          }, {
            name: '2☆',
            children: [{
              name: 'Key D'
            }]
          }]
        }, {
          name: 'P.O.',
          children: [{
            name: '4☆',
            children: [{
              name: 'PC'
            }, {
              name: 'Smartphone'
            }, {
              name: 'Tablet'
            }]
          }]
        }, {
          name: 'Key J',
          children: [{
            name: '5☆',
            children: [{
              name: 'Linux'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Livechat'
            }, {
              name: 'Mail'
            }]
          }, {
            name: '3☆',
            children: [{
              name: 'Key X'
            }]
          }]
        }, {
          name: 'Reativity',
          children: [{
            name: '4☆',
            children: [{
              name: 'Small'
            }]
          }]
        }, {
          name: 'Tree',
          children: [{
            name: '5☆',
            children: [{
              name: 'Big'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'BS'
            }]
          }]
        }]
      }]

      for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children

        for (var i = 0; i < level1.length; ++i) {
          var block = level1[i].children
          var bookScore = []
          var bookScoreId

          for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
              switch (name) {
                case '5☆':
                  bookScoreId = 0
                  return itemStyle.star5

                case '4☆':
                  bookScoreId = 1
                  return itemStyle.star4

                case '3☆':
                  bookScoreId = 2
                  return itemStyle.star3

                case '2☆':
                  bookScoreId = 3
                  return itemStyle.star2
              }
            }(block[star].name))

            block[star].label = {
              color: style.color,
              downplay: {
                opacity: 0.5
              }
            }

            if (block[star].children) {
              style = {
                opacity: 1,
                color: style.color
              }
              block[star].children.forEach(function (book) {
                book.value = 1
                book.itemStyle = style
                book.label = {
                  color: style.color
                }
                var value = 1

                if (bookScoreId === 0 || bookScoreId === 3) {
                  value = 5
                }

                if (bookScore[bookScoreId]) {
                  bookScore[bookScoreId].value += value
                } else {
                  bookScore[bookScoreId] = {
                    color: colors[bookScoreId],
                    value
                  }
                }
              })
            }
          }

          level1[i].itemStyle = {
            color: data[j].itemStyle.color
          }
        }
      }

      let option = {
        // backgroundColor: bgColor,
        color: colors,
        series: [{
          type: 'sunburst',
          center: ['50%', '48%'],
          data,

          sort (a, b) {
            if (a.depth === 1) {
              return b.getValue() - a.getValue()
            } else {
              return a.dataIndex - b.dataIndex
            }
          },

          label: {
            rotate: 'radial',
            color: bgColor
          },
          itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
          },
          levels: [{}, {
            r0: 0,
            r: 40,
            label: {
              rotate: 0
            }
          }, {
            r0: 40,
            r: 105
          }, {
            r0: 115,
            r: 140,
            itemStyle: {
              color: variablesColors.light
            },
            label: {
              rotate: 'tangential',
              fontSize: 10,
              color: colors[0]
            }
          }, {
            r0: 140,
            r: 145,
            label: {
              position: 'outside',
              textShadowColor: '#333'
            },
            downplay: {
              label: {
                opacity: 0.5
              }
            }
          }]
        }]
      }
      return option
    }

  }
}

</script>

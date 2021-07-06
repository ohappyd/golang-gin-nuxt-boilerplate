
<template>
<wrapper-echarts :options="options"> </wrapper-echarts>
</template>
<script>
import WrapperEcharts from '@/components/Module/Chart/Echarts/WrapperEcharts'
import defaultPropsMixin from '@@/client/util/chart/defaultPropsMixin'

/*
Example of component for rendering tree chart of the echarts library
*/
export default {
  components: {
    WrapperEcharts
  },
  mixins: [defaultPropsMixin],

  data () {
    let option = {
      title: {
        text: this.title,
        subtext: this.subtitle
      },
      toolbox: {
        show: false,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      series: [{
        name: 'Tree',
        type: 'tree',
        orient: 'horizontal',
        // vertical horizontal
        rootLocation: {
          x: 100,
          y: 230
        },
        // Node root position {x: 100, y: 'center'}
        nodePadding: 8,
        layerPadding: 200,
        hoverable: false,
        roam: true,
        symbolSize: 6,
        itemStyle: {
          normal: {
            color: '#4883b4',
            label: {
              show: true,
              position: 'right',
              formatter: '{b}',
              textStyle: {
                color: '#000',
                fontSize: 5
              }
            },
            lineStyle: {
              color: '#ccc',
              type: 'curve' // 'curve' | 'broken' | 'solid' | 'dotted' | 'dashed'

            }
          },
          emphasis: {
            color: '#4883b4',
            label: {
              show: false
            },
            borderWidth: 0
          }
        },
        data: [{
          'name': 'Ice Bucket Challenge',
          'children': [{
            'name': 'Liuzuo Hu',
            'children': [{
              'name': 'Zhou',
              'children': [{
                'name': 'Ma'
              }, {
                'name': 'Xu Xiaoping',
                'children': [{
                  'name': 'Niu Wenwen',
                  'children': [{
                    'name': 'YaoJinBo',
                    'children': [{
                      'name': 'CaiWenSheng'
                    }, {
                      'name': 'Cai'
                    }, {
                      'name': 'Wang Fei'
                    }]
                  }, {
                    'name': 'Yangshou Bin',
                    'children': [{
                      'name': 'All the entrepreneurs'
                    }, {
                      'name': 'All of the investors'
                    }, {
                      'name': 'All the business services'
                    }]
                  }, {
                    'name': 'Pu Yi'
                  }]
                }, {
                  'name': 'Luo Zhenyu',
                  'children': [{
                    'name': '25000 members Luo Ji thinking'
                  }]
                }, {
                  'name': 'Wong'
                }]
              }, {
                'name': 'Huang Zhang'
              }]
            }, {
              'name': 'Overheating'
            }, {
              'name': 'Liu Jiangfeng',
              'children': [{
                'name': 'He Gang',
                'children': [{
                  'name': 'Xie Qingjiang'
                }, {
                  'name': 'Xiang Wang'
                }, {
                  'name': 'Ai Wei'
                }]
              }, {
                'name': 'Wang Yulei'
              }]
            }]
          }, {
            'name': 'Lei Jun',
            'children': [{
              'name': 'Andy',
              'children': [{
                'name': 'invigorating'
              }, {
                'name': 'So Wa-wai'
              }, {
                'name': 'Jay',
                'children': [{
                  'name': 'Vincent Fang',
                  'children': [{
                    'name': 'Giddens'
                  }, {
                    'name': 'Alan Ko'
                  }]
                }, {
                  'name': 'Mayday',
                  'children': [{
                    'name': 'Xie Jin Yan',
                    'children': [{
                      'name': 'Zhao Hui Sin'
                    }, {
                      'name': 'Fei',
                      'children': [{
                        'name': 'Small S'
                      }]
                    }, {
                      'name': 'Aaron'
                    }]
                  }, {
                    'name': 'Olivia'
                  }, {
                    'name': 'Takeshi'
                  }]
                }]
              }]
            }, {
              'name': 'Li',
              'children': [{
                'name': 'Michael Yu'
              }, {
                'name': 'Pan',
                'children': [{
                  'name': 'Ren'
                }]
              }, {
                'name': 'Tian',
                'children': [{
                  'name': 'Wang Yuelun'
                }, {
                  'name': 'small Shenyang'
                }, {
                  'name': 'Xiaopeng'
                }]
              }]
            }, {
              'name': 'Gou',
              'children': [{
                'name': 'Son',
                'children': [{
                  'name': 'Manabu Miyasaka'
                }]
              }, {
                'name': 'Xiaoliang Sunney Xie'
              }, {
                'name': 'ling'
              }]
            }]
          }, {
            'name': 'Koo',
            'children': [{
              'name': 'Ma'
            }, {
              'name': 'Wang Changtian',
              'children': [{
                'name': 'Deng Chao',
                'children': [{
                  'name': 'Yu mangabey',
                  'children': [{
                    'name': 'Yao Chen',
                    'children': [{
                      'name': 'Xiubo'
                    }, {
                      'name': 'Daniel'
                    }, {
                      'name': 'Honglei'
                    }]
                  }, {
                    'name': 'ZhuFangYu',
                    'children': [{
                      'name': 'wangshipeng',
                      'children': [{
                        'name': 'Yi'
                      }]
                    }]
                  }, {
                    'name': 'Liang Chao'
                  }]
                }]
              }, {
                'name': 'Crystal Liu'
              }, {
                'name': 'Liu Tong'
              }]
            }]
          }, {
            'name': 'Zhu Ting',
            'children': [{
              'name': 'Zhang Yaokun',
              'children': [{
                'name': 'Jiang Ning'
              }, {
                'name': 'Don Miao'
              }]
            }, {
              'name': 'ZhouHaiBin',
              'children': [{
                'name': 'WangSong',
                'children': [{
                  'name': 'Cai'
                }, {
                  'name': 'Li Yi Feng'
                }, {
                  'name': 'Wang Tao'
                }]
              }, {
                'name': 'Shao'
              }, {
                'name': 'High Di',
                'children': [{
                  'name': 'Moreno'
                }, {
                  'name': 'Enrique'
                }, {
                  'name': 'Paul'
                }]
              }]
            }, {
              'name': 'Yan Chuang small'
            }]
          }, {
            'name': 'Lu Zheng',
            'children': [{
              'name': 'Ka',
              'children': [{
                'name': 'Da Peng',
                'children': [{
                  'name': 'Iraq a',
                  'children': [{
                    'name': 'XuSong'
                  }, {
                    'name': 'Fu Xin Bo'
                  }, {
                    'name': 'Hong Chen'
                  }]
                }, {
                  'name': 'Wong Cho Lam',
                  'children': [{
                    'name': 'Ivana'
                  }, {
                    'name': 'Leanne',
                    'children': [{
                      'name': 'Song Hee Yr.'
                    }, {
                      'name': 'Linda'
                    }, {
                      'name': 'Macy Chan'
                    }]
                  }, {
                    'name': 'Jia Ling'
                  }]
                }, {
                  'name': 'off white',
                  'children': [{
                    'name': 'Yu Sheng',
                    'children': [{
                      'name': 'evil child'
                    }, {
                      'name': 'Du Haitao'
                    }, {
                      'name': 'Wang Han'
                    }]
                  }, {
                    'name': 'faction Specter'
                  }, {
                    'name': 'Xie Di',
                    'children': [{
                      'name': 'C-BLOCK chubby'
                    }, {
                      'name': 'Fanyuan Cheng'
                    }, {
                      'name': 'Mike Sui',
                      'children': [{
                        'name': 'High Godfrey'
                      }, {
                        'name': 'Chucheng'
                      }]
                    }]
                  }]
                }]
              }, {
                'name': 'Yi, Ai, JiangYingRong'
              }]
            }, {
              'name': 'Kevin Han'
            }]
          }, {
            'name': 'Shude Wei',
            'children': [{
              'name': 'Yao'
            }, {
              'name': 'NBAChile staff'
            }]
          }, {
            'name': 'as prop-leaf',
            'children': [{
              'name': 'Zhai present Joe'
            }, {
              'name': 'Ji Xiaohua',
              'children': [{
                'name': 'Sicong',
                'children': [{
                  'name': 'Easy revitalization',
                  'children': [{
                    'name': 'Xu Lei'
                  }, {
                    'name': 'TongDaWei',
                    'children': [{
                      'name': 'Meng Fei',
                      'children': [{
                        'name': 'GuoDeGang',
                        'children': [{
                          'name': 'Yu Qian'
                        }]
                      }, {
                        'name': 'Huang',
                        'children': [{
                          'name': 'ZhangLinPeng',
                          'children': [{
                            'name': 'HuangBoWen'
                          }, {
                            'name': 'Shuai'
                          }]
                        }, {
                          'name': 'Gao Lin',
                          'children': [{
                            'name': 'Jianhong'
                          }, {
                            'name': 'LiWeiFeng'
                          }]
                        }]
                      }]
                    }, {
                      'name': 'Edward'
                    }, {
                      'name': 'AKB48'
                    }]
                  }, {
                    'name': 'Wuxin Hong',
                    'children': [{
                      'name': 'Jia Nailiang'
                    }, {
                      'name': 'Lu Lu'
                    }, {
                      'name': 'angelababy'
                    }]
                  }]
                }, {
                  'name': 'Lin update',
                  'children': [{
                    'name': 'Chao'
                  }, {
                    'name': 'Tong Li Ya'
                  }, {
                    'name': 'AngelaBaby'
                  }]
                }, {
                  'name': 'Liu'
                }]
              }, {
                'name': 'Wei Kunlin',
                'children': [{
                  'name': 'Perceived late'
                }, {
                  'name': 'Li Miao'
                }, {
                  'name': 'Jiang Zhenyu'
                }]
              }, {
                'name': 'Liu Chengcheng',
                'children': [{
                  'name': 'Zhang Ying'
                }, {
                  'name': 'King freely',
                  'children': [{
                    'name': 'Liu'
                  }, {
                    'name': 'Wu'
                  }, {
                    'name': 'Fu Sheng'
                  }]
                }, {
                  'name': 'WangFeng'
                }]
              }]
            }]
          }, {
            'name': 'Xiao agronomically',
            'children': [{
              'name': 'Lin Chen',
              'children': [{
                'name': 'Ko Wen-je',
                'children': [{
                  'name': 'Jaw'
                }, {
                  'name': 'Wei Te-sheng'
                }, {
                  'name': 'Guo dry'
                }]
              }, {
                'name': 'straight text',
                'children': [{
                  'name': 'Hau',
                  'children': [{
                    'name': 'Luc Besson'
                  }, {
                    'name': 'Hu'
                  }, {
                    'name': 'Chiu Wen-ta'
                  }]
                }, {
                  'name': 'Chu'
                }, {
                  'name': 'Wu Se-hwa'
                }]
              }, {
                'name': 'In tube Min',
                'children': [{
                  'name': 'Woody Duh'
                }, {
                  'name': 'Chen Bao-ji'
                }, {
                  'name': 'Young Panchi'
                }]
              }]
            }, {
              'name': 'Chensu Lan',
              'children': [{
                'name': 'Yen',
                'children': [{
                  'name': 'Zhan Hongzhi',
                  'children': [{
                    'name': 'Niu'
                  }, {
                    'name': 'Jonathan Lee'
                  }, {
                    'name': 'He Feipeng'
                  }]
                }, {
                  'name': 'Chenqing Xiang',
                  'children': [{
                    'name': 'Can a Yellow Sun'
                  }, {
                    'name': 'Huang Shenghua'
                  }, {
                    'name': 'Wu liter odd'
                  }]
                }]
              }]
            }, {
              'name': 'Cai herdsman'
            }]
          }, {
            'name': 'Lin',
            'children': [{
              'name': 'Landry - Fields'
            }, {
              'name': 'Parsons'
            }]
          }, {
            'name': 'Wang Meng',
            'children': [{
              'name': 'Yang Yi'
            }, {
              'name': 'Van Ke'
            }, {
              'name': 'StephonMarbury'
            }]
          }, {
            'name': 'Michelle',
            'children': [{
              'name': 'Li Chen'
            }, {
              'name': 'somans',
              'children': [{
                'name': 'Xiaoming',
                'children': [{
                  'name': 'Bingbing'
                }, {
                  'name': 'Joke',
                  'children': [{
                    'name': 'In Wang Jun'
                  }, {
                    'name': 'LOS ANGELES'
                  }]
                }]
              }]
            }, {
              'name': 'Chen Ou'
            }]
          }, {
            'name': 'Zhang',
            'children': [{
              'name': 'TFBoys',
              'children': [{
                'name': 'Shangge Yun Dayton'
              }]
            }, {
              'name': 'Han',
              'children': [{
                'name': 'Michael Bay'
              }, {
                'name': 'Kyung Ho'
              }, {
                'name': 'Na Ying'
              }]
            }, {
              'name': 'Marceau'
            }]
          }, {
            'name': 'Jane Zhang',
            'children': [{
              'name': 'Jie',
              'children': [{
                'name': 'happy family'
              }, {
                'name': 'Li'
              }, {
                'name': 'Hsiao'
              }]
            }, {
              'name': 'Reno',
              'children': [{
                'name': 'Every day the brothers'
              }, {
                'name': 'martial arts',
                'children': [{
                  'name': 'Genie',
                  'children': [{
                    'name': 'Liao Junjie',
                    'children': [{
                      'name': 'Even Chen Xiang',
                      'children': [{
                        'name': 'Ma Zhenhuan'
                      }, {
                        'name': 'Xiao Huang Qi'
                      }, {
                        'name': 'poetry Ann'
                      }]
                    }]
                  }]
                }, {
                  'name': 'Ah Wei'
                }, {
                  'name': 'Ken Hung'
                }]
              }, {
                'name': 'DJ Xiaoqiang'
              }]
            }, {
              'name': 'Timbaland'
            }]
          }, {
            'name': 'Deng purple chess',
            'children': [{
              'name': 'Li Yun',
              'children': [{
                'name': 'Chaolian',
                'children': [{
                  'name': 'Kenji',
                  'children': [{
                    'name': 'Ho Yau Kai'
                  }, {
                    'name': 'fir Ze'
                  }]
                }, {
                  'name': 'Kati Na'
                }, {
                  'name': 'jw_amusic'
                }]
              }, {
                'name': 'Shi Ya'
              }, {
                'name': 'Chen'
              }]
            }, {
              'name': 'Choi',
              'children': [{
                'name': 'Gillian',
                'children': [{
                  'name': 'Qiao Zhenyu',
                  'children': [{
                    'name': 'Tianyu'
                  }, {
                    'name': 'William Chan',
                    'children': [{
                      'name': 'Mani'
                    }]
                  }, {
                    'name': 'High Weiguang'
                  }]
                }, {
                  'name': 'Nick Chou'
                }, {
                  'name': 'Alien Huang'
                }]
              }, {
                'name': 'Xie Na'
              }, {
                'name': 'Chim'
              }]
            }, {
              'name': 'Shira',
              'children': [{
                'name': 'EXO-M'
              }, {
                'name': 'Moo'
              }]
            }]
          }, {
            'name': 'Michelle Wai',
            'children': [{
              'name': 'Sandra'
            }, {
              'name': 'Matt Chow'
            }, {
              'name': 'Sherman Chung'
            }]
          }, {
            'name': 'Joey',
            'children': [{
              'name': 'Tony'
            }, {
              'name': 'Wyman'
            }]
          }, {
            'name': 'Calvin',
            'children': [{
              'name': 'Eason',
              'children': [{
                'name': 'Nicholas',
                'children': [{
                  'name': 'Lunmei Kwai',
                  'children': [{
                    'name': 'Shu Qi'
                  }, {
                    'name': 'Mei'
                  }, {
                    'name': 'Stefanie'
                  }]
                }, {
                  'name': 'Lindane'
                }, {
                  'name': 'Yundi'
                }]
              }, {
                'name': 'Mavis'
              }, {
                'name': 'a white sheet',
                'children': [{
                  'name': 'Eddie',
                  'children': [{
                    'name': 'LinChaoXian'
                  }]
                }, {
                  'name': 'Wei Chen',
                  'children': [{
                    'name': 'Qin Kai',
                    'children': [{
                      'name': 'Sun Yang',
                      'children': [{
                        'name': 'Jacky'
                      }, {
                        'name': 'Chinese Shao'
                      }]
                    }, {
                      'name': 'Wu Min Xia'
                    }, {
                      'name': 'Chen Yibing'
                    }]
                  }]
                }, {
                  'name': 'Zhangjia Jia'
                }]
              }]
            }, {
              'name': 'Eric Kot'
            }, {
              'name': 'Ekin',
              'children': [{
                'name': 'Jordan Chan'
              }, {
                'name': 'Tse'
              }]
            }]
          }, {
            'name': 'JJ',
            'children': [{
              'name': 'Hom'
            }, {
              'name': 'Tsai'
            }]
          }, {
            'name': 'Zheng Xu',
            'children': [{
              'name': 'Jet'
            }, {
              'name': 'Han'
            }, {
              'name': 'Vicki'
            }]
          }, {
            'name': 'sub-cycle ink Liu',
            'children': [{
              'name': 'Jacky'
            }, {
              'name': 'Yang Shanshan'
            }]
          }, {
            'name': 'Wang Zijian',
            'children': [{
              'name': 'Zheng Kai'
            }, {
              'name': 'Liu Jiang'
            }, {
              'name': 'Tao'
            }]
          }, {
            'name': 'Lo Zhenhuan',
            'children': [{
              'name': 'Zou Kai',
              'children': [{
                'name': 'XuSong'
              }, {
                'name': 'Zhangcheng'
              }, {
                'name': 'Zou Shiming'
              }]
            }, {
              'name': 'Ju snow',
              'children': [{
                'name': 'Yujing Xi',
                'children': [{
                  'name': 'Zhangxiang Ling',
                  'children': [{
                    'name': 'PLUMillet'
                  }, {
                    'name': 'High horizon'
                  }]
                }, {
                  'name': 'Dai Shi',
                  'children': [{
                    'name': 'Yang Fengzhi'
                  }, {
                    'name': 'Li Xin'
                  }, {
                    'name': 'Wei Lu present',
                    'children': [{
                      'name': 'Sun Yalong'
                    }, {
                      'name': 'FIG Shen Qu'
                    }, {
                      'name': 'Zhu rights'
                    }]
                  }]
                }, {
                  'name': 'Pei music',
                  'children': [{
                    'name': 'Shen Weirong',
                    'children': [{
                      'name': 'Jin Yibo'
                    }, {
                      'name': 'Bianzheng Wei'
                    }]
                  }, {
                    'name': 'LI'
                  }]
                }]
              }, {
                'name': 'Kong Lianshun',
                'children': [{
                  'name': 'Old wet',
                  'children': [{
                    'name': 'Extreme Jade'
                  }, {
                    'name': 'Ma'
                  }, {
                    'name': 'Yan potatoes avi'
                  }]
                }, {
                  'name': 'Little Love'
                }, {
                  'name': 'Ma poetry',
                  'children': [{
                    'name': 'Yu Zhang'
                  }]
                }]
              }, {
                'name': 'Sun Bowen',
                'children': [{
                  'name': 'Chen Jian book'
                }, {
                  'name': 'Chenqi Dong'
                }, {
                  'name': 'Tenglin season'
                }]
              }]
            }, {
              'name': 'Chen Jianhong',
              'children': [{
                'name': 'Yi',
                'children': [{
                  'name': 'Aaron'
                }, {
                  'name': 'Sandrine Pinna'
                }, {
                  'name': 'David Liu'
                }]
              }, {
                'name': 'Peter Ho',
                'children': [{
                  'name': 'YuYongFu',
                  'children': [{
                    'name': 'Chao'
                  }, {
                    'name': 'Yu ChengDong'
                  }, {
                    'name': 'Jin Chi',
                    'children': [{
                      'name': 'Gary'
                    }, {
                      'name': 'Weixue Man'
                    }, {
                      'name': 'Zeng Yiming'
                    }]
                  }]
                }, {
                  'name': 'Dylan Kuo'
                }, {
                  'name': 'Wallace'
                }]
              }, {
                'name': 'Jang Keun Suk'
              }]
            }]
          }, {
            'name': 'Tu Song Yan',
            'children': [{
              'name': 'Haiqing'
            }, {
              'name': 'Zhang Yun Yi'
            }, {
              'name': 'may Wang Yuan'
            }]
          }, {
            'name': 'Gordon Chan',
            'children': [{
              'name': 'packet Bell',
              'children': [{
                'name': 'Chen He'
              }, {
                'name': 'Yang Shan'
              }]
            }]
          }, {
            'name': 'leave a few hands',
            'children': [{
              'name': 'Xiahe'
            }, {
              'name': 'Lu Qi',
              'children': [{
                'name': 'Bei Zhicheng'
              }, {
                'name': 'Sun Jie'
              }]
            }, {
              'name': 'Zhang Xin Yuan',
              'children': [{
                'name': 'Huang Xuan'
              }, {
                'name': 'Yuki Furukawa'
              }, {
                'name': 'Jinfu Jiang'
              }]
            }]
          }, {
            'name': 'Yumiko',
            'children': [{
              'name': 'Leo',
              'children': [{
                'name': 'Choi Si',
                'children': [{
                  'name': 'Pu Zhengzhu'
                }, {
                  'name': 'Kim Hee Chul'
                }]
              }, {
                'name': 'Dayo'
              }]
            }]
          }, {
            'name': 'Ning Hao',
            'children': [{
              'name': 'Xu Zheng'
            }, {
              'name': 'Huang Bo'
            }, {
              'name': 'Ray good news'
            }]
          }, {
            'name': 'Niu Ze',
            'children': [{
              'name': 'Chen meaning',
              'children': [{
                'name': 'Janine Chang'
              }, {
                'name': 'Wilson Chen',
                'children': [{
                  'name': 'William Feng'
                }, {
                  'name': 'High Huayang',
                  'children': [{
                    'name': 'Crowding'
                  }, {
                    'name': 'Li Donglin'
                  }, {
                    'name': 'Green Summer'
                  }]
                }]
              }, {
                'name': 'Ji Jin Hee'
              }]
            }, {
              'name': 'Ethan'
            }]
          }, {
            'name': 'Zhouxian Yang',
            'children': [{
              'name': 'Wang Luo Dan'
            }, {
              'name': 'Well Bo Ran'
            }, {
              'name': 'ZhangJin'
            }]
          }, {
            'name': 'Dee',
            'children': [{
              'name': 'Tsai'
            }]
          }, {
            'name': 'Liu Wei',
            'children': [{
              'name': 'Yangqi Yu',
              'children': [{
                'name': 'Eric'
              }, {
                'name': 'Zhang Aija',
                'children': [{
                  'name': 'Serena Fang'
                }]
              }]
            }, {
              'name': 'Raymond'
            }]
          }, {
            'name': 'Nick Chou',
            'children': [{
              'name': 'Owodog',
              'children': [{
                'name': 'Luo'
              }, {
                'name': 'Linda Chien'
              }]
            }, {
              'name': 'Will Lin Heng'
            }, {
              'name': 'Wangxue E',
              'children': [{
                'name': 'Hong Wei Ning'
              }]
            }]
          }, {
            'name': 'Ying Yang',
            'children': [{
              'name': 'Ni Ni'
            }]
          }, {
            'name': 'Dong Zaijian',
            'children': [{
              'name': 'Guo Jingfei',
              'children': [{
                'name': 'Anita'
              }, {
                'name': 'money aryl'
              }]
            }, {
              'name': 'Lu Yi'
            }, {
              'name': 'Kwan'
            }]
          }]
        }]
      }]
    }
    return {
      options: option
    }
  },

  methods: {}
}

</script>


<style lang="scss" scoped>
.echarts {
  flex: 20 20 20em;
}
.list-group {
  flex: 1 1 10em;
}
.list-group-item {
  background-color: #15194052;
  border-top: 1px solid #384478;
  border-radius: 0;
  color: #fff;
}
.border-none,
.border-none.list-group-item {
  border-radius: 0;
}
.item-legend {
  margin: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  .label {
    font-size: 20px;
  }
  .text {
    font-size: 12px;
  }
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}

</style>



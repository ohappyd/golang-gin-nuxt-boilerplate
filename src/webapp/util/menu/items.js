/*
Main item menu array list
*/
var menu = [
  {
    header: true,
    title: 'Main',
    hiddenOnCollapse: true
  },
  {
    title: 'Dashboards',
    icon: ['dripicons-home', 'typcn typcn-home'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/dashboard/',
        title: 'Dashboard 1'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/dashboard/1',
        title: 'Dashboard 2'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/dashboard/2',
        title: 'Dashboard 3  '
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/dashboard/3',
        title: 'Dashboard 4 '
      }
      /* {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/dashboard/4',
        title: 'Dashboard 5'
      } */
    ]
  },
  {
    title: 'Applications',
    icon: ['dripicons-view-thumb', 'typcn typcn-th-large'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/mail',
        title: 'Mail'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/chat',
        title: 'Chat'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/calendar/',
        title: 'Calendar'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/todo/kanban/',
        title: 'Kanban Board'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/social/',
        title: 'Social'
      }
    ]
  },
  {
    header: true,
    title: 'Advanced UI',
    hiddenOnCollapse: true
  },
  {
    title: 'Charts',
    icon: ['dripicons-graph-pie', 'typcn typcn-chart-pie'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/bar',
        title: 'Bars'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/candlestick',
        title: 'Candlestick'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/funnel',
        title: 'Funnel'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/gauge',
        title: 'Gauge'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/graph',
        title: 'Graph'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/line',
        title: 'Line'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/pie',
        title: 'Pie'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/radar',
        title: 'Radar'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/scatter',
        title: 'Scatter'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/tree',
        title: 'Tree'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/chart/treemap',
        title: 'Treemap'
      }
    ]
  },

  {
    header: true,
    title: 'Components',
    hiddenOnCollapse: true
  },
  {
    title: 'Basic UI',
    icon: ['dripicons-browser', 'typcn typcn-puzzle'],
    child: [
      {
        title: 'Icons',
        href: '#',
        child: [
          {
            icon: ['v-internal-icon', 'typcn typcn-media-record'],
            href: '/ui/icon/FontAwesome/',
            title: 'Font Awesome'
          },
          {
            icon: ['v-internal-icon', 'typcn typcn-media-record'],
            href: '/ui/icon/Typicons/',
            title: 'Typicons'
          }
        ]
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/alert/',
        title: 'Alerts'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/badge/',
        title: 'Badges'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/breadcrumb/',
        title: 'Breadcrumbs'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/button/',
        title: 'Buttons'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/button-group/',
        title: 'Button Group'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/card/',
        title: 'Card'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/carousel/',
        title: 'Carousel'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/collapse/',
        title: 'Collapse'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/dropdown/',
        title: 'Dropdown'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/embed/',
        title: 'Embed'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/image/',
        title: 'Image'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/jumbotron/',
        title: 'Jumbotron'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/link/',
        title: 'Link'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/list-group/',
        title: 'List Group'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/media/',
        title: 'Media'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/modal/',
        title: 'Modal'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/nav/',
        title: 'Nav'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/navbar/',
        title: 'Navbar'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/pagination/',
        title: 'Pagination'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/pagination-nav/',
        title: 'Pagination Nav'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/popover/',
        title: 'Popover'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/progress/',
        title: 'Progress'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/spinner/',
        title: 'Spinner'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/table/',
        title: 'Table'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/tab/',
        title: 'Tab'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/tooltip/',
        title: 'Tooltip'
      }
    ]
  },
  {
    title: 'Widgets',
    icon: ['dripicons-calendar', 'typcn typcn-flash'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/widget/weather/',
        title: 'Weather'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/widget/editor/',
        title: 'Editor'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/widget/upload/',
        title: 'Upload'
      }
    ]
  },
  {
    header: true,
    title: 'Forms',
    hiddenOnCollapse: true
  },
  {
    title: 'Forms',
    icon: ['dripicons-document-edit', 'typcn typcn-spanner'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form/',
        title: 'Basic Form'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-checkbox/',
        title: 'Checkbox'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-file/',
        title: 'File'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-group/',
        title: 'Form Group'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-input/',
        title: 'Input'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-radio/',
        title: 'Radio'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-select/',
        title: 'Select'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/ui/bootstrap/form-textarea/',
        title: 'Text Area'
      }
    ]
  },
  {
    header: true,
    title: 'Bonus',
    hiddenOnCollapse: true
  },
  {
    title: 'Extra Pages',
    icon: ['dripicons-weight', 'typcn typcn-starburst'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/frontend/user/login/',
        title: 'Login'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/frontend/user/register/',
        title: 'Register'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/doc/basic/getting-started',
        title: 'Documentation'
      }

    ]
  }

]

export { menu }

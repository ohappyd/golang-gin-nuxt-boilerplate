const { resolve } = require("path");
const package = require("./package.json");

module.exports = {
  dev: process.env.NODE_ENV !== "production",
  target: "server",
  telemetry: false,
  build: {
    cssSourceMap: false,
    parallel: false,
    cache: true,
    hardSource: true,
    optimizeCss: true,
    extractCSS: false,
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[contenthash].js'
    },
    transpile: ['feathers-vuex'],
  },
  env: {
    disableAuth: process.env.DISABLE_AUTH || false,
    apiURL: process.env.API_URL || "//localhost:3031"
  },
  ssr: false,
  srcDir: resolve(__dirname, "./client"),
  router: {
    middleware: ["component-meta", "theme", "persist-skin", "auth"],
    extendRoutes(routes, resolve) {
      const newRoutes = []
      for (let i = 0; i < routes.length; i++) {
        for (let l = 1; l <= 10; l++) {
          const newRoute = { ...routes[i] }
          const layout = 'demo' + l
          newRoute.path = '/' + layout + newRoute.path
          newRoute.name = layout + '-' + newRoute.name
          if (!newRoute.meta) newRoute.meta = {}
          newRoute.meta.layout = layout


          newRoutes.push(newRoute)
        }
      }
      routes.unshift(...newRoutes)
    }
  },
  head: {
    title: `${package.name} — ${package.description}`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,400,500,600,700"
      },
      {
        rel: "stylesheet",
        href: "/font/typicons/typicons.min.css"
      },
      {
        rel: "stylesheet",
        href: "/font/fontawesome/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "/font/weather-icons/css/weather-icons.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "/font/line-awesome/css/line-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "/font/linearicons/style.css"
      },
      {
        rel: "stylesheet",
        href:
          "/font/dripicons/webfont.css"
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        type: "text/javascript"
      },
    ]
  },
  css: ["normalize.css/normalize.css"],
  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  plugins: [
    { src: "~/plugins/vue-echarts.js", ssr: false },
    { src: "~/plugins/vue-editor.js", ssr: false },
    { src: "~/plugins/vue-filter-date-format.js", ssr: true },
    { src: "~/plugins/vue-numeral-filter.js", ssr: false },
    { src: "~/plugins/vue-upload-multiple-image.js", ssr: false },
    { src: "~/plugins/vue-simple-calendar.js", ssr: false },
    { src: "~/plugins/vue-kanban.js", ssr: false },
    { src: "~/plugins/vue-history-save/index.js", ssr: false },
    { src: "~/plugins/vue-truncate-filter.js" },
    { src: "~/plugins/vue-outside-click.js", ssr: false },
    { src: "~/plugins/vue2-scrollspy.js", ssr: false },
    { src: "~/plugins/vue-image-compare.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
    { src: "~/plugins/vue-perfect-scroll.js", ssr: false },
    { src: '~/plugins/google-analytics.js', ssr: false }
  ],
  vendor: [
    "vue-upload-multiple-image",
    "vue-editor",
    "vue-echarts",
    "vue-simple-calendar",
    "vue-kanban"
  ]
};

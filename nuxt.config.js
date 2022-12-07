export default {
  // const webpack = require('webpack')

  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: '#1b9494',
    height: '5px'
  },
  head: {
    title: 'Reader-Online',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css', media: 'all'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', media: 'all'},
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css', media: 'all', disabled: true },

    ],
    script: [

      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },
      '~/assets/js/collapse.js',
      '~/assets/js/launching.js',
       '~/assets/bootstrap/js/bootstrap.bundle.min.js',
       '~/assets/sidebar/js/main.js'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/theme.min.css',
    '~/assets/css/vendor.min.css',
  ],
  script: [

        {
           src:"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
           type: "text/javascript"
         },
         {
            src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
            type: "text/javascript"
          },
          {
             src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
             type: "text/javascript"
           },

         '~/assets/js/collapse.js',
         '~/assets/js/theme.min.js',
         '~/assets/js/vendor.min.js',
         '~/assets/js/theme-custom.js'
        ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Axios Api URL config
  axios: {
    baseURL: 'https://a69db48e753e.ngrok.io/api/v1',
    browserBaseURL: 'https://a69db48e753e.ngrok.io/api/v1',
    retry: {
      retries: 5
    },
    https: true,
    progress: false
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  buildModules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bordo-nuxtjs-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~plugins/vue-upload-multiple-image', ssr: false },
    '~/plugins/api.js',
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  server:{
    port:8000
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.accessToken',
          global: true,
          required: true,
          type: 'bearer'
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'user/login', method: 'post'},
          logout: { url: 'user/logout', method: 'delete' }, // method delete olacak
          user: { url: 'user/profile', method: 'get' }
        }
      }
    },
    redirect: {
      "login": "/signin",
      "logout": "/",
      "home": "/",
      "callback": "/"
    }
  },
  router: {
    // middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://9741-88-234-31-123.eu.ngrok.io/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

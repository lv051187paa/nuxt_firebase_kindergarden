export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-kindergarten"],
  router: {
    middleware: "vue-kindergarten"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    'nuxt-stripe-module',
    [
      "nuxt-fire",
      {
        useOnly: [
          "auth",
          "firestore",
          "functions",
          "storage",
          "realtimeDb",
          "messaging"
        ],
        customEnv: false,
        functionsLocation: "us-central1",
        config: {
          development: {
            apiKey: "AIzaSyAG8oczsvq1eb-s1jcoPkzLVnlqRYH5V6c",
            authDomain: "test-98b6d.firebaseapp.com",
            databaseURL: "https://test-98b6d.firebaseio.com",
            projectId: "test-98b6d",
            storageBucket: "test-98b6d.appspot.com",
            messagingSenderId: "235497381978",
            appId: "1:235497381978:web:5980e6f8745a427c"
          },
          production: {
            apiKey: "<apiKey>",
            authDomain: "<authDomain>",
            databaseURL: "<databaseURL>",
            projectId: "<projectId>",
            storageBucket: "<storageBucket>",
            messagingSenderId: "<messagingSenderId>"
          }
        }
      }
    ],
  ],
  stripe: {
    version: 'v3',
    publishableKey: 'pk_test_vQn6OGnApEsamNXvrUBbsX7U00c7uBhfob',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

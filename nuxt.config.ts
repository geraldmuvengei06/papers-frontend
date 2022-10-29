// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        // available server side
        apiSecret: 'awesomepapers',
        // exposed client side
        public: {
            apiBase: '/api'
        }
    },
    css: ["@/assets/css/styles.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config")
        }
    }
})

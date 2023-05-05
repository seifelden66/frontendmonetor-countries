// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "/styles/main.scss"],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})

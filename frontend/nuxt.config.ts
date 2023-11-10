// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        shim: false,
    },
    ui: {
        icons: ["ic", "mdi"],
    },
    colorMode: {
        preference: "light",
    },

    modules: ["@nuxt/ui"],
});

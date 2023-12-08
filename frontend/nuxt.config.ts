// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            backendUrl: "",
            frontendUrl: "",
        },
    },
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
    imports: {
        dirs: ["./types"],
    },
    experimental: {
        asyncContext: true,
    },
});

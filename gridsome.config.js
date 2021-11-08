// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jack Mason Dev",
  icon: {
    favicon: "./static/images/icons/icon-512x512.png",
  },
  plugins: [
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Jack Mason",
        startUrl: "/",
        display: "minimal-ui",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,ttf",
        shortName: "Jack Mason",
        themeColor: "#8b3ffc",
        backgroundColor: "#000000",
        icon: "./static/images/icons/icon-512x512.png",
        msTileImage: "",
        msTileColor: "#8b3ffc",
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["ja", "en"],
        fallbackLocale: "en", // fallback language
        defaultLocale: "en", // default language
        enablePathRewrite: false, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'en': require('./src/data/locales/en.json'),
          'ja': require('./src/data/locales/ja.json')
        }
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};

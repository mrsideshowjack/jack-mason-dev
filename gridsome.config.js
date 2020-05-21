// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jack Mason Dev',
  icon:  './static/images/icons/icon-512x512.png',
  plugins:[
    {
        use: 'gridsome-plugin-pwa',
        options: {
            title: 'Gridsome',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            manifestPath: 'static/manifest.json',
            disableServiceWorker: false,
            serviceWorkerPath: 'service-worker.js',
            cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
            shortName: 'Gridsome',
            themeColor: '#666600',
            backgroundColor: '#ffffff',
            icon: 'src/favicon.png',
            msTileImage: '',
            msTileColor: '#666600'
        }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}

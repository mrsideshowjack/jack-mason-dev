// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const projects = require('./src/data/projects.json')

module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'Projects'
    })

    for (const item of projects) {
      contentType.addNode({
        title: item.title,
        href: item.href,
        wip: item.wip,
        date: item.date,
        description: item.description,
        tags: item.tags,
      })
    }
  })
}

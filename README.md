gatsby-config.js
```js
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
      title: ``,
      titleTemplate: `%s · `,
      description: ``,
      author: ` `,
      siteUrl: `https://benzoinfojapan.org`,
      url: `https://benzoinfojapan.org`,
      image: `/icons/icon-96x96.png`,
      lang: `ja`,
      twitterUsername: `@benzoinfojapan`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://benzoinfojapan.org`,
          stripQueryString: true,
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://benzoinfojapan.org',
          sitemap: 'https://benzoinfojapan.org/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      },
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-twitter`,
      `gatsby-transformer-json`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: ` Joho Center`,
          short_name: ``,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/icon.png`,
          icons: [
            {
              src: `icons/icon-72x72.png`,
              sizes: `72x72`,
              type: `image/png`
            },
            {
              src: `icons/icon-96x96.png`,
              sizes: `96x96`,
              type: `image/png`
            },
            {
              src: `icons/icon-128x128.png`,
              sizes: `128x128`,
              type: `image/png`
            },
            {
              src: `icons/icon-144x144.png`,
              sizes: `144x144`,
              type: `image/png`
            },
            {
              src: `icons/icon-152x152.png`,
              sizes: `152x152`,
              type: `image/png`
            },
            {
              src: `icons/icon-192x192.png`,
              sizes: `192x192`,
              type: `image/png`
            },
            {
              src: `icons/icon-384x384.png`,
              sizes: `384x384`,
              type: `image/png`
            },
            {
              src: `icons/icon-512x512.png`,
              sizes: `512x512`,
              type: `image/png`
            },
          ]
        },
      },
      {
        resolve: "gatsby-source-microcms",
        options: {
          apiKey: "xxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
          serviceId: "xxxxxxxxx",
          endpoint: "articles",
          query: {
            limit: 100,
          }
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-xxxxxxxxx-1",
        },
      },
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          indexName: "bij-site",
          queries: [
            {
              query: `{
                allMicrocmsArticles {
                  edges {
                    node {
                      num
                      title
                      body
                      category {
                        name
                      }
                    }
                  }
                }
              }`,
              transformer: ({ data }) => data.allMicrocmsArticles.edges.map(({ node }) => {
                return {
                  id: node.category[0].name + '-article/' + node.num,
                  body: sumarrize(node.body),
                  title: node.title,
                  category: node.category[0].name
                }
              })
            },
          ],
          chunkSize: 100000,
          settings: {
            searchableAttributes: ['body','title'],
            indexLanguages: ['ja'],
            queryLanguages: ['ja'],
            attributesToSnippet: ['body:100']
          },
        },
      },
    ],
}

  let striptags = require('striptags');
function sumarrize(html) {
  const metaDescription = striptags(html).replace(/\r?\n/g, '').trim();
  return metaDescription.length <= 3000
    ? metaDescription
    : metaDescription.slice(0, 3000) + '...';
}
```

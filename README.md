gatsby-config.js
```js
module.exports = {
    siteMetadata: {
      title: ``,
      titleTemplate: `%s · `,
      description: ``,
      author: ``,
      siteUrl: `https://.org`,
      url: `https://.org`,
      image: `/icons/icon-96x96.png`,
      lang: `ja`,
      twitterUsername: `@`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://.org`,
          stripQueryString: true,
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://.org',
          sitemap: 'https://sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      },
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-twitter`,
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      `gatsby-plugin-react-helmet`,
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
          name: `Benzo Joho Center`,
          short_name: `benzoinfojapan`,
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
          apiKey: "",
          serviceId: "",
          endpoint: "articles",
          query: {
            limit: 100,
          }
        },
      },
    ],
  }
```

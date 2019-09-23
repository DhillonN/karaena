module.exports = {
  siteMetadata: {
    title: `Karaena Vincent Photography`,
    description: `Karaena Vincent Photography official website`,
    author: `@dhillonn`,
    siteURL: `https://karaenavincent.co.nz`,
    siteUrl: `https://karaenavincent.co.nz`,
    pathPrefix:"",
    siteLogo:"https://karaenavincent.co.nz/icons/icon-512x512.png",
    siteFBAppID:"417448411986006",
    userTwitter:"@karaenavincent_photography",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karaena Vincent Photography`,
        short_name: `KVP`,
        start_url: `/`,
        background_color: `#d69e5a`,
        theme_color: `#d69e5a`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-drupal',
      options:  {
        baseUrl: 'https://backend.karaenavincent.com/',
        apiBase: 'jsonapi',
        basicAuth:  {
          uername: process.env.DRUPAL_USERNAME,
          password: process.env.DRUPAL_PASSWORD,
        },
      },
    },
    {
      resolve:`gatsby-source-sanity`,
      options:{
        projectId: 'ze246s4x',
        dataset: 'kvp',
        overlayDrafts:true,
        watchMode:true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2197747153781517',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123760459-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "9747889",
        // Enables Google Optimize Experiment ID
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "karaenavincent.co.nz",
      },
    },
    {
resolve: `gatsby-plugin-mailchimp`,
options:{
  endpoint:'https://karaenavincent.us3.list-manage.com/subscribe/post?u=4ea91bdd3a015f78ba3b0a45c&amp;id=7c84b45842'
},
    },
`gatsby-plugin-advanced-sitemap`,
//`gatsby-plugin-remove-trailing-slashes`,
  //  {
    //  resolve: `gatsby-plugin-breadcrumb`,
      //options: {
        //sitemapPath: `/sitemap-pages.xml`,
      //},
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,

  ],
}

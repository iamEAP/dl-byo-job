/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const siteUrl = "https://byo-job.qa.eric.pe"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Move to Dals Långed`,
    description: `The best place in Sweden to work from home.`,
    author: `Dals Långeds Life`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/FPO-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // Cookies and tracking below
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-12PX0L5Z23",
          cookieName: "consent-to-all",
          anonymize: false,
          allowAdFeatures: false,
        },
        // linkedin: {
        //   trackingId: 'YOUR_LINKEDIN_TRACKING_ID',
        //   cookieName: 'consent-li',
        // },
      },
    },
    // SEO stuff below
    {
      resolve: "gatsby-plugin-robots-txt",
      sitemap: `${siteUrl}/sitemap-index.xml`,
      options: {
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
        resolveSiteUrl: () => siteUrl,
        query: `
        {
          allSitePage {
            edges {
              node {
                pageContext
              }
            }
          }
        }
        `,
        resolvePages: ({ allSitePage: { edges } }) => {
          return edges
            .filter(
              ({ node }) =>
                !["/404/", "/404.html"].includes(
                  node.pageContext.i18n.originalPath
                )
            )
            .map(({ node: { pageContext } }) => {
              const { languages, originalPath, path, defaultLanguage } =
                pageContext.i18n
              const baseUrl = siteUrl + originalPath
              const links = [{ lang: "x-default", url: baseUrl }]

              languages.forEach(lang => {
                const isDefaultLang = lang === defaultLanguage
                const isDefaultPath = path === originalPath
                const isLangSubDir = path.includes(`${lang}/`)

                if (isDefaultLang && isDefaultPath) return
                if (!isDefaultLang && isLangSubDir) return

                links.push({
                  lang,
                  url: isDefaultLang
                    ? baseUrl
                    : `${siteUrl}/${lang}${originalPath}`,
                })
              })

              return {
                path,
                url: path === "/" ? siteUrl : `${siteUrl}/${path}`,
                changefreq: "daily",
                priority: originalPath === "/" ? 1.0 : 0.7,
                links,
              }
            })
        },
        serialize: page => page,
      },
    },
    // i18n stuff below
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `sv`],
        defaultLanguage: `en`,
        siteUrl: `https://byoj.dalslangedslife.com`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          fallbackLng: "en",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/",
            languages: ["en", "sv"],
          },
        ],
      },
    },
  ],
}

import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO/SEO"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t("404_page_title")} />
      <h1>{t("404_page_title")}</h1>
      <p>{t("404_page_description")}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["404"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default NotFoundPage

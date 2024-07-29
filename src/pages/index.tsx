import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Hero from "../components/Hero/Hero"
import LogoCollection from "../components/LogoCollection/LogoCollection"
import Highlights from "../components/Highlights/Highlights"
import Features from "../components/Features/Features"
import Testimonials from "../components/Testimonials/Testimonials"
import FAQ from "../components/FAQ/FAQ"
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material"
import SEO from "../components/SEO/SEO"
import Footer from "../components/Footer/Footer"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  return React.useMemo(
    () =>
      createTheme({
        // @ts-ignore ???
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  )
}

export default function LandingPage() {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <SEO title={t("html_page_title")} />
      <CssBaseline />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
        <LogoCollection />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["index"] } }) {
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

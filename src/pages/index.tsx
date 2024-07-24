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
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <SEO title="Find Your Home" />

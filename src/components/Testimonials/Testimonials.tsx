import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/system"
import { StaticImage } from "gatsby-plugin-image"
import CTA from "../CTA/CTA"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { TFunction } from "i18next"

const getTestimonials = ({ t }: { t: TFunction }) => [
  {
    avatar: (
      <Avatar>
        <StaticImage src="../../images/testimonials/FPO-eric.jpg" alt="Eric" />
      </Avatar>
    ),
    name: "Eric",
    occupation: t("testimonial_eric_occupation"),
    companyLogoLight: (
      <StaticImage
        src="../../images/testimonials/FPO-spotify.png"
        alt="Spotify"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    companyLogoDark: (
      <StaticImage
        src="../../images/testimonials/FPO-spotify.png"
        alt="Spotify"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
    testimonial: t("testimonial_eric_quote"),
  },
  {
    avatar: (
      <Avatar>
        <StaticImage
          src="../../images/testimonials/FPO-kajsa.jpg"
          alt="Kajsa"
        />
      </Avatar>
    ),
    name: "Kajsa",
    occupation: t("testimonial_kajsa_occupation"),
    companyLogoLight: (
      <StaticImage
        src="../../images/testimonials/FPO-creanova.png"
        alt="Creanova"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    companyLogoDark: (
      <StaticImage
        src="../../images/testimonials/FPO-creanova.png"
        alt="Creanova"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
    testimonial: t("testimonial_kajsa_quote"),
  },
  {
    avatar: (
      <Avatar>
        <StaticImage
          src="../../images/testimonials/FPO-linus.jpg"
          alt="Linus"
        />
      </Avatar>
    ),
    name: "Linus",
    occupation: t("testimonial_linus_occupation"),
    companyLogoLight: (
      <StaticImage
        src="../../images/testimonials/FPO-akqa.png"
        alt="AKQA"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    companyLogoDark: (
      <StaticImage
        src="../../images/testimonials/FPO-akqa.png"
        alt="AKQA"
        loading="lazy"
        width={64}
        style={{ opacity: 0.3 }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
    testimonial: t("testimonial_linus_quote"),
  },
]

export default function Testimonials() {
  const theme = useTheme()
  const { t } = useTranslation()
  const userTestimonials = getTestimonials({ t })

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          {t("testimonials_title")}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t("testimonials_subtext")}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {theme.palette.mode === "light"
                  ? testimonial.companyLogoLight
                  : testimonial.companyLogoDark}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CTA />
    </Container>
  )
}

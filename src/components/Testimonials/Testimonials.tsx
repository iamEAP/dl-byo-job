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

const userTestimonials = [
  {
    avatar: (
      <Avatar>
        <StaticImage src="../../images/testimonials/FPO-eric.jpg" alt="Eric" />
      </Avatar>
    ),
    name: "Eric",
    occupation: "Software Engineer",
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
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id vulputate urna, laoreet facilisis metus. Integer egestas accumsan pharetra.",
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
    occupation: "Civil Engineer",
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
    testimonial:
      "Vivamus quis urna a sapien sollicitudin elementum a eget eros. Phasellus semper libero justo, in dignissim ante aliquet sit amet. Duis sollicitudin accumsan libero sit amet vestibulum.",
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
    occupation: "Designer",
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
    testimonial:
      "Aliquam sodales est non justo feugiat, eget mollis ante pellentesque. Pellentesque id tortor sit amet libero euismod rutrum id sit amet est.",
  },
]

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
]

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
]

const logoStyle = {
  width: "64px",
  opacity: 0.3,
}

export default function Testimonials() {
  const theme = useTheme()
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos

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
          Real People
        </Typography>
        <Typography variant="body1" color="text.secondary">
          When you move to Dals Långed, you won't be alone. Hear from a few
          remote workers who made the leap and now call Långed home.
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

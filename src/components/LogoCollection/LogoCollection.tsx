import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/system"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

const partners = [
  {
    name: "Bengtsfors Kommun",
    logoLight: (
      <StaticImage
        src="../../images/partners/FPO-bengtsfors.png"
        alt="Bengtsfors Kommun"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    logoDark: (
      <StaticImage
        src="../../images/partners/FPO-bengtsfors.png"
        alt="Bengtsfors Kommun"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Fyrbodal",
    logoLight: (
      <StaticImage
        src="../../images/partners/FPO-fyrbodal.png"
        alt="Fyrbodal"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    logoDark: (
      <StaticImage
        src="../../images/partners/FPO-fyrbodal.png"
        alt="Fyrbodal"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Mötesplats Steneby",
    logoLight: (
      <StaticImage
        src="../../images/partners/FPO-motesplats.png"
        alt="Mötesplats Steneby"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    logoDark: (
      <StaticImage
        src="../../images/partners/FPO-motesplats.png"
        alt="Mötesplats Steneby"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Dals Långeds Utvecklingsråd",
    logoLight: (
      <StaticImage
        src="../../images/partners/FPO-utvecklingsrad.png"
        alt="Dals Långeds Utvecklingsråd"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ objectFit: "contain" }}
      />
    ),
    logoDark: (
      <StaticImage
        src="../../images/partners/FPO-utvecklingsrad.png"
        alt="Dals Långeds Utvecklingsråd"
        loading="lazy"
        height={40}
        style={{ opacity: 0.7, margin: "32px" }}
        imgStyle={{ filter: "invert(1)", objectFit: "contain" }}
      />
    ),
  },
]

export default function LogoCollection() {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Box id="logoCollection" sx={{ py: 0 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        style={{ margin: "0 auto" }}
        color="text.secondary"
      >
        {t("partners_title")}
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {partners.map(({ name, logoLight, logoDark }) => (
          <Grid item key={name}>
            {theme.palette.mode === "light" ? logoLight : logoDark}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

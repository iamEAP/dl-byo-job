import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import CheckroomIcon from "@mui/icons-material/Checkroom"
import FactoryIcon from "@mui/icons-material/Factory"
import PeopleIcon from "@mui/icons-material/People"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import SchoolIcon from "@mui/icons-material/School"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { TFunction } from "i18next"

const getItems = ({ t }: { t: TFunction }) => [
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-sauna.webp"
        alt="Långeds Allmänna Bastu"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <PeopleIcon />,
    title: "Långeds Allmänna Bastu",
    description: t("highlight_bastu_description"),
  },
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-steneby.jpg"
        alt="Campus Steneby"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <SchoolIcon />,
    title: "Campus Steneby",
    description: t("highlight_steneby_description"),
  },
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-notquite.jpg"
        alt="Not Quite"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <FactoryIcon />,
    title: "Not Quite",
    description: t("highlight_notquite_description"),
  },
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-cyklagul.png"
        alt="Cykla Gul"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <DirectionsBikeIcon />,
    title: "Cykla Gul",
    description: t("highlight_cyklagul_description"),
  },
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-garderob.jpg"
        alt="Långeds Garderob"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <CheckroomIcon />,
    title: "Långeds Garderob",
    description: t("highlight_garderob_description"),
  },
  {
    image: (
      <StaticImage
        src="../../images/highlights/FPO-decibel.jpg"
        alt="Decibel"
        loading="lazy"
        width={517}
        height={317}
        formats={["auto", "webp", "avif"]}
      />
    ),
    icon: <MusicNoteIcon />,
    title: "Decibel",
    description: t("highlight_decibel_description"),
  },
]

export default function Highlights() {
  const { t } = useTranslation()
  const items = getItems({ t })

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            {t("highlights_title")}
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            {t("highlights_subtext")}
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box marginBottom={1}>{item.image}</Box>
                <div>
                  <Stack
                    direction="row"
                    alignItems="initial"
                    justifyContent="flex-start"
                  >
                    <Box sx={{ opacity: "50%" }} marginRight={1}>
                      {item.icon}
                    </Box>
                    <Typography fontWeight="medium">{item.title}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

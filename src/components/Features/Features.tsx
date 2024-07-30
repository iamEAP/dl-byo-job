import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import CelebrationIcon from "@mui/icons-material/Celebration"
import HouseIcon from "@mui/icons-material/House"
import WorkIcon from "@mui/icons-material/Work"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { TFunction } from "i18next"
import { useAnalytics } from "../../hooks/useAnalytics"

type Item = {
  icon: JSX.Element
  title: string
  description: string
  image: JSX.Element
}

const getItems = ({ t }: { t: TFunction }): Item[] => [
  {
    icon: <HouseIcon />,
    title: t("feature_live_title"),
    description: t("feature_live_description"),
    image: (
      <StaticImage
        src="../../images/FPO-hiking.png"
        alt={t("feature_live_image_alt")}
        loading="lazy"
        formats={["auto", "webp", "avif"]}
        quality={95}
        placeholder="blurred"
        transformOptions={{ fit: "cover", cropFocus: "attention" }}
        layout="fullWidth"
        style={{ width: "100%" }}
      />
    ),
  },
  {
    icon: <WorkIcon />,
    title: t("feature_work_title"),
    description: t("feature_work_description"),
    image: (
      <StaticImage
        src="../../images/FPO-vaxt.jpg"
        alt={t("feature_work_image_alt")}
        loading="lazy"
        formats={["auto", "webp", "avif"]}
        quality={95}
        placeholder="blurred"
        transformOptions={{ fit: "cover", cropFocus: "attention" }}
        layout="fullWidth"
        style={{ width: "100%" }}
      />
    ),
  },
  {
    icon: <CelebrationIcon />,
    title: t("feature_play_title"),
    description: t("feature_play_description"),
    image: (
      <StaticImage
        src="../../images/FPO-skogsfesten.jpg"
        alt={t("feature_play_image_alt")}
        loading="lazy"
        formats={["auto", "webp", "avif"]}
        quality={95}
        placeholder="blurred"
        transformOptions={{ fit: "cover", cropFocus: "attention" }}
        layout="fullWidth"
        style={{ width: "100%" }}
      />
    ),
  },
]

export default function Features() {
  const { captureEvent } = useAnalytics()
  const { t } = useTranslation()
  const items = getItems({ t })
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)

  const handleItemClick = React.useCallback(
    (index: number) => {
      setSelectedItemIndex(index)
      captureEvent({
        action: "click",
        options: { link_id: `feature_${index}` },
      })
    },
    [captureEvent, setSelectedItemIndex]
  )

  const selectedFeature = items[selectedItemIndex]

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              {t("features_title")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              {t("features_subtext")}
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: theme => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : ""
                    }
                    return selectedItemIndex === index ? "primary.light" : ""
                  },
                  background: theme => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : ""
                    }
                    return selectedItemIndex === index ? "none" : ""
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            {items[selectedItemIndex].image}
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>{t("features_cta")}</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: theme => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200"
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800"
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: theme => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300"
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700"
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={event => {
                        event.stopPropagation()
                      }}
                    >
                      <span>{t("features_cta")}</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            {items[selectedItemIndex].image}
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

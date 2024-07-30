import React from "react"
import { alpha } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import CTA from "../CTA/CTA"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <Box
      id="hero"
      sx={theme => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Box
        id="image"
        sx={theme => ({
          mt: 0,
          alignSelf: "center",
          height: { xs: "33vh", sm: "66vh" },
          width: "100%",
          borderRadius: "10px",
          outline: "1px solid",
          outlineColor:
            theme.palette.mode === "light"
              ? alpha("#BFCCD9", 0.5)
              : alpha("#9CCCFC", 0.1),
          boxShadow:
            theme.palette.mode === "light"
              ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
              : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
        })}
      >
        <StaticImage
          src="../../images/FPO-hero.jpg"
          loading="eager"
          layout="fullWidth"
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover", objectPosition: "50% 70%" }}
          transformOptions={{ fit: "cover", cropFocus: "attention" }}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Dals Långed"
        />
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 2, sm: 4 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "90%" } }}>
          <Typography
            variant="h1"
            sx={{
              // display: 'flex',
              // flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              textAlign: "center",
              fontSize: "clamp(2rem, 9vw, 3.5rem)",
            }}
          >
            <Trans i18nKey="hero_title">
              Bring&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "clamp(2rem, 9vw, 3.5rem)",
                  color: theme =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
              >
                your own job
              </Typography>
            </Trans>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              // display: 'flex',
              // flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              textAlign: "center",
              fontSize: "clamp(2rem, 9vw, 3.5rem)",
            }}
          >
            <Trans i18nKey="hero_subtitle">
              Discover&nbsp;
              <Typography
                component="span"
                variant="h2"
                sx={{
                  fontSize: "clamp(2rem, 9vw, 3.5rem)",
                  color: theme =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
              >
                your new life
              </Typography>
            </Trans>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            {t("hero_subtext")}
          </Typography>
          <CTA />
          {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
      </Container>
    </Box>
  )
}

import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

export default function FAQ() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        {t("faq_title")}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              {t("faq_who_question")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Trans i18nKey="faq_who_answer">
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: "100%", md: "70%" },
                  marginBottom: "0.75rem",
                }}
              >
                This webpage was put together by residents of Dals Långed in
                collaboration with [x], [y], and [z] with the explicit goal of
                attracting remote workers to our village.
              </Typography>
              <Typography
                variant="body2"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                We believe remote workers will play an important role in
                revitalizing and sustaining rural communities in Europe, and we
                believe our village in particular has everything you need in
                order for you to join us!
              </Typography>
            </Trans>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              {t("faq_hybrid_question")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Trans i18nKey="faq_hybrid_answer">
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: "100%", md: "70%" },
                  marginBottom: "0.75rem",
                }}
              >
                If your office is located in Gothenburg, Karlstad, Trollhättan,
                or Uddevalla, then Dals Långed could be a viable option! It
                would come down to the specifics of your situation.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Gothenburg and Karlstad are both about 1:30 away (~30 minutes in
                a car, then ~1 hour by train) with good connections during
                commute times. Trollhättan and Uddevalla can be reached in ~1:15
                by car.
              </Typography>
            </Trans>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              {t("faq_welcome_question")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Trans i18nKey="faq_welcome_answer">
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                With residents coming from at least 25 countries, Dals Långed is
                a diverse and welcoming environment. The continual presence of a
                school in town since the 1930s has led to generations of locals
                being accustomed to the ebb and flow of new people and new ideas
                in a way unique among rural villages in Sweden.
              </Typography>
            </Trans>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              {t("faq_transit_question")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Trans i18nKey="faq_transit_answer">
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: "100%", md: "70%" },
                  marginBottom: "0.75rem",
                }}
              >
                You'll find all of life's essentials readily available within
                walking distance in town (a grocery store, postal services,
                simple restaurants, etc). There is a direct (if infrequent) bus
                connection to Åmål, from which you can get anywhere else in
                Sweden via the train network.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                While there are some in town who are able to live comfortably
                without a personal vehicle, you may find it easier and more
                convenient to own a car for those occasional trips out of town.
                If you have a license but no car, there is also a local car
                share program you could take advantage of.
              </Typography>
            </Trans>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  )
}

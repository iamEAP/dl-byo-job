import Language from "@mui/icons-material/Language"
import Fab from "@mui/material/Fab"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const LangSwitcher = () => {
  const { language, originalPath } = useI18next()
  return (
    <Fab
      component={Link}
      variant="extended"
      size="small"
      sx={{
        fontSize: { xs: "0.666rem", sm: "1rem" },
        position: "absolute",
        right: 24,
        top: 24,
        background: "rgba(0,0,0,.1)",
        backdropFilter: "blur(4px)",
      }}
      to={originalPath}
      language={language === "en" ? "sv" : "en"}
    >
      <Language
        fontSize="inherit"
        titleAccess={language === "en" ? "Bytt språk till" : "Switch to"}
      />{" "}
      &nbsp;
      {language === "en" ? "Svenska" : "English"}
    </Fab>
  )
}

export default LangSwitcher

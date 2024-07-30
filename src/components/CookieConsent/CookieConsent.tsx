import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { useCallback, useState } from "react"
import { withCookies } from "react-cookie"
import { useConsentCookie } from "./hooks"
import Slide from "@mui/material/Slide"

const CookieConsent = () => {
  const { t } = useTranslation()
  const { value, setConsent } = useConsentCookie()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(value === undefined)

  const rejectCookies = useCallback(() => {
    setIsOpen(false)
    setConsent("false")
  }, [setIsOpen, setConsent])

  const acceptCookies = useCallback(() => {
    setIsOpen(false)
    setConsent("true")
    initializeAndTrack(location)
  }, [location, setIsOpen, setConsent])

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={Slide}
      message={t("cookie_consent_message")}
      action={
        <>
          <Button
            size="small"
            variant="contained"
            color="info"
            sx={{ marginRight: 1 }}
            onClick={acceptCookies}
          >
            {t("cookie_consent_accept")}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={rejectCookies}
          >
            {t("cookie_consent_reject")}
          </Button>
        </>
      }
    />
  )
}

const CookieConsentWithCookies = withCookies(CookieConsent)
export default CookieConsentWithCookies

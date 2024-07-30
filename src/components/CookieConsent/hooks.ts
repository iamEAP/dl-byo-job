import { useCallback } from "react"
import { useCookies } from "react-cookie"

type HookReturn = {
  /**
   * "true" means consent was given, "false" means consent was explicitly
   * denied. Undefined means the user has not yet given or denied consent.
   */
  value: "true" | "false" | undefined

  /**
   * Sets explicit consent: 'true' meaning give consent, 'false' meaning deny.
   */
  setConsent: (value: "true" | "false") => void
}

export const useConsentCookie = (): HookReturn => {
  const [cookies, setCookie] = useCookies(["consent-to-all"], {
    doNotParse: true,
    doNotUpdate: true,
  })
  const setConsent = useCallback(
    (consentValue: "true" | "false") => {
      const expires = new Date()
      expires.setFullYear(new Date().getFullYear() + 1)
      setCookie("consent-to-all", consentValue, {
        path: "/",
        expires,
        httpOnly: false,
        sameSite: "strict",
      })
    },
    [setCookie]
  )

  return {
    value: cookies["consent-to-all"],
    setConsent,
  }
}

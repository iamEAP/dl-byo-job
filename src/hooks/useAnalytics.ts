type EventArgs = {
  action: string
  options?: Record<string, string>
}

function windowHasGtag(window: Window): window is Window & { gtag: Function } {
  return (
    window &&
    window.hasOwnProperty("gtag") &&
    // @ts-ignore
    typeof window.gtag === "function"
  )
}

export const useAnalytics = () => {
  return {
    captureEvent: ({ action, options }: EventArgs) => {
      if (windowHasGtag(window)) {
        window.gtag("event", action, options)
      }
    },
  }
}

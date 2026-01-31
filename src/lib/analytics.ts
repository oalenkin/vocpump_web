// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Yandex Metrika
export const YM_TRACKING_ID = process.env.NEXT_PUBLIC_YM_ID || ''

export const ymPageview = (url: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_TRACKING_ID, 'hit', url)
  }
}

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    ym: (...args: any[]) => void
  }
}

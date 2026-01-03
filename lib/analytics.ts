// Analytics utility for tracking user interactions
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData || {})
  }
}

export const trackScroll = (scrollPercentage: number) => {
  if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
    trackEvent("scroll_milestone", {
      scroll_percentage: scrollPercentage,
    })
  }
}

export const trackCTAClick = (ctaType: string, ctaLocation: string) => {
  trackEvent("cta_click", {
    cta_type: ctaType,
    cta_location: ctaLocation,
  })
}

export const trackFormSubmit = (formType: string) => {
  trackEvent("form_submit", {
    form_type: formType,
  })
}

// Prevent scroll false bounces
let lastScrollEvent = 0
export const trackScrollWithDebounce = () => {
  const now = Date.now()
  if (now - lastScrollEvent < 500) return
  
  lastScrollEvent = now
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  if (scrollHeight === 0) return
  
  const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100)
  trackScroll(scrollPercentage)
}

"use client"

import { useEffect } from "react"
import { trackScrollWithDebounce } from "@/lib/analytics"

export function ScrollTracker() {
  useEffect(() => {
    window.addEventListener("scroll", trackScrollWithDebounce)
    return () => {
      window.removeEventListener("scroll", trackScrollWithDebounce)
    }
  }, [])

  return null
}

"use client"

import { usePathname } from "next/navigation"

export function NavigationTransition() {
  const pathname = usePathname()

  // This component is kept for future use but doesn't render anything
  // Navigation now works naturally without custom interception
  
  return null
}

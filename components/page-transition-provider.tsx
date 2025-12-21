'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CompassLoading } from './compass-loading'

interface PageTransitionContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  // Automatically detect route changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])

  const startLoading = () => {
    setIsLoading(true)
  }

  const stopLoading = () => {
    setIsLoading(false)
  }

  return (
    <PageTransitionContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      <CompassLoading
        duration={3000}
        isLoading={isLoading}
        onComplete={() => {
          setIsLoading(false)
        }}
      />
    </PageTransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext)
  if (context === undefined) {
    throw new Error('usePageTransition must be used within PageTransitionProvider')
  }
  return context
}

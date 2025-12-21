'use client'

import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { CompassLoading } from './compass-loading'

interface PageTransitionContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

const MINIMUM_LOADING_TIME = 3000 // 3 seconds minimum

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [displayLoader, setDisplayLoader] = useState(false)
  const pathname = usePathname()
  const loadingStartTimeRef = useRef<number | null>(null)
  const hideLoaderTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // When route changes, attempt to hide loader if minimum time has passed
  useEffect(() => {
    if (loadingStartTimeRef.current === null) return

    const elapsedTime = Date.now() - loadingStartTimeRef.current

    if (elapsedTime >= MINIMUM_LOADING_TIME) {
      // Enough time has passed, hide immediately
      setDisplayLoader(false)
      loadingStartTimeRef.current = null
    } else {
      // Not enough time, set a timeout to hide later
      const remainingTime = MINIMUM_LOADING_TIME - elapsedTime
      if (hideLoaderTimeoutRef.current) {
        clearTimeout(hideLoaderTimeoutRef.current)
      }
      hideLoaderTimeoutRef.current = setTimeout(() => {
        setDisplayLoader(false)
        loadingStartTimeRef.current = null
      }, remainingTime)
    }
  }, [pathname])

  const startLoading = () => {
    // Clear any pending timeout
    if (hideLoaderTimeoutRef.current) {
      clearTimeout(hideLoaderTimeoutRef.current)
    }
    
    // Start loading and record the time
    loadingStartTimeRef.current = Date.now()
    setIsLoading(true)
    setDisplayLoader(true)
  }

  const stopLoading = () => {
    setIsLoading(false)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hideLoaderTimeoutRef.current) {
        clearTimeout(hideLoaderTimeoutRef.current)
      }
    }
  }, [])

  return (
    <PageTransitionContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      <CompassLoading
        duration={MINIMUM_LOADING_TIME}
        isLoading={displayLoader}
        onComplete={() => {
          setDisplayLoader(false)
          loadingStartTimeRef.current = null
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

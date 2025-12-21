'use client'

import { useEffect, useState } from 'react'

interface CompassLoadingProps {
  duration?: number
  onComplete?: () => void
  isLoading?: boolean
}

export function CompassLoading({
  duration = 3000,
  onComplete,
  isLoading = true,
}: CompassLoadingProps) {
  const [isVisible, setIsVisible] = useState(isLoading)
  const [shouldFadeOut, setShouldFadeOut] = useState(false)

  useEffect(() => {
    setIsVisible(isLoading)
    setShouldFadeOut(false)
  }, [isLoading])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setShouldFadeOut(true)
      // Wait for fade animation to complete before hiding
      const fadeTimer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 300) // Match the fade animation duration
      
      return () => clearTimeout(fadeTimer)
    }, duration)

    return () => clearTimeout(timer)

  }, [isVisible, duration, onComplete])

  if (!isVisible) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          opacity: shouldFadeOut ? 0 : 1,
          transition: 'opacity 0.3s ease-out',
          pointerEvents: shouldFadeOut ? 'none' : 'auto',
        }}
      >
        {/* Rotating compass image */}
        <img
          src="/images/comapss2.png"
          alt="Loading"
          style={{
            width: '200px',
            height: '200px',
            transformOrigin: 'center center',
            animation: 'spinClockwise 6s linear infinite',
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
            display: 'block',
          }}
        />

        {/* Loading text */}
        <p
          style={{
            position: 'absolute',
            bottom: '50px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          Loading...
        </p>
      </div>

      <style>{`
        @keyframes spinClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  )
}

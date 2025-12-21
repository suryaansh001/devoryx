'use client'

import { useState } from 'react'
import { CompassLoading } from '@/components/compass-loading'

export default function LoadingDemo() {
  const [isLoading, setIsLoading] = useState(false)
  const [duration, setDuration] = useState(3000)

  const handleStart = () => {
    setIsLoading(true)
  }

  const handleComplete = () => {
    console.log('Loading animation completed')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Compass Loading Animation</h1>

        <div className="space-y-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-8">
          {/* Duration Control */}
          <div className="space-y-3">
            <label className="block text-white text-sm font-medium">
              Duration: {duration}ms
            </label>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              disabled={isLoading}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="text-white/60 text-xs">Adjust the loading duration</p>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {isLoading ? 'Loading...' : 'Start Loading Animation'}
          </button>

          {/* Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-200 text-sm">
              Click the button above to see the rotating compass loading animation. The compass rotates around its center point smoothly.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm">Features:</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Rotating compass at center point
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Customizable duration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Glowing glow effect
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Auto-completes with callback
              </li>
            </ul>
          </div>

          {/* Code Snippet */}
          <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
            <p className="text-white/60 text-xs font-semibold mb-2">Usage:</p>
            <pre className="text-white/70 text-xs font-mono">
{`import { CompassLoading } from '@/components/compass-loading'

<CompassLoading
  duration={3000}
  onComplete={() => console.log('Done')}
  isLoading={true}
/>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Compass Loading Component */}
      <CompassLoading duration={duration} onComplete={handleComplete} isLoading={isLoading} />
    </div>
  )
}

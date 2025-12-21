"use client"

import { useEffect, useState } from "react"

interface FlowchartProps {
  steps: {
    title: string
    description: string
  }[]
}

export function ProcessFlowchart({ steps }: FlowchartProps) {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([])

  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, index * 300)
    })
  }, [steps.length])

  return (
    <div className="relative py-12">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandLine {
          from {
            scaleX(0);
          }
          to {
            scaleX(1);
          }
        }

        .flow-step {
          animation: slideIn 0.6s ease-out forwards;
        }

        .flow-line {
          animation: expandLine 0.6s ease-out forwards;
          transform-origin: left;
        }
      `}</style>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Flowchart step */}
            <div
              className="flow-step"
              style={{
                opacity: visibleSteps[index] ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              <div className="flex items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div
                  className="flex justify-start pl-8 mt-6"
                  style={{
                    opacity: visibleSteps[index + 1] ? 1 : 0,
                  }}
                >
                  <svg className="w-6 h-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M12 19l-7-7m7 7l7-7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

interface Phase {
  number: number
  title: string
  activities: string[]
  output: string[]
}

const phases: Phase[] = [
  {
    number: 1,
    title: "DISCOVER (TNA)",
    activities: [
      "Business Goals Understanding",
      "Stakeholder Interviews",
      "Performance Gap Analysis",
      "Learner Analysis",
      "Training vs Non-Training Check",
    ],
    output: ["TNA Report", "Skill Gaps", "Target Audience", "Training Objectives"],
  },
  {
    number: 2,
    title: "DESIGN & PLAN",
    activities: [
      "Define Learning Objectives",
      "Select Training Approach (ILT / VILT / Blended)",
      "Curriculum & Session Design",
      "Activity & Assessment Planning",
    ],
    output: ["Training Design Document", "Agenda", "Learning Plan"],
  },
  {
    number: 3,
    title: "DEVELOP CONTENT",
    activities: [
      "PPTs & Learning Materials",
      "Facilitator Guide",
      "Participant Workbooks",
      "Assessments (Pre/Post)",
      "Pilot & Review (Optional)",
    ],
    output: ["Final Training Content", "Assessment Tools"],
  },
  {
    number: 4,
    title: "DELIVER TRAINING",
    activities: [
      "Trainer Preparation",
      "Classroom / Virtual Delivery",
      "Interactive Activities",
      "Real-life Scenarios",
    ],
    output: ["Training Completion", "Attendance", "Engagement Data"],
  },
  {
    number: 5,
    title: "EVALUATE IMPACT",
    activities: [
      "Level 1: Reaction (Feedback)",
      "Level 2: Learning (Assessments)",
      "Level 3: Behavior (On-the-job Application)",
      "Level 4: Results (Business Impact)",
    ],
    output: ["Evaluation Report", "Impact Metrics"],
  },
  {
    number: 6,
    title: "ROI & IMPROVEMENT",
    activities: [
      "ROI Analysis (Optional)",
      "Management Report",
      "Improvement Recommendations",
      "Future Training Roadmap",
    ],
    output: ["ROI Report", "Continuous Learning Plan"],
  },
]

export function TrainingPhasesStack() {
  const [activePhase, setActivePhase] = useState(0)

  const getPhaseColor = (phaseNum: number) => {
    return "bg-white/5"
  }

  const getPhaseBorderColor = (phaseNum: number) => {
    const colors = [
      "border-purple-400/50",
      "border-cyan-400/50",
      "border-pink-400/50",
      "border-indigo-400/50",
      "border-violet-400/50",
      "border-emerald-400/50",
    ]
    return colors[phaseNum % colors.length]
  }

  return (
    <div className="w-full py-20 px-4">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(60px);
          }
        }

        .phase-card {
          animation: slideIn 0.7s ease-out forwards;
        }

        .phase-card.exit {
          animation: slideOut 0.5s ease-out forwards;
        }

        .phase-button {
          transition: all 0.3s ease;
        }

        .phase-button.active {
          transform: scale(1.1);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Training Delivery Model</h2>
        <p className="text-lg text-white/70 text-center mb-20 max-w-3xl mx-auto">
          A structured 6-phase approach to designing, delivering, and validating training that drives real business impact.
        </p>

        {/* Cards Stack */}
        <div className="relative min-h-[600px] flex flex-col items-center justify-center mb-20">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-8 w-full max-w-[90%] mb-8">
            {/* Left Arrow */}
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                activePhase === 0
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              <ChevronDown className="w-6 h-6 -rotate-90" />
            </button>

            {/* Card Container */}
            <div className="w-full max-w-[70%] relative overflow-visible flex items-center justify-center">
              <div className="relative w-full min-h-[600px] flex items-center justify-center">
                {phases.map((phase, idx) => {
                  const phase_obj = phases[idx]
                  const isActive = activePhase === idx

                  return (
                    <div
                      key={idx}
                      className={`phase-card absolute w-full transition-all duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                      style={{
                        transform: idx < activePhase ? "translateX(-100%)" : idx > activePhase ? "translateX(100%)" : "translateX(0)",
                        zIndex: isActive ? 10 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                        top: "50%",
                        left: "50%",
                        marginLeft: "-50%",
                        marginTop: "-50%",
                      }}
                    >
                      {/* Card */}
                      <div className={`rounded-3xl border-2 ${getPhaseBorderColor(idx)} ${getPhaseColor(idx)} p-8 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden`}>
                        {/* Phase Header */}
                        <div className={`mb-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20">
                            <p className="text-sm font-semibold text-white">PHASE {phase_obj.number}</p>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{phase_obj.title}</h3>
                          <div className="h-1 w-16 bg-white/50 rounded-full"></div>
                        </div>

                        {/* Activities */}
                        <div className={`mb-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                          <p className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">Activities</p>
                          <ul className="space-y-3">
                            {phase_obj.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-white/70 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span className="text-white/85 text-base leading-relaxed">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Divider */}
                        <div className={`h-px bg-white/30 my-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}></div>

                        {/* Output */}
                        <div className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                          <p className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">📄 Output</p>
                          <div className="flex flex-wrap gap-2">
                            {phase_obj.output.map((item, idx) => (
                              <span key={idx} className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-md border border-white/30">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
              disabled={activePhase === phases.length - 1}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                activePhase === phases.length - 1
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
          </div>
        </div>

        {/* Phase Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`phase-button relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 border ${
                activePhase >= idx
                  ? `bg-white/10 ${getPhaseBorderColor(idx)} text-white shadow-lg backdrop-blur-md`
                  : "bg-white/5 border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <span className="hidden sm:inline">Phase {phase.number}</span>
              <span className="sm:hidden">{phase.number}</span>

              {/* Checkmark for completed phases */}
              {activePhase > idx && (
                <span className="ml-2 inline-block">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Phase <span className="text-white font-semibold">{activePhase + 1}</span> of <span className="text-white font-semibold">{phases.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

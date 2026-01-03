"use client"

import ScrollStack, { ScrollStackItem } from "./ScrollStack"

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

export function TrainingPhasesScrollStack() {
  return (
    <div className="w-full py-20">
      <div className="max-w-6xl mx-auto mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Training Delivery Model</h2>
        <p className="text-lg text-white/70 text-center max-w-3xl mx-auto">
          A structured 6-phase approach to designing, delivering, and validating training that drives real business impact. Scroll to explore each phase.
        </p>
      </div>

      <ScrollStack
        className="w-full h-screen bg-black"
        itemDistance={100}
        itemScale={0.03}
        itemStackDistance={30}
        stackPosition="50%"
        scaleEndPosition="20%"
        baseScale={0.85}
        useWindowScroll={true}
        onStackComplete={() => {}}
      >
        {phases.map((phase, idx) => (
          <ScrollStackItem
            key={idx}
            itemClassName={`rounded-3xl border-2 ${getPhaseBorderColor(idx)} bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden`}
          >
            <div className="h-full flex flex-col justify-start p-8 sm:p-10 gap-6">
              {/* Phase Header */}
              <div>
                <div className="inline-block mb-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20">
                  <p className="text-sm font-semibold text-white">PHASE {phase.number}</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{phase.title}</h3>
                <div className="h-1 w-12 bg-white/50 rounded-full"></div>
              </div>

              {/* Activities Section */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-widest">Activities</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-white/80 text-xs leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20"></div>

              {/* Output Section */}
              <div>
                <p className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-widest">📄 Output</p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.output.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-white/85 text-xs font-medium backdrop-blur-md border border-white/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  )
}

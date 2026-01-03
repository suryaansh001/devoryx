// lib/erebor-chatbot.ts
// This file contains the LLM integration for the Ask Erebor chatbot
// Uses Groq API with LangChain for advanced AI responses

import { ChatGroq } from "@langchain/groq"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import { RunnableSequence } from "@langchain/core/runnables"



// Predefined responses for suggested questions
const predefinedResponses: Record<string, string> = {
  "What services does Erebor offer?": "Erebor offers custom web development, AI & ML solutions, automation systems, mobile app development, corporate training, and billing software. We specialize in building tailored solutions for real business workflows.",
  "How much do your services cost?": "Our pricing is project-based and depends on complexity and scope. We offer competitive rates starting from $5,000 for smaller projects. Contact us for a free consultation and detailed quote.",
  "How long does a typical project take?": "Most projects take 2-8 weeks depending on complexity. We deliver in phases to ensure early value and faster iteration. Larger systems are broken down into manageable milestones.",
  "Do you work with startups?": "Yes! We love working with startups. We understand budget constraints and can help you build MVPs quickly. Many of our clients are early-stage companies looking to scale.",
  "What technologies do you use?": "We use modern technologies like React, Next.js, Node.js, Python, AI/ML frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Vercel), and databases (PostgreSQL, MongoDB). We choose the best tools for each project."
}

// Initialize Groq LLM
const initializeGroqChat = () => {
  const groqApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY

  if (!groqApiKey) {
    throw new Error("NEXT_PUBLIC_GROQ_API_KEY environment variable is not set")
  }

  return new ChatGroq({
    apiKey: groqApiKey,
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 1024,
  })
}

// Create the Erebor-specific prompt template
const createEreborPrompt = () => {
  return ChatPromptTemplate.fromTemplate(`
EREBOR CONTEXT — DO NOT ADD INFORMATION OUTSIDE THIS SCOPE:

Erebor.world is a custom technology solutions provider that designs and builds digital systems tailored to each client’s specific requirements. Solutions are not template-based and are scoped individually based on the actual problem, constraints, and budget.

Services include:

- Custom Web Development  
  Design and development of responsive, performance-driven websites and web applications. Focus is on clean architecture, maintainability, scalability, and aligning the product with the client’s business workflow rather than generic layouts.

- Mobile App Development  
  Development of Android and iOS applications with client-specific logic, features, and integrations. Apps are built based on defined use cases, user flows, and operational needs, not pre-built templates.

- Practical AI & Automation Solutions  
  Automation of repetitive processes, intelligent workflows, decision-support systems, and site-specific chatbots. Machine learning or transformer-based models are used only when they provide clear value; simpler logic or rule-based systems are preferred when sufficient.

- Training & Consultation  
  Technical training and consultation focused on real-world implementation, system usage, and execution. Content is aligned with actual workflows and project requirements, not generic or theoretical material.

- Digital Marketing & SEO  
  SEO and digital optimization services focused on measurable outcomes such as visibility, performance, and conversion, rather than vanity metrics.

- Custom Internal Tools & Systems  
  Design and development of internal software such as dashboards,billing tools, and workflow platforms tailored to exact operational requirements and existing processes.

Approach:

- Every project is scoped based on clearly defined requirements and constraints.
- Technology choices are driven by necessity, not trends.
- Emphasis on budget-friendly, production-ready, and maintainable systems.
- Solutions are designed to integrate with existing infrastructure wherever possible and deliver measurable improvements.

When answering:
- Use only the information provided in this context.
-Keep answers concise and relevant to Erebor's services and approach.
- Do not assume or invent services, pricing, or guarantees.
- If a question cannot be answered from this context, respond with: "Contact Us , we would be happy to discuss your needs directly. Email:hello@erebor.world "
USER QUESTION: {question}
`)
}

// Main function to get AI response for questions not in predefined responses
export async function getLLMResponse(
  userQuestion: string,
  context: string = ""
): Promise<string> {
  try {
    const llm = initializeGroqChat()
    const prompt = createEreborPrompt()

    // Create the chain
    const chain = RunnableSequence.from([
      prompt,
      llm
    ])

    // Get the response
    const response = await chain.invoke({
      question: userQuestion,
      context: context
    })

    return response.content as string
  } catch (error) {
    console.error("Error getting LLM response:", error)

    // Fallback response
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again or contact us directly at hello@erebor.world for immediate assistance."
  }
}

// Function to check if a question should use LLM (for complex or unknown questions)
export function shouldUseLLM(question: string): boolean {
  const lowerQuestion = question.toLowerCase()

  // Keywords that indicate complex questions needing LLM
  const complexKeywords = [
    'integration', 'api', 'database', 'security', 'performance',
    'scalability', 'deployment', 'maintenance', 'support',
    'consultation', 'strategy', 'architecture', 'design',
    'customization', 'migration', 'optimization', 'analytics',
    'reporting', 'dashboard', 'workflow', 'process'
  ]

  // Questions that are too specific or technical
  const hasComplexKeywords = complexKeywords.some(keyword =>
    lowerQuestion.includes(keyword)
  )

  // Questions that are too long (likely detailed inquiries)
  const isLongQuestion = question.length > 100

  // Questions with multiple parts (containing multiple question marks or complex structure)
  const hasMultipleQuestions = (question.match(/\?/g) || []).length > 1

  return hasComplexKeywords || isLongQuestion || hasMultipleQuestions
}

// Enhanced response function that combines predefined and LLM responses
export async function getSmartResponse(userMessage: string): Promise<{
  response: string
  usedLLM: boolean
}> {
  // Check if message exactly matches predefined questions (suggested questions only)
  const exactMatch = predefinedResponses[userMessage.trim()]
  if (exactMatch) {
    return { response: exactMatch, usedLLM: false }
  }

  // For any other question, use LLM
  try {
    const response = await getLLMResponse(userMessage)
    return { response, usedLLM: true }
  } catch (error) {
    console.error("Error getting LLM response:", error)
    // Fallback response when LLM fails
    return {
      response: "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again or contact us directly at hello@erebor.world for immediate assistance.",
      usedLLM: false
    }
  }
}
import { useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = {
  help: {
    title: "How can I help?",
    content: `I offer comprehensive support in these key areas:

    Leadership Excellence:
    • Executive coaching and leadership development
    • Team dynamics and performance optimization
    • Change management and organizational transformation
    
    AI & Digital Innovation:
    • AI strategy development and implementation
    • Digital transformation roadmaps
    • Technology integration and adoption
    
    Growth & Scale:
    • Business strategy alignment
    • Performance metrics and KPI development
    • Sustainable scaling frameworks
    
    Engagement options range from focused consultations to long-term partnerships.`
  },
  why: {
    title: "Why hire me?",
    content: `Here's what makes me the right choice for your transformation journey:

    Experience & Expertise:
    • 15+ years leading tech and AI initiatives
    • Successfully led 20+ digital transformations
    • Deep expertise in both technical and human aspects of change
    
    Proven Approach:
    • Data-driven decision making methodology
    • Human-centered leadership philosophy
    • Practical, results-focused implementation
    
    Industry Recognition:
    • Featured in leading tech publications
    • Regular speaker at leadership conferences
    • Award-winning transformation projects
    
    Every engagement is tailored to your specific needs and goals.`
  },
  impact: {
    title: "What is my impact so far?",
    content: `Here are concrete results from recent partnerships:

    Quantifiable Outcomes:
    • 40% team productivity improvement at Fortune 500 tech company
    • $2M annual savings through AI process optimization
    • 95% satisfaction in leadership development programs
    • 30% increase in employee engagement scores
    
    Client Transformations:
    • Helped scale a startup from 50 to 500 employees
    • Led successful digital transformation for a traditional manufacturer
    • Implemented AI strategy resulting in 3x ROI
    
    Client Testimonials:
    "The guidance transformed how we approach leadership and innovation." - CEO, Tech Company
    "Our team's performance exceeded all expectations after the engagement." - CTO, Fortune 500
    
    Every success story represents real, measurable impact.`
  }
}

export default function ChatBot() {
  const [messages, setMessages] = useState([{
    type: 'bot',
    text: 'Hello! What would you like to know more about?\n• How can I help?\n• Why hire me?\n• What is my impact so far?'
  }])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])

    // Process response
    let response
    const lowercaseInput = input.toLowerCase()
    if (lowercaseInput.includes('help')) {
      response = SECTIONS.help.content
    } else if (lowercaseInput.includes('why')) {
      response = SECTIONS.why.content
    } else if (lowercaseInput.includes('impact')) {
      response = SECTIONS.impact.content
    } else {
      response = "Could you please specify if you'd like to know about:\n• How can I help?\n• Why hire me?\n• What is my impact so far?"
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 500)

    setInput('')
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
          {messages.map((message, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`chat-message ${
                message.type === 'user' ? 'chat-message-user' : 'chat-message-bot'
              }`}
            >
              {message.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
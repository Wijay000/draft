import { useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = {
  help: {
    title: "How can I help?",
    content: `I offer strategic guidance and practical support in:
    • Leadership Development & Executive Coaching
    • AI Strategy Integration
    • Digital Transformation
    • Change Management
    • Team Performance Optimization
    
    Engagement models are flexible - from one-time consultations to ongoing partnerships.`
  },
  why: {
    title: "Why me?",
    content: `My unique value proposition combines:
    • 15+ years leadership experience in tech and AI
    • Proven track record of successful digital transformations
    • Deep understanding of both technical and human aspects
    • Practical, results-oriented approach
    • Strong focus on measurable outcomes`
  },
  impact: {
    title: "What is my impact?",
    content: `Real results from recent engagements:
    • 40% improvement in team productivity for a Fortune 500 company
    • Successful AI integration saving $2M annually
    • Leadership development program with 95% satisfaction
    • Cultural transformation with 30% better engagement
    
    "The guidance transformed how we approach leadership and innovation." - CEO, Tech Company`
  }
}

export default function ChatBot() {
  const [messages, setMessages] = useState([{
    type: 'bot',
    text: 'Hello! What would you like to know more about?\n• How can I help?\n• Why me?\n• What is my impact?'
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
      response = "Could you please specify if you'd like to know about:\n• How can I help?\n• Why me?\n• What is my impact?"
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
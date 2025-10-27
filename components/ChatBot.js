import { useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = {
  unlock: {
    title: "Unlock what's next",
    content: `Let me help you find clarity in your next steps:

    Finding Your Path:
    • Cut through AI noise and complexity
    • Identify real growth opportunities
    • Create a clear action plan
    
    Strategic Focus:
    • Assessment of your current position
    • Mapping of key opportunities
    • Prioritization of initiatives
    
    The goal isn't more ideas — it's finding your clear starting point.`
  },
  difference: {
    title: "The difference",
    content: `Here's how I turn theory into momentum:

    Three Key Pillars:
    • Technology: Practical AI applications that drive value
    • Storytelling: Complex ideas made compelling and actionable
    • Action: Insights converted to executable strategies
    
    My Approach:
    • No abstract theories - only practical solutions
    • Bridge technology, narrative, and execution
    • Focus on creating real momentum
    
    Clarity becomes your competitive edge.`
  },
  impact: {
    title: "Stories of impact",
    content: `When clarity leads, transformation follows:

    Real Results:
    • Teams align on clear priorities
    • Messages resonate and drive action
    • Direction becomes obvious and compelling
    
    Success Stories:
    • Tech leader found focus in AI strategy, driving 3x growth
    • Manufacturing CEO unified vision across 500+ team
    • Startup founder scaled with clarity, not chaos
    
    Stop guessing. Start leading with clarity.`
  }
}

export default function ChatBot() {
  const [messages, setMessages] = useState([])
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
import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Interact() {
  const interactionTypes = [
    {
      title: "Speaking Engagements",
      description: "Keynotes on leadership, innovation, sustainability, and AI at global forums and corporate events.",
      highlights: ["WEF Davos", "Cannes Lions", "TEDx"]
    },
    {
      title: "Advisory & Consulting",
      description: "Strategic guidance for businesses on innovation, growth, and digital transformation.",
      highlights: ["Global forums", "Industry conferences", "Corporate events"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-4xl mb-4">🤝</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect for speaking engagements, advisory services, or collaborative opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {interactionTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">{type.title}</h2>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2 text-gray-700">Past Engagements:</h3>
              <ul className="space-y-2">
                {type.highlights.map(highlight => (
                  <li key={highlight} className="text-gray-600">• {highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 italic"
          >
            "The guidance transformed how we approach leadership and innovation. Our team is more aligned and effective than ever."
            <footer className="mt-2 font-semibold">- CEO, Tech Company</footer>
          </motion.blockquote>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-600 italic"
          >
            "The AI integration strategy exceeded our expectations. We're seeing real results in efficiency and innovation."
            <footer className="mt-2 font-semibold">- CTO, Fortune 500 Company</footer>
          </motion.blockquote>
        </div>
      </div>

      <ChatBot />
    </div>
  )
}
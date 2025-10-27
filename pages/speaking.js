import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Speaking() {
  const speakingTopics = [
    {
      title: "Innovation & Leadership",
      description: "Keynotes on responsible innovation, digital transformation, and future-ready leadership.",
      highlights: ["WEF Davos", "Cannes Lions", "TEDx"]
    },
    {
      title: "Sustainability & Impact",
      description: "Talks on climate innovation, sustainable business models, and creating lasting impact.",
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
        <div className="text-4xl mb-4">3️⃣</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stories of impact.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          When clarity lands, everything aligns (teams, messages, direction).
          Here's what happens when leaders stop guessing and start leading.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">{study.title}</h2>
            <p className="text-gray-600 mb-4">{study.description}</p>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2 text-gray-700">Key Results:</h3>
              <ul className="space-y-2">
                {study.results.map(result => (
                  <li key={result} className="text-gray-600">• {result}</li>
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
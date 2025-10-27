import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Impact() {
  const impactStories = [
    {
      title: "Global Shapers Community",
      description: "Led Shape#Sustainability campaign across 100+ cities in partnership with UN, driving local climate action and community engagement.",
      impact: ["100+ cities engaged", "UN partnership", "Local climate initiatives"]
    },
    {
      title: "Innovation for Healthcare",
      description: "Part of the core team that launched the Edison award-winning 'Healthy Heart for All' initiative with Medtronic, improving healthcare accessibility.",
      impact: ["Edison Award winner", "Improved healthcare access", "Global reach"]
    },
    {
      title: "Climate Innovation",
      description: "Designed and led climate innovation challenges with major corporations, resulting in implementable solutions for sustainability.",
      impact: ["Multiple corporate partnerships", "Sustainable solutions", "Measurable environmental impact"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-4xl mb-4">🌍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating lasting positive change through innovation and collaboration.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {impactStories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{story.title}</h2>
            <p className="text-gray-600 mb-4">{story.description}</p>
            <ul className="space-y-2">
              {story.impact.map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <ChatBot />
      </div>
    </div>
  )
}
import { motion } from 'framer-motion'
import ChatBot from '../../components/ChatBot'

export default function WhyMe() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Me?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about my unique approach and extensive experience in leadership and AI transformation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Experience</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• 15+ years in tech leadership</li>
            <li>• Multiple successful digital transformations</li>
            <li>• Fortune 500 consulting experience</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Approach</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Data-driven decision making</li>
            <li>• Human-centered leadership</li>
            <li>• Practical, results-focused methods</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Expertise</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• AI & Technology Integration</li>
            <li>• Change Management</li>
            <li>• Leadership Development</li>
          </ul>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  )
}
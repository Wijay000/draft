import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How Can I Help?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how we can work together to achieve your leadership and transformation goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Services</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Leadership Development & Executive Coaching</li>
            <li>• AI Strategy Integration</li>
            <li>• Digital Transformation</li>
            <li>• Change Management</li>
            <li>• Team Performance Optimization</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Engagement Models</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• One-time Strategic Consultations</li>
            <li>• Project-based Engagements</li>
            <li>• Ongoing Advisory Partnerships</li>
            <li>• Workshop Series</li>
            <li>• Custom Programs</li>
          </ul>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  )
}
import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Leadership & AI Growth Partner
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering leaders to navigate the future with confidence through expert guidance
          in leadership development and AI-driven transformation.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          by Vijay A. Raju
        </p>
      </motion.div>

      <ChatBot />
    </div>
  )
}

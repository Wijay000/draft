import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function UnlockWhatsNext() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-4xl mb-4">1️⃣</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unlock what's next.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You don't need more ideas. You need a clear place to start.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Cut Through the Noise</h2>
          <p className="text-gray-600 mb-4">
            I help you navigate the AI landscape with clarity and purpose. Together, we'll identify 
            the opportunities that truly matter for your growth.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li>• Strategic AI assessment</li>
            <li>• Growth opportunity mapping</li>
            <li>• Clear action planning</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Find Your Starting Point</h2>
          <p className="text-gray-600 mb-4">
            Transform uncertainty into a clear path forward. We'll create a focused strategy 
            that aligns with your goals and capabilities.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li>• Priority identification</li>
            <li>• Resource optimization</li>
            <li>• Implementation roadmap</li>
          </ul>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  )
}
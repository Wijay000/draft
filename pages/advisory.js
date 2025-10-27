import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Advisory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-4xl mb-4">🎯</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Advisory
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic guidance for businesses on innovation, growth, and digital transformation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Technology</h2>
          <p className="text-gray-600">
            Deep understanding of AI and emerging technologies, translated into practical 
            applications that drive real business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Storytelling</h2>
          <p className="text-gray-600">
            Transform complex ideas into compelling narratives that align teams and 
            inspire action across your organization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Action</h2>
          <p className="text-gray-600">
            Convert insights into executable strategies that create momentum and 
            deliver measurable results.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Clarity Becomes Your Edge</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My approach bridges the gap between understanding and execution, helping you turn 
          insights into advantages that set you apart in today's fast-moving landscape.
        </p>
      </motion.div>

      <ChatBot />
    </div>
  )
}
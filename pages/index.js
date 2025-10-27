import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16"
      >
        <img
          src="/hero-image.jpg"
          alt="Leadership and Innovation"
          className="w-full max-w-5xl mx-auto rounded-lg shadow-xl object-cover h-[500px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The world is moving faster than your next decision.
        </h1>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12">
          I help you turn uncertainty into a strategy that works.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-left"
        >
          <div className="text-3xl mb-3">1️⃣</div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Unlock what's next.</h2>
          <p className="text-gray-700">
            You don't need more ideas. You need a clear place to start.
            I help you cut through AI noise and find what truly drives growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-left"
        >
          <div className="text-3xl mb-3">2️⃣</div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">The difference.</h2>
          <p className="text-gray-700">
            I don't teach theory. I translate it into momentum.
            My work bridges technology, storytelling, and action — so clarity becomes your edge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-left"
        >
          <div className="text-3xl mb-3">3️⃣</div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Stories of impact.</h2>
          <p className="text-gray-700">
            When clarity lands, everything aligns (teams, messages, direction).
            Here's what happens when leaders stop guessing and start leading.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center max-w-2xl mx-auto border-t pt-12"
      >
        <p className="text-2xl text-gray-700 mb-4">
          You don't have to have the answers.
        </p>
        <p className="text-2xl font-semibold text-gray-900">
          You just have to start with clarity.
        </p>
      </motion.div>

      <ChatBot />
    </div>
  )
}

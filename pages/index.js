import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 whitespace-nowrap">
          The world is moving faster than your next decision.
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4">
          You don't have to have all the answers.
        </p>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700">
          You just have to start with clarity.
        </p>
      </motion.div>
    </div>
  )
}

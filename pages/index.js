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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16 leading-relaxed lg:whitespace-nowrap">
          The world is moving faster than your next decision.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          You don't have to have all the answers.
        </p>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-relaxed">
          You just have to start with <span className="font-bold text-[#b80a2c]">clarity</span>.
        </p>
      </motion.div>
    </div>
  )
}

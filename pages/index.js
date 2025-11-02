import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <SEO title="Home" description="Leadership & AI growth — insights, strategy, and practical guidance for leaders." />

  <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl px-4"
      >
        <h1 className="text-6xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight md:leading-relaxed lg:whitespace-nowrap">
          The world is moving faster than your next decision.
        </h1>

        <p className="text-2xl md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 leading-relaxed">
          You don't have to have all the answers.
        </p>

        <p className="text-2xl md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          You just have to start with <span className="font-bold text-[#b80a2c]">clarity</span>.
        </p>
      </motion.div>
    </div>
  )
}

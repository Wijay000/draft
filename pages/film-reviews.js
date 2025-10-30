import { motion } from 'framer-motion'

export default function FilmReviews() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Film Reviews</h1>
        <p className="text-gray-600 mt-2">My movie reviews have been published in Huffpost India</p>
      </motion.div>
    </div>
  )
}

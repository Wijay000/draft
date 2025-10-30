import { useState } from 'react'
import reviews from '../data/reviews.json'
import { motion } from 'framer-motion'

export default function MovieReviews() {
  const [tab, setTab] = useState('all')

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'indian', label: 'Indian' },
    { key: 'global', label: 'Global' },
    { key: 'general', label: 'General' }
  ]

  const filtered = reviews.filter(r => {
    if (!r.region) return tab === 'all'
    const region = String(r.region).toLowerCase()
    if (tab === 'all') return true
    return region === tab
  })

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Movie Reviews</h1>
        <p className="text-gray-600 mt-2">A curated list of my movie reviews and essays. Click any card to read the full piece.</p>
      </motion.div>

      <div className="flex gap-3 mb-8 justify-center flex-wrap">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${tab === t.key ? 'bg-[#b80a2c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r, i) => (
          <motion.a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition-all bg-white"
          >
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#b80a2c]">{r.title}</h3>
                  {r.region && <div className="text-xs text-gray-500 mt-1">{String(r.region).charAt(0).toUpperCase() + String(r.region).slice(1)}</div>}
                </div>
              </div>
              {r.description && <p className="text-sm text-gray-600 mt-3 line-clamp-3">{r.description}</p>}
            </div>
            <div className="px-4 py-3 bg-gray-50 text-sm text-gray-700 flex items-center justify-between">
              <div>Read on external site</div>
              <div className="text-gray-500">↗</div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

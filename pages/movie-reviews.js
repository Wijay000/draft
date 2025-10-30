import { useState } from 'react'
import reviews from '../data/reviews.json'

export default function MovieReviews() {
  // Show all reviews by default; tabs filter the list when selected
  const [activeTab, setActiveTab] = useState('All')

  const clean = (s) => {
    if (!s) return s
    // Remove the trailing ' | by Wijay000 | Medium' suffix if present and trim
    return String(s).replace(/\s*\|\s*by\s*Wijay000\s*\|\s*Medium\s*$/i, '').trim()
  }

  const filtered = reviews.filter((r) => {
    const region = r.region ? String(r.region).toLowerCase() : null
    if (activeTab === 'All') return true
    if (activeTab === 'Indian') return region === 'indian'
    if (activeTab === 'Global') return region === 'global'
    // General tab: include reviews explicitly marked general, and any without a region
    return region === 'general' || !region
  })

  // Ensure only one Featured review: prefer the review whose cleaned title is exactly 'Stalker'
  // No featured card: render filtered list directly
  const listToRender = filtered

  

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Movie Reviews</h1>
        <p className="text-base sm:text-lg text-gray-600">My thoughts and critiques on films I've watched.</p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <nav className="inline-flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'All' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('Indian')}
            className={`ml-1 px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Indian' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
          >
            Indian
          </button>
          <button
            onClick={() => setActiveTab('Global')}
            className={`ml-1 px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Global' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
          >
            Global
          </button>
          <button
            onClick={() => setActiveTab('General')}
            className={`ml-1 px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'General' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
          >
            General
          </button>
        </nav>
      </div>

      {/* Featured card removed per user request - only list grid will render */}

      <section>
        {listToRender.length === 0 ? (
          <p className="text-gray-600">No reviews available for this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {listToRender.map((r) => (
            <a
              key={r.title + (r.url || '')}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors leading-snug line-clamp-2 min-h-[3.5rem]">
                {clean(r.title)}
              </h2>
              {r.date && <p className="text-xs sm:text-sm text-gray-500 mt-1">{r.date}</p>}
              {r.description && <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-3">{clean(r.description)}</p>}
            </a>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

import reviews from '../data/reviews.json'

export default function MovieReviews() {
  const featured = reviews.length > 0 ? reviews[0] : null

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Movie Reviews</h1>
        <p className="text-base sm:text-lg text-gray-600">My thoughts and critiques on films I've watched.</p>
      </header>

      {featured && (
        <section className="mb-12">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-lg shadow-lg hover:shadow-2xl p-8 transition-all bg-gradient-to-br from-white to-gray-50"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#b80a2c] transition-colors mb-4">
              {featured.title}
            </h3>
            {featured.description && (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">{featured.description}</p>
            )}
            <span className="inline-block px-3 py-1 bg-[#b80a2c] text-white text-sm font-semibold rounded-full">Featured Review</span>
          </a>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {reviews.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors leading-snug line-clamp-2 min-h-[3.5rem]">
                {r.title}
              </h2>
              {r.date && <p className="text-xs sm:text-sm text-gray-500 mt-1">{r.date}</p>}
              {r.description && <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-3">{r.description}</p>}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

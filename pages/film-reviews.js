import { motion } from 'framer-motion'
import reviewsData from '../data/reviews.json'

export default function FilmReviews() {
  // Explicit list and order of reviews to display on this page
  const focusedTitles = [
    'Stalker (Russian)',
    'All we imagine as light (Indian)',
    'Bicycle Thieves (Italian)',
    'Cinema Paradiso (Italian)',
    'Amores de Chumbo (Portuguese)',
    'Pather Panchali (Bengali)',
    'Kottukaali (Tamil)',
    'Visaranai (Tamil)'
    ,
    // Additional cards requested by user
    'Dragon (Tamil)',
    'Fandry (Marati)',
    'Viduthalai (Tamil)',
    'Badhaai Ho (Hindi)',
    'Pariyerum Perumal (Tamil)',
    'Newton (Hindi)',
    'Merkku Thodarchi Malai (Tamil)',
    'Sairat (Marati)',
    'Ner Konda Paarvai (Tamil)',
    'Baahubali (Telugu)',
    'Super Deluxe (Tamil)',
    'Jailer (Tamil)',
    'Ponniyin Selvan (Tamil)',
    'Jai Bhim (Tamil)',
    '96 (Tamil)',
    'Vikram Vedha (Tamil)',
    'Kaakka Muttai (Tamil)',
    'Ok Kanmani (Tamil)',
    'Darbar (Tamil)',
    'Asuran (Tamil)',
    'Kaapaan (Tamil)',
    'Peranbu (Tamil)',
    '2.0 (Tamil)',
    'Padmavat (Hindi)'
  ]

  const posts = focusedTitles.map((t) => reviewsData.find((r) => r.title === t)).filter(Boolean)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Film Reviews</h1>
        <p className="text-base sm:text-lg text-gray-600">My movie reviews have been published in Huffpost India</p>
      </motion.div>

      {/* Featured review */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto mb-8">
        <a
          href="https://vgthinks.medium.com/delving-into-film-classics-fbeeab916b9f"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 hover:text-[#b80a2c]">Review of Movie Classics</h2>
          <p className="text-sm text-gray-600 mt-1">Featured: Delving into Film Classics — a short essay on why classic films matter.</p>
        </a>
      </motion.div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors leading-snug line-clamp-2 min-h-[3.5rem] max-w-[18ch]">
                {post.title}
              </h3>
              {post.date && (
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{post.date}</p>
              )}
              {post.excerpt && (
                <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-3">{post.excerpt}</p>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

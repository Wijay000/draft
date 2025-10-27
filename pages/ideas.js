import { motion } from 'framer-motion'

export default function Ideas() {
  const items = [
    {
      title: "TEDx: Leadership as a space",
      url: "https://www.youtube.com/watch?v=jwSb0RI9inQ&t=33s",
      thumbnail: "/images/Ideas - TEDx.jpeg",
      type: "talk"
    },
    {
      title: "Book: A selfie with words",
      url: "https://www.amazon.com/Selfie-Words-Exploration-Global-Leadership/dp/B0CPYJWX4P",
      thumbnail: "/images/Book.jpeg",
      type: "book"
    },
    {
      title: "Podcast: Innovation as an Inner journey",
      url: "https://creators.spotify.com/pod/profile/fluid-labs/episodes/Innovation-As-A-Inner-Journey-e2bhrbb/a-aa50an7",
      thumbnail: "/images/Ideas - Podcast.jpeg.jpeg",
      type: "article"
    },
    {
      title: "DLC Talks: Responsible Innovation",
      url: "https://www.youtube.com/watch?v=xx6_3oSlVcc&t=2s",
      thumbnail: "/images/Ideas - DLC.jpg",
      type: "talk"
    },
    {
      title: "WEF: Global Shapers ACM 2016",
      url: "https://www.youtube.com/results?search_query=ACM+Plenary+vijay",
      thumbnail: "/images/Ideas - WEF.jpg",
      type: "talk"
    },
    {
      title: "Davos: Adi Godrej",
      url: "https://www.youtube.com/watch?v=6Cv_HcEdhLI",
      thumbnail: "https://www.weforum.org/assets/logo/header.svg",
      type: "talk"
    },
    {
      title: "Cannes Lions: The AI Disruption",
      url: "https://vgthinks.medium.com/cannes-lions-the-ai-disruption-1bc1607a4bb7",
      thumbnail: "/images/Ideas - Cannes.jpg",
      type: "article"
    },
    {
      title: "Davos: Prof. Haussman",
      url: "https://www.youtube.com/watch?v=gg05B3_soH0",
      thumbnail: "https://www.weforum.org/assets/logo/header.svg",
      type: "video"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ideas
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className={`relative bg-gray-100 ${item.type === 'video' ? 'aspect-video' : item.type === 'podcast' ? 'aspect-square' : 'aspect-[2/3]'}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors">
                {item.title}
              </h2>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
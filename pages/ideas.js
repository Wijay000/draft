import { motion } from 'framer-motion'

export default function Ideas() {
  const videos = [
    {
      title: "TEDx: Leadership as a space",
      url: "https://www.youtube.com/watch?v=jwSb0RI9inQ&t=33s",
      videoId: "jwSb0RI9inQ",
      thumbnail: "https://img.youtube.com/vi/jwSb0RI9inQ/maxresdefault.jpg"
    },
    {
      title: "DLC Talks: Responsible Innovation",
      url: "https://www.youtube.com/watch?v=xx6_3oSlVcc&t=2s",
      videoId: "xx6_3oSlVcc",
      thumbnail: "https://img.youtube.com/vi/xx6_3oSlVcc/maxresdefault.jpg"
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
        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Fresh perspectives and innovative approaches to drive meaningful change.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {videos.map((video, index) => (
          <motion.a
            key={video.videoId}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative aspect-video bg-gray-100">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors">
                {video.title}
              </h2>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
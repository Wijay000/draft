import { motion } from 'framer-motion'

export default function Interests() {
  const items = [
    {
      title: "Interests - Channel",
      url: "https://www.youtube.com/@Wijay000",
      thumbnail: "/images/Interests - Channel.jpg",
      type: "article"
    },
    {
      title: "Interests - TPP",
      url: "#",
      thumbnail: "/images/Interests - TPP.jpg",
      type: "article"
    },
    {
      title: "Interests - Creatives",
      url: "https://drive.google.com/file/d/10OPjrnEft3h1SP8g1uQnV2Ixtpo7KOci/view?usp=drive_link",
      thumbnail: "/images/Interests - Creatives.jpg",
      type: "article"
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
          Interests
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_self"
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

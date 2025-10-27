import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Interact() {
  const interactionTypes = [
    {
      title: "Speaking Engagements",
      description: "If you are looking for a keynote speaker or an expert voice for a panel discussion at your event",
      images: [
        "/images/Interact - WEF.png",
        "/images/Interact - TED.png", 
        "/images/Interact - Cannes.png",
        "/images/Interact - GOYN.png",
        "/images/Interact - SIF.png"
      ]
    },
    {
      title: "Advisory & Consulting",
      description: "Strategic guidance for businesses on innovation, growth, and digital transformation.",
      highlights: ["Global forums", "Industry conferences", "Corporate events"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect for speaking engagements and advisory services
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {interactionTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">{type.title}</h2>
            <p className="text-gray-600 mb-4">{type.description}</p>
            
            {/* Display images for Speaking Engagements */}
            {type.images && (
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {type.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${type.title} ${imgIndex + 1}`}
                      className="w-full h-24 object-cover rounded-lg shadow-sm"
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Display highlights for other cards */}
            {type.highlights && (
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2 text-gray-700">Past Engagements:</h3>
                <ul className="space-y-2">
                  {type.highlights.map(highlight => (
                    <li key={highlight} className="text-gray-600">• {highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 italic p-4 bg-gray-50 rounded-lg"
          >
            "I consider myself extremely lucky. One primary reason is that I have had the privilege of learning from so many smart people. From 2007 to 2009, a small group of people at Innosight, under the leadership of Brad Gambill, dedicated their lives to the hard work of incubating new businesses. Brad, Hari Nair, George Tattersfield, Alasdair Trotter, Kuen Loon Ho, Dheeraj Batra, Elnor Rozenrot, Dan Gay, and Vijay Raju in particular taught me an inordinate amount about what life is really like in innovation's first mile."
            <footer className="mt-2 font-semibold">- Scott Anthony, Ranked #7 in Thinkers50 list</footer>
          </motion.blockquote>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-600 italic p-4 bg-gray-50 rounded-lg"
          >
            "Vijay is as creative and innovative thinker as I have come across in my career. What sets him apart is ability to quickly get in the market and test out key assumptions and gather market insights around the consumer job to be done"
            <footer className="mt-2 font-semibold">- Hari Nair, Vice President, R&D Fabric & Home Care Global Packaging, Learning Lab and Partner Lab at Procter & Gamble, Co-Author The Innovative Leader</footer>
          </motion.blockquote>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-gray-600 italic p-4 bg-gray-50 rounded-lg"
          >
            "Vijay is higly strategic with a passion for developing new business model for healthcare industry. Vijay believes more in human values and relationships. He is very humble and friendly in nature."
            <footer className="mt-2 font-semibold">- Munish Sehgal, Head of Regional Marketing, Abbott, Singapore</footer>
          </motion.blockquote>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-600 italic p-4 bg-gray-50 rounded-lg"
          >
            "Vijay changed the way we approach innovation in the organization. We benefited from how he blended the entrepreneurial approaches with traditional consulting ones with a great emphasis on people and not just process"
            <footer className="mt-2 font-semibold">- Managing Director, Leading Corporate Foundation</footer>
          </motion.blockquote>
        </div>
      </div>

      <ChatBot />
    </div>
  )
}
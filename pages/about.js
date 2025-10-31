import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="mb-8 mt-6">
          <img
            src="/images/About Vijay.jpeg"
            alt="Vijay A. Raju"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Vijay A. Raju
          </h1>
          <a
            href="https://www.linkedin.com/in/vijay-a-raju-3083743/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A66C2] hover:bg-[#004182] text-white rounded-md px-3 py-2 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-none"
      >
        {/* Replace long-form bio with a concise table as requested */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How I create value</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credibility</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Strategist</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Strategic Choices, Community Building, Executive Coaching</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">WEF Summer Davos in China, WEF Digital, Global Shapers Community</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Head of Strategy, World Economic Forum; worked with 300+ unicorns and Heads of State.</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Entrepreneur</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">New Ventures, Strategic Initiatives, Pilots, Prototypes, Proof of Concepts</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">The Perennial Project, The Propel Labs, Obesity Innovation Lab, Razor Rave, Village Laundry Services</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Founder: The Propel Labs, Obesity Innovation Lab; Entrepreneur in Residence at The Adecco Group.</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Innovator</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Workshops, Consulting, Innovation Sprints, Capability Building for AI, Training</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Mamas Chingonas in Mexico, Vou Broar in Brazil, Launchpad in UK, Healthy Heart for All, Innovation Strategy for TCS, J&J, Medtronic</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Venture Director at Innosight Ventures; Edison Award–winning project for Medtronic.</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storyteller</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Speaking, Writing, Video Creation, Strategic Narratives, Ads, Films, TV Series, Animations</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Book, WEF Davos, TEDx, Cannes Lions, Columnist for Huffpost, Forbes, WEF Agenda, Al Arabiya</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">Led Global Shapers initiatives; produced award-winning animation (Pet Alien) with Emmy recognition.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
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
      </motion.div>
    </div>
  )
}

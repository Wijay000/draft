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
        className="prose prose-lg max-w-none"
      >
        <p className="text-xl leading-relaxed mb-6 italic text-gray-800">
          The world is moving faster than your next decision.<br />
          You don't need all the answers. You just have to start with clarity.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          I help business leaders, senior executives, startup founders, and leaders in government and nonprofits turn complexity into clarity and innovation into impact. Over the past decade, I have partnered with global companies, foundations, and philanthropies to design and launch strategic initiatives that unite creativity with responsibility.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          As Head of Strategy at the World Economic Forum, I partnered with CEOs from more than 300 unicorns and hypergrowth companies as well as Heads of State of leading economies to accelerate the adoption of new technologies, responsible innovation, and sustainable transformation.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          At the Forum, I also led first-of-their-kind initiatives such as the Global Shapers Community, Climate Shape, and the Shaping the Better Future innovation challenges. These strategic initiatives empowered young changemakers in more than 450 cities worldwide to solve local problems through scalable and sustainable social innovations.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          After my stint at the Forum, I became an entrepreneur, launching The Propel Labs, the Obesity Innovation Lab, and The Perennial Project. I am also building a community of middle-aged professionals who are reinventing themselves to lead fulfilling and impactful second halves of their lives.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Presently, as Entrepreneur in Residence at The Adecco Group, I help design ventures that expand access and opportunity for underserved communities. These include Mamas Chingonas in Mexico and Vou Brotar in Brazil, which support women and grassroots entrepreneurs. More recently, I am creating a Launchpad for Mature Job Seekers to connect older professionals with new pathways into the future of work.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Earlier, as Venture Director at Innosight Ventures, the venture-building firm co-founded by Harvard Business School's Clay Christensen, I incubated multiple innovation projects including the Edison Award–winning "Healthy Heart for All" for Medtronic, which expanded access to cardiac therapies for low-income patients.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Before that, I led Pet Alien, India's first Disney-style animation series for Cartoon Network, guiding a 120-member creative team that earned national awards and Emmy nominations and helped spark India's modern animation industry.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          I hold a Master's in Global Leadership jointly offered by INSEAD, Wharton, Columbia, London Business School, and CEIBS China along with the World Economic Forum, where I was a Global Leadership Fellow. I also hold an MBA from the International University of Japan, awarded with the prestigious Monbukagakusho scholarship from the Government of Japan, and a Bachelor's degree in Mechanical Engineering.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          I have spoken at the World Economic Forum in Davos, Cannes Lions, and TEDx, and my writing has been featured in the WEF Agenda, Al Arabiya, HuffPost, and Forbes.
        </p>

        <p className="text-lg leading-relaxed font-semibold text-gray-900">
          If you are seeking that clarity to launch your next big initiative, connect with me.
        </p>
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

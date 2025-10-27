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
            src="/images/Vijay - About.jpeg"
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
        <p className="text-xl leading-relaxed mb-8">
          Vijay partners with leading businesses, foundations and philanthropies to drive growth 
          and impact through responsible innovations. Vijay is also the author of an upcoming book 
          on entrepreneurs and intrapreneurs who are tackling climate change through innovation. 
          Vijay is a keynote speaker on <span className="text-blue-600">#leadership</span>
          <span className="text-blue-600">#creativity</span>
          <span className="text-blue-600">#innovation</span>
          <span className="text-blue-600">#sustainability</span> and
          <span className="text-blue-600">#ai</span>
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">World Economic Forum Leadership</h2>
            <p className="text-gray-700">
              Previously, Vijay was the Head of Strategy for the global <span className="text-blue-600">#growth</span> companies 
              at WEF where he worked with CXOs of 300+ hypergrowth companies and unicorns as well as Heads 
              of State of leading economies on topics of responsible use of advanced new technologies and 
              sustainability <span className="text-blue-600">#transformation</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Global Shapers Impact</h2>
            <p className="text-gray-700">
              Vijay was also the Deputy Head of the Global Shapers Community where he led Shape
              <span className="text-blue-600">#Sustainability</span>, a social media campaign to take the SDG narrative 
              from country level to community level and drive local actions in more than 100 cities 
              in partnership with UN. Vijay designed a climate innovation challenge for Statkraft 
              of Norway and led 5 editions of the 'Shaping the Better Future' social innovation 
              challenge in partnership with Coca Cola leading to 100s of social innovation projects. 
              Vijay also designed Shaping Davos, an innovative format to bring in city level local 
              voices into <span className="text-blue-600">#Davos</span> conversations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Innovation & Venture Building</h2>
            <p className="text-gray-700">
              Prior to that, Vijay was a Venture Director at Innosight Ventures, a venture building 
              firm co-founded by Clay Christensen, the world's most influential management thinker. 
              Vijay incubated Razor Rave, funded by P&G and was part of the core incubation team 
              that launched several ventures including the Edison award winning 'Healthy Heart for All' 
              for Medtronic. His innovation & venture work have been featured in books like Lean
              <span className="text-blue-600">#Startup</span>, First Mile & Little Black Book of
              <span className="text-blue-600">#Innovation</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Creative Leadership</h2>
            <p className="text-gray-700">
              Earlier, Vijay led Pet Alien, India's first Disney style animation series that aired 
              in Cartoon Network. Vijay led a team of 120 artists and engineers to successfully 
              deliver 52 episodes in 14 months and laid the foundation for the successful Indian 
              animation industry. His work has won several awards including national awards and 
              daytime Emmy nominations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Education & Recognition</h2>
            <p className="text-gray-700">
              Vijay holds a Masters in Global <span className="text-blue-600">#Leadership</span> offered by WEF along with 
              INSEAD, Wharton, Columbia, London Business School & CEIBS, China. Vijay also holds 
              an MBA from the International University of Japan with a prestigious Monbukagakhusho 
              scholarship from Ministry of Education, Culture, Sports, Science and Technology (MEXT), 
              Govt of Japan. Vijay holds a Bachelors in Mechanical Engineering. Vijay has spoken at 
              WEF Davos, Cannes Lions, TEDx and has written for WEF Agenda, Al Arabiya, Huffpost 
              and Forbes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
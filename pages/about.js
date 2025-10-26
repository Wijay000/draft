import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="mb-8">
          <img
            src="/vijay-raju.jpg"
            alt="Vijay A. Raju"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vijay A. Raju
        </h1>
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
          Vijay is a keynote speaker on <span className="text-blue-600">#leadership</span>, 
          <span className="text-blue-600">#creativity</span>, 
          <span className="text-blue-600">#innovation</span>, 
          <span className="text-blue-600">#sustainability</span> and 
          <span className="text-blue-600">#ai</span>
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">World Economic Forum Leadership</h2>
            <p className="text-gray-700">
              Previously, Vijay was the Head of Strategy for the global <span className="text-blue-600">#growth</span> companies 
              at WEF where he worked with CXOs of 300+ hypergrowth companies and unicorns on topics 
              of responsible use of advanced new technologies and sustainability <span className="text-blue-600">#transformation</span>.
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
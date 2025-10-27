import { motion } from 'framer-motion'
import ChatBot from '../components/ChatBot'

export default function Impact() {
  const impactStories = [
    {
      title: "Building the Global Shapers Community",
      sections: [
        {
          heading: "Context",
          content: "In a world where more than half of the global population is under 30, young leaders faced a paradox: they held the future, yet had too little influence in shaping it. The Forum recognized this gap and sought a way to amplify youth voices, not just through talk, but through action.",
          links: ["globalshapers.org", "World Economic Forum"]
        },
        {
          heading: "Challenge",
          content: "How do you create a meaningful platform that empowers young voices across cities worldwide, from Dhaka to Detroit, to lead local change, while connecting them to a global network of peers and resources? The barriers were high: age, geography, lack of access to decision-making, and limited infrastructure for youth-led action.",
          links: ["World Economic Forum"]
        },
        {
          heading: "Approach",
          content: "A youth-led hub model was developed: in each city, elected Shapers created local projects, formed autonomous Hubs, and connected to the global WEF platform. The design emphasised ownership, local relevance, and global learning. Members under 30 were invited to apply, run projects, innovate in their communities, and connect with peers world-wide.",
          links: ["Medium", "World Economic Forum"]
        },
        {
          heading: "Impact",
          content: "From its launch, the Global Shapers network expanded to over 500 Hubs in more than 150 countries and engaged tens of thousands of young change-makers. These Hubs have delivered local solutions addressing climate, skills, digital inclusion and more. The network plays a unique role in bridging local innovation with global influence.",
          links: []
        }
      ]
    },
    {
      title: "Business Model Innovation",
      sections: [
        {
          heading: "Context",
          content: "In India, heart disease had become the number one killer, claiming millions of lives each year. The tragedy was not just medical; it was systemic. People were dying not because treatments did not exist but because they could not afford or access them. Medtronic, the world's largest medical device company, wanted to change this reality. Instead of improving its technology, the company sought to redesign how life-saving cardiac care could reach those most in need.",
          links: []
        },
        {
          heading: "Challenge",
          content: "How could a pacemaker, one of the world's most advanced medical devices, be made accessible to patients earning less than $100 a month? As Venture Director at Innosight Ventures, I led field research across hospitals and clinics in India to map the full patient journey. We discovered four barriers that locked people out of care: lack of awareness, limited diagnostics, fragmented care pathways, and affordability. The breakthrough insight was that solving this challenge would require a new business model, not a new product.",
          links: []
        },
        {
          heading: "Approach",
          content: "We designed Healthy Heart for All, a patient-centered ecosystem focused on access, awareness, and affordability. We created outreach campaigns that invited patients to free heart screenings through hotlines, mobile ads, and community events. We partnered with hospitals to run telemedicine-enabled camps for early diagnosis and follow-up. Most importantly, we built India's first consumer financing program for pacemakers, enabling families to pay through small monthly installments. The pilot launched at The Mission Hospital in Durgapur. The first patient, a 44-year-old mother named Angurbala, suffered from severe heart disease and lived on $65 a month. After her implant, she said, \"If it weren't for this program, I would not be alive today.\"",
          links: []
        },
        {
          heading: "Impact",
          content: "In its first four years, Healthy Heart for All screened more than 167,000 patients and helped 15,000 receive pacemaker implants. The model proved financially sustainable and socially transformative, and Medtronic expanded it to hundreds of hospitals across India and later to other emerging economies. The initiative became a blueprint for inclusive innovation, demonstrating that when we design with empathy and rethink systems, we can turn advanced technology into accessible human impact.",
          links: []
        }
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-4xl mb-4">🌍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating lasting positive change through innovation and collaboration.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {impactStories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{story.title}</h2>
            <div className="space-y-6">
              {story.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.heading}</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">{section.content}</p>
                  {section.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {section.links.map((link, j) => (
                        <span key={j} className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {link}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <ChatBot />
      </div>
    </div>
  )
}
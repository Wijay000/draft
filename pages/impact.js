import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Impact() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }
  const impactStories = [
    {
      title: "Building AI Capabilities",
      sections: [
        {
          heading: "Context",
          content: "The Client, a medium sized medtech company, was seeking new ways to accelerate growth in its core business. With decades of market leadership and deep reach across its geography, the company was now facing a wave of disruption. New competitors were using AI and emerging technologies to innovate faster and operate more intelligently. The Client recognized that sustaining growth would require more than digital adoption. It needed to reshape its systems, workflows, and culture to compete in a world where intelligence is distributed across people, platforms, and processes.",
          links: []
        },
        {
          heading: "Challenge",
          content: "The challenge lay in reimagining a successful but traditional enterprise to be adaptive, connected, and future-ready. The organization's core systems were efficient yet rigid, optimized for predictability rather than change. Leadership wanted to understand how AI could drive coordination across business units instead of simply automating existing tasks. The goal was to build an enterprise that learns continuously, coordinates dynamically, and makes better decisions without losing its human touch or ethical compass.",
          links: []
        },
        {
          heading: "Approach",
          content: "As an advisor, I worked closely with senior executives to design a systems approach to transformation. We began by mapping how information, decisions, and value flowed across the company. This revealed systemic constraints — where knowledge was trapped in silos, where coordination lagged, and where opportunities for intelligent automation existed. We then introduced AI and data capabilities not as replacements for human decision-making but as amplifiers of it. Pilot programs were launched to rewire workflows, enabling people and machines to collaborate in real time. New governance models ensured that data use remained transparent and aligned with organizational purpose. The focus shifted from automation to coordination — building connective intelligence across functions and markets.",
          links: []
        },
        {
          heading: "Impact",
          content: "The transformation delivered results that went far beyond efficiency. Decision cycles became shorter, innovation teams started sharing insights across regions, and customer engagement grew through more responsive, data-informed services. Employees reported higher confidence in using AI as a thinking partner rather than a threat. The initiative is now being scaled across multiple markets, helping the organization evolve from a traditional hierarchy into a learning network. What began as an effort to modernize technology became a journey in redesigning how people, systems, and intelligence work together to create lasting value.",
          links: []
        }
      ]
    },
    {
      title: "Business Model Innovation in Asia",
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
    },
    {
      title: "Social Innovation in Mexico and Brazil",
      sections: [
        {
          heading: "Context",
          content: "In the heart of Mexico, many communities struggle with poverty, violence, and migration. For young people, these pressures often limit education and opportunity, leaving them feeling unseen and uncertain about their future. As Entrepreneur in Residence at The Adecco Group, I conceptualized and launched a portfolio of social business initiatives to expand access to opportunity. Working with the Innovation Foundation and YouthBuild México, I explored how entrepreneurship and human-centered innovation could unlock potential in these communities. Together, we partnered with SkillLab's Evidence 4 Impact initiative to combine technology and social purpose.",
          links: []
        },
        {
          heading: "Challenge",
          content: "We set out to answer one question: how might we help young mothers reclaim confidence, skills, and dignity while facing complex social and economic challenges? Traditional job programs were too narrow and failed to see the whole person behind the statistics. These women needed more than training; they needed tools, belief, and a pathway to reimagine what was possible for their lives and families.",
          links: []
        },
        {
          heading: "Approach",
          content: "We designed Mamas Chingonas, a program that empowers young mothers to discover their strengths and build careers with confidence. Through workshops, mentoring, and digital tools like the SkillLab app, participants assessed their skills, created professional profiles, and connected to opportunities that matched their aspirations. One of the most inspiring journeys was that of Laura, a 29-year-old mother who once believed she had only two employable skills. Using SkillLab, she realized she had dozens. She helped peers write their resumes, gained leadership confidence, and created a professional CV that opened new doors. Within a month of completing the program, she was promoted to area manager in her new job, citing SkillLab as her secret advantage.",
          links: []
        },
        {
          heading: "Impact",
          content: "Through programs like Mamas Chingonas and its sister initiative Vou Brotar in Brazil, the collaboration between The Adecco Group's Innovation Foundation, YouthBuild México, and SkillLab has shown how social innovation can create real transformation. Dozens of young mothers like Laura have found meaningful employment, pursued education, and regained a sense of agency in their lives. Beyond employment, the program restored something deeper: pride, hope, and the belief that every skill, when recognized and nurtured, can shape a better future.",
          links: []
        }
      ]
    },
    {
      title: "Innovating for mature job seekers in UK",
      sections: [
        {
          heading: "Context",
          content: "Across the United Kingdom, thousands of professionals over 50 find themselves pushed to the margins of the job market. Many bring decades of knowledge and experience, yet face invisible barriers of age bias, shifting technologies, and declining confidence. As Entrepreneur in Residence at The Adecco Group, I began exploring how we might help mature job seekers reconnect with opportunity and purpose in a rapidly changing world of work.",
          links: []
        },
        {
          heading: "Challenge",
          content: "The challenge was not simply about employment. It was about identity, dignity, and the right to belong in a workplace that increasingly values youth over experience. Many talented professionals had the motivation to work but lacked the networks, digital skills, or guidance to translate their expertise into new roles. Job Centers across the UK wanted to engage these individuals more effectively but needed a new model that combined empathy, learning, and real outcomes rather than statistics.",
          links: []
        },
        {
          heading: "Approach",
          content: "We designed the Mature Workers Launchpad, a program created to help people over 50 reimagine their careers and re-enter the workforce with confidence. Working with Job Centers across the UK, we built a structured yet human-centered approach that combines digital skill-building, career coaching, and peer learning circles to restore confidence and motivation. Participants work with mentors to translate their life experiences into marketable skills, supported by tools that help them identify new career paths and explore flexible or purpose-driven work opportunities. The program also connects employers to this untapped pool of talent, helping them see the strategic advantage of hiring experienced professionals.",
          links: []
        },
        {
          heading: "Impact",
          content: "The early results have been deeply encouraging. Participants report higher confidence, renewed energy, and a sense of belonging after years of exclusion. Several have secured new roles or launched second careers, often in sectors they had never considered before. For Job Centers, the program has become a model for inclusive employment, showing that with empathy, design thinking, and structured support, experience can be reframed as an asset rather than a liability.",
          links: []
        }
      ]
    },
    {
      title: "Responsible Innovation for a cleaner Geneva",
      sections: [
        {
          heading: "Context",
          content: "When my family first arrived in Switzerland, I was eager to show my children how clean and orderly the country was. But the moment we stepped out of the airport, my five-year-old son pointed to cigarette butts on the ground and said, \"You said Switzerland is clean. It's not true.\" His simple observation made me pause. Over the following weeks, I began to notice the same problem in many places, with cigarette litter scattered across tram stations, parks, and sidewalks. It became clear that this was not only an environmental issue but also a behavioural and design challenge.",
          links: []
        },
        {
          heading: "Challenge",
          content: "The problem was more complex than it appeared. Cigarette butts are one of the most common forms of litter in cities, yet the solutions are often superficial. I wanted to understand why people discard cigarette waste so casually and how design could change this habit. My curiosity soon turned into a personal experiment. I started studying litter patterns and smokers' behaviour across Geneva's public spaces, from tram stops to train platforms, to identify the real barriers to responsible disposal.",
          links: []
        },
        {
          heading: "Approach",
          content: "I began small, cleaning our local tram station with my children to help them learn about the consequences of cigarette waste. We collected hundreds of butts within minutes. Later, I dropped a few into a glass of water to show how toxins spread, a visual lesson that made a lasting impression on my kids. Over the next year, I conducted field research at Gare Cornavin and other stations, observing how smokers behaved in real settings. Together with urban designer Amin Khosravi, I mapped patterns and categorized smokers into five groups: responsible, conscious, busy, immobile, and disregarding. Each group required a different design response. We identified three main issues: poor bin design, limited access, and a lack of behavioural cues. Our insights led to ideas such as standardized receptacle designs, better bin placement, and visual nudges inspired by behavioural economics and nudge theory.",
          links: []
        },
        {
          heading: "Impact",
          content: "These findings shaped ongoing conversations with Geneva's city officials about cleaner public spaces and responsible design. Through discussions with the mayor and collaborations with experts such as Terracycle, we explored how small interventions could create significant shifts in behaviour. The project showed me how empathy, observation, and design thinking can transform frustration into civic action. Switzerland remains an inspiration to me, and this experience reaffirmed my belief that every citizen, when equipped with awareness and thoughtful design, can help move Geneva from a clean city to one of the cleanest in the world.",
          links: []
        }
      ]
    },
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
      title: "Obesity Innovation Lab",
      sections: [
        {
          heading: "Context",
          content: "Amid rising demand for systems-level innovation in chronic disease care, I launched the Obesity Innovation Lab as an in-house startup within a consulting firm. The mission was to reimagine how consulting firms could drive societal impact by tackling obesity as a complex, multi-dimensional challenge—blending strategy, behavioral design, and digital innovation. Rather than confining our work to advisory reports, I set out to build a value proposition centered on orchestrating diverse expertise, data intelligence, and collaborative action across healthcare, technology, and community sectors.",
          links: []
        },
        {
          heading: "Challenge",
          content: "Traditional consulting tools excel in analysis, but often fall short when real-world complexity demands integration and co-creation. The challenge was to design a capability set that could move seamlessly from ecosystem insight to rapid prototyping and scalable intervention. This required aligning incentives among clinicians, startups, payers, and patients, while developing models that were commercially viable and ethically sound. Success meant demonstrating that a consulting firm could be a true innovation catalyst—not just a strategist—within the fight against obesity.",
          links: []
        },
        {
          heading: "Approach",
          content: "I led the conceptualization and design of the Lab's core value proposition and operating model. We mapped the entire obesity ecosystem to identify leverage points, then built integrated capabilities: Data-driven ecosystem insight, revealing behavioral and systemic gaps; Human-centered design sprints, rapidly prototyping real-world solutions; Platform partnerships, linking digital health startups, researchers, and care teams; AI-enabled analytics, supporting precision prevention and care personalization. These capabilities were embedded within agile project teams, and governed ethically to ensure transparency, IP clarity, and measurable outcomes. Our approach prioritized action, learning, and cross-sector collaboration above static deliverables.",
          links: []
        },
        {
          heading: "Impact",
          content: "In its first year, the Lab engaged several senior executives from leading healthcare companies to co-create innovative programs. It also signed a memorandum of understanding with a major hospital chain in India and established a strategic collaboration with the Ministry of Health in a Northern Indian State. These partnerships accelerated the Lab's reach and credibility across markets. What began as an idea quickly evolved into a scalable model, demonstrating how consulting can drive real-world impact through systems design, ecosystem building, and entrepreneurial action.",
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating lasting positive impact across Europe, Americas and Asia
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {impactStories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{story.title}</h2>
              <div className="space-y-6">
                {/* Always show Context section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.sections[0].heading}</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">{story.sections[0].content}</p>
                  {story.sections[0].links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {story.sections[0].links.map((link, j) => (
                        <span key={j} className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {link}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Show remaining sections only when expanded */}
                {expandedCards[index] && story.sections.slice(1).map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Read More / Show Less button */}
            <div className="p-8 pt-0">
              <button
                onClick={() => toggleCard(index)}
                className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {expandedCards[index] ? (
                  <>
                    Show Less
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Read More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
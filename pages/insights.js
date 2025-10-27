export default function Insights() {
  // Featured article
  const featuredPost = {
    title: "Is 'prompting' new?",
    date: "",
    description: "Exploring how prompting in AI mirrors ancient practices of asking the right questions - from Socratic dialogues to modern large language models. Understanding prompting as a timeless art of inquiry rather than a novel invention.",
    url: "https://medium.com/@innovate_11669/is-prompting-new-b09d8fb706df"
  };

  // Other articles/posts
  const posts = [
    {
      title: "Data is not the phenomenon",
      date: "",
      description: "One of the first things we do from a research is to start interpreting the data and generate insights. What we fail to realize is that 'insights' are not the phenomenon itself.",
      url: "https://medium.com/@innovate_11669/data-is-not-the-phenomenon-5476a6651e2"
    },
    {
      title: "Schools banning AI Models",
      date: "",
      description: "I had a good discussion with a friend, an academic, on chatGPT and whether it should be banned from schools and universities.",
      url: "https://medium.com/@innovate_11669/should-we-ban-chatgpt-from-universities-and-schools-23ed6be7396b"
    },
    {
      title: "Humans to Humachines?",
      date: "",
      description: "The world is going through a technology explosion. It is hard to imagine a single moment without technology.",
      url: "https://www.linkedin.com/pulse/humans-humachines-vijay-anand-raju/"
    },
    {
      title: "Innovation requires perseverance",
      date: "",
      description: "In the fast-paced world of business, innovation often serves as the key differentiator between success and obsolescence.",
      url: "https://medium.com/@innovate_11669/innovation-requires-perseverance-and-creativity-5fa9fe0dba44"
    },
    {
      title: "To innovate, avoid frameworks",
      date: "",
      description: "Frameworks have undoubtedly played a crucial role in sizing up situations, providing models, and aiding our understanding of complex systems.",
      url: "https://medium.com/@innovate_11669/to-innovate-stay-away-from-frameworks-and-methodologies-35438ae63d80"
    },
    {
      title: "Innovation doesn't excite everyone",
      date: "",
      description: "A decade ago, we worked together to help a global medical device company launch a new business model innovation aimed at serving the underserved.",
      url: "https://medium.com/@innovate_11669/innovation-doesnt-excite-everyone-f11183dcb604"
    },
    {
      title: "A meditative conversation with chatGPT",
      date: "",
      description: "Exploring meditation and mindfulness through an AI-powered dialogue that bridges ancient wisdom with modern technology.",
      url: "https://medium.com/@vgthinks/a-meditative-conversation-with-my-friend-on-meditation-cd5249e7fe0f"
    },
    {
      title: "Innovation as an inner journey",
      date: "",
      description: "True innovation begins within—a journey of self-discovery that transforms how we see and solve problems.",
      url: "https://lnkd.in/ePP7pBZJ"
    },
    {
      title: "Listen to the end user",
      date: "",
      description: "Recently, as I was having my lunch on a Sunday afternoon, I saw a helicopter flying very close to my balcony and landing in the grass field in front.",
      url: "https://www.linkedin.com/pulse/leverage-technology-listen-being-who-has-problem-observe-raju/?trackingId=rThVEw4mEF8OOahWRo3uiQ%3D%3D"
    },
    {
      title: "Subdue or Surrender to AI?",
      date: "",
      description: "What was the most 'innovative' jargon that was widely used in the last 10 years? Innovation. There are more books on innovation than actual innovations.",
      url: "https://www.linkedin.com/pulse/ai-humans-going-subdue-surrender-new-phenomenon-vijay-anand-raju/?trackingId=hIuzvnako84mhFRBnGf3cw%3D%3D"
    },
    {
      title: "From problem to paradox",
      date: "",
      description: "Two social innovations that have changed India—exploring how embracing paradox leads to breakthrough solutions.",
      url: "https://www.weforum.org/stories/2015/06/problem-paradaox-2-social-innovations-that-have-changed-india/"
    },
    {
      title: "6 reflections from a WEF Fellow",
      date: "",
      description: "While I was trying to understand what leadership is, a former colleague gave a beautiful farewell speech highlighting what leadership is not.",
      url: "https://www.huffpost.com/archive/in/entry/6-reflections-from-a-global-leadership-program_b_7702632"
    },
    {
      title: "Can drones protect Indian women?",
      date: "",
      description: "Exploring how emerging technologies might address critical safety challenges and create new solutions for protection.",
      url: "https://www.weforum.org/stories/2016/09/could-drones-protect-india-s-women-from-rapists/"
    },
    {
      title: "3 business model shifts",
      date: "",
      description: "The new wave of entrepreneurs is driving fundamental shifts in how businesses create and deliver value.",
      url: "https://www.weforum.org/stories/2015/06/3-shifts-caused-by-the-new-wave-of-entrepreneurs/"
    },
    {
      title: "Freedom to innovate",
      date: "",
      description: "'Freedom from the desire for an answer is essential to the understanding of the problem.' - J Krishnamurti",
      url: "https://www.linkedin.com/pulse/20140813185037-9856952-freedom-to-innovate/?trackingId=jXFIGGspQ2GXkUhdFdKb%2Fg%3D%3D"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Insights</h1>
        <p className="text-base sm:text-lg text-gray-600">Essays and perspectives on leadership, innovation and artificial intelligence.</p>
      </header>

      {/* Featured Article */}
      <section className="mb-12">
        <a
          href={featuredPost.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group rounded-lg shadow-lg hover:shadow-2xl p-8 transition-all bg-gradient-to-br from-white to-gray-50"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#b80a2c] transition-colors mb-4">
            {featuredPost.title}
          </h3>
          {featuredPost.description && (
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {featuredPost.description}
            </p>
          )}
          <span className="inline-block px-3 py-1 bg-[#b80a2c] text-white text-sm font-semibold rounded-full">
            Featured Article
          </span>
        </a>
      </section>

      {/* All Other Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Read More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors break-words leading-snug line-clamp-2 min-h-[3.5rem]">
                {post.title}
              </h2>
              {post.date && (
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{post.date}</p>
              )}
              {post.description && (
                <p className="text-gray-700 text-sm sm:text-base mt-2">{post.description}</p>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
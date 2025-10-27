export default function Insights() {
  // Example articles/posts
  const posts = [
    {
      title: "Is Prompting new",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/is-prompting-new-b09d8fb706df"
    },
    {
      title: "Data is not the phenomenon",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/data-is-not-the-phenomenon-5476a6651e2"
    },
    {
      title: "Should ChatGPT be banned from schools and universities?",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/should-we-ban-chatgpt-from-universities-and-schools-23ed6be7396b"
    },
    {
      title: "Humans to Humachines?",
      date: "",
      description: "",
      url: "https://www.linkedin.com/pulse/humans-humachines-vijay-anand-raju/"
    },
    {
      title: "Innovation requires perseverance",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/innovation-requires-perseverance-and-creativity-5fa9fe0dba44"
    },
    {
      title: "To innovate, stay away from frameworks and methodologies",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/to-innovate-stay-away-from-frameworks-and-methodologies-35438ae63d80"
    },
    {
      title: "Innovation doesn't excite everyone",
      date: "",
      description: "",
      url: "https://medium.com/@innovate_11669/innovation-doesnt-excite-everyone-f11183dcb604"
    },
    {
      title: "A meditative conversation with chatGPT",
      date: "",
      description: "",
      url: "https://medium.com/@vgthinks/a-meditative-conversation-with-my-friend-on-meditation-cd5249e7fe0f"
    },
    {
      title: "Innovation as an inner journey",
      date: "",
      description: "",
      url: "https://lnkd.in/ePP7pBZJ"
    },
    {
      title: "To leverage technology, listen to the user",
      date: "",
      description: "",
      url: "https://www.linkedin.com/pulse/leverage-technology-listen-being-who-has-problem-observe-raju/?trackingId=rThVEw4mEF8OOahWRo3uiQ%3D%3D"
    },
    {
      title: "Are humans going to subdue or surrender to AI?",
      date: "",
      description: "",
      url: "https://www.linkedin.com/pulse/ai-humans-going-subdue-surrender-new-phenomenon-vijay-anand-raju/?trackingId=hIuzvnako84mhFRBnGf3cw%3D%3D"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Insights</h1>
        <p className="text-base sm:text-lg text-gray-600">Ideas, essays and perspectives on leadership, innovation and artificial intelligence.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-lg border border-gray-200 p-5 hover:shadow-md transition-colors"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors break-words leading-snug">
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
      </section>
    </div>
  )
}
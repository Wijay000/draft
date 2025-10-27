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
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Insights</h1>
        <p className="text-lg text-gray-600">Ideas, essays, and resources on leadership, innovation, and impact.</p>
      </header>
      <section className="flex flex-col gap-8">
        {posts.map((post, idx) => (
          <a
            key={post.title}
            href={post.url}
            className="block group border-b border-gray-200 pb-6 hover:bg-gray-50 transition rounded-lg px-4 -mx-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors">{post.title}</h2>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">{post.date}</span>
            </div>
            <p className="text-gray-700 text-base mt-1">{post.description}</p>
          </a>
        ))}
      </section>
    </div>
  )
}
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Draft Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </header>

      <div className="content">{children}</div>

      <footer className="site-footer">© {new Date().getFullYear()} Draft</footer>
    </>
  )
}

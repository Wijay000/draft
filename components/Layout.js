import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Leadership & AI Growth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Expert guidance in leadership and AI-driven growth" />
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <span className="text-xl font-bold text-primary">Leadership & AI</span>
            </Link>
            <nav className="flex space-x-8">
              <Link href="/help">
                <span className="text-gray-700 hover:text-primary">How can I help?</span>
              </Link>
              <Link href="/why-me">
                <span className="text-gray-700 hover:text-primary">Why me?</span>
              </Link>
              <Link href="/impact">
                <span className="text-gray-700 hover:text-primary">What is my impact?</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20 min-h-screen bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Leadership & AI Growth. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

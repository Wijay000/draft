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
            {/* Left: Name */}
            <div className="flex items-center space-x-8 flex-1">
              <Link href="/about">
                <span className="text-lg font-medium hover:text-primary transition-colors" style={{ fontSize: '18px' }}>Vijay A. Raju</span>
              </Link>
            </div>

            {/* Center: Home Icon */}
            <div className="flex justify-center flex-1">
              <Link href="/">
                <div className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-primary hover:text-primary/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right: Navigation */}
            <nav className="flex space-x-8 flex-1 justify-end">
              <Link href="/insights">
                <span className="text-gray-700 hover:text-primary">Insights</span>
              </Link>
              <Link href="/advisory">
                <span className="text-gray-700 hover:text-primary">Advisory</span>
              </Link>
              <Link href="/speaking">
                <span className="text-gray-700 hover:text-primary">Speaking</span>
              </Link>
              <Link href="/impact">
                <span className="text-gray-700 hover:text-primary">Impact</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24 min-h-screen bg-gray-50">
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

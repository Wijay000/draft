import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <div className="flex items-center">
              <Link href="/about">
                <span className="text-lg font-medium hover:text-primary transition-colors" style={{ fontSize: '18px' }}>Vijay A. Raju</span>
              </Link>
            </div>

            {/* Right: Home, Menu, Contact */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                <div className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-primary hover:text-primary/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-gray-700 hover:text-primary"
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <Link href="/contact">
                <div className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-gray-700 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 mr-4 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]"
            >
              <Link href="/insights" onClick={() => setIsMenuOpen(false)}>
                <span className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">Insights</span>
              </Link>
              <Link href="/ideas" onClick={() => setIsMenuOpen(false)}>
                <span className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">Ideas</span>
              </Link>
              <Link href="/impact" onClick={() => setIsMenuOpen(false)}>
                <span className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">Impact</span>
              </Link>
              <Link href="/interact" onClick={() => setIsMenuOpen(false)}>
                <span className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">Interact</span>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
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

'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-[#0B1120] border-b dark:border-gray-800 transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left section - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="IntelliDeck Logo" className="h-8 w-8" />
              <span className="text-xl font-bold dark:text-white">IntelliDeck</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/generate"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors"
            >
              Generate PPT
            </Link>
            <Link 
              href="/reskin"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors"
            >
              Reskin PPT
            </Link>
          </div>

          {/* Right section - Auth Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              href="/signin"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg hover:bg-[#6D28D9] transition-colors text-[15px] font-medium"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed inset-0 z-50 md:hidden transition-all duration-200 ease-in-out`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-[#0B1120] shadow-lg">
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="IntelliDeck Logo" className="h-8 w-8" />
                <span className="text-xl font-bold dark:text-white">IntelliDeck</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-6">
                <Link 
                  href="/generate"
                  className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Generate PPT
                </Link>
                <Link 
                  href="/reskin"
                  className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reskin PPT
                </Link>
                <div className="border-t dark:border-gray-800 mt-6 pt-6">
                  <Link 
                    href="/signin"
                    className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium transition-colors mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link 
                    href="/signup"
                    className="block bg-[#7C3AED] text-white px-4 py-2 rounded-lg hover:bg-[#6D28D9] transition-colors text-[15px] font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

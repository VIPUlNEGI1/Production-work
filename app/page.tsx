'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] transition-colors">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 text-center">
        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-10 rounded-full bg-[#0F172A] text-sm text-gray-300 font-medium shadow-[0_0_20px_rgba(0,0,0,0.25)] border border-[#1E293B]">
          IntelliDeck is now available!
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[4rem] leading-[1.2] sm:leading-[1.15] font-bold mb-6 sm:mb-8 text-gray-900 dark:text-[#F8FAFC] max-w-4xl mx-auto">
          Transform your presentations with AI-powered tools
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-[#94A3B8] mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Create and reskin presentations effortlessly using our advanced AI technology
        </p>
        <Link 
          href="/get-started"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-purple-500 transition-all hover:shadow-[0_8px_16px_rgba(124,58,237,0.25)] hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* AI Presentation Generator */}
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI Presentation Generator</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create professional presentations instantly with our AI-powered generator
            </p>
          </div>

          {/* Smart Reskinning */}
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Smart Reskinning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transform your existing presentations with modern designs and themes
            </p>
          </div>

          {/* Real-time Collaboration */}
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real-time Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work together with your team in real-time on presentations
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Our Tools</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Comprehensive suite of presentation tools at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Generate PPT */}
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Generate PPT</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create presentations from scratch using AI. Just describe your content, and we'll generate a professional presentation.
            </p>
            <Link 
              href="/generate"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              Get started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Reskin PPT */}
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Reskin PPT</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Give your existing presentations a fresh look with our theme editor and style controls.
            </p>
            <Link 
              href="/reskin"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              Get started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

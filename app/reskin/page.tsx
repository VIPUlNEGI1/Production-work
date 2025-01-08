'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ReskinPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120]">
      {/* Navigation */}
      <nav className="bg-white dark:bg-[#0B1120] border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <defs>
                      <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#A78BFA' }} />
                        <stop offset="100%" style={{ stopColor: '#7C3AED' }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#auraGradient)" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className="font-semibold text-lg text-gray-900 dark:text-white">Aura</span>
              </Link>
              <div className="ml-8 flex items-center space-x-1">
                <Link href="/playground" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  Playground
                </Link>
                <Link href="/marketplace" className="text-gray-900 dark:text-white px-3 py-2 text-sm font-medium rounded-md bg-gray-50 dark:bg-gray-800/50">
                  Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Bot Templates</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Choose a template to get started with your bot configuration
          </p>
        </div>

        {/* General Purpose Bots Section */}
        <div className="mb-12">
          <h2 className="text-base font-medium text-gray-900 dark:text-white mb-5">General Purpose Bots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* Code Assistant Card */}
            <button className="group text-left bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all hover:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-blue-50 dark:bg-blue-900/10 rounded-md">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Code Assistant</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                A specialized bot for helping with programming and code review
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pre-configured system prompt
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  Optimized model settings
                </div>
              </div>
            </button>

            {/* Research Assistant Card */}
            <button className="group text-left bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all hover:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-purple-50 dark:bg-purple-900/10 rounded-md">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Research Assistant</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Helps with research, analysis, and summarization
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pre-configured system prompt
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  Optimized model settings
                </div>
              </div>
            </button>

            {/* Writing Assistant Card */}
            <button className="group text-left bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all hover:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-green-50 dark:bg-green-900/10 rounded-md">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Writing Assistant</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Assists with content creation and writing improvement
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pre-configured system prompt
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  Optimized model settings
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Pre-Sales & IT Consulting Bots Section */}
        <div>
          <h2 className="text-base font-medium text-gray-900 dark:text-white mb-5">Pre-Sales & IT Consulting Bots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* Solution Architect Card */}
            <button className="group text-left bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all hover:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-blue-50 dark:bg-blue-900/10 rounded-md">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Solution Architect</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Expert in designing technical solutions and creating detailed proposals
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pre-configured system prompt
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  Optimized model settings
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

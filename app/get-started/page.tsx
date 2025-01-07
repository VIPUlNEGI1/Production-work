'use client'

import Link from 'next/link'

export default function GetStarted() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get Started with IntelliDeck
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Create and transform presentations with AI-powered tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Generate PPT
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create professional presentations from scratch using AI. Just describe your content, and we'll generate a complete presentation.
            </p>
            <Link 
              href="/generate"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Start Generating
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Reskin PPT
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Transform the look and feel of your existing presentations with AI-powered design suggestions and theme updates.
            </p>
            <Link 
              href="/reskin"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Start Reskinning
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle generation
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Generate Presentation</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Describe your content and let AI create a professional presentation
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium mb-2">
                Describe your presentation
              </label>
              <textarea
                id="prompt"
                rows={6}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-white dark:bg-[#2D3B4E] border border-gray-300 dark:border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="What would you like to create a presentation about?"
                required
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Include topics, key points, and any specific requirements
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="grid grid-cols-2 gap-4 sm:flex sm:items-end sm:space-x-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Style</label>
                  <select className="w-full bg-white dark:bg-[#2D3B4E] border border-gray-300 dark:border-gray-700 rounded-lg px-2.5 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 transition-colors">
                    <option>Professional</option>
                    <option>Creative</option>
                    <option>Minimal</option>
                    <option>Modern</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Length</label>
                  <select className="w-full bg-white dark:bg-[#2D3B4E] border border-gray-300 dark:border-gray-700 rounded-lg px-2.5 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 transition-colors">
                    <option>10 slides</option>
                    <option>15 slides</option>
                    <option>20 slides</option>
                    <option>25 slides</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:py-2.5 rounded-lg transition-colors inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Generate
              </button>
            </div>
          </form>
        </div>

        {/* Example Presentations */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Example Presentations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-4 sm:p-6 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
              <h3 className="font-medium mb-1.5 sm:mb-2">Business Proposal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                A professional presentation template for business proposals and pitches
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-4 sm:p-6 hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors">
              <h3 className="font-medium mb-1.5 sm:mb-2">Product Launch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Perfect for introducing new products or features to your audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

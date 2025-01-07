'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import AiChatBox from '../../components/reskin/AiChatBox'

export default function ReskinPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Reskin Presentation</h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Transform your existing presentations with modern designs
            </p>
          </div>
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-colors w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>AI Assistant</span>
          </button>
        </div>

        {!selectedFile ? (
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-12">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <h2 className="mt-4 text-xl font-medium">Upload your presentation</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Drag and drop your PowerPoint file here, or click to browse
              </p>
              <div className="mt-6">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".ppt,.pptx"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
                >
                  Choose File
                </button>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Supported formats: PPT, PPTX
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl p-8">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-8 p-3 sm:p-4 bg-gray-50/50 dark:bg-[#2D3B4E]/30 rounded-lg">
              <div className="flex-shrink-0 p-2.5 sm:p-3 bg-white dark:bg-[#2D3B4E] rounded-lg shadow-sm">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-medium truncate pr-4">{selectedFile.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {selectedFile.type.split('.').pop()?.toUpperCase() || 'PPTX'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select className="w-full bg-white dark:bg-[#2D3B4E] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 transition-colors">
                  <option>Modern</option>
                  <option>Classic</option>
                  <option>Minimal</option>
                  <option>Bold</option>
                </select>
              </div>

              {/* Color Scheme */}
              <div>
                <label className="block text-sm font-medium mb-2">Color Scheme</label>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-blue-500" />
                  <button className="w-8 h-8 rounded-full bg-green-500" />
                  <button className="w-8 h-8 rounded-full bg-purple-500" />
                  <button className="w-8 h-8 rounded-full bg-red-500" />
                </div>
              </div>

              {/* Font Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Font</label>
                <select className="w-full bg-white dark:bg-[#2D3B4E] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 transition-colors">
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                  <option>Georgia</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button
                onClick={() => setSelectedFile(null)}
                className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2D3B4E] transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Apply Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Chat Box */}
      <AiChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

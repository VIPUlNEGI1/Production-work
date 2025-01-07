'use client'

import { useState } from 'react'

export default function AiChatBox({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'How would you like to reskin your presentation? I can help with:'
    },
    {
      id: 2,
      type: 'ai',
      text: '• Color scheme adjustments\n• Font changes\n• Layout modifications\n• Theme consistency\n• Brand alignment'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage
    }
    setMessages([...messages, newUserMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        text: `I'll help you ${inputMessage.toLowerCase().includes('color') ? 'adjust the color scheme' : 'modify the design'} of your presentation. Would you like me to suggest some specific changes?`
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)

    setInputMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 sm:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Chat Box */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[380px] lg:w-[440px] bg-white dark:bg-[#1E293B] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <div className="h-full flex flex-col">
          {/* Chat Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-2">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Reskin Assistant</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered design help</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                {message.type === 'ai' && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-300 font-medium">AI</span>
                    </div>
                  </div>
                )}
                <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`rounded-lg p-3 ${
                    message.type === 'ai' 
                      ? 'bg-gray-100 dark:bg-[#2D3B4E] whitespace-pre-line' 
                      : 'bg-purple-600 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 sm:p-4">
            <div className="flex items-center space-x-2 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your design changes..."
                className="flex-1 bg-gray-100 dark:bg-[#2D3B4E] border-0 rounded-lg px-3 sm:px-4 py-2.5 sm:py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-purple-600 text-white p-2.5 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

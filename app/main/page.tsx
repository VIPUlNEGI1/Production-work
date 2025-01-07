'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">      
      {/* Hero Section */}
      <main className="pt-32 pb-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gray-800 px-4 py-2 text-sm mb-8">
            IntelliDeck is now available!
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto mb-8">
            Transform your presentations with AI-powered tools
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Create and reskin presentations effortlessly using our advanced AI technology
          </p>
          
          <Link 
            href="/auth/signup"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Core Features */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-4">Core Features</h2>
          <p className="text-gray-400 text-center mb-12">Powerful tools to enhance your presentation workflow</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-purple-500 mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">AI Presentation Generator</h3>
              <p className="text-gray-400">Create professional presentations instantly with our AI-powered generator</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-purple-500 mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Smart Reskinning</h3>
              <p className="text-gray-400">Transform your existing presentations with modern designs and themes</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-purple-500 mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
              <p className="text-gray-400">Work together with your team in real-time on presentations</p>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Tools</h2>
          <p className="text-gray-400 text-center mb-12">Comprehensive suite of presentation tools at your fingertips</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Generate PPT</h3>
              <p className="text-gray-400 mb-6">Create presentations from scratch using AI. Just describe your content, and we'll generate a professional presentation.</p>
              <Link href="/generate-ppt" className="text-purple-500 hover:text-purple-400 font-medium">
                Get started →
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Reskin PPT</h3>
              <p className="text-gray-400 mb-6">Give your existing presentations a fresh look with our theme editor and style controls.</p>
              <Link href="/reskin-ppt" className="text-purple-500 hover:text-purple-400 font-medium">
                Get started →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

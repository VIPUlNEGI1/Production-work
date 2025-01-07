'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white flex items-center justify-center px-4 transition-colors">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Sign in to your account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Login to your account for a faster checkout.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {/* Social Sign In */}
          <button className="w-full bg-gray-50 dark:bg-[#1E293B] hover:bg-gray-100 dark:hover:bg-[#2D3B4E] text-gray-900 dark:text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            <span>Sign in with Google</span>
          </button>

          <button className="w-full bg-gray-50 dark:bg-[#1E293B] hover:bg-gray-100 dark:hover:bg-[#2D3B4E] text-gray-900 dark:text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Sign in with Github</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#0B1120] text-gray-500 dark:text-gray-400">
                Or, sign in with your email
              </span>
            </div>
          </div>

          {/* Email Sign In Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Enter your Email"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Your Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Enter your Password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#1E293B] text-purple-500 focus:ring-purple-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  Keep me signed in
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
